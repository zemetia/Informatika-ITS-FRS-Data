import { useEffect, useState } from 'react';

import SEO from '@/components/SEO';
import Layout from '@/layouts/Layout';
import Filtered from '@/pages/main/components/Filtered';
import Schedule from '@/pages/main/components/Schedule';
import Search from '@/pages/main/components/Search';
import SubjectInterface from '@/types/entity/subject-interface';

export default function MainPage() { 
  const [allSchedules, setAllSchedules] = useState< Array<SubjectInterface> >([])
  const [showSchedule, setShowSchedule] = useState< boolean >(true)
  const [showDetail, setShowDetail] = useState< boolean >(false)

  useEffect(() => {
    function checkLocalSchedule() {
        console.log("main", allSchedules)
    }

    checkLocalSchedule()
}, [allSchedules])
  
  return (
    <Layout>
      <SEO title='Home' description='Main Page' />
      <Schedule showModal={showSchedule} setShowModal={setShowSchedule} setSchedules={setAllSchedules} />
      <Search allSchedule={allSchedules} />
      <Filtered showModal={showDetail} setShowModal={setShowDetail} />
    </Layout>
  );
}


