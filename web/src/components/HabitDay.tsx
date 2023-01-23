import * as Popover from '@radix-ui/react-popover';
import * as Checkbox from '@radix-ui/react-checkbox';
import {ProgressBar} from "./ProgressBar";
import clsx from "clsx";
import {Check} from "phosphor-react";
import dayjs from "dayjs";

interface HabitDayProps {
    date: Date
    completed?: number,
    available?: number
}

export function HabitDay({completed=0, available=0, date}: HabitDayProps) {
    const habitsCompletedProgress = available > 0 ? Math.round((completed/ available) * 100) : 0
    const dayMonth = dayjs(date).format('DD/MM')
    const Week = dayjs(date).format('dddd')


    return (
        <Popover.Root>
            <Popover.Trigger
                className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg", {
                    'bg-zinc-900 border-zinc-800': habitsCompletedProgress === 0,
                    'bg-violet-400 border-violet-300': habitsCompletedProgress >= 1 &&  habitsCompletedProgress < 20,
                    'bg-violet-500 border-violet-400': habitsCompletedProgress >= 20 &&  habitsCompletedProgress < 40,
                    'bg-violet-600 border-violet-500': habitsCompletedProgress >= 40 &&  habitsCompletedProgress < 60,
                    'bg-violet-700 border-violet-600': habitsCompletedProgress >= 60 &&  habitsCompletedProgress < 80,
                    'bg-violet-800 border-violet-700': habitsCompletedProgress >= 80,
                })}
            />

            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                    <Popover.Arrow height={8} width={16} className="fill-zinc-900"/>
                    <span className="font-semibold text-zinc-400">{Week}</span>
                    <span className="mt-1 font-extrabold leading-tight text-3xl">{dayMonth}</span>

                    <ProgressBar progress={habitsCompletedProgress}/>

                    <div className="mt-6 flex flex-col gap-2">

                        <Checkbox.Root className="flex items-center px-0 group focus:outline-0 ">
                            <div
                                className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 mr-4 group-data-[state=checked]:bg-cyan-600 group-data-[state=checked]:border-cyan-500:"

                            >

                                <Checkbox.Indicator>
                                    <Check size={20} className="text-zinc-200"/>
                                </Checkbox.Indicator>
                            </div>

                            <span className="font-bold group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-500">Sexo</span>
                        </Checkbox.Root>
                    </div>

                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
