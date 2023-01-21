import * as Popover from '@radix-ui/react-popover';
import * as Progress from '@radix-ui/react-progress';
import {ProgressBar} from "./ProgressBar";
import clsx from "clsx";

interface HabitDayProps {
    completed: number,
    available: number
}

export function HabitDay(props: HabitDayProps) {
    const habitsCompletedProgress = Math.round((props.completed / props.available) * 100)

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
                    <span className="font-semibold text-zinc-400">Saturday</span>
                    <span className="mt-1 font-extrabold leading-tight text-3xl">21/01</span>

                    <ProgressBar progress={habitsCompletedProgress}/>

                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}
