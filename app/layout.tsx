import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BurtcherWay - This Could Be A Most Unusual Day',
  description: 'Portfolio showcasing projects and collaborations',
}

// "lets have fun" in morse code, one word per stripe colour
const morseGroup = '.-.. . - ...     .... .- ...- .     ..-. ..- -.'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <div className="site-stripe" aria-hidden="true">
          <div className="site-stripe-bands">
            <span />
            <span />
            <span />
          </div>
          <div className="site-stripe-morse">
            <div className="site-stripe-morse-track">
              <span>{morseGroup.repeat(6)}</span>
              <span>{morseGroup.repeat(6)}</span>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
