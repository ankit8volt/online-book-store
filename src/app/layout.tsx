import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BookBazaar - India\'s largest online bookstore',
  description: 'India\'s largest online bookstore with over 10 million titles across multiple languages and genres.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 