"use client"
import React from 'react'
import { NavbarDemo } from '../components/ui/resizable-navbar-demo'
import { SparklesPreview } from '../components/ui/sparkledemo'
import Hero from '@/components/ui/hero'
import { PremiumContact } from '@/components/ui/premium-contact' // <-- Import here

const Page = () => {
  return (
    <main className='grid grid-cols-1 '>
      <div className="flex items-center justify-center">
        <div className="fixed z-[99] top-0 ">
                <NavbarDemo />
              </div>
      </div>
      <div>
      <div className="relative">
        {/* Base background layer */}
        <div
          className={`
            absolute inset-0
            w-full min-h-screen bg-cover bg-center
            md:bg-[url('/bg2.png')] bg-[url('/bg3.png')]
          `}
        />
        
        {/* Sparkles layer (between backgrounds) */}
        <div className="absolute h-screen inset-0 z-20">
          <SparklesPreview />
        </div>

        {/* Overlay background layer */}
        <div
          className={`
            absolute inset-0 z-30
            bg-black/30 
            w-full min-h-screen  bg-cover bg-center
            bg-[url('/toplayer.png')]
          `}
        />
        {/* Hero section */}
        <div className="relative z-60 flex items-center justify-center">
          <Hero />
        </div>
      </div>
      </div>
      
      {/* Main content section */}
      {/* Contact section continuation */}
      <div className="relative top-[390px]">
      <PremiumContact />  
      </div>{/* <-- Add this line */}
    </main>
  )
}

export default Page