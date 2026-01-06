'use client'

import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
const ActualPageStructure = dynamic(() => import('./pageStructure2'), {ssr: false})

export default function PageStructure({children}: {children: ReactNode}) {
	return (
    <ActualPageStructure>
      {children}
    </ActualPageStructure>
	)
}