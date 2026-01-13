import './globals.css'
import PageStructure from '@/components/pageStructure'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>SBU CyberSec Club | Stony Brook University</title>
		<meta name="og:title" content='SBU CyberSec Club'/>
        <meta name="description" content="Official website of Stony Brook University Cybersecurity Club" />
		<meta name='og:type' content='website'/>
		<meta name='og:image' content='/favicon.ico'/>
        <meta name="keywords" content="Stony Brook,Cybersecurity,Club" />
        <meta name="author" content='Akeen' />
        <meta name="author" content='Felix' />
		<meta name='og:url' content='https://www.sbucyber.org'/>
		<meta name='og:description' content='This is the official website of Stony Brook University Cybersecurity Club. We provide an educational space for anyone interested in cybersecurity, hosting weekly meetings during the semester.'/>
      </head>
	  	<body className="min-h-screen overflow-x-hidden">
        <PageStructure>
          {children}
        </PageStructure>
		  </body>
    </html>
  )
}