'use client'

import { useState, useRef, useEffect } from 'react'
import Terminal from './Terminal'

export default function PersistentTerminal() {
  const [isOpen, setIsOpen] = useState(true)
  const [height, setHeight] = useState(300) // Default height
  const [isResizing, setIsResizing] = useState(false)
  const startY = useRef(0)
  const startHeight = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsResizing(true)
    startY.current = e.clientY
    startHeight.current = height
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return
      
      const deltaY = startY.current - e.clientY
      const newHeight = Math.min(Math.max(100, startHeight.current + deltaY), window.innerHeight - 100)
      setHeight(newHeight)
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing])

  return (
    <div style={{ 
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: isOpen ? `${height}px` : '40px',
      zIndex: 9999,
      transition: isResizing ? 'none' : 'height 0.3s ease',
      userSelect: isResizing ? 'none' : 'auto'
    }}>
      <div 
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '2px solid #00ff00',
          boxShadow: '0 -5px 30px rgba(0, 255, 0, 0.4), 0 -10px 60px rgba(0, 255, 0, 0.2)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Resize handle */}
        {isOpen && (
          <div
            onMouseDown={handleMouseDown}
            style={{
              height: '6px',
              cursor: 'ns-resize',
              backgroundColor: 'transparent',
              borderTop: '2px solid #00ff00',
              opacity: 0.5,
              transition: 'opacity 0.2s',
              position: 'relative'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.5'}
          >
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '4px',
              borderRadius: '2px',
              backgroundColor: '#00ff00',
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.5)'
            }}></div>
          </div>
        )}
        
        <div 
          style={{
            padding: '8px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: isOpen ? '1px solid rgba(0, 255, 0, 0.3)' : 'none',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span style={{ 
            color: '#00ff00', 
            textShadow: '0 0 10px rgba(0, 255, 0, 0.5)',
            fontSize: '14px',
            fontWeight: 'bold',
            fontFamily: 'monospace'
          }}>
            [TERMINAL]
          </span>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            {isOpen && (
              <span style={{ 
                color: '#00ff00',
                fontSize: '11px',
                opacity: 0.5,
                fontFamily: 'monospace'
              }}>
                Drag top border to resize
              </span>
            )}
            <span style={{ 
              color: '#00ff00',
              fontSize: '12px',
              opacity: 0.7
            }}>
              {isOpen ? 'Click to minimize' : 'Click to expand'}
            </span>
            <span 
              style={{ 
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                color: '#00ff00',
                transition: 'transform 0.3s',
                fontSize: '16px'
              }}
            >
              ▼
            </span>
          </div>
        </div>
        
        {isOpen && (
          <div style={{ 
            flex: 1,
            overflow: 'auto',
            position: 'relative',
			scrollbarColor: '#00ff00 black',
          }}>
            <Terminal />
          </div>
        )}
      </div>
    </div>
  )
}