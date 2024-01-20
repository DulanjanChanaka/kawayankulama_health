import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kawayankulama Health Division',
  description: 'නිරෝගිමත් මව්වරුන් හා දූ දරු පිරිසක් බිහිකිරීම ',
  icons:{
    icon:['/favicon.ico'],
    shortcut:['/apple-touch-icon.png']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
