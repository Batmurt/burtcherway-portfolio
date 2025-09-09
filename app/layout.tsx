import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BurtcherWay - This Could Be A Most Unusual Day',
  description: 'Portfolio showcasing projects and collaborations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}