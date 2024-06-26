import { Archive, Question } from "@phosphor-icons/react"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <main className="w-full flex justify-center items-center flex-col mt-4 border-b-2 dark:border-white/15 dark:text-white pb-4">
                <header className="w-full flex flex-col">
                    <div className="w-full flex gap-2 items-center text-lg font-semibold">
                        <Question weight="bold" />
                        <h1>Pengalaman</h1>
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-400">
                        <h1>Apa yang saya telah lakukan?.</h1>
                    </div>
                    <section className="w-full mt-4 flex flex-col">
                        <div className="w-full">
                            <h1 className="leading-loose text-sm md:text-base text-zinc-600 dark:text-zinc-400">Saya telah berkolaborasi dalam digitalisasi di sekolah saya,Inisiatif ini bertujuan meningkatkan efisiensi, transparansi, dan memberikan kemudahan akses informasi bagi siswa serta staf sekolah.</h1>
                        </div>
                        <div className="w-full p-4 border-2 rounded-[10px] mt-4 dark:border-0 dark:bg-white/10" >
                            <header className="w-full flex items-center gap-2 text-lg">
                                <Archive weight="bold" size={28} />
                                <h1>Projek saya!</h1>
                            </header>
                            <div className="w-full mt-4">
                                <h1 className="text-zinc-600 dark:text-white">Beberapa projek yang telah saya kerjakan, baik yang sudah dipublish maupun latian.</h1>
                            </div>
                            <Link href='/projects'>
                                <div className="w-full mt-4">
                                    <button className="px-6 py-2 bg-zinc-600 rounded-[10px] text-white/80">Liat Projek</button>
                                </div>
                            </Link>
                        </div>
                    </section>
                </header>
            </main>
        </>
    )
}