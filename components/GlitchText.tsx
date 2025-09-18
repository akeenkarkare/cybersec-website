'use client'

import { useState, useEffect } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [glitchedText, setGlitchedText] = useState(text)
  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?0123456789'

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      let newText = ''
      for (let i = 0; i < text.length; i++) {
        if (Math.random() > 0.95) {
          newText += glitchChars[Math.floor(Math.random() * glitchChars.length)]
        } else {
          newText += text[i]
        }
      }
      setGlitchedText(newText)
      
      setTimeout(() => {
        setGlitchedText(text)
      }, 50)
    }, 2000)

    return () => clearInterval(glitchInterval)
  }, [text])

  return (
    <span className={`text-terminal-green animate-glow ${className}`}>
      {glitchedText}
    </span>
  )
}

export default GlitchText