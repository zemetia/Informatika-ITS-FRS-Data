import SubjectInterface from "../../interfaces/SubjectInterface"
import CardProps from "../../interfaces/CardProps"

export default function Card({data}: CardProps) {
    return (
        <div className="py-8 rounded-2xl bg-slate-200 h-fit hover:bg-slate-300" >
            <div className="mb-20 border-l-2 border-red-400 px-5 py-3 flex flex-row">
                <div className="mx-3 h-6">
                    <a style={{fontSize: '2em'}}>{data.subjectClass!="None"? data.subjectClass:"?"}</a>
                </div>
                <div className="flex flex-col text-sm">
                    <div>
                        {data.day}
                    </div>
                    <div>
                        {data.hour}
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col text-lg px-8 w-full">
                    <div className="font-bold">
                        {data.subject}
                    </div>
                    <div>
                        {data.classRoom}
                    </div>
                </div>
            </div>

        </div>
    )
}

/*
<div className="flex justify-center mt-10 mb-10" key={index}>
                                <div className="card">
                                    <div>{item.subject}</div>
                                    <div>{item.semester}</div>
                                    <div>{item.sks}</div>
                                    <div>{item.day}</div>
                                    <div>{item.hour}</div>
                                    {
                                        item.lecturer?.map((item, index) => {
                                            return (
                                                <div key={index}>
                                                    {item && (<div>{item.nama}</div>)}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
>>>>>>> main
*/