import Image from "next/image"

interface CardMinatProps {
    image: string,
    title: string,
    periode: string
}
export default function CardMinat({ image, title, periode }: CardMinatProps) {
    return (
        <>
            <div className="w-full p-4 border-2 rounded-[10px] flex gap-5 dark:border-0 dark:bg-white/15">
                <div className="">
                    <Image src={`/minat/${image}`} width={60} alt="" height={60} className="dark:brightness-75 pointer-events-none"></Image>
                </div>
                <div className="w-full flex justify-center flex-col">
                    <h1>{title}</h1>
                    <h1 className="text-black/50 dark:text-zinc-400">{periode}</h1>
                </div>
            </div>
        </>
    )
}