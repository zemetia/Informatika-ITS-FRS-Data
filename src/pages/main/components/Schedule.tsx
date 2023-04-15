import { ChangeEvent, useEffect, useState } from 'react';

import Dosen from '@/json/dosen.json';
import Parsing from '@/parsing/ParseFunction';
import ScheduleProps from '@/types/entity/schedule-props';

function Schedule({ showModal, setShowModal, setSchedules }: ScheduleProps) {
  const [jadwal, setJadwal] = useState<string>('');

  const onJadwalChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJadwal(e.target.value);
  };

  useEffect(() => {
    function checkLocalSchedule() {
      const localSchedule = localStorage.getItem('schedule');
      if (localSchedule) {
        setJadwal(localSchedule);
        setSchedules(Parsing(localSchedule, Dosen));
        setShowModal(false);
      }
    }

    checkLocalSchedule();
  }, [setSchedules, setShowModal]);

  return (
    <>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-1/2 my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 p-4 rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t'>
                  <h5 className='text-xl'>Insert Your Schedule Data</h5>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <div className='bg-white h-full w-full'>
                    <textarea
                      className='shadow-md shadow-neutral-400 resize-none w-full h-60 rounded-2xl drop-shadow-md p-3'
                      onChange={onJadwalChange}
                    ></textarea>
                  </div>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end py-2 px-6 gap-2 border-t border-solid border-slate-200 rounded-b'>
                  <button
                    className='bg-black text-white hover:bg-neutral-800 uppercase text-xs px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => {
                      setShowModal(false);
                      localStorage.setItem('schedule', jadwal);
                      setSchedules(Parsing(jadwal, Dosen));
                    }}
                  >
                    Save
                  </button>
                  <button
                    className='bg-white text-black hover:bg-neutral-200 uppercase text-xs px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => {
                      setShowModal(false);
                      setSchedules(Parsing(jadwal, Dosen));
                    }}
                  >
                    Just Once
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}

export default Schedule;
