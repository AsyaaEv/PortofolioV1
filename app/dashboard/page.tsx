'use client'
import { SessionProvider } from "next-auth/react";
import DashboardLanding from "./components/DashboardLanding";
import NavbarLayoutView from "@/components/navbar/NavbarLayout/NavbarLayout";

export default function Dashboard() {


    return (
        <>
            <NavbarLayoutView>
                <DashboardLanding />
            </NavbarLayoutView>
        </>
    )
}