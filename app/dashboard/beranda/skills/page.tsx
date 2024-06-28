'use client'
import NavbarLayoutView from "@/components/navbar/NavbarLayout/NavbarLayout";
import SkillsSetting from "./components/SkillsSetting";
import { Dialog } from "@/components/ui/dialog";

export default function DashboardSkills() {
    return (
        <>
            <Dialog>
                <NavbarLayoutView >
                    <SkillsSetting />
                </NavbarLayoutView>
            </Dialog>
        </>
    )
}