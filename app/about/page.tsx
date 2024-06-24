"use client"
import NavbarLayoutView from "@/components/navbar/NavbarLayout/NavbarLayout"
import Bio from "./components/Bio"
import Minat from "./components/Minat"

export default function About() {
    return (
        <>
            <NavbarLayoutView>
                <Bio />
                <Minat />
            </NavbarLayoutView>
        </>
    )
}