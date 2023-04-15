import DosenInterface from '@/types/entity/dosen-interface';
import SubjectInterface from '@/types/entity/subject-interface';

export default function Parsing(
  rawData: string,
  dosen: { [key: string]: DosenInterface }
): Array<SubjectInterface> {
  const data: Array<string> = rawData.split('\n');
  const cellData: Array<Array<string>> = [];
  data.forEach((value) => cellData.push(value.split('\t')));

  const header: Array<string> = cellData[0]; //contain the information about the class
  const days: Array<string> = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];
  const dayData: { [key: string]: Array<Array<string>> } = {};

  days.forEach(
    (value, index) =>
      (dayData[value] = cellData.slice(1 + 14 * index, 14 * (index + 1)))
  );

  const courses: Array<SubjectInterface> = [];

  for (const [dayName, day] of Object.entries(dayData)) {
    day.forEach((dayValue, dayIndex) => {
      dayValue.forEach((schValue, schIndex) => {
        const splittedData: Array<string> = schValue.split('/');

        if (splittedData[0].toLowerCase().match(/sem\s[0-9]/)) {
          const splittedSubject: Array<string> =
            day[dayIndex - 1][schIndex].split('-');

          //Subject - Class split
          const subject: string = splittedSubject[0].trim();
          const subjectClass: string = splittedSubject[1]
            ? splittedSubject[1].trim()
            : 'None';

          //Semester / SKS / Lecturer

          const semester: number = splittedData[0]
            ? Number(splittedData[0].slice(-1))
            : 0;
          const sks: number = splittedData[1]
            ? Number(splittedData[1].slice(0, 1))
            : 0;
          const rawLecturer = splittedData[2]
            ? splittedData[2].split(' - ')
            : null;
          const lecturer: Array<DosenInterface> = [];
          if (rawLecturer) {
            rawLecturer.forEach((schValue) => {
              lecturer.push(dosen[schValue]);
            });
          }

          //Hour Processing
          const start: string = day[dayIndex - 1][1].split('-')[0].trim();
          const end: string = day[dayIndex][1].split('-')[1].trim();
          const fullTime = start + ' - ' + end;

          const course: SubjectInterface = {
            subject: subject,
            subjectClass: subjectClass,
            classRoom: header[schIndex],
            semester: semester,
            sks: sks,
            day: dayName,
            lecturer: lecturer,
            hour: fullTime,
            start: start,
          };

          courses.push(course);
        }
      });
    });
  }

  return courses;
}
