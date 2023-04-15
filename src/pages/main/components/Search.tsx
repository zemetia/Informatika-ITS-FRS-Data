import { FormEvent, useState } from 'react';

import Card from '@/components/Card';
import DosenInterface from '@/types/entity/dosen-interface';
import FilterInterface from '@/types/entity/filter-interface';
import SearchProps from '@/types/entity/search-props';
import SubjectInterface from '@/types/entity/subject-interface';

function Search({ allSchedule }: SearchProps) {
  const [filteredItems, setFilteredItems] =
    useState<SubjectInterface[]>(allSchedule);
  const filters = [
    'subject',
    'semester',
    'sks',
    'day',
    'start',
    'lecturer',
    'subjectClass',
  ];

  const defaultFilterValue: FilterInterface = {
    checked: false,
    value: '',
  };

  const [filterData, setFilterData] = useState<{
    [key: string]: FilterInterface;
  }>({
    subject: defaultFilterValue,
    semester: defaultFilterValue,
    sks: defaultFilterValue,
    start: defaultFilterValue,
    day: defaultFilterValue,
    lecturer: defaultFilterValue,
    subjectClass: defaultFilterValue,
  });

  const handleFilterCheckedChange = (filter: string) => {
    const { [filter]: key, ...rest } = filterData;
    const newFilterData = rest;

    newFilterData[filter] = {
      checked: !key.checked,
      value: key.value,
    };

    setFilterData(newFilterData);
  };

  const handleFilterValueChange = (filter: string, value: string) => {
    const { [filter]: key, ...rest } = filterData;
    const newFilterData = rest;

    newFilterData[filter] = {
      checked: key.checked,
      value: value,
    };
    setFilterData(newFilterData);
  };

  const arrayIncludes = (from: string, arr: Array<string>) => {
    let result = true;
    arr.forEach((val: string) => (result &&= from.includes(val)));
    return result;
  };

  const filterSubject = (subject: SubjectInterface, filter: string) => {
    const value = filterData[filter].value;
    const key = subject[filter as keyof SubjectInterface];

    if ((key as DosenInterface[])[0]?.lab !== undefined) {
      return (key as DosenInterface[]).some((lecturer) => {
        if (lecturer == null) return false;
        return lecturer?.nama.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
    }

    if (filter == 'subject') {
      return arrayIncludes(
        (key as string).toLowerCase(),
        value.toLowerCase().split(' ')
      );
    }

    if (typeof key === 'string') {
      return (key as string).toLowerCase().indexOf(value.toLowerCase()) !== -1;
    }

    if (typeof key === 'number') {
      return (key as number).toString().indexOf(value) !== -1;
    }
    return false;
  };

  const handleFilter = (e: FormEvent) => {
    e.preventDefault();
    let filteredData = allSchedule;
    for (const key in filterData) {
      if (filterData[key].checked) {
        filteredData = filteredData.filter((subject) =>
          filterSubject(subject, key)
        );
      }
    }
    setFilteredItems(filteredData);
  };

  return (
    <main className='flex justify-between'>
      <section className='relative min-h-screen h-screen border-r-2 border-gray-500 w-[30%]'>
        <div className='flex justify-center flex-col drop-shadow-none p-5 gap-3'>
          <h3 className='font-primary text-center font-semibold underline underline-offset-4'>
            FILTER OPTIONS
          </h3>
          <section className='border-2 drop-shadow-md rounded-xl'>
            <div className='h-full w-full p-6'>
              <form
                className='flex justify-center flex-col w-full'
                id='filter'
                onSubmit={(e) => handleFilter(e)}
              >
                {filters.map((filter) => {
                  return (
                    <div
                      className='w-full flex justify-between pb-4 flex-col gap-1'
                      key={filter}
                    >
                      <div>
                        <input
                          type='checkbox'
                          onChange={() => handleFilterCheckedChange(filter)}
                        ></input>
                        <label
                          className='ml-5'
                          style={{ textTransform: 'capitalize' }}
                        >
                          {filter}
                        </label>
                      </div>
                      <input
                        type='text'
                        className='p-2'
                        onChange={(e) =>
                          handleFilterValueChange(filter, e.target.value)
                        }
                      ></input>
                    </div>
                  );
                })}
              </form>
            </div>
            <div className='flex justify-center w-full pb-6'>
              <button className='btn w-2/3' form='filter'>
                Filter
              </button>
            </div>
          </section>
        </div>
        {/* <section className="absolute bottom-10 left-[50%] -translate-x-1/2">
                    <h3 className="text-center items-center text-xl">
                        powered by: <span className="text-3xl font-semibold ml-3">REMTIL</span>
                    </h3>
                </section> */}
      </section>
      <section className='min-h-screen w-[70%] grid grid-cols-3 overflow-auto h-screen p-5 gap-3'>
        {filteredItems.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </section>
    </main>
  );
}

export default Search;
