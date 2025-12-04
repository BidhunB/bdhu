"use client"
import React from 'react'
import { NavbarDemo } from '../components/ui/resizable-navbar-demo'
import Hero from '@/components/ui/hero'
import { PremiumContact } from '@/components/ui/premium-contact'

const Page = () => {
  return (
    <main className='min-h-screen w-full bg-white dark:bg-neutral-950 transition-colors duration-300'>
      <div className="flex items-center justify-center">
        <div className="fixed z-[99] top-0 w-full">
          <NavbarDemo />
        </div>
      </div>
      
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full">
          {/* Light mode background: Subtle gradient or pattern */}
          <div className="absolute inset-0 bg-white dark:hidden bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
          
          {/* Dark mode background: Dark theme only, no sparkles */}
          <div className="hidden dark:block absolute inset-0 bg-neutral-950" />
        </div>

        {/* Hero section */}
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      
      {/* Main content section */}
      <div className="relative z-10">
        <PremiumContact />  
      </div>
    </main>
  )
}

export default Page