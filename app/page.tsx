'use client'
import NavbarLayoutView from "@/components/navbar/NavbarLayout/NavbarLayout";
import Landing from "./components/Landing";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
export default function Home() {
  
  return (
    <>
      <NavbarLayoutView>
        <Landing />
        <Skill />
        <Contact />
      </NavbarLayoutView>
    </>
  )
}