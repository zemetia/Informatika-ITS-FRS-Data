import SubjectInterface from "../../interfaces/SubjectInterface"

interface CardProps {
    data: SubjectInterface;
}

export default function Card({data}: CardProps) {
    return (
        <div className="py-8 rounded-2xl bg-slate-200">
            <div className="mb-16 border-l-2 border-red-400 px-5 py-3 flex flex-row">
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
                <div className="flex flex-col text-lg px-5 w-full">
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
<div className="flex justify-center mt-10 mb-10">
            <div className="card">
                <div>{data.subject}</div>
                <div>{data.subjectClass}</div>
                <div>{data.day} - {data.hour}</div>
                <div>{data.classRoom}</div>
            </div>
        </div>
*/