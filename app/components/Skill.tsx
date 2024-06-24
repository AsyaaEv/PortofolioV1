import { Code } from "@phosphor-icons/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { SiAxios, SiBootstrap, SiCsharp, SiCss3, SiGithub, SiHtml5, SiJavascript, SiKotlin, SiLaravel, SiMysql, SiNextdotjs, SiPhosphoricons, SiPhp, SiPostgresql, SiPrisma, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
export default function Skill() {
    return (
        <>
            <main className="w-full flex flex-col mt-4 pb-8 border-b-2 dark:border-white/15 dark:text-white">
                <header className="w-full flex flex-col gap-2 leading-3">
                    <div className="w-full flex gap-2 items-center font-semibold text-lg">
                        <Code weight="bold" />
                        <h1>Kemampuan</h1>
                    </div>
                    <div className="text-zinc-600 dark:text-zinc-400">
                        <h1>Kemampuan saya dalam koding.</h1>
                    </div>
                </header>
                <section className="w-full mt-8 flex justify-center items-center gap-6 flex-wrap md:gap-x-16">
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiJavascript className="text-yellow-500 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>JavaScript</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiHtml5 className="text-orange-500 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>HTML</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiCss3 className="text-blue-500 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>CSS</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiPhp className="text-[#8993be] text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>PHP</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiReact className="text-blue-400 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>ReactJS</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiLaravel className="text-red-500 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>Laravel</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiMysql className="text-blue-500 text-4xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>MySQL</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiTailwindcss className="text-[#06b6d4] text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>TailwindCSS</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiBootstrap className="text-purple-500 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>Bootstrap</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiGithub className="text-black text-3xl dark:text-white"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>Github</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiPhosphoricons className="text-green-400 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>PhosphorIcons</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiNextdotjs className="text-black text-3xl dark:text-white"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>NextJS</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiKotlin className="text-purple-500 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>Kotlin</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiCsharp className="text-purple-600 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>C#</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiAxios className="text-black text-3xl dark:text-white"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>Axios</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiPostgresql className="text-blue-500 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>PostgreSQL</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger>
                                <SiPrisma className="text-blue-900 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>Prisma</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                        <Tooltip delayDuration={10}>
                            <TooltipTrigger >
                                <SiTypescript className="text-blue-500 text-3xl"/>
                            </TooltipTrigger>
                            <TooltipContent >
                                <p>TypeScript</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </section>
            </main>
        </>
    )
}