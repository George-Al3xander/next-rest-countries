import type { Metadata } from 'next'
import {Nunito_Sans } from 'next/font/google'
import './globals.css'
import Container from '@/components/fundamental/Container'
import { ModeContextProvider } from '@/hooks/useModeContext'
import Header from '@/components/fundamental/Header'



const inter = Nunito_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Where in the world?',
  description: 'Get information about countries!',
  icons: {
    icon: "/images/favicon.ico"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>        
        <ModeContextProvider>
            <Header />
            <Container>
              {children}
              </Container>
        </ModeContextProvider>       
        </body>
    </html>
  )
}
