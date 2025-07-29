import { Inter, Roboto, Open_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto'
})
const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: 'Feranmi Emmanuel - Frontend Developer',
  description: 'Frontend developer and technical writer specializing in React, TypeScript, and modern web technologies',
  keywords: ['frontend developer', 'react', 'typescript', 'web development', 'technical writer'],
  authors: [{ name: 'Feranmi Emmanuel' }],
  openGraph: {
    title: 'Feranmi Emmanuel - Frontend Developer',
    description: 'Frontend developer and technical writer specializing in React, TypeScript, and modern web technologies',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}