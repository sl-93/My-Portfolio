import type { Metadata } from 'next'
import { Outfit, Ovo } from 'next/font/google'
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })
const ovo = Ovo({ subsets: ['latin'], weight: ["400"] })
export const metadata: Metadata = {
  title: 'Saeed Lotfi',
  description: 'My CV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>{children}</body>
    </html>
  )
}
