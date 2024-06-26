import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"

interface ToolTipSkillsProps {
    image: string,
    title: string
}
export default function ToolTipSkills({ image, title }: ToolTipSkillsProps) {
    return (
        <>
            <TooltipProvider>
                <Tooltip delayDuration={10}>
                    <TooltipTrigger>
                        <Image src={`/assets/skills/${image}`} width={35} height={35} alt="" loading="lazy" />
                    </TooltipTrigger>
                    <TooltipContent >
                        <p>{title}</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </>
    )
}