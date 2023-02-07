import React from 'react';
import Search from './components/search/Search';
import {useState} from 'react';
import Schedule from './components/schedule/Schedule';
import Filtered from './components/popup_overlay/Filtered';
import SubjectInterface from './interfaces/SubjectInterface';


function App() {
  const [schedules, setSchedules] = useState<Array<SubjectInterface>>([{
    subject: "",
    subjectClass: "",
    classRoom: "",
    semester: 0,
    sks: 0,
    day: "",
    lecturer: [],
    hour: "",
    start: ""
  }])

  return (
    <div className="App">
      <header className="App-header">
        {/* <Schedule /> */}
      </header>
      <Search/>
      <Filtered />
    </div>
  );
}

export default App;
