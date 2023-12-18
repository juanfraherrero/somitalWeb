import './globals.css'
import { quicksand } from './fonts'

import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Somital Aventuras',
  description: 'Empresa de turismo en mar del plata. Especializada en trekking, senderismo, mountain bike (mtb), y actividades al aire libre.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={quicksand.className}> 
        {children}
      </body>
    </html>
  )
}
