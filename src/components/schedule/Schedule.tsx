import {useState, ChangeEvent, useEffect} from 'react';
import Dosen from '../../assets/json/dosen.json'

interface DosenInterface {
    nama: string,
    lab: string,
    posisi: string,
    rekomen: number
}
  
interface SubjectInterface {
    subject: string,
    subjectClass: string,
    classRoom: string,
    semester: number,
    sks: number,
    day: string,
    lecturer: Array<DosenInterface>,
    hour: string,
    start: string,
}

function Schedule() {
    const [jadwal, setJadwal] = useState<string>("")
    const [showModal, setShowModal] = useState<boolean>(true)

    const onJadwalChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setJadwal(e.target.value)
    };
    
    const getCourseData = (rawData: string, dosen: {[key: string]: DosenInterface}): Array<SubjectInterface> => {
        let data: Array<string> = rawData.split('\n')
        let cellData: Array<Array<string>> = [];
        data.forEach(value => cellData.push(value.split('\t')))
    
        let header: Array<string> = cellData[0]; //contain the information about the class
        let days: Array<string> = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]
        let dayData: { [key: string]: Array<Array<string>> } = {}
    
        days.forEach((value, index) => 
            dayData[value] = cellData.slice(1 + (14 * index), 14 * (index + 1))
        )
    
        let courses: Array<SubjectInterface> = []
    
        for(const [dayName, day] of Object.entries(dayData)) {
            let course: SubjectInterface

            for(var i = 0; i < 13; i++){
                day[i].forEach((data, index) => {
                    let splittedData: Array<string> = data.split('/');

                    if(!splittedData[0].toLowerCase().match(/sem\s[0-9]/)) 
                        return;

                    let splittedSubject: Array<string> = day[ i - 1 ][ index ].split('-')

                    //Subject - Class split
                    let subject: string = splittedSubject[0].trim()
                    let subjectClass: string = splittedSubject[1]? splittedSubject[1].trim() : "None" 

                    //Semester / SKS / Lecturer 
    
                    let semester:number = splittedData[0]? Number( splittedData[0].slice(-1) ) : 0
                    let sks: number = splittedData[1]? Number( splittedData[1].slice(0, 1) ) : 0
                    let rawLecturer = splittedData[2]? splittedData[2].split(' - ') : null;
                    let lecturer: Array<DosenInterface> = [];
                    if( rawLecturer ) {
                        rawLecturer.forEach( data => {
                            lecturer.push( dosen[ data ] );
                        });
                    }

                    //Hour Processing
                    let start:string = day[i - 1][1].split("-")[0].trim()
                    let end:string = day[i][1].split("-")[1].trim()
                    let fullTime = start + " - " + end

                    course = {
                        subject: subject,
                        subjectClass: subjectClass,
                        classRoom: header[index],
                        semester: semester,
                        sks: sks,
                        day: dayName,
                        lecturer: lecturer,
                        hour: fullTime,
                        start: start,
                    }
                    
                    courses.push(course);
                });
            }
        }
    
        return courses;
    }

    useEffect(() => {
        function checkLocalSchedule() {
            let localSchedule = localStorage.getItem('schedule')
            if (localSchedule){
                setJadwal(localSchedule)
                console.log(getCourseData(localSchedule, Dosen))
                setShowModal(false)
            }
        }

        checkLocalSchedule();
    }, [])

    return (
        <>
        {showModal ? (
        <>
            <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 p-4 rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h5 className="text-xl">
                    Insert Your Schedule Data
                    </h5>
                    <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                    >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                    </span>
                    </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <div className='bg-white h-full w-full'>
                        <textarea 
                            className='shadow-md shadow-neutral-400 resize-none w-full h-60 rounded-2xl drop-shadow-md p-3'
                            onChange={onJadwalChange}
                        ></textarea>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end py-2 px-6 gap-2 border-t border-solid border-slate-200 rounded-b">
                    <button
                    className="bg-black text-white hover:bg-neutral-800 uppercase text-xs px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        setShowModal(false)
                        localStorage.setItem('schedule', jadwal)
                        console.log(getCourseData(jadwal, Dosen))
                    }}
                    >
                    Save
                    </button>
                    <button
                    className="bg-white text-black hover:bg-neutral-200 uppercase text-xs px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                        setShowModal(false)
                        console.log(getCourseData(jadwal, Dosen))
                    }}
                    >
                    Just Once
                    </button>
                </div>
                </div>
            </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
        </>
    )
}

export default Schedule
