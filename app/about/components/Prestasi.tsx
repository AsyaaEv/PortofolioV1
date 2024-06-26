import { Ranking } from "@phosphor-icons/react";
import Card from "../utils/CardPrestasi";

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
                    <Card 
                        image="pPramukaMI.jpeg"
                        title="Kemah Penggalang"
                        year="2018"
                        desc="Dipercayai untuk bergabung kedalam tim pramuka di perkemahan penggalang mewakili sekolah MI Darul Huda 1"
                     />
                    <Card 
                        image="pLombaDB.jpeg"
                        title="Drumband"
                        year="2018"
                        desc="Menjadi salah satu team Drumband MI Darul Huda 1 sebagai pemegang alat Drumband senar"
                     />
                    <Card 
                        image="pLombaSilatKab.jpeg"
                        title="Pencak Silat"
                        year="2021"
                        desc="Juara 1 tingkat Kabupaten Jepara dalam lomba pencak silat Cempaka Putih CUP"
                     />
                    <Card 
                        image="pLombaSilatProv.jpeg"
                        title="Pencak Silat"
                        year="2021"
                        desc="Juara 1 tingkat Provinsi dalam lomba pencak silat Cempaka Putih CUP"
                     />
                    <Card 
                        image="pLombaSilatNas.jpeg"
                        title="Pencak Silat"
                        year="2022"
                        desc="Juara 3 tingkat Nasional dalam lomba pencak silat Grobogan Open CUP"
                     />
                    <Card 
                        image="pLombaLBB.jpeg"
                        title="Lomba Baris Berbaris Variasi VI"
                        year="2022"
                        desc="Menjadi salah satu anggota team LBB dan meraih Juara Umum 1 diperlombaan LBB Variasi VI"
                     />
                    <Card 
                        image="pMCP5.jpeg"
                        title="Pemandu Acara"
                        year="2022"
                        desc="Dipercayai untuk menjadi pemandu acara dalam rangka gelar karya p5"
                     />
                    <Card 
                        image="pSanggaTerbaik.jpeg"
                        title="Sangga Terbaik"
                        year="2022"
                        desc="Berhasil memimpin sangga pramuka dan meraih Sangga Terbaik Putra Bantara"
                     />
                    <Card 
                        image="pKefotoGoogle.jpeg"
                        title="Kefoto Google Maps Street View"
                        year="2022"
                        desc="Kalian Pernah bertemu mobil google maps?! kayak gw dong pernah pake gaya lagi ><"
                     />
                    <Card 
                        image="pPaskibraka.jpeg"
                        title="Paskibraka kab. Jepara 2023"
                        year="2023"
                        desc="Menjadi Anggota Paskibraka Kab. Jepara Tahun 2023 Pasukan 17"
                     />
                    <Card 
                        image="pLombaLKSKab.jpeg"
                        title="Lomba LKS It Software Solusion For Bussiness"
                        year="2023"
                        desc="Juara 1 LKS Tingkat Kabupaten Jepara di mata lomba IT Solusion For Bussiness"
                     />
                    <Card 
                        image="pLombaLKSProv.jpeg"
                        title="Lomba LKS It Software Solusion For Bussiness"
                        year="2023"
                        desc="Mewakili Kabupaten Jepara dalam lomba LKS IT Software Solusion For Bussiness tingkat Provinsi"
                     />
                    <Card 
                        image="pDutaOsis.jpeg"
                        title="Duta Osis 5 Anti"
                        year="2023"
                        desc="Terpilih mewakili delegasi dari SMK N 1 Bangsri untuk menjadi brand ambasador Duta Osis 5 Anti"
                     />
                </section>
            </main>
        </>

    )
}