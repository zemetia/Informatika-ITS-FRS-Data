import React, { useState } from "react";
import FilterInterface from "../../interfaces/FilterInterface";

interface SearchProps {
    allSchedule: Array<SubjectInterface>
}

function Search({allSchedule}: SearchProps) {
    const filters = [
        "subject",
        "semester",
        "start_time",
        "day",
        "dosen",
        "class",
        "sks",
    ];

    
    
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
                    allSchedule.map(item => {
                        return (
                            <div className="flex justify-center mt-10 mb-10">
                                <div className="card">
                                    <div>{item.subject}</div>
                                    <div>{item.subjectClass}</div>
                                    <div>{item.day} - {item.hour}</div>
                                    <div>{item.classRoom}</div>
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
