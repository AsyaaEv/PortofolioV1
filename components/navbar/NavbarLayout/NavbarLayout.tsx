import React from "react";
import Navbar from "../NavbarComponent";
import { useDarkMode } from "@/components/darkmode/DarkModeContext";
import { SessionProvider, useSession } from "next-auth/react";
import { Loader2 } from "lucide-react";

export default function NavbarLayoutView({
  children,
}: {
  children: React.ReactNode
}) {
  const { isDarkMode } = useDarkMode();
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="w-full h-screen flex justify-center items-center ">
      <Loader2 size={50} className="animate-spin"/>
    </div> 
  }
  return (
    <div className="w-full h-screen border-black transition-all duration-500 ease-in-out lg:flex lg:justify-center dark:bg-black/95">
      <div className={`flex w-full  md:justify-center transition-all duration-500 ease-in-out lg:w-[70rem] lg:transition-all lg:duration-500 lg:ease-in-out`}>
        <Navbar />
        <div className="h-auto pt-[7rem] md:w-full container transition-all duration-500 ease-in-out pb-8 overflow-auto">
            {children}
        </div>
      </div>
    </div>
  )
}