import ToolTipSkills from "@/app/about/utils/ToolTipSkills";
import { ArrowBendUpRight } from "@phosphor-icons/react"
import Image from "next/image"

interface CardProjectProps{
    image : string,
    // link : string,
    title : string,
    desc : string,
    // techno : string
}
export default function CardProject({image, title, desc} : CardProjectProps) {
    return (
        <>
            <div className="w-full rounded-[10px] border-2 h-[22rem] flex flex-col group overflow-hidden hover:scale-[1.01] transition-all dark:border-0 dark:bg-white/15">
                <div className="w-full h-[60%] overflow-hidden">
                    <div className="w-full h-[60%] bg-black/50 absolute z-50 hidden group-hover:flex justify-center items-center">
                        <h1 className="text-white font-semibold flex justify-center items-center gap-2 text-lg">Liat Projek <ArrowBendUpRight weight="bold" /></h1>
                    </div>
                    <Image src={`/projects/${image} `} width={1080} height={1080} alt="" loading="lazy" className="object-cover w-full h-full rounded-tl-[10px] rounded-tr-[10px] pointer-events-none -z-10" />
                </div>
                <div className="w-full h-auto flex-col px-4 dark:text-white">
                    <div className="w-full mt-2">
                        <h1 className="text-lg font-semibold">{title}</h1>
                    </div>
                    <div className="w-full mt-2">
                        <h1 className="text-sm">{desc}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}