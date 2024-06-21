"use client"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { CloudSun, Hamburger, House, IdentificationBadge, SealCheck } from "@phosphor-icons/react"
import { useState } from 'react';
import { useDarkMode } from "../darkmode/DarkModeContext";
import Image from "next/image";
import vercelImage from '../../public/adit.jpg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleDarkMode } = useDarkMode();
    // const pp = 'vercel.svg'

    return (
        <>
            <Dialog>
                <nav className={`w-full ${isOpen ? 'h-screen flex justify-start items-start py-4 container transition-all' : ' border-b-2 p-4 transition-all dark:border-zinc-800'} justify-start  items-center flex flex-col transition-all fixed bg-white dark:bg-black  duration-500 ease-in-out`}>
                    <div className={`flex w-full transition-all md:justify-between`}>
                        <header className={`w-full flex gap-2 items-center transition-all`}>
                            <DialogTrigger >
                                <Avatar className={`${isOpen ? 'size-20 transition-all' : 'transition-all'}`}>
                                    <AvatarImage src={vercelImage.src} alt="@shadcn" className="object-cover" />
                                    <AvatarFallback>PP</AvatarFallback>
                                </Avatar>
                            </DialogTrigger>
                            <h1 className="font-bold dark:text-white transition duration-500 ease-in-out">Anggun Rasya E</h1>
                            <SealCheck size={22} weight="fill" className="text-blue-400"></SealCheck>
                        </header>
                        <div className="md:w-full flex justify-center items-center">
                            <ul className="hidden md:flex gap-2">
                                <li className="flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition duration-500 ease-in-out">
                                    <h1 className="dark:text-white group-hover:border-b-2 border-black/10 dark:border-white/30 pb-1">Beranda</h1>
                                </li>
                                <li className="flex gap-2 justify-center items-center px-4 hover:cursor-pointer group">
                                    <h1 className="dark:text-white group-hover:border-b-2 border-black/10 dark:border-white/30 pb-1">
                                        Tentang
                                    </h1>
                                </li>
                            </ul>
                        </div>
                        <aside className={`${isOpen ? 'flex transition-all' : 'transition-all'}  flex items-center justify-end gap-4 md:w-full w-auto`}>
                            <CloudSun className="hover:cursor-pointer dark:text-white dark:bg-zinc-800  dark:rounded-[10px] p-2 size-10 transition duration-500 ease-in-out " onClick={toggleDarkMode}></CloudSun>
                            <Hamburger size={32} className="hover:cursor-pointer dark:text-white transition duration-500 ease-in-out md:hidden" onClick={() => setIsOpen(!isOpen)}></Hamburger>
                        </aside>
                    </div>
                    <hr className={`${isOpen ? 'block border-b-[0.1px] w-full transition-all mt-3 dark:border-zinc-800' : 'hidden transition-all'} transition duration-500 ease-in-out`} />
                    <main className={`${isOpen ? 'block  w-full transition-all mt-4' : 'hidden transition-all'} transition duration-500 ease-in-out`}>
                        <ul className="flex flex-col gap-2">
                            <li className="flex gap-2 py-2 items-center bg-black/10 w-full px-4 rounded-[10px] hover:cursor-pointer group dark:bg-white/10 transition duration-500 ease-in-out">
                                <House size={20} className="dark:text-white transition duration-500 ease-in-out"></House>
                                <h1 className="group-hover:translate-x-2 transition-all dark:text-white  duration-500 ease-in-out">Beranda</h1>
                            </li>
                            <li className="flex gap-2 py-2 items-center w-full px-4 rounded-[10px] hover:cursor-pointer hover:bg-black/5 group dark:hover:bg-white/15 transition duration-500 ease-in-out">
                                <IdentificationBadge size={20} className="dark:text-white transition duration-500 ease-in-out"></IdentificationBadge>
                                <h1 className="group-hover:translate-x-2 transition-all dark:text-white duration-500 ease-in-out">Beranda</h1>
                            </li>
                        </ul>
                    </main>
                </nav>
                <DialogContent className="bg-white border-none p-0">
                    <Image src={vercelImage} width={1080} alt="" />
                </DialogContent>
            </Dialog>
        </>
    )
}