import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Menu, SunMoon } from "lucide-react"
export default function Navbar() {
    return (
        <>
            <div className="w-full h-[4rem] border-b-2 flex justify-between items-center container">
                <div className="w-full border-2 flex gap-2 items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className="font-bold">Anggun Rasya E</h1>
                </div>
                <div className="w-full border-2 flex items-center justify-end gap-4">
                    <SunMoon strokeWidth={1} fill="1" className="size-7"/>
                    <Menu className="size-8"/>
                </div>
            </div>
        </>
    )
}