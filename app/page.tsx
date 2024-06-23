'use client'
import NavbarLayoutView from "@/components/navbar/NavbarLayout/NavbarLayout";
import Landing from "./components/Landing";
import Skill from "./components/Skill";
export default function Home() {
  
  return (
    <>
      <NavbarLayoutView >
        <Landing />
        <Skill />
      </NavbarLayoutView>
    </>
  )
}