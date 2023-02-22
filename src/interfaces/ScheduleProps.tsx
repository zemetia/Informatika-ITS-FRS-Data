import SubjectInterface from "./SubjectInterface";

export default interface ScheduleProps {
    showModal: boolean;
    setShowModal: (data: boolean) => void;
    setSchedules: (data: Array<SubjectInterface>) => void;
}