import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { GithubLogo, IdentificationCard, InstagramLogo, LinkedinLogo, TiktokLogo} from "@phosphor-icons/react"
import React from "react"

import AsyaBatman from '../../../public/AsyaBatman.jpeg'
import AsyaTK from '../../../public/AsyaTK.jpeg'
import AsyaPaskib from '../../../public/AsyaPaskib.jpeg'
import AsyaRPL from '../../../public/AsyaRPL.jpeg'
import Image from "next/image"
import Link from "next/link"

export default function Bio() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
      )

    return (
        <>
            <main className="w-full flex flex-col border-b-2 pb-4 dark:text-white dark:border-white/15">
                <header className="w-full">
                    <div className="w-full flex gap-2 items-center text-lg font-semibold">
                        <IdentificationCard weight="bold" />
                        <h1>Tentang Saya</h1>
                    </div>
                    <div className="">
                        <h1 className="text-zinc-600 dark:text-zinc-400">Kepo sama saya?, kuy stalking kebawah!!</h1>
                    </div>
                </header>
                <section className="w-full flex justify-center items-center mt-8">
                    <Carousel
                        plugins={[plugin.current]}
                        className="w-full max-w-xs"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}>
                        <CarouselContent>
                            {[AsyaBatman, AsyaTK, AsyaRPL, AsyaPaskib].map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <Image src={image} alt={`Image ${index + 1}`} loading="lazy" className="object-cover w-full h-full pointer-events-none" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </section>
                <div className="w-full mt-4">
                    <h1 className="leading-relaxed">Hai, Perkenalkan saya <span className="font-semibold">Anggun Rasya Evaldo</span> orang-orang biasanya manggil saya <span className="font-semibold">Rasya</span> jadi panggil aku Rasya ya!,Saya lahir di Jepara pada tanggal 12 Mei 2007 dan merupakan anak tengah dari 3 bersaudara.</h1>
                </div>
                <div className="w-full mt-4">
                    <h1 className="leading-relaxed">Dari kecil saya memiliki hobi yang tak pasti sih, pengen jadi pilot lah, tentara lah, dokter lah dan masih banyak lagi. Akan tetapi hobi saya saat ini adalah <span className="font-semibold">Ngoding</span>, dan cita-cita saya sudah pasti pengen jadi <span className="font-semibold">Programmer</span></h1>
                </div>
                <footer className="mt-4 flex flex-wrap gap-2 items-center w-full md:flex md:gap-2">
                    <Link href='https://instagram.com/syaa.ev' className="w-fit bg-black/10 transition-colors dark:bg-white/15 hover:cursor-pointer hover:bg-gradient-to-tr hover:from-[#FFDC80] hover:via-[#E1306C] hover:to-[#405DE6] rounded-[10px] flex gap-2 items-center justify-center p-2">
                        <InstagramLogo size={20}/>
                        <h1>@syaa.ev</h1>
                    </Link>
                    <Link href='https://www.tiktok.com/@asyaa.ev?_t=8nVefiIvP2G&_r=1' className="w-fit bg-black/10 transition-colors dark:bg-white/15 hover:cursor-pointer hover:bg-gradient-to-tr hover:from-[#00f2ea] hover:to-[#ff0050] rounded-[10px] flex gap-2 items-center justify-center p-2">
                        <TiktokLogo size={20}/>
                        <h1>@asyaa.ev</h1>
                    </Link>
                    <Link href='https://github.com/AsyaaEv' className="w-fit bg-black/10 transition-colors dark:bg-white/15 hover:cursor-pointer group hover:bg-black hover:text-white dark:hover:bg-white rounded-[10px] flex gap-2 items-center justify-center p-2">
                        <GithubLogo size={20} className="dark:group-hover:text-black"/>
                        <h1 className="dark:group-hover:text-black">AsyaaEv</h1>
                    </Link >
                    <Link href='https://www.linkedin.com/in/anggun-rasya-evaldo-514301311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' className="w-fit bg-black/10 transition-colors dark:bg-white/15 hover:cursor-pointer group hover:bg-[#0a66c2] hover:text-white dark:hover:bg-[#0a66c2] rounded-[10px] flex gap-2 items-center justify-center p-2">
                        <LinkedinLogo size={20} className="dark:group-hover:text-white"/>
                        <h1 className="dark:group-hover:text-white">Anggun Rasya Evaldo</h1>
                    </Link >
                </footer>
            </main>
        </>
    )
}