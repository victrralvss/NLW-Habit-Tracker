import {Check} from "phosphor-react";
import * as Checkbox from "@radix-ui/react-checkbox";
import {FormEvent, useState} from "react";

const weekDays = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday']


export function NewHabitForm() {
    const [title, setTitle] = useState('')
    const [weekDay, setWeekDay] = useState<number[]>([])

    function createNewHabit(event: FormEvent) {
        event.preventDefault()
    }

    function handleToggleWeekDay(weekNumber: number) {
        if (weekDay.includes(weekNumber)){
            const weekDaysToSet = weekDay.filter(day => day !== weekNumber)
            setWeekDay(weekDaysToSet)
        } else {
            const weekDaysToAdd = [...weekDay, weekNumber]
            setWeekDay(weekDaysToAdd)
        }
    }

    return (
        <form className="2-full flex flex-col mt-6" onSubmit={createNewHabit}>
            <label htmlFor="title" className="font-semibold leading-tight">
                What are you trying to improve?
            </label>
            <input
                className="px-4 py-3 rounded-lg mt-4 bg-zinc-800 text-white placeholder:text-zinc-600"
                type="text"
                id="title"
                placeholder="eg: Study, Workout, Read..."
                autoFocus
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="" className="font-semibold leading-tight mt-6">
                When do you want to accomplish:
            </label>

            <div className="flex flex-col gap-1 mt-3">
                {weekDays.map((weekDay, index )=> {
                    return (
                        <Checkbox.Root
                            key={weekDay}
                            className="flex items-center p-0 group focus:outline-0"
                            onCheckedChange={() => {handleToggleWeekDay(index)}}
                        >
                            <div
                                className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 mr-4 group-data-[state=checked]:bg-cyan-600 group-data-[state=checked]:border-cyan-500:"
                            >

                                <Checkbox.Indicator>
                                    <Check size={20} className="text-zinc-200"/>
                                </Checkbox.Indicator>
                            </div>

                            <span className="font-bold text-zinc-200 text-sm">{weekDay}</span>
                        </Checkbox.Root>
                    )
                })}


            </div>

            <button type="submit" className="mt-6 rounded-lg p-4 gap-3 w-full bg-cyan-600 flex flex-row items-center font-bold justify-center">
                <Check size={20} weight="bold"/>
                Confirm
            </button>

        </form>
    )
}