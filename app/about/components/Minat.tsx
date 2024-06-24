import { Person } from "@phosphor-icons/react";
import Image from "next/image";
import logoOsis from '../../../public/LogoOsis.png'

export default function Minat() {
    return (
        <>
            <main className="w-full flex-col mt-8">
                <div className="w-full flex gap-2 items-center text-lg font-semibold">
                    <Person weight="bold" />
                    <h1>Minat</h1>
                </div>
                <div className="">
                    <h1 className="text-zinc-600">Saya memiliki banyak minat kayak minat di organisasi dan ekstrakurikuler!</h1>
                </div>
                <section className="w-full flex flex-col gap-4 mt-4">
                    <div className="w-full p-4 border-2 rounded-[10px] flex gap-5">
                        <div className="">
                            <Image src={logoOsis} width={60} alt=""></Image>
                        </div>
                        <div className="w-full flex justify-center flex-col">
                            <h1>Organisasi Siswa Intra Sekolah</h1>
                            <h1 className="text-black/50">2022-2024</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}