import { BoxArrowDown } from "@phosphor-icons/react";
import CardProject from "../utils/CardProject";

export default function ProjectItems() {
    return (
        <>
            <main className="w-full flex flex-col dark:text-white">
                <header className="w-full pb-4 border-b-2 dark:border-white/15">
                    <div className="w-full flex gap-2 items-center text-lg font-semibold">
                        <BoxArrowDown weight="bold" />
                        <h1>Projek Saya</h1>
                    </div>
                    <div className="">
                        <h1 className="text-zinc-600 dark:text-zinc-400">Beberapa Projek yang telah saya buat</h1>
                    </div>
                </header>
                <section className="w-full grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                    <a href="https://barangque.tefa-studio.com">
                        <CardProject
                            image="/projects/barangque.png"
                            title="BarangQue"
                            desc="BarangQue adalah platform peminjaman barang di SMK Negeri 1 Bangsri."
                        />
                    </a>
                    <CardProject
                        image="/projects/portofoliov1.png"
                        title="Portofolio V1"
                        desc="Merupakan projek website portofolio pertama saya"
                    />
                </section>
            </main>
        </>
    )
}