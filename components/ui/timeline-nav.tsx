"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface TimelineProps {
  dates: Date[]
  activeDate: Date
  onDateSelect: (date: Date) => void
  progress: number
}

const TimelineNav: React.FC<TimelineProps> = ({ dates, activeDate, onDateSelect, progress }) => {
  const timelineRef = useRef<HTMLDivElement>(null)

  return (
    <div className="fixed right-5 top-1/2 transform -translate-y-1/2 h-[70vh] flex flex-col items-center">
      <div className="h-full w-0.5 bg-gray-600/30 relative mr-1" ref={timelineRef}>
        {/* Progress line */}
        <motion.div 
          className="absolute left-0 w-full bg-indigo-500"
          style={{ height: `${progress}%` }}
        />
        
        {dates.map((date, index) => (
          <motion.button
            key={date.toISOString()}
            onClick={() => onDateSelect(date)}
            className={`absolute transform -translate-x-1/2 w-4 h-4 rounded-full 
              ${date.getTime() === activeDate.getTime() 
                ? 'bg-indigo-500 ring-2 ring-indigo-400 ring-offset-2 ring-offset-gray-900' 
                : 'bg-gray-600 hover:bg-gray-500'}`}
            style={{
              top: `${(index / (dates.length - 1)) * 100}%`,
              left: '50%'
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: -6,
              transition: { delay: index * 0.1 }
            }}
          >
            <motion.span 
              className="absolute right-8 top-1/2 -translate-y-1/2 whitespace-nowrap text-sm px-3 py-1 rounded-full"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ 
                opacity: 1, 
                x: 0,
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                color: '#818CF8'
              }}
              animate={date.getTime() === activeDate.getTime() ? {
                opacity: 1,
                x: 0,
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                color: '#818CF8'
              } : {
                opacity: 0.6,
                x: 10,
                backgroundColor: 'transparent',
                color: '#9CA3AF'
              }}
            >
              {new Intl.DateTimeFormat('en-US', {
                month: 'short',
                year: 'numeric'
              }).format(date)}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
export default TimelineNav