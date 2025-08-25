import localFont from 'next/font/local'
import { Raleway, Chivo } from 'next/font/google'

// tipografía local
export const agrandir = localFont({
  src: [
    {
      path: '../../public/fonts/Agrandir-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Agrandir-TextBold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-agrandir',
})

// alternativa 1
export const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})

// alternativa 2
export const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
})