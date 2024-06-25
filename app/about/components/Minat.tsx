import { Person } from "@phosphor-icons/react";
import Image from "next/image";
import logoOsis from '../../../public/logoOsis.png'
import logoPassus from '../../../public/logoPassus.png'
import logoJurnalistik from '../../../public/logoJurnalistik.png'
import logoFosis from '../../../public/logoFosis.png'
import logoPpi from '../../../public/logoPpi.webp'

export default function Minat() {
    return (
        <>
            <main className="w-full flex-col mt-8 dark:text-white pb-8 border-b-2 dark:border-white/15">
                <div className="w-full flex gap-2 items-center text-lg font-semibold">
                    <Person weight="bold" />
                    <h1>Minat</h1>
                </div>
                <div className="">
                    <h1 className="text-zinc-600 dark:text-zinc-400">Saya memiliki banyak minat kayak minat di organisasi dan ekstrakurikuler!</h1>
                </div>
                <section className="w-full flex flex-col gap-4 mt-4">
                    <div className="w-full p-4 border-2 rounded-[10px] flex gap-5 dark:border-0 dark:bg-white/15">
                        <div className="">
                            <Image src={logoOsis} width={60} alt="" className="dark:brightness-75 pointer-events-none"></Image>
                        </div>
                        <div className="w-full flex justify-center flex-col">
                            <h1>Organisasi Siswa Intra Sekolah</h1>
                            <h1 className="text-black/50 dark:text-zinc-400">2022-2024</h1>
                        </div>
                    </div>
                    <div className="w-full p-4 border-2 rounded-[10px] flex gap-5 dark:border-0 dark:bg-white/15">
                        <div className="">
                            <Image src={logoPassus} width={60} alt="" className="dark:brightness-75 pointer-events-none"></Image>
                        </div>
                        <div className="w-full flex justify-center flex-col">
                            <h1>Passus Wira Adhi Dhaya</h1>
                            <h1 className="text-black/50 dark:text-zinc-400">2022-2024</h1>
                        </div>
                    </div>
                    <div className="w-full p-4 border-2 rounded-[10px] flex gap-5 dark:border-0 dark:bg-white/15">
                        <div className="">
                            <Image src={logoJurnalistik} width={60} alt="" className="dark:brightness-75 pointer-events-none"></Image>
                        </div>
                        <div className="w-full flex justify-center flex-col">
                            <h1>Jurnalistik Anwa Sanskara</h1>
                            <h1 className="text-black/50 dark:text-zinc-400">2022-2024</h1>
                        </div>
                    </div>
                    <div className="w-full p-4 border-2 rounded-[10px] flex gap-5 dark:border-0 dark:bg-white/15">
                        <div className="">
                            <Image src={logoPpi} width={60} alt="" className="dark:brightness-75 pointer-events-none"></Image>
                        </div>
                        <div className="w-full flex justify-center flex-col">
                            <h1>Purna Paskibraka Indonesia</h1>
                            <h1 className="text-black/50 dark:text-zinc-400">2023</h1>
                        </div>
                    </div>
                    <div className="w-full p-4 border-2 rounded-[10px] flex gap-5 dark:border-0 dark:bg-white/15">
                        <div className="">
                            <Image src={logoFosis} width={60} alt="" className="dark:brightness-75 pointer-events-none"></Image>
                        </div>
                        <div className="w-full flex justify-center flex-col">
                            <h1>Forum Osis Jepara</h1>
                            <h1 className="text-black/50 dark:text-zinc-400">2024-2025</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}