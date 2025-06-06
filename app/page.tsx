"use client"
import React from 'react'
import { NavbarDemo } from '../components/ui/resizable-navbar-demo'
import { SparklesPreview } from '../components/ui/sparkledemo'

const Page = () => {
  return (
    <main>
      <div className="flex items-center justify-center">
        <div className="absolute top-0 left-auto right-auto z-50">
          <NavbarDemo />
        </div>
      </div>
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
        <div className="absolute -top-15 inset-0 z-10">
          <SparklesPreview />
        </div>

        {/* Overlay background layer */}
        <div
          className={`
            absolute inset-0 z-20
            bg-black/30 
            w-full min-h-screen  bg-cover bg-center
            bg-[url('/toplayer.png')]
          `}
        />

        {/* Ensure main content area fills viewport */}
        <div className="relative min-h-screen" />
      </div>
    </main>
  )
}

export default Page