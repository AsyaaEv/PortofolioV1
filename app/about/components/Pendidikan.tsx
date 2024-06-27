import { GraduationCap } from "@phosphor-icons/react";
import CardPendidikan from "../utils/CardPendidikan";

export default function Pendidikan() {
    return (
        <>
            <main className="w-full flex-col mt-8 dark:text-white pb-8 border-b-2 dark:border-white/15">
                <div className="w-full flex gap-2 items-center text-lg font-semibold">
                    <GraduationCap weight="bold" />
                    <h1>Pendidikan</h1>
                </div>
                <div className="">
                    <h1 className="text-zinc-600 dark:text-zinc-400">Berikut adalah jenjang pendidikan saya.</h1>
                </div>
                <section className="w-full flex flex-col gap-4 mt-4">
                    <CardPendidikan 
                        image="tk.png"
                        title="TK RA Miftahul Ulum Sekuro"
                        periode="2011-2013"
                    />
                    <CardPendidikan 
                        image="mi.png"
                        title="MI Darul Huda 01 Karanggondang"
                        periode="2013-2019"
                    />
                    <CardPendidikan 
                        image="mts.png"
                        title="MTs Matholibul Huda Mlonggo"
                        periode="2019-2022"
                    />
                    <CardPendidikan 
                        image="smk.png"
                        title="SMK Negeri 1 Bangsri"
                        periode="2022-2025"
                    />
                </section>
            </main>
        </>
    )
}