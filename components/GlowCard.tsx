'use client'

import { useState } from 'react'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  onClick?: () => void
}

export default function GlowCard({ 
  children, 
  className = '', 
  glowColor = '0, 255, 0',
  onClick 
}: GlowCardProps) {
  const [isHovered, setIsHovered] = useState(false)
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     setMousePos({
//       x: e.clientX - rect.left,
//       y: e.clientY - rect.top
//     })
//   }

  return (
    <div
      className={`relative ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    //   onMouseMove={handleMouseMove}
      style={{
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(' + glowColor + ', 0.3)',
        borderRadius: '8px',
        padding: '2rem',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? `0 10px 40px rgba(${glowColor}, 0.4), 0 0 60px rgba(${glowColor}, 0.2)` 
          : `0 4px 20px rgba(0, 0, 0, 0.5)`,
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden'
      }}
    >
      {/* Glow effect that follows mouse */}
      {/* isHovered && (
        <div
          style={{
            position: 'absolute',
            top: mousePos.y - 100,
            left: mousePos.x - 100,
            width: '200px',
            height: '200px',
            background: `radial-gradient(circle, rgba(${glowColor}, 0.3) 0%, transparent 70%)`,
            pointerEvents: 'none',
            borderRadius: '50%',
            filter: 'blur(20px)',
            zIndex: 0
          }}
        />
      ) */}
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
      
      {/* Corner accents */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderTop: `2px solid rgba(${glowColor}, ${isHovered ? 0.8 : 0.4})`,
        borderLeft: `2px solid rgba(${glowColor}, ${isHovered ? 0.8 : 0.4})`,
        transition: 'all 0.3s ease'
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '20px',
        height: '20px',
        borderTop: `2px solid rgba(${glowColor}, ${isHovered ? 0.8 : 0.4})`,
        borderRight: `2px solid rgba(${glowColor}, ${isHovered ? 0.8 : 0.4})`,
        transition: 'all 0.3s ease'
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '20px',
        height: '20px',
        borderBottom: `2px solid rgba(${glowColor}, ${isHovered ? 0.8 : 0.4})`,
        borderLeft: `2px solid rgba(${glowColor}, ${isHovered ? 0.8 : 0.4})`,
        transition: 'all 0.3s ease'
      }} />
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '20px',
        height: '20px',
        borderBottom: `2px solid rgba(${glowColor}, ${isHovered ? 0.8 : 0.4})`,
        borderRight: `2px solid rgba(${glowColor}, ${isHovered ? 0.8 : 0.4})`,
        transition: 'all 0.3s ease'
      }} />
    </div>
  )
}