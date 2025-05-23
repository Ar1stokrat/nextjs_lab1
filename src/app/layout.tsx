import './globals.scss'
import type {Metadata} from 'next'
import { Inter } from 'next/font/google'

const inter = Inter ({subsets: ['latin']})

export const metadata: Metadata = {
title: 'Lab1 App',
description: 'Next.js App Dmytro Balan VT-22-1'
}

export default function RootLayout({
  children,
}:{
    children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
