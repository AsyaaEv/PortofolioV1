'use client'
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { signIn } from "next-auth/react"
import { Loader2 } from "lucide-react"
import Link from "next/link"


interface LoginFormProps {
    email: string,
    password: string
}

export default function Login() {
    const SignInSchema = Yup.object().shape({
        email: Yup.string().email('Email tidak valid').required('Email harus diisi'),
        password: Yup.string().required('Password harus diisi'),
    })
    const [isLoading, setIsLoading] = React.useState(false)
    const formik = useFormik<LoginFormProps>({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: SignInSchema,
        onSubmit: async (values) => {
            setIsLoading(true)
            const { email, password } = values
            const result = await signIn('credentials', {
                email: email,
                password: password,
                redirect: true,
                callbackUrl: '/dashboard'
            })
            setIsLoading(false)
        }
    })
    return (
        <div className="w-full flex justify-center items-center h-screen">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Masukan data untuk login ke dashboard ya!</CardDescription>
                </CardHeader>
                <form onSubmit={formik.handleSubmit}>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input type="email" id="email" placeholder="example@gmail.com"
                                    onChange={formik.handleChange}
                                    value={formik.values.email} />
                                {formik.errors.email && formik.touched.email ? <div className="text-sm text-red-500">{formik.errors.email}</div> : null}
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Password</Label>
                                <Input type="password" id="password" placeholder="*******"
                                    onChange={formik.handleChange}
                                    value={formik.values.password} />
                                {formik.errors.password && formik.touched.password ? <div className="text-sm text-red-500">{formik.errors.password}</div> : null}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Link href='/'>
                            <Button variant="outline" type="button">Batal</Button>
                        </Link>
                        <Button type="submit" disabled={isLoading}>{isLoading ? <div className="flex gap-2 items-center justify-center"><Loader2 className="animate-spin h-4 w-4" />loading...</div> : <div>Login</div>}</Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
