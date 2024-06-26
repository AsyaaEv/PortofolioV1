import { Button } from "@/components/ui/button";
import { DownloadSimple, TipJar } from "@phosphor-icons/react";

export default function Landing() {
    return (
        <>
            <main className="w-full  flex flex-col items-center pb-4 border-b-2 dark:border-white/15 dark:text-white">
                <header className="w-full flex justify-between items-center ">
                    <div className="">
                        <h1 className="font-semibold text-2xl flex gap-2 items-center justify-center">Haloo, Saya Rasya <span className="animate-bounce flex text-2xl">🙌</span></h1>
                    </div>
                    <div className="">
                        <TipJar size={27} />
                    </div>
                </header>
                <div className="w-full mt-2 ">
                    <ul className="decoration-clone list-disc pl-5 md:flex md:gap-8">
                        <li>Full Stack Developer</li>
                        <li>Pelajar SMK Negeri 1 Bangsri</li>
                    </ul>
                </div>
                <section className="mt-4">
                    <h1 className="leading-loose text-sm md:text-base">Saya adalah seorang web developer dengan pengalaman luas dalam mengembangkan aplikasi web. Keahlian saya melibatkan integrasi teknologi front-end dan back-end untuk menciptakan solusi yang responsif dan inovatif. Saya senang bekerja dalam tim kolaboratif dan selalu mencari peluang untuk terus mengembangkan keterampilan dan pengetahuan saya dalam dunia pengembangan perangkat lunak.</h1>
                </section>
                <footer className="w-full flex items-center mt-4 ">
                    <button className="px-4 py-1 flex justify-center items-center gap-2 bg-black/10 dark:bg-white/10 rounded-[10px] outline-dashed text-sm outline-black/50 dark:outline-white/50">
                        <DownloadSimple className="text-lg"/>
                        Download CV
                    </button>
                </footer>
            </main>
        </>
    )
}