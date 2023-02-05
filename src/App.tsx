<<<<<<< search_page
import React from 'react';
<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import Search from './components/search/Search';
>>>>>>> Stashed changes
=======
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
>>>>>>> main

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
<<<<<<< Updated upstream
      <header className="App-header">
        <Schedule/>
      </header>
=======
      <Search/>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
