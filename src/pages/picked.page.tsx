import Card from '@/components/Card';
import useSubjectStore from '@/store/useSubjectStore';

export default function PickedPage() {
  const subjectStore = useSubjectStore();

  return (
    <div className=''>
      {Array.from(subjectStore.pickedSubjects).map((item, index) => {
        return <Card key={index} data={item} />;
      })}
      {JSON.stringify(subjectStore.pickedSubjects)}
    </div>
  );
}
