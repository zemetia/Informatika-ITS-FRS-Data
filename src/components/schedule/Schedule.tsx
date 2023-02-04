import {useState, ChangeEvent} from 'react';
import './schedule.css'

function Schedule() {
    const [jadwal, setJadwal] = useState<string>("")
    const onJadwalChange = (e: ChangeEvent<HTMLInputElement>) => {
        setJadwal(e.target.value)
        console.log(jadwal, e.target.value)
    };

    const gas = () => {
        console.log(jadwal)
    }

    return (
        <div>
            <input type="text" onChange={onJadwalChange}></input>
            <button onClick={gas}>test</button>
            
        </div>
    )
}

export default Schedule