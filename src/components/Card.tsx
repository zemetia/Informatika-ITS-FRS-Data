import useSubjectStore from '@/store/useSubjectStore';
import CardProps from '@/types/entity/card-props';

export default function Card({ data }: CardProps) {
  const subjectStore = useSubjectStore();

  const handlePickup = () => {
    subjectStore.addPickedSubject(data);
  };

  return (
    <div className='py-8 rounded-xl bg-slate-200 h-full hover:bg-slate-300'>
      <div className='text-sm px-8'>
        <button
          onClick={handlePickup}
          className='bg-green-400 py-1 px-3 rounded-md hover:bg-green-300 active:bg-green-600'
        >
          Ambil
        </button>
      </div>
      <div className='mb-20 border-l-2 border-red-400 px-5 py-3 flex flex-row'>
        <div className='mx-3 h-6'>
          <a style={{ fontSize: '2em' }}>
            {data.subjectClass != 'None' ? data.subjectClass : '?'}
          </a>
        </div>
        <div className='flex flex-col text-sm'>
          <div>{data.day}</div>
          <div>{data.hour}</div>
        </div>
      </div>

      <div>
        <div className='flex flex-col text-lg px-8 w-full'>
          <div className='font-bold'>{data.subject}</div>
          <div>{data.classRoom}</div>
        </div>
      </div>
    </div>
  );
}
