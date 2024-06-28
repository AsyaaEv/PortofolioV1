'use server'
import { z } from 'zod'

const UploadSchema = z.object({
    bahasa: z.string().min(2),
    logo: z
        .instanceof(File)
        .refine((file) => file.size > 0, { message: 'Logo wajib diisi' })
        .refine((file) => file.type.startsWith("image/"), { message: 'Logo harus type gambar' })
        .refine((file) => file.size < 1000000, { message: 'Logo maksimal 1MB' })
})
export const upload = async (prevState: unknown, formData: FormData) => {
    console.log(formData);
    
    const ValidatedFields = UploadSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if(!ValidatedFields.success){
        return {
            error: ValidatedFields.error.flatten().fieldErrors
        }
    }
}
