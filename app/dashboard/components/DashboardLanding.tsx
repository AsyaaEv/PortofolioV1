'use client'
import { useSession } from "next-auth/react"

export default function DashboardLanding() {
    const {data: session } = useSession()
    const username = session?.user?.name?.split(" ")[1]

    return (
        <main className="w-full flex flex-col items-center pb-4 border-b-2 dark:border-white/15 dark:text-white">
            <header className="w-full flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-xl md:text-2xl flex gap-2 items-center justify-center">Selamat Datang Baginda, {username}<span className="animate-bounce flex text-2xl">🙌</span></h1>
                    <h1 className="text-zinc-600">Dashboard main overview/audit log</h1>
                </div>
            </header>
        </main>
    )
}

