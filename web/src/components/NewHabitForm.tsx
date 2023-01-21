import {Check} from "phosphor-react";


export function NewHabitForm() {
    return (
        <form className="2-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                What are you trying to improve?
            </label>
            <input
                className="px-4 py-2 rounded-lg mt-4 bg-zinc-800 text-white placeholder:text-zinc-600"
                type="text"
                id="title"
                placeholder="eg: Study, Workout, Read..."
                autoFocus
            />

            <label htmlFor="" className="font-semibold leading-tight mt-6">
                Set the days
            </label>

            <button type="submit" className="mt-6 rounded-lg p-4 gap-3 w-full bg-cyan-600 flex flex-row items-center font-bold justify-center">
                <Check size={20} weight="bold"/>
                Confirm
            </button>

        </form>
    )
}