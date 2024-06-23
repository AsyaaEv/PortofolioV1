import React from "react";
import Navbar from "../NavbarComponent";
import { useDarkMode } from "@/components/darkmode/DarkModeContext";

export default function NavbarLayoutView({
    children,
}: {
    children : React.ReactNode
}) {
    const { isDarkMode } = useDarkMode();
    return (
        <div className="w-full h-auto border-black transition-all duration-500 ease-in-out lg:flex lg:justify-center dark:bg-black/95">
        <div className={`flex w-full  md:justify-center transition-all duration-500 ease-in-out lg:w-[70rem] lg:transition-all lg:duration-500 lg:ease-in-out`}>
          <Navbar />
          <div className="h-screen pt-[7rem] md:w-full container transition-all duration-500 ease-in-out">
            {children}
          </div>
        </div>
      </div>
    )
}