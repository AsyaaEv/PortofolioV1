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

import { CloudMoon, CloudSun, Hamburger, House, HouseLine, IdentificationBadge, IdentificationCard, SealCheck } from "@phosphor-icons/react"
import { useState } from 'react';
import { useDarkMode } from "../../darkmode/DarkModeContext";
import Image from "next/image";
import vercelImage from '../../../public/adit.jpg'
import bgImage from '../../../public/bg.webp'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleDarkMode } = useDarkMode();

    const pathname = usePathname();
    return (
        <>
            <Dialog>
                <nav className={`w-full ${isOpen ? 'h-screen flex justify-start items-start py-4 container transition-all' : ' border-b-2 dark:border-white/15 md:border-b-0 p-4 transition-all'} justify-start  items-center flex flex-col transition-all fixed bg-white dark:bg-black md:dark:bg-opacity-0 md:relative md:max-w-[15rem] md:pt-[5rem] z-50`}>
                    <div className={`flex w-full transition-all md:justify-between md:flex-col`}>
                        <header className={`w-full flex gap-2 items-center transition-all md:flex-col md:gap-0`}>
                            <div className="hidden md:block absolute px-4">
                                <Image src={bgImage} width={200} height={50} alt="" className="rounded-[10px] h-[6rem] object-cover brightness-90 dark:brightness-50"></Image>
                            </div>
                            <div className="hidden md:block bg-white rounded-br-[10px] rounded-bl-[10px] rounded-tl-[10px] absolute mr-[8rem] p-2 dark:bg-black/95">
                                <h1 className="border-[1px] rounded-[10px] px-1 dark:text-white dark:border-white/50 flex gap-2 justify-center items-center"><div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>Hire Me.</h1>
                            </div>
                            <DialogTrigger >
                                <Avatar className={`${isOpen ? 'size-20 transition-all' : 'transition-all md:size-20 md:mt-10 md:outline md:outline-3 md:outline-white dark:outline-black'}`}>
                                    <Image src={vercelImage} alt="@shadcn" className="object-cover " />

                                </Avatar>
                            </DialogTrigger>
                            <div className="flex gap-2 w-full md:justify-center items-center md:text-xl z-10">
                                <h1 className="font-bold dark:text-white transition ">Anggun Rasya E</h1>
                                <SealCheck size={22} weight="fill" className="text-blue-400"></SealCheck>
                            </div>
                            <div className="hidden md:flex pb-4 border-b-[1px] dark:border-white/10 w-full justify-center dark:text-white">
                                <h1 >@syaa.ev</h1>
                            </div>
                        </header>
                        <div className="md:w-full flex justify-center items-center z-10 pb-4 border-b-[1px] dark:border-white/10">
                            <ul className="hidden md:flex gap-2 flex-col w-full mt-4">
                                <Link href='/'>
                                    <li className={`flex  gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15 hover:dark:bg-white/15'} hover:scale-[1.05]`}>
                                        <div className=" flex items-center justify-end">
                                            <HouseLine size={20} className="dark:text-white"></HouseLine>
                                        </div>
                                        <div className=" w-full flex items-center justify-start">
                                            <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Beranda</h1>
                                        </div>
                                    </li>
                                </Link>
                                <Link href='/about'>
                                    <li className={`flex  gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/about' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15 hover:dark:bg-white/15'} hover:scale-[1.05]`}>
                                        <div className=" flex items-center justify-end">
                                            <IdentificationCard size={20} className="dark:text-white"></IdentificationCard>
                                        </div>
                                        <div className=" w-full flex items-center justify-start">
                                            <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Tentang</h1>
                                        </div>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <footer className="hidden md:flex w-full justify-center items-center text-gray-500 mt-2">
                            <p>&copy; Reasya | 2024</p>
                        </footer>
                        <aside className={`${isOpen ? 'flex transition-all' : 'transition-all'}  flex items-center justify-end gap-4 w-auto md:absolute md:ml-[9.7rem] md:mt-12 md:bg-white md:w-auto md:rounded-[10px] md:drop-shadow-xl`}>
                            {useDarkMode().isDarkMode ? (
                                <CloudMoon className="hover:cursor-pointer dark:text-white dark:bg-zinc-800 rounded-[10px] p-2 size-10 transition duration-500 ease-in-out" onClick={toggleDarkMode}></CloudMoon>
                            ) : (
                                <CloudSun className="hover:cursor-pointer text-black bg-white rounded-[10px] p-2 size-10 transition duration-500 ease-in-out" onClick={toggleDarkMode}></CloudSun>
                            )}
                            <Hamburger size={32} className="hover:cursor-pointer dark:text-white transition duration-500 ease-in-out md:hidden" onClick={() => setIsOpen(!isOpen)}></Hamburger>
                        </aside>
                    </div>
                    <hr className={`${isOpen ? 'block border-b-[0.1px] w-full transition-all mt-3 dark:border-zinc-800' : 'hidden transition-all'} transition duration-500 ease-in-out`} />
                    <main className={`${isOpen ? 'block  w-full transition-all mt-4' : 'hidden transition-all'} transition duration-500 ease-in-out`}>
                        <ul className="flex flex-col gap-2">
                            <Link href="/">
                                <li className={`flex gap-2 py-2 items-center  w-full px-4 rounded-[10px] hover:cursor-pointer group dark:bg-white/10 transition duration-500 ease-in-out ${pathname === '/' ? 'bg-black/10' : 'hover:bg-black/15'} hover:scale-[1.02]`}>
                                    <House size={20} className="dark:text-white transition duration-500 ease-in-out"></House>
                                    <h1 className="group-hover:translate-x-1 transition-all dark:text-white  duration-500 ease-in-out">Beranda</h1>
                                </li>
                            </Link>
                            <Link href='/about'>
                                <li className={`flex gap-2 py-2 items-center w-full px-4 rounded-[10px] hover:cursor-pointer hover:bg-black/5 group dark:hover:bg-white/15 transition duration-500 ease-in-out ${pathname === '/about' ? 'bg-black/10' : 'hover:bg-black/15'} hover:scale-[1.02]`}>
                                    <IdentificationCard size={20} className="dark:text-white transition duration-500 ease-in-out"></IdentificationCard>
                                    <h1 className="group-hover:translate-x-1 transition-all dark:text-white duration-500 ease-in-out">Tentang</h1>
                                </li>
                            </Link>
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