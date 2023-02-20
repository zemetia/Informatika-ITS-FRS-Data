import React from 'react';
import Search from './components/search/Search';
import {useState} from 'react';
import Schedule from './components/schedule/Schedule';
import Filtered from './components/popup_overlay/Filtered';
import SubjectInterface from './interfaces/SubjectInterface';


function App() {
  /*
  {
    subject: "",
    subjectClass: "",
    classRoom: "",
    semester: 0,
    sks: 0,
    day: "",
    lecturer: [],
    hour: "",
    start: ""
  }
  */
  // const [schedules, setSchedules] = useState<Array<SubjectInterface>>([])

  const [allSchedules, setAllSchedules] = useState< Array<SubjectInterface> >([])
  const [showSchedule, setShowSchedule] = useState< boolean >(true)
  const [showDetail, setShowDetail] = useState< boolean >(false)

  React.useEffect(() => {
    function checkLocalSchedule() {
        console.log("main", allSchedules)
    }

    checkLocalSchedule()
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <Schedule showModal={showSchedule} setShowModal={setShowSchedule} setSchedules={setAllSchedules} />
      </header>
      <Search allSchedule={allSchedules} />
      <Filtered showModal={showDetail} setShowModal={setShowDetail} />
    </div>
  );
}

export default App;
