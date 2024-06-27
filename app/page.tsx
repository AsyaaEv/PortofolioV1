'use client'
import NavbarLayoutView from "@/components/navbar/NavbarLayout/NavbarLayout";
import Landing from "./components/Landing";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { middleware } from "../middleware";
export default function Home() {
  const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight + 50) {
                router.push('/about')
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [router]);
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