import './globals.css'
import PageStructure from '@/components/pageStructure'

export default function RootLayout({children}: {children: React.ReactNode}) {
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
        <PageStructure>
          {children}
        </PageStructure>
    </html>
  )
}