import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { IdentificationCard} from "@phosphor-icons/react"
import React from "react"

import AsyaBatman from '../../../public/AsyaBatman.jpeg'
import AsyaTK from '../../../public/AsyaTK.jpeg'
import AsyaPaskib from '../../../public/AsyaPaskib.jpeg'
import Image from "next/image"

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
                            {[AsyaBatman, AsyaTK, AsyaPaskib].map((image, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <Image src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-full pointer-events-none" />
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
                
            </main>
        </>
    )
}