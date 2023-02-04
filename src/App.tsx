import {useState} from 'react';
import Schedule from './components/schedule/Schedule';

interface DosenInterface {
  nama: string,
  lab: string,
  posisi: string,
  rekomen: number
}

interface SubjectInterface {
  subject: string,
  class: string,
  semester: number,
  sks: number,
  day: string,
  lecturer: Array<DosenInterface>,
  hour: string,
  start: string,
}

function App() {
  const [schedules, setSchedules] = useState<Array<SubjectInterface>>([{
    subject: "",
    class: "",
    semester: 0,
    sks: 0,
    day: "",
    lecturer: [],
    hour: "",
    start: "",
  }])

  return (
    <div className="App">
      <header className="App-header">
        <Schedule/>
      </header>
    </div>
  );
}

export default App;
