'use client'

import './globals.css'
import { useState } from 'react'
import MatrixRain from '@/components/MatrixRain'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import PersistentTerminal from '@/components/PersistentTerminal'
import PageTransition from '@/components/PageTransition'

export default function RootLayout({children}: {children: React.ReactNode}) {
  const [showTerminal, setShowTerminal] = useState(self.innerHeight * 0.8 < self.innerWidth)
  const [isOpen, setIsOpen] = useState(true)
  const [height, setHeight] = useState(300) // Default height
  self.onresize = () => setShowTerminal(window.innerHeight * 0.8 < window.innerWidth)

  return (
    <html lang="en">
      <head>
        {/* todo: twitter and opengraph */}
        <title>SBU CyberSec Club | Stony Brook University</title>
        <meta name="description" content="Official website of Stony Brook University Cybersecurity Club" />
        <meta name="keywords" content="Stony Brook,Cybersecurity,Club" />
        <meta name="author" content='Akeen' />
        <meta name="author" content='Felix' />
      </head>
      <body className="min-h-screen overflow-x-hidden">
        <ScrollToTop />
        <MatrixRain />
        <div className="relative z-10" style={{ paddingBottom: `${showTerminal ? (isOpen ? height + 5 : 40) : 10}px`}}>
          <Navigation />
          <main className="px-4 md:px-6 lg:px-8 py-8">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
        {showTerminal && <PersistentTerminal isOpen={isOpen} setIsOpen={setIsOpen} height={height} setHeight={setHeight} />}
      </body>
    </html>
  )
}