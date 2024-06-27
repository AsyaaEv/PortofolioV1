'use client'
import { useSession } from "next-auth/react"

export default function DashboardLanding() {
    const {data: session } = useSession()

    return (
        <main className="w-full flex flex-col items-center pb-4 border-b-2 dark:border-white/15 dark:text-white">
            <header className="w-full flex justify-between items-center">
                <div>
                    <h1 className="font-semibold text-2xl flex gap-2 items-center justify-center">Selamat Datang Baginda, {session?.user?.name} <span className="animate-bounce flex text-2xl">🙌</span></h1>
                </div>
            </header>
        </main>
    )
}

