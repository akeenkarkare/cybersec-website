import type { Metadata } from 'next'
import './globals.css'
import MatrixRain from '@/components/MatrixRain'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import PersistentTerminal from '@/components/PersistentTerminal'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'SBU CyberSec Club | Stony Brook University',
  description: 'Official website of Stony Brook University Cybersecurity Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">
        <ScrollToTop />
        <MatrixRain />
        <div className="scanline"></div>
        <div className="relative z-10" style={{ paddingBottom: '320px' }}>
          <Navigation />
          <main className="px-4 md:px-6 lg:px-8 py-8">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
        </div>
        <PersistentTerminal />
      </body>
    </html>
  )
}