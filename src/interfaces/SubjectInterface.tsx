import DosenInterface from "./DosenInterface";

export default interface SubjectInterface {
    subject: string,
    subjectClass: string,
    classRoom: string,
    semester: number,
    sks: number,
    day: string,
    lecturer: Array<DosenInterface | null>,
    hour: string,
    start: string
}