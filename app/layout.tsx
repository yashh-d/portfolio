import React from 'react'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import Navigation from './components/Navigation'

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Personal portfolio website featuring a beautiful sunrise video',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
} 