'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const Navigation = () => {
  const pathname = usePathname()
  const [glitchText, setGlitchText] = useState('SBU_CYBERSEC')
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?'
      const originalText = 'SBU_CYBERSEC'
      let newText = ''
      
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() > 0.9) {
          newText += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          newText += originalText[i]
        }
      }
      
      setGlitchText(newText)
      
      setTimeout(() => {
        setGlitchText(originalText)
      }, 100)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/about', label: 'WHO_TF' },
    { href: '/events', label: 'EVENTS' },
    { href: '/resources', label: 'LEARN' },
    { href: '/contact', label: 'SLIDE_IN' },
  ]

  return (
    <nav className="relative bg-black/95 backdrop-blur-md sticky top-0 z-50 overflow-hidden border-b border-terminal-cyan/20">
      {/* Animated scan line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-terminal-cyan to-transparent animate-pulse"></div>
      
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 animate-pulse" style={{
          background: 'linear-gradient(to right, rgba(168, 85, 247, 0.05), transparent, rgba(0, 255, 255, 0.05))'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="relative group flex items-center space-x-2">
            {/* Logo with cyber effect */}
            <div className="relative">
              <div className="absolute inset-0 blur-xl transition-all" style={{
                backgroundColor: 'rgba(0, 255, 255, 0.2)'
              }}></div>
              <div className="relative text-2xl font-bold flex items-center">
                <span style={{ color: '#00ffff' }}>&lt;</span>
                <span className="px-1" style={{
                  background: 'linear-gradient(to right, #00ffff, #00ff00, #ffff00)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {glitchText}
                </span>
                <span style={{ color: '#00ffff' }}>/&gt;</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-terminal-green/60 text-xs font-mono">root@seawolf</span>
              <span className="text-terminal-yellow text-xs animate-pulse ml-1">_</span>
            </div>
          </Link>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative group"
              >
                {/* Hover glow effect */}
                {(pathname === link.href || hoveredLink === link.href) && (
                  <div className="absolute inset-0 blur-md rounded" style={{
                    backgroundColor: 'rgba(0, 255, 255, 0.1)'
                  }}></div>
                )}
                
                {/* Nav item */}
                <div className="relative px-3 py-2 transition-all duration-300">
                  {pathname === link.href ? (
                    <div className="flex items-center space-x-1">
                      <span style={{ color: '#00ffff', fontSize: '12px' }}>[</span>
                      <span style={{ 
                        color: '#00ffff', 
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontWeight: 'bold'
                      }}>
                        {link.label}
                      </span>
                      <span style={{ color: '#00ffff', fontSize: '12px' }}>]</span>
                      <span className="animate-pulse ml-1" style={{ color: '#ffff00' }}>●</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-1 group">
                      <span className="transition-colors" style={{ 
                        color: hoveredLink === link.href ? 'rgba(0, 255, 255, 0.6)' : 'rgba(0, 255, 0, 0.4)',
                        fontSize: '12px'
                      }}>
                        ./
                      </span>
                      <span className="transition-all duration-200" style={{ 
                        color: hoveredLink === link.href ? '#00ffff' : 'rgba(0, 255, 0, 0.7)',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        transform: hoveredLink === link.href ? 'translateX(4px)' : 'translateX(0)',
                        display: 'inline-block'
                      }}>
                        {link.label}
                      </span>
                    </div>
                  )}
                  
                  {/* Bottom border effect */}
                  <div className="absolute bottom-0 left-0 right-0 transition-all duration-300" style={{
                    height: '2px',
                    background: pathname === link.href 
                      ? 'linear-gradient(to right, transparent, #00ffff, transparent)'
                      : hoveredLink === link.href ? 'rgba(0, 255, 255, 0.5)' : 'transparent'
                  }}></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation