import { Person } from "@phosphor-icons/react";
import Image from "next/image";
import logoPassus from '../../../public/minat/logoPassus.png'
import logoJurnalistik from '../../../public/minat/logoJurnalistik.png'
import logoFosis from '../../../public/minat/logoFosis.png'
import logoPpi from '../../../public/minat/logoPpi.webp'
import logoOsisSMK from '../../../public/minat/logoOsisSMK.png'
import CardMinat from "../utils/CardMinat";

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
                    <CardMinat 
                        image="logoOsisSMK.png"
                        title="Organisasi Siswa Intra Sekolah"
                        periode="2022-2024"
                    />
                    <CardMinat 
                        image="logoPassus.png"
                        title="Passus Wira Adhi Dhaya"
                        periode="2022-2024"
                    />
                    <CardMinat 
                        image="logoJurnalistik.png"
                        title="Jurnalistik Anwa Sanskara"
                        periode="2022-2024"
                    />
                    <CardMinat 
                        image="logoPpi.webp"
                        title="Purna Paskibraka Indonesia"
                        periode="2023"
                    />
                    <CardMinat 
                        image="logoFosis.png"
                        title="Forum Osis Jepara"
                        periode="2024-2025"
                    />
                </section>
            </main>
        </>
    )
}