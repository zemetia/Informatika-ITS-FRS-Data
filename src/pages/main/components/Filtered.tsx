import FilterProps from "@/types/entity/filter-props";

const Filtered = ({showModal, setShowModal}: FilterProps) => {

  const dataTest = [
    "subject",
    "semester: 4",
    "day: monday",
    "day: monday",
    "day: monday",
    "day: monday monday monday monday",
    "day: monday",
    "day: monday",
  ];

  const filters = [
    "subject",
    "semester",
    "start time",
    "day",
    "dosen",
    "class",
    "sks",
  ];

  const dataFilter = [
    "Perancangan Analisis dan Algoritma",
    "4",
    "07.00",
    "Monday",
    "Caknocomel",
    "A",
    "3",
  ];

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none rounded">
            <div className="fixed w-1/2 my-6 mx-auto max-w-3xl">
              <div className="border-0 p-4 rounded-sm shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </button>
                <div className="flex items-start justify-self-auto p-4 border-b border-solid border-slate-200 rounded-t space-x-4">
                  <div className="min-w-[84px]">
                    <span className="text-lg  text-left min-w-[70px]">
                      Filtered By
                    </span>
                  </div>
                  <div className="grid gap-2 px-4 grid-flow-row-dense grid-cols-4">
                    {dataTest.map((test) => {
                      return (
                        <div key={test} className="bg-black text-white rounded-full text-center text-sm p-1 px-4 truncate hover:text-clip">
                          {test}
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/*body*/}
                <div className="realtive p-6 flex-auto">
                  <div className="bg-white h-full w-full">
                    <div className="shadow-md shadow-neutral-400 resize-none w-full h-auto rounded-2xl">
                      {filters.map((filter, index) => {
                        return (
                          <div
                            key={index}
                            className="flex flex-col bg-white border-b-2"
                          >
                            {index >= 1 && index < filters.length ? (
                              <div className="flex">
                                <div className="bg-[#EEEEEE] w-32 rounded-r-xl text-center p-2">
                                  {filter}
                                </div>
                                <div className="p-2 px-6">{dataFilter[index]}</div>
                              </div>
                            ) : (
                              <div>
                                {!index ? (
                                  <div className="flex">
                                    <div className="bg-[#EEEEEE] w-32 rounded-tl-xl rounded-r-xl px-2 text-center p-2">
                                      {filter}
                                    </div>
                                    <div className="p-2 px-6">
                                      {dataFilter[index]}
                                    </div>
                                  </div>
                                ) : (
                                  <div className="bg-[#EEEEEE] w-32 rounded-tr-xl px-2 text-center p-2">
                                    {filter}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Filtered;
