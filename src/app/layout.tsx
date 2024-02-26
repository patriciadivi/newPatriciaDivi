import { ReactNode, Suspense } from 'react'
import { Inter } from 'next/font/google'
import { Providers } from './Providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Patricia Divi',
  description: 'Portfólio Pessoal',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  
  return (
      <html lang="pt-BR">
        <body suppressHydrationWarning={true} className={`${inter.className} `}>
          <Suspense>
            <Providers>
              {children}
            </Providers>
          </Suspense>
        </body>
      </html>
  )
}
