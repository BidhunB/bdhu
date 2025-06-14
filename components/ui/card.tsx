"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Maximize, Minimize } from 'lucide-react'

interface CardProps {
  title: string;
  description: string;
  pdfUrl?: string;
  skills: string[];
  previewUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, pdfUrl, skills, previewUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative overflow-hidden m-10 rounded-lg bg-gradient-to-br from-lime-400 via-teal-400 to-blue-600 p-[1px]">
      <div className="flex flex-col lg:h-[400px] md:flex-row h-full bg-white rounded-lg">
        {/* Preview Section - Updated with aspect ratio container */}
        <div className=" aspect-[4/3] overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
          {previewUrl ? (
            <>
              <div className="relative h-full w-full">
                <Image 
                  src={previewUrl} 
                  alt={`Preview of ${title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
                <button 
                  className="absolute bottom-2 right-2 bg-white/80 p-1.5 rounded-lg z-10 hover:bg-white/100 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(e);
                  }}
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
              {isExpanded && (
                <div 
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                  onClick={toggleExpand}
                >
                  <div 
                    className="relative w-[90vw] max-w-[1200px] aspect-[16/9]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Image 
                      src={previewUrl}
                      alt={`Expanded view of ${title}`}
                      fill
                      className="object-contain rounded-lg"
                      quality={100}
                      priority
                    />
                    <button 
                      className="absolute bottom-4 right-10 lg:right-36 bg-white/80 p-2 rounded-lg hover:bg-white/100 transition-colors"
                      onClick={toggleExpand}
                    >
                      <Minimize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="h-full w-full bg-gray-100 flex items-center justify-center text-gray-400">
              No Preview
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 md:p-6">
          <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-2 md:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {pdfUrl && (
            <Link 
              href={pdfUrl}
              className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-blue-600 text-white text-sm md:text-base rounded-lg hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download <span className="ml-2">↓</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card