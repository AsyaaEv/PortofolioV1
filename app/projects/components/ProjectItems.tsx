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
                        title="Portofolio V2"
                        desc="Merupakan projek website portofolio kedua saya"
                    />
                    <CardProject
                        image="/projects/DosaMurid.jpeg"
                        title="Dosa Murid"
                        desc="Aplikasi berbasis website pencatatan pelanggaran siswa/siswi SMKN 1 Bangsri"
                    />
                    <CardProject
                        image="/projects/CRUD Laravel.jpeg"
                        title="CRUD Laravel"
                        desc="Berhasil membuat system CRUD laravel dibantu dengan package livewire"
                    />
                    <a href="https://pplg.smkn1bangsri.sch.id">
                        <CardProject
                            image="/projects/jurusanPPLG.png"
                            title="Profil Jurusan PPLG"
                            desc="Membuat website profile jurusan pplg, dibagian backend development"
                        />
                    </a>
                    <a href="https://lempita.smkn1bangsri.sch.id">
                        <CardProject
                            image="/projects/Lempita.png"
                            title="Lempita"
                            desc="Membuat tampilan frontend dalam website lempita"
                        />
                    </a>
                    <CardProject
                        image="/projects/PortofolioV0.jpeg"
                        title="Portofolio V1"
                        desc="Portofolio Pertama dibuat menggunakan html css"
                    />
                    <CardProject
                        image="/projects/JS.jpeg"
                        title="Belajar JS"
                        desc="Membuat input nama dan warna kesukaan menggunakan JavaScript"
                    />
                    <CardProject
                        image="/projects/easylearning.jpeg"
                        title="Easy-Learning"
                        desc="Website belajar online yang diperuntukan SMKN 1 Bangsri"
                    />
                    <a href="https://absenque.tripleer.my.id">
                        <CardProject
                            image="/projects/absenque.png"
                            title="AbsenQue"
                            desc="Menciptakan aplikasi berbasis website untuk presensi wisuda SMKN 1 Bangsri tahun 2024"
                        />
                    </a>
                    <a href="https://bogeng.tripleer.my.id">
                        <CardProject
                            image="/projects/BMP.png"
                            title="Bogeng Media Prima"
                            desc="Website profile company bogeng media prima"
                        />
                    </a>
                </section>
            </main>
        </>
    )
}