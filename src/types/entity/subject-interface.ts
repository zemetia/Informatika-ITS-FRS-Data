import DosenInterface from '@/types/entity/dosen-interface';

export default interface SubjectInterface {
  subject: string;
  subjectClass: string;
  classRoom: string;
  semester: number;
  sks: number;
  day: string;
  lecturer: Array<DosenInterface | null>;
  hour: string;
  start: string;
}
