import {HabitDay} from "./HabitDay";
import {generateDaysPassed} from "../utils/generate-days-passed";
import {useEffect, useState} from "react";
import {api} from '../lib/axios'
import dayjs from "dayjs";

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
const daysPassed = generateDaysPassed()
const minimumDaysToDisplay = 18 * 7 //18 weeks
const daysToFill = minimumDaysToDisplay - daysPassed.length

type Summary = {
    id: string;
    date: string;
    completed: number;
    available: number;
}[]


export function SummaryTable() {
    const [summary, setSummary] = useState<Summary>([])

    useEffect(() => {
        api.get('/summary').then(response => {
            setSummary(response.data)
        })
    }, [])

    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDay, i) => {
                    return (
                        <div key={`${weekDay}-${i}`}
                             className="font-bold text-zinc-400 text-xl h-10 w-10 flex items-center justify-center"
                        >
                            {weekDay}
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {daysPassed.map(date => {
                    const dayInSummary = summary.find(day => {
                        return dayjs(date).isSame(day.date, 'day')
                    })

                    return <HabitDay
                        date={date}
                        completed={dayInSummary?.completed}
                        available={dayInSummary?.available}
                        key={date.toString()}
                    />
                })}

                {daysToFill > 0 && Array.from({length: daysToFill}).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className="grid grid-col-7 grid-flow-row gap-3 w-10 h-10 rounded-lg bg-zinc-900 opacity-40 cur"
                        />
                    )
                })}
            </div>
        </div>
    )
}