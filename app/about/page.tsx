"use client"
import NavbarLayoutView from "@/components/navbar/NavbarLayout/NavbarLayout"
import Bio from "./components/Bio"
import Minat from "./components/Minat"
import Prestasi from "./components/Prestasi"
import Pendidikan from "./components/Pendidikan"

export default function About() {
    return (
        <>
            <NavbarLayoutView>
                <Bio />
                <Pendidikan />
                <Minat />
                <Prestasi />
            </NavbarLayoutView>
        </>
    )
}