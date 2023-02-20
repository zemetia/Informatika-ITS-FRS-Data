import React, { FormEvent, useState } from "react";
import FilterInterface from "../../interfaces/FilterInterface";
import SubjectInterface from "../../interfaces/SubjectInterface";

function Search() {
    const [filteredItems, setFilteredItems] = useState<SubjectInterface[]>([])
    const filters = [
        "subject",
        "semester",
        "sks",
    ];

    const sampleData: Array<SubjectInterface> = [
      {
          "subject": "FISIKA 2",
          "subjectClass": "None",
          "classRoom": "SKPB Reguler",
          "semester": 2,
          "sks": 0,
          "day": "Senin",
          "lecturer": [],
          "hour": "07.00 - 09.00",
          "start": "07.00"
      },
      {
          "subject": "Struktur Data",
          "subjectClass": "None",
          "classRoom": "IF-102",
          "semester": 2,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Dr. Diana Purwitasari, S.Kom., M.Sc.",
                  "lab": "Algoritma dan Pemrograman",
                  "posisi": "Ketua",
                  "rekomen": 4
              }
          ],
          "hour": "07.00 - 09.00",
          "start": "07.00"
      },
      {
          "subject": "Sistem Operasi",
          "subjectClass": "None",
          "classRoom": "IF-103",
          "semester": 4,
          "sks": 4,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Bagus Jati S, S.Kom, PhD",
                  "lab": "Komputasi Berbasis Jaringan",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "07.00 - 09.00",
          "start": "07.00"
      },
      {
          "subject": "Komputasi Pervasif dan Jaringan Sensor",
          "subjectClass": "None",
          "classRoom": "IF-104",
          "semester": 8,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Dr. Eng. Radityo Anggoro, S.Kom, M.Eng.",
                  "lab": "Arsitektur dan Jaringan Komputer",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "07.00 - 09.00",
          "start": "07.00"
      },
      {
          "subject": "Probabilitas dan Statistik",
          "subjectClass": "None",
          "classRoom": "IF-105a",
          "semester": 4,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Bilqis Amaliah, S.Kom, M. Kom",
                  "lab": "Pemodelan dan Terapan Komputasi",
                  "posisi": "TB",
                  "rekomen": 3
              }
          ],
          "hour": "07.00 - 09.00",
          "start": "07.00"
      },
      {
          "subject": "Pemrograman Berbasis Kerangka Kerja",
          "subjectClass": "None",
          "classRoom": "IF-106",
          "semester": 6,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Abdul Munif, S.Kom., M.Sc.",
                  "lab": "Manajemen Cerdas Informasi",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "07.00 - 09.00",
          "start": "07.00"
      },
      {
          "subject": "Topik Dalam Komputasi Awan",
          "subjectClass": "A",
          "classRoom": "IF-112 (PASCASARJANA)",
          "semester": 2,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Royyana Muslim I, S.Kom, M.Kom, Ph.D.",
                  "lab": "Arsitektur dan Jaringan Komputer",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "07.00 - 09.00",
          "start": "07.00"
      },
      {
          "subject": "FISIKA 2",
          "subjectClass": "None",
          "classRoom": "SKPB IUP",
          "semester": 2,
          "sks": 0,
          "day": "Senin",
          "lecturer": [],
          "hour": "09.00 - 11.00",
          "start": "09.00"
      },
      {
          "subject": "Sistem Digital",
          "subjectClass": "None",
          "classRoom": "IF-101",
          "semester": 2,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Dr. Eng. Radityo Anggoro, S.Kom, M.Eng.",
                  "lab": "Arsitektur dan Jaringan Komputer",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "10.00 - 12.00",
          "start": "10.00"
      },
      {
          "subject": "Manajemen Basis Data",
          "subjectClass": "None",
          "classRoom": "IF-102",
          "semester": 4,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              null
          ],
          "hour": "10.00 - 12.00",
          "start": "10.00"
      },
      {
          "subject": "Animasi Komputer dan Pemodelan 3D",
          "subjectClass": "None",
          "classRoom": "IF-103",
          "semester": 8,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Siska Arifiani, S. Kom, M.Kom",
                  "lab": "Grafika Interaksi dan Game",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "10.00 - 12.00",
          "start": "10.00"
      },
      {
          "subject": "Analisis dan Perancangan Sistem Informasi",
          "subjectClass": "None",
          "classRoom": "IF-105b",
          "semester": 4,
          "sks": 4,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Adhatus Solichah A., S.Kom., M..",
                  "lab": "Manajemen Cerdas Informasi",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "10.00 - 12.00",
          "start": "10.00"
      },
      {
          "subject": "Manajemen Basis Data",
          "subjectClass": "None",
          "classRoom": "IF-105a",
          "semester": 4,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Sarwosri, S. Kom. M.T",
                  "lab": "Rekayasa Perangkat Lunak",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "10.00 - 12.00",
          "start": "10.00"
      },
      {
          "subject": "Pemodelan dan Simulasi",
          "subjectClass": "None",
          "classRoom": "IF-106",
          "semester": 8,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Prof. Dr. Ir. Joko Lianto Buliali, M.Sc",
                  "lab": "Pemodelan dan Terapan Komputasi",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "10.00 - 12.00",
          "start": "10.00"
      },
      {
          "subject": "Sistem Operasi",
          "subjectClass": "IUP",
          "classRoom": "IF-108 - IUP",
          "semester": 4,
          "sks": 4,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Bagus Jati S, S.Kom, PhD",
                  "lab": "Komputasi Berbasis Jaringan",
                  "posisi": "Anggota",
                  "rekomen": 0
              },
              null
          ],
          "hour": "10.00 - 12.00",
          "start": "10.00"
      },
      {
          "subject": "Pemrograman Jaringan",
          "subjectClass": "None",
          "classRoom": "LP-2",
          "semester": 6,
          "sks": 3,
          "day": "Senin",
          "lecturer": [
              {
                  "nama": "Royyana Muslim I, S.Kom, M.Kom, Ph.D.",
                  "lab": "Arsitektur dan Jaringan Komputer",
                  "posisi": "Anggota",
                  "rekomen": 0
              }
          ],
          "hour": "10.00 - 12.00",
          "start": "10.00"
      },
      {
          "subject": "WAWASAN DAN APLIKASI TEKNOLOGI",
          "subjectClass": "None",
          "classRoom": "SKPB Reguler",
          "semester": 8,
          "sks": 0,
          "day": "Senin",
          "lecturer": [],
          "hour": "13.00 - 15.00",
          "start": "13.00"
      },
    ]

    const defaultFilterValue: FilterInterface = {
        checked: false,
        value: "",
    }

    const [ filterData, setFilterData ] = useState<{[key: string]: FilterInterface}>(
        {
            subject: defaultFilterValue,
            semester: defaultFilterValue,
            sks: defaultFilterValue,
            day: defaultFilterValue,
            start: defaultFilterValue,
        }
    );

    const handleFilterCheckedChange = (filter: string) => {
        const { [filter]: key, ...rest } = filterData
        const newFilterData = rest

        newFilterData[filter] = {
            checked: !key.checked,
            value: key.value
        }

        setFilterData(newFilterData)
    }

    const handleFilterValueChange = (filter: string, value: string) => {
        const { [filter]: key, ...rest } = filterData
        const newFilterData = rest

        newFilterData[filter] = {
            checked: key.checked,
            value: value
        }
        setFilterData(newFilterData)
    }

    const filterSubject = (subject: SubjectInterface, filter: string) => {
        const value = filterData[filter].value
        if (typeof subject[filter as keyof SubjectInterface] === 'string') {
            let key = subject[filter as keyof SubjectInterface] as string
            return key.toLowerCase().indexOf(value.toLowerCase()) !== -1
        } else if (typeof subject[filter as keyof SubjectInterface] === 'number') {
            let key = subject[filter as keyof SubjectInterface].toString()
            return key.indexOf(value) !== -1
        }
        return false
    }
    
    const handleFilter = (e: FormEvent) => {
        e.preventDefault()
        let filteredData = sampleData
        for (const key in filterData) {
            if (filterData[key].checked) {
                filteredData = filteredData.filter((subject) => filterSubject(subject, key))
            }
        }
        setFilteredItems(filteredData)
    }


    return (
        <main className="flex justify-between">
            <section className="relative min-h-screen h-screen border-r-2 border-gray-500 w-[30%]">
                <div className="flex justify-center flex-col drop-shadow-none">
                    <h3 className="font-primary text-center mt-20 font-semibold underline underline-offset-4">
                        FILTER OPTIONS
                    </h3>
                    <section className="mt-10 border-2 mx-10 drop-shadow-md rounded-xl">
                        <div className="h-full w-full p-6">
                            <form
                                className="flex justify-center flex-col w-full"
                                id="filter"
                                onSubmit={(e) => handleFilter(e)}
                            >
                                {filters.map((filter) => {
                                    return (
                                        <div className="w-full flex justify-between pb-4" key={filter}>
                                            <div>
                                                <input type="checkbox" onChange={(e) => handleFilterCheckedChange(filter)}></input>
                                                <label className="ml-5">{filter}</label>
                                            </div>
                                            <input type="text" onChange={(e) => handleFilterValueChange(filter, e.target.value)}></input>
                                        </div>
                                    );
                                })}
                            </form>
                        </div>
                        <div className="flex justify-center w-full pb-6">
                            <button className="btn w-2/3" type="submit" form="filter">Filter</button>
                        </div>
                    </section>
                </div>
                <section className="absolute bottom-10 left-[50%] -translate-x-1/2">
                    <h3 className="text-center items-center text-xl">
                        powered by: <span className="text-3xl font-semibold ml-3">REMTIL</span>
                    </h3>
                </section>
            </section>
            <section className="min-h-screen w-[70%] grid grid-cols-2 overflow-auto h-screen">
                {
                    filteredItems.map(item => {
                        return (
                            <div className="flex justify-center mt-10 mb-10">
                                <div className="card">
                                    <div>{item.subject}</div>
                                    <div>{item.semester}</div>
                                    <div>{item.sks}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    );
}

export default Search;
