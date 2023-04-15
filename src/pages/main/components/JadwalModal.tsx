import { ChangeEvent, useEffect, useState } from 'react';
import useLocalStorage from 'use-local-storage';

import Modal from '@/components/modal/Modal';
import Dosen from '@/json/dosen.json';
import Parsing from '@/parsing/ParseFunction';
import SubjectInterface from '@/types/entity/subject-interface';
// type JadwalModalProps = {
//   open: boolean;
//   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

export default function JadwalModal() {
  const [schedule, setSchedule] = useLocalStorage<
    SubjectInterface[] | undefined
  >('schedule', undefined);
  const [jadwal, setJadwal] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => setOpen(!schedule), [schedule]);

  const onJadwalChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setJadwal(e.target.value);
  };

  const handleSave = () => {
    setOpen(false);
    setSchedule(Parsing(jadwal, Dosen));
  };

  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Title>title</Modal.Title>
      <Modal.Body>
        <div className='relative p-6 flex-auto'>
          <div className='bg-white h-full w-full'>
            <textarea
              className='shadow-md shadow-neutral-400 resize-none w-full h-60 rounded-2xl drop-shadow-md p-3'
              onChange={onJadwalChange}
            ></textarea>
          </div>
        </div>
        <div className='flex items-center justify-end py-2 px-6 gap-2 border-t border-solid border-slate-200 rounded-b'>
          <button
            className='bg-black text-white hover:bg-neutral-800 uppercase text-xs px-6 py-3 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
            type='button'
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
