"use client"
import NavbarLayoutView from "@/components/navbar/NavbarLayout/NavbarLayout"
import Bio from "./components/Bio"
import Minat from "./components/Minat"
import Prestasi from "./components/Prestasi"

export default function About() {
    return (
        <>
            <NavbarLayoutView>
                <Bio />
                <Minat />
                {/* <Prestasi /> */}
            </NavbarLayoutView>
        </>
    )
}