import DosenInterface from '../interfaces/DosenInterface'
import SubjectInterface from '../interfaces/SubjectInterface'

export function Parsing (rawData: string, dosen: {[key: string]: DosenInterface}): Array<SubjectInterface> 
{
    let data: Array<string> = rawData.split('\n')
    let cellData: Array<Array<string>> = []
    data.forEach(value => cellData.push(value.split('\t')))

    let header: Array<string> = cellData[0] //contain the information about the class
    let days: Array<string> = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
    let dayData: { [key: string]: Array<Array<string>> } = {}

    days.forEach((value, index) => 
        dayData[value] = cellData.slice(1 + (14 * index), 14 * (index + 1))
    )

    let courses: Array<SubjectInterface> = []

    for(const [dayName, day] of Object.entries(dayData)) {
        day.forEach((dayValue, dayIndex) => {
            dayValue.forEach((schValue, schIndex) => {
                var splittedData: Array<string> = schValue.split('/')

                if(splittedData[0].toLowerCase().match(/sem\s[0-9]/)) {
                    var splittedSubject: Array<string> = day[ dayIndex - 1 ][ schIndex ].split('-')

                //Subject - Class split
                var subject: string = splittedSubject[0].trim()
                var subjectClass: string = splittedSubject[1]? splittedSubject[1].trim() : "None" 

                //Semester / SKS / Lecturer 

                var semester:number = splittedData[0]? Number( splittedData[0].slice(-1) ) : 0
                var sks: number = splittedData[1]? Number( splittedData[1].slice(0, 1) ) : 0
                var rawLecturer = splittedData[2]? splittedData[2].split(' - ') : null
                var lecturer: Array<DosenInterface> = []
                if( rawLecturer ) {
                    rawLecturer.forEach( schValue => {
                        lecturer.push( dosen[ schValue ] )
                    })
                }

                //Hour Processing
                var start:string = day[dayIndex - 1][1].split("-")[0].trim()
                var end:string = day[dayIndex][1].split("-")[1].trim()
                var fullTime = start + " - " + end

                var course: SubjectInterface = {
                    subject: subject,
                    subjectClass: subjectClass,
                    classRoom: header[schIndex],
                    semester: semester,
                    sks: sks,
                    day: dayName,
                    lecturer: lecturer,
                    hour: fullTime,
                    start: start,
                }
                
                courses.push(course)
                }
            })
        })
    }

    return courses
}

export default Parsing