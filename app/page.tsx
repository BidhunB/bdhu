"use client"
import React from 'react'
import { NavbarDemo } from '../components/ui/resizable-navbar-demo'

const Page = () => {
  return (
    <main>
      <div className="flex items-center justify-center">
        <div className="absolute top-0 left-auto right-auto">
          <NavbarDemo />
        </div>
      </div>
      <div
        className={`
          flex flex-col items-center justify-center 
          w-full min-h-screen bg-cover bg-center
          md:bg-[url('/bg2.png')] bg-[url('/bg3.png')]
        `}
      >
      </div>
    </main>
  )
}

export default Page