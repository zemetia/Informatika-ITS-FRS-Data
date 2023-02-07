import React from "react";

function Search() {
    const filters = [
        "subject",
        "semester",
        "start time",
        "day",
        "dosen",
        "class",
        "sks",
    ];

    const filteredItems = [
        {
            subject: "PAA",
            class: "A",
            day: "Monday",
            start_time: "7:00",
        },
        {
            subject: "PAA",
            class: "A",
            day: "Monday",
            start_time: "7:00",
        },
        {
            subject: "PAA",
            class: "A",
            day: "Monday",
            start_time: "7:00",
        },
        {
            subject: "PAA",
            class: "A",
            day: "Monday",
            start_time: "7:00",
        },
        {
            subject: "PAA",
            class: "A",
            day: "Monday",
            start_time: "7:00",
        },
        {
            subject: "PAA",
            class: "A",
            day: "Monday",
            start_time: "7:00",
        },
        {
            subject: "PAA",
            class: "A",
            day: "Monday",
            start_time: "7:00",
        },
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
                            >
                                {filters.map((filter) => {
                                    return (
                                        <div className="w-full flex justify-between pb-4">
                                            <div>
                                                <input type="checkbox"></input>
                                                <label className="ml-5">{filter}</label>
                                            </div>
                                            <input type="text"></input>
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
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
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
