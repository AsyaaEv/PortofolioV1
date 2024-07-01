'use server'
import { access, mkdir, writeFile } from 'fs';
import { z } from 'zod'
import path from 'path';
import bcrypy from 'bcrypt'

const UploadSchema = z.object({
    bahasa: z.string().min(2, {message: 'Bahasa min 2 Karakter'}),
    logo: z
        .string() // Mengubah validasi menjadi tipe string
        .refine((file) => file.length > 0, { message: 'Logo wajib diisi' }) // Memeriksa panjang string
        .refine((file) => file.length === 0 || isValidImageType(file), { message: 'Logo harus type gambar' }) // Memeriksa tipe file
        .refine((file) => file.length < 1000000, { message: 'Logo maksimal 1MB' }) // Memeriksa ukuran file
})

function isValidImageType(file: string): boolean {
    // Check if the Base64 string represents an image
    const supportedImageTypes = ['jpeg', 'png', 'jpg', 'webp', 'svg']; // Tipe file gambar yang didukung
    const base64Regex = /^data:image\/(jpeg|png|jpg|webp|svg);base64,/; // Regex untuk memeriksa prefix Base64

    const match = file.match(base64Regex);
    if (match) {
        const fileType = match[1];
        return supportedImageTypes.includes(fileType);
    }

    return false;
}

export const upload = async (prevState: unknown, formData: FormData) => {
    
    const ValidatedFields = UploadSchema.safeParse(
        Object.fromEntries(formData.entries())
    )

    if(!ValidatedFields.success){
        return {
            error: ValidatedFields.error.flatten().fieldErrors
        }
    }

    const { bahasa, logo } = ValidatedFields.data;

    // Memisahkan nama file dan extensi
    const logoParts = logo.split(';base64,');
    const base64String = logoParts[1]; // Bagian base64 dari string
    const extension = logoParts[0].split('/')[1]; // Ekstensi file

    const date = new Date();
    const dateString = date.toISOString();
    const dateHash = await bcrypy.hash(dateString, 12);
    const fileName = `${dateHash}.${extension}`;

    console.log(dateHash);
    

    const folderPath = path.join(process.cwd(), 'public', 'assets');
    const filePath = path.join(folderPath, fileName); 


    // Simpan file logo ke direktori 'public/assets'
    await writeFile(filePath, logo, 'base64', (err) => {
        if (err) throw err;
        console.log('Logo berhasil disimpan.');
    });
}
