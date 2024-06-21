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
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quam ducimus commodi, quis numquam itaque voluptates nihil doloremque eligendi asperiores enim in excepturi magnam sapiente vero nisi voluptate nostrum temporibus ipsam dolorem nobis, consequuntur illum neque! Similique vel necessitatibus provident a consequatur repellendus, doloribus maxime corporis corrupti natus. Fuga, cum.</h1>
        </div>
      </div>
    </>
  )
}