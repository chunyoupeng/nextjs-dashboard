import { Inter, Lusitana } from 'next/font/google';
export const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-lusitana',
})

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-lusitana',
})