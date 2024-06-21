'use client'
import { useDarkMode } from "@/components/darkmode/DarkModeContext"
import Navbar from "@/components/navbar"
export default function Home() {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div className={`${isDarkMode ? 'dark transition duration-500 delay-500' : ''} flex w-full`}>
        <Navbar />
        <div className="dark:bg-black h-[100rem] pt-[5rem] container">
          <h1>loli</h1>
        </div>
      </div>
    </>
  )
}