import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Bejay O. Catayong | Portfolio',
  description:
    'IT Student & Future Full-Stack Developer. Resourceful BS Information Technology student with hands-on experience in digital platforms.',
  openGraph: {
    title: 'Bejay O. Catayong | Portfolio',
    description: 'IT Student & Future Full-Stack Developer.',
    url: 'https://catayongportfolio.vercel.app',
    siteName: 'Bejay O. Catayong Portfolio',
    images: [
      {
        url: '/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Bejay O. Catayong',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bejay O. Catayong | Portfolio',
    description: 'IT Student & Future Full-Stack Developer.',
    images: ['/me.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
