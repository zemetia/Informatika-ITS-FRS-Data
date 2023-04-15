import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce, { enableMapSet } from 'immer';
import { create } from 'zustand';

import SubjectInterface from '@/types/entity/subject-interface';

enableMapSet();

type SubjectStoreType = {
  pickedSubjects: Set<SubjectInterface>;
  addPickedSubject: (subject: SubjectInterface) => void;
  schedule: SubjectInterface[];
  addSchedule: (schedules: SubjectInterface[]) => void;
  loadSchedule: () => boolean;
};

const useSubjectStoreBase = create<SubjectStoreType>((set) => ({
  pickedSubjects: new Set<SubjectInterface>(),
  schedule: Array<SubjectInterface>(),
  addPickedSubject: (subject) => {
    set(
      produce<SubjectStoreType>((state) => {
        state.pickedSubjects.add(subject);
      })
    );
  },
  addSchedule: (schedule) => {
    set(
      produce<SubjectStoreType>((state) => {
        state.schedule = schedule;
      })
    );
  },
  loadSchedule: () => {
    return false;
  },
}));

const useSubjectStore = createSelectorHooks(useSubjectStoreBase);

export default useSubjectStore;
