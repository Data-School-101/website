import React from 'react'
import { Separator } from '@/components/ui/separator'

interface SectionProps {
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <div className={`py-10 px-6 sm:py-20 sm:px-10 bg-white ${className}`}>
      {children}
      <Separator className="mt-8" />
    </div>
  )
}

export default Section
