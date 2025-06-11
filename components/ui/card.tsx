"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-lime-400 via-teal-400 to-blue-600 p-[1px]">
      <div className="flex h-full bg-white rounded-lg">
        {/* Preview Section */}
        <div className="relative min-w-[200px] h-[250px]">
          {previewUrl ? (
            <>
              <div 
                className="relative h-full cursor-pointer"
                onClick={toggleExpand}
              >
                <Image 
                  src={previewUrl} 
                  alt={`Preview of ${title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 200px) 100vw, 200px"
                  priority
                />
                <button 
                  className="absolute bottom-2 right-2 bg-white/80 p-1 rounded-lg z-10"
                  onClick={toggleExpand}
                >
                  <span className="text-lg">⤢</span>
                </button>
              </div>
              {isExpanded && (
                <div 
                  className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                  onClick={toggleExpand}
                >
                  <div className="relative w-[90vw] h-[90vh]">
                    <Image 
                      src={previewUrl} 
                      alt={`Expanded preview of ${title}`}
                      fill
                      className="object-contain"
                      quality={100}
                      priority
                    />
                  </div>
                  <button 
                    className="absolute top-4 right-4 bg-white/80 p-2 rounded-lg"
                    onClick={toggleExpand}
                  >
                    <span className="text-xl">⊗</span>
                  </button>
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
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {pdfUrl && (
            <Link 
              href={pdfUrl}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              download
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