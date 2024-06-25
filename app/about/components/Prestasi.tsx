import { ArrowBendUpRight, Ranking } from "@phosphor-icons/react";
import pPramukaMI from '../../../public/pPramukaMI.jpeg'
import Image from "next/image";

export default function Prestasi() {
    return (
        <>
            <main className="w-full flex-col mt-8 dark:text-white border-b-2 pb-4 dark:border-white/15">
                <div className="w-full flex gap-2 items-center text-lg font-semibold">
                    <Ranking weight="bold" />
                    <h1>Prestasi</h1>
                </div>
                <div className="">
                    <h1 className="text-zinc-600 dark:text-zinc-400">Prestasi? hmmz, sedikit je</h1>
                </div>
                <section className="w-full grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                    <div className="w-full rounded-[10px] border-2 h-[22rem] flex flex-col group overflow-hidden hover:scale-[1.01] transition-all dark:border-0 dark:bg-white/15">
                        <div className="w-full h-[60%] overflow-hidden">
                            <div className="w-full h-[60%] bg-black/50 absolute z-50 hidden group-hover:flex justify-center items-center">
                                <h1 className="text-white font-semibold flex justify-center items-center gap-2 text-lg">Liat lebih detail <ArrowBendUpRight weight="bold" /></h1>
                            </div>
                            <Image src={pPramukaMI} width={1080} alt="" className="object-cover w-full h-full rounded-tl-[10px] rounded-tr-[10px] pointer-events-none -z-10"/>
                        </div>
                        <div className="w-full h-auto flex-col px-4 ">
                            <div className="w-full mt-2">
                                <h1 className="text-lg font-semibold">Kemah Penggalang</h1>
                                <h1 className="text-sm text-zinc-600 dark:text-zinc-400">2018</h1>
                            </div>
                            <div className="w-full mt-2">
                                <h1 className="text-sm">Dipercayai untuk bergabung kedalam tim pramuka di perkemahan penggalang mewakili sekolah MI Darul Huda 1</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}