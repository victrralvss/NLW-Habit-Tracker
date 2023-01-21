import logo from '../assets/logo.svg';
import {Plus, X} from 'phosphor-react'
import {NewHabitForm} from "./NewHabitForm";
import {useState} from "react";
import * as Dialog from '@radix-ui/react-dialog';



export function Header() {
    const[ isModalOpen, setIsModalOpen ] = useState(false)
    function buttonClicked() {
        setIsModalOpen(true)
    }

    return(
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logo} alt="App Logo" className="w-36"/>

            <Dialog.Root>
                <Dialog.Trigger
                    type="button"
                    className="font-bold border border-violet-500 rounded-lg px-6 py-2 flex gap-3 items-center hover:border-violet-800 hover:bg-hoverbg">
                    <Plus size={20} className="text-cyan-400"/>
                    New Habit
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0"/>

                    <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-lg 2-full w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-600">
                            <X size={24} aria-label="Close" />
                        </Dialog.Close>

                        <Dialog.Title className="text-3xl leading-tight font-extrabold">
                            Create Habit
                        </Dialog.Title>

                        <NewHabitForm/>

                    </Dialog.Content>

                </Dialog.Portal>
            </Dialog.Root>


        </div>
    )
}