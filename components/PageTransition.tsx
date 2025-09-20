'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState('fadeIn')

  useEffect(() => {
    setTransitionStage('fadeOut')
    const timeout = setTimeout(() => {
      setDisplayChildren(children)
      setTransitionStage('fadeIn')
    }, 300)
    return () => clearTimeout(timeout)
  }, [pathname, children])

  return (
    <div
      style={{
        opacity: transitionStage === 'fadeIn' ? 1 : 0,
        transform: transitionStage === 'fadeIn' ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
      }}
    >
      {displayChildren}
    </div>
  )
}