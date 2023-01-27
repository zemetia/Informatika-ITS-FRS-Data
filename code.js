/*

data[0] => header
13 baris setiap hari
total data = 70 => 1 header, 13 data / hari, 4 gap 


course = {
    subject: "string",
    semester: 0,
    sks: 0,
    day: "string",
    lecturer: "string",
    hour: "string",
    class: "string"
}

*/

rawData = "";
data = rawData.split('\n');

cellData = [];

data.forEach(value => {
    cellData.push(value.split('\t'));
});

let header = cellData[0]; //contain the information about the class
let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
let dayData = {};

days.forEach((value, index) => {
    dayData[value] = cellData.slice(1 + (14 * index), 14 * (index + 1));
})


let courses = []

for(const [dayName, day] of Object.entries(dayData)) {
    for(var i = 0; i < 13; i++){
        day[i].forEach((data, index) => {
            splittedData = data.split('/');
    
            if(!splittedData[0].toLowerCase().match(/sem\s[0-9]/)) {
                console.log("no Match");
                return;
            }
                
            
            course = {
                subject: day[ i - 1 ][ index ],
                semester: splittedData[0]? Number( splittedData[0].slice(-1) ) : null,
                sks: splittedData[1]? Number( splittedData[1].slice(0, 1) ) : null,
                day: dayName,
                lecturer: splittedData[2],
                hour: [ day[i - 1][1], day[i][1] ],
                start: day[i - 1][1].split(' ')[0],
                class: header[index]
            }
            
            courses.push(course);
        });
    }
}

//filtering
courses.filter((course) => course.day == "Senin");



// function

function getCourseData(rawData, dosen) {
    data = rawData.split('\n');

    let cellData = [];

    data.forEach(value => {
        cellData.push(value.split('\t'));
    });

    let header = cellData[0]; //contain the information about the class
    let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
    let dayData = {};

    days.forEach((value, index) => {
        dayData[value] = cellData.slice(1 + (14 * index), 14 * (index + 1));
    })

    let courses = []

    for(const [dayName, day] of Object.entries(dayData)) {
        for(var i = 0; i < 13; i++){
            day[i].forEach((data, index) => {
                splittedData = data.split('/');
        
                if(!splittedData[0].toLowerCase().match(/sem\s[0-9]/)) 
                    return;

                let rawLecturer = splittedData[2]? splittedData[2].split(' - ') : null;
                let lecturer = [];
                if( rawLecturer ) {
                    rawLecturer.forEach( data => {
                        lecturer.push( dosen[ data ] );
                    });
                }
                    
                course = {
                    subject: day[ i - 1 ][ index ],
                    semester: splittedData[0]? Number( splittedData[0].slice(-1) ) : null,
                    sks: splittedData[1]? Number( splittedData[1].slice(0, 1) ) : null,
                    day: dayName,
                    lecturer: lecturer,
                    hour: [ day[i - 1][1], day[i][1] ],
                    start: day[i - 1][1].split(' ')[0],
                    class: header[index]
                }
                
                courses.push(course);
            });
        }
    }

    return courses;
}

