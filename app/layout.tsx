import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'
import { TooltipProvider } from '../components/ui/tooltip'
import { Toaster } from '../components/ui/toaster'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahmad Hassan - Full Stack Developer',
  description: 'Portfolio of Ahmad Hassan, a passionate full stack developer with 3+ years of experience in React, Node.js, and modern web technologies.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'JavaScript', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Ahmad Hassan' }],
  openGraph: {
    title: 'Ahmad Hassan - Full Stack Developer',
    description: 'Portfolio of Ahmad Hassan, a passionate full stack developer specializing in modern web technologies.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}