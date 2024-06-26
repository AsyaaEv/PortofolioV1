"use client"
import {
    Avatar,
} from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Archive, CloudMoon, CloudSun, Code, Cpu, Hamburger, House, HouseLine, IdentificationBadge, IdentificationCard, SealCheck } from "@phosphor-icons/react"
import { useState } from 'react';
import { useDarkMode } from "../../darkmode/DarkModeContext";
import Image from "next/image";
import PP from '../../../public/AsyaPP.jpeg'
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
                <nav className={`w-full ${isOpen ? 'h-screen flex justify-start items-start py-4 container' : ' border-b-2 dark:border-white/15 md:border-b-0 p-4'} justify-start  items-center flex flex-col transition-all fixed bg-white dark:bg-black md:dark:bg-opacity-0 md:relative md:max-w-[15rem] md:pt-[5rem] z-50`}>
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
                                    <Image src={PP} alt="@shadcn" className="object-cover " />

                                </Avatar>
                            </DialogTrigger>
                            <div className="flex gap-2 w-full md:justify-center items-center md:text-xl z-10">
                                <Link href='/' >
                                    <h1 className="font-bold dark:text-white transition ">Anggun Rasya E</h1>
                                </Link>
                                <Link href='/dashboard'>
                                    <SealCheck size={22} weight="fill" className="text-blue-400"></SealCheck>
                                </Link>
                            </div>
                            <div className="hidden md:flex pb-4 border-b-[1px] dark:border-white/10 w-full justify-center dark:text-white">
                                <h1 >@syaa.ev</h1>
                            </div>
                        </header>

                        {/* view desktop */}
                        <div className={`md:w-full flex justify-center items-center z-10 pb-4 border-b-[1px] dark:border-white/10 ${!pathname.startsWith('/dashboard') ? 'block' : 'hidden'}`}>
                            <ul className="hidden md:flex gap-2 flex-col w-full mt-4">
                                <Link href='/'>
                                    <li className={`flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15 hover:dark:bg-white/15'} hover:scale-[1.05]`}>
                                        <div className="flex items-center justify-end">
                                            <HouseLine size={20} className="dark:text-white"></HouseLine>
                                        </div>
                                        <div className="w-full flex items-center justify-start">
                                            <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Beranda</h1>
                                        </div>
                                    </li>
                                </Link>
                                <Link href='/about'>
                                    <li className={`flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/about' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15 hover:dark:bg-white/15'} hover:scale-[1.05]`}>
                                        <div className="flex items-center justify-end">
                                            <IdentificationCard size={20} className="dark:text-white"></IdentificationCard>
                                        </div>
                                        <div className="w-full flex items-center justify-start">
                                            <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Tentang</h1>
                                        </div>
                                    </li>
                                </Link>
                                <Link href='/projects'>
                                    <li className={`flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/projects' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15 hover:dark:bg-white/15'} hover:scale-[1.05]`}>
                                        <div className="flex items-center justify-end">
                                            <Archive size={20} className="dark:text-white"></Archive>
                                        </div>
                                        <div className="w-full flex items-center justify-start">
                                            <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Projek</h1>
                                        </div>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                        {/* dashboard desktop*/}
                        <div className={`md:w-full flex justify-center items-center z-10 pb-4 border-b-[1px] dark:border-white/10 ${pathname.startsWith('/dashboard') ? 'block' : 'hidden'}`}>
                            <ul className="hidden md:flex gap-2 flex-col w-full mt-4">
                                <Link href='/dashboard'>
                                    <li className={`flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/dashboard' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15 hover:dark:bg-white/15'} hover:scale-[1.05]`}>
                                        <div className="flex items-center justify-end">
                                            <Cpu size={20} className="dark:text-white"></Cpu>
                                        </div>
                                        <div className="w-full flex items-center justify-start">
                                            <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Main</h1>
                                        </div>
                                    </li>
                                </Link>
                                <Accordion type="single" collapsible className="w-full dark:text-white " >
                                    <AccordionItem value="item-1" className="border-0" >
                                        <AccordionTrigger className={` flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/dashboard/beranda' ? 'bg-black/10 dark:bg-white/10' : ''} hover:scale-[1.05]`}>
                                            <div className="flex items-center justify-end">
                                                <House size={20} className="dark:text-white"></House>
                                            </div>
                                            <div className="w-full flex items-center justify-start">
                                                <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Beranda</h1>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Link href='/dashboard/beranda/skills' className="w-full mt-2 flex gap-2">
                                                <li className={`flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/dashboard/beranda/skills' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15 hover:dark:bg-white/15'}`}>
                                                    <div className="flex items-center justify-end">
                                                        <Code size={20} className="dark:text-white"></Code>
                                                    </div>
                                                    <div className="w-full flex items-center justify-start">
                                                        <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Skills</h1>
                                                    </div>
                                                </li>
                                            </Link>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </ul>
                        </div>

                        <footer className="hidden md:flex w-full justify-center items-center text-gray-500 mt-2">
                            <p>&copy; Reasya | 2024</p>
                        </footer>
                        <aside className={`${isOpen ? 'flex transition-all' : 'transition-all'}  flex items-center justify-end gap-4 w-auto md:absolute md:ml-[9.7rem] md:mt-12 md:bg-white md:w-auto md:rounded-[10px] md:drop-shadow-xl`}>
                            {useDarkMode().isDarkMode ? (
                                <CloudMoon className="hover:cursor-pointer dark:text-white dark:bg-zinc-800 rounded-[10px] p-2 size-10 transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all" onClick={toggleDarkMode}></CloudMoon>
                            ) : (
                                <CloudSun className="hover:cursor-pointer text-black bg-white rounded-[10px] p-2 size-10 transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all" onClick={toggleDarkMode}></CloudSun>
                            )}
                            <Hamburger size={32} className="hover:cursor-pointer dark:text-white transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all md:hidden" onClick={() => setIsOpen(!isOpen)}></Hamburger>
                        </aside>
                    </div>
                    <hr className={`${isOpen ? 'block border-b-[0.1px] w-full transition-all mt-3 dark:border-zinc-800' : 'hidden transition-all'} transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all`} />


                    {/* view mobile*/}
                    <main className={`${isOpen ? 'block  w-full transition-all mt-4' : 'hidden transition-all'} ${!pathname.startsWith('/dashboard') ? 'block' : 'hidden'} transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all`}>
                        <ul className="flex flex-col gap-2">
                            <Link href="/">
                                <li className={`flex gap-2 py-2 items-center  w-full px-4 rounded-[10px] hover:cursor-pointer group  transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all ${pathname === '/' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15'} hover:scale-[1.02]`}>
                                    <House size={20} className="dark:text-white transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all"></House>
                                    <h1 className="group-hover:translate-x-1 transition-all dark:text-white  duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all">Beranda</h1>
                                </li>
                            </Link>
                            <Link href='/about'>
                                <li className={`flex gap-2 py-2 items-center w-full px-4 rounded-[10px] hover:cursor-pointer hover:bg-black/5 group dark:hover:bg-white/15 transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all ${pathname === '/about' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15'} hover:scale-[1.02]`}>
                                    <IdentificationCard size={20} className="dark:text-white transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all"></IdentificationCard>
                                    <h1 className="group-hover:translate-x-1 transition-all dark:text-white duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all">Tentang</h1>
                                </li>
                            </Link>
                            <Link href='/projects'>
                                <li className={`flex gap-2 py-2 items-center w-full px-4 rounded-[10px] hover:cursor-pointer hover:bg-black/5 group dark:hover:bg-white/15 transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all ${pathname === '/projects' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15'} hover:scale-[1.02]`}>
                                    <Archive size={20} className="dark:text-white transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all"></Archive>
                                    <h1 className="group-hover:translate-x-1 transition-all dark:text-white duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all">Projek</h1>
                                </li>
                            </Link>
                        </ul>
                    </main>

                    {/* dashboard mobile*/}
                    <main className={`${isOpen ? 'block  w-full transition-all mt-4' : 'hidden transition-all'} ${pathname.startsWith('/dashboard') ? 'block' : 'hidden'} transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all`}>
                        <ul className="flex flex-col gap-2">
                            <Link href="/dashboard">
                                <li className={`flex gap-2 py-2 items-center  w-full px-4 rounded-[10px] hover:cursor-pointer group  transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all ${pathname === '/' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15'} hover:scale-[1.02]`}>
                                    <Cpu size={20} className="dark:text-white transition duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all"></Cpu>
                                    <h1 className="group-hover:translate-x-1 transition-all dark:text-white  duration-500 ease-in-out dark:duration-500 dark:ease-in-out dark:transition-all">Main</h1>
                                </li>
                            </Link>
                            <Accordion type="single" collapsible className="w-full dark:text-white " >
                                <AccordionItem value="item-1" className="border-0 w-full " >
                                    <AccordionTrigger className={` flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/dashboard/beranda' ? 'bg-black/10 dark:bg-white/10' : ''} hover:scale-[1.05]`}>
                                        <div className="flex items-center justify-end">
                                            <House size={20} className="dark:text-white"></House>
                                        </div>
                                        <div className="w-full flex items-center justify-start">
                                            <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Beranda</h1>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <Link href='/dashboard/beranda/skills' className="w-full mt-2 flex gap-2">
                                            <li className={`w-full flex gap-2 justify-center items-center px-4 hover:cursor-pointer group transition md:w-full py-1 rounded-[10px] ${pathname === '/dashboard/beranda/skills' ? 'bg-black/10 dark:bg-white/10' : 'hover:bg-black/15 hover:dark:bg-white/15'}`}>
                                                <div className="flex items-center justify-end">
                                                    <Code size={20} className="dark:text-white"></Code>
                                                </div>
                                                <div className="w-full flex items-center justify-start">
                                                    <h1 className="dark:text-white group-hover:translate-x-1 transition-all border-black/10 dark:border-white/30 pb-1 text-lg">Skills</h1>
                                                </div>
                                            </li>
                                        </Link>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </ul>
                    </main>
                </nav>
                <DialogContent className="bg-white border-none p-0">
                    <Image src={PP} width={1080} alt="" />
                </DialogContent>
            </Dialog>
        </>
    )
}