import logo from '../assets/logo.svg';
import {Plus} from 'phosphor-react'

export function Header() {
    return(
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logo} alt="App Logo" className="w-36"/>
            <button
                type="button"
                className="font-bold border border-violet-500 rounded-lg px-6 py-2 flex gap-3 items-center hover:border-violet-800 hover:bg-hoverbg">
                <Plus size={20} className="text-cyan-400"/>
                New Habit
            </button>
        </div>
    )
}