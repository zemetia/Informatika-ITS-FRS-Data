/* eslint-disable unused-imports/no-unused-vars */
import { useState } from 'react';
import useLocalStorage from 'use-local-storage';

import SEO from '@/components/SEO';
import Layout from '@/layouts/Layout';
import Filtered from '@/pages/main/components/Filtered';
import JadwalModal from '@/pages/main/components/JadwalModal';
import Search from '@/pages/main/components/Search';
import useSubjectStore from '@/store/useSubjectStore';
import SubjectInterface from '@/types/entity/subject-interface';

export default function MainPage() {
  const [schedule, setSchedule] = useLocalStorage<SubjectInterface[]>(
    'schedule',
    Array<SubjectInterface>()
  );
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const subjectStore = useSubjectStore();

  return (
    <Layout>
      <SEO title='Home' description='Main Page' />
      {/* <Schedule
        showModal={showSchedule}
        setShowModal={setShowSchedule}
        setSchedules={setAllSchedules}
      /> */}
      <JadwalModal />
      {Array.from(subjectStore.pickedSubjects).map(
        (data: SubjectInterface, index: number) => (
          <div key={index}>{data.subject}</div>
        )
      )}
      <Search allSchedule={schedule} />
      <Filtered showModal={showDetail} setShowModal={setShowDetail} />
    </Layout>
  );
}
