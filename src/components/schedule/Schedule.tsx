import {useState, ChangeEvent, useEffect} from 'react';
import './schedule.css'

function Schedule() {
    const [jadwal, setJadwal] = useState<string>("")

    const onJadwalChange = (e: ChangeEvent<HTMLInputElement>) => {
        setJadwal(e.target.value)
    };

    const close = () => {
        // untuk
    }

    const saveData = () => {
        localStorage.setItem('schedule', jadwal)
    }

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            let localSchedule = localStorage.getItem('schedule')
            if (localSchedule)
                setJadwal(localSchedule)
            console.log(jadwal)
        })
    })

    return (
        <div>
            <div className='bg-white h-full w-full'>
                <input type="text" onChange={onJadwalChange}></input>
                <button onClick={saveData}>Save</button>
                <button onClick={() => {console.log(jadwal)}}>Just Once</button>
            </div>
        </div>
    )
}

export default Schedule