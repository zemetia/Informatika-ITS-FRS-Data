import SubjectInterface from '@/types/entity/subject-interface';

export default interface ScheduleProps {
  showModal: boolean;
  setShowModal: (data: boolean) => void;
  setSchedules: (data: Array<SubjectInterface>) => void;
}
