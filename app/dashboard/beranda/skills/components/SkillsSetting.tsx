'use client'
import { Code, UploadSimple } from "@phosphor-icons/react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useState } from "react";
import { upload } from "@/lib/upload";
import { useFormState } from "react-dom";

interface addSkillProps {
    bahasa: string,
    logo: string
}
export default function SkillsSetting() {
    const invoices = [
        {
            invoice: "1",
            paymentStatus: "a",
            totalAmount: "",
            paymentMethod: "Javascript",
        }
    ]

    const [state, formAction] = useFormState(upload, null)

    const Formik = useFormik<addSkillProps>({
        initialValues: {
            bahasa: "",
            logo: '',
        },
        onSubmit: async (values) => {
            const formData = new FormData()
            formData.append('bahasa', values.bahasa)
            formData.append('logo', values.logo)
            await formAction(formData)
        }
    })

    const [logoPreview, setLogoPreview] = useState('');

    const handleLogoChange = (e: any) => {
        let reader = new FileReader()
        reader.onload = () => {
            if(reader.readyState === 2){
                Formik.setFieldValue('logo', reader.result)
                setLogoPreview(reader.result as string)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    return (
        <>
            <main className="w-full flex flex-col items-center pb-4 border-b-2 dark:border-white/15 dark:text-white">
                <header className="w-full pb-2 border-b-2 dark:border-white/15 flex justify-between items-center">
                    <div className="w-fit flex flex-col">
                        <div className=" text-lg font-semibold flex gap-2 items-center">
                            <Code weight="bold" />
                            <h1>Dashboard Skills</h1>
                        </div>
                        <h1 className="text-zinc-600 dark:text-zinc-400">Perubahan/Penambahan skill ada di sini</h1>
                    </div>
                    <DialogTrigger asChild>
                        <div className="w-fit  flex gap-2 items-center justify-center mr-4 bg-black/15 p-2 rounded-[10px] md:outline-dashed md:mr-0 md:w-fit hover:cursor-pointer">
                            <UploadSimple size={25} />
                            <h1 className="hidden md:flex w-full">Tambah Skill</h1>
                        </div>
                    </DialogTrigger>
                </header>
                <section className="w-full flex mt-4">
                    <Table>
                        <TableCaption>List keseluruhan skill yang anda kuasai.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Gambar</TableHead>
                                <TableHead>Bahasa</TableHead>
                                <TableHead className="text-right">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.map((invoice) => (
                                <TableRow key={invoice.invoice}>
                                    <TableCell className="font-medium">{invoice.invoice}</TableCell>
                                    <TableCell>{invoice.paymentStatus}</TableCell>
                                    <TableCell>{invoice.paymentMethod}</TableCell>
                                    <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>
            </main>


            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Tambah Skill</DialogTitle>
                    <DialogDescription>
                        silakan isi data dibawah ini untuk menambah skill.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={Formik.handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Bahasa</Label>
                            <Input type="text" id="bahasa" placeholder="Bahasa" onChange={Formik.handleChange} value={Formik.values.bahasa} />
                            {state?.error?.bahasa ? <div className="text-sm text-red-500">{state?.error?.bahasa}</div> : null}
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Logo</Label>
                            <Input id="logo" type="file" onChange={(e) => { Formik.handleChange(e); handleLogoChange(e); }} />
                            {state?.error?.logo ? <div className="text-sm text-red-500">{state?.error?.logo}</div> : null}
                            {logoPreview && <img src={logoPreview} alt="Preview" className="mt-2 size-20 object-cover" />}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Submit</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </>
    )
}