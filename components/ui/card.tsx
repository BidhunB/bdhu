"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Maximize, Minimize } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string;
  description: string;
  pdfUrl?: string;
  skills: string[];
  previewUrl?: string;
  date: Date;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, description, pdfUrl, skills, previewUrl, date, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };
  // Format the date to a more readable format
 const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };
  return (
    <div className={cn("relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm transition-all hover:shadow-md", className)}>
      <div className="flex flex-col lg:h-[400px] md:flex-row h-full rounded-lg overflow-hidden">
          {/* Preview Section */}
          <div className="w-full md:w-[40%] lg:w-[45%] aspect-[4/3] relative bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
            {previewUrl ? (
              <>
                <div className="relative h-full w-full p-4">
                  <Image 
                    src={previewUrl} 
                    alt={`Preview of ${title}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw"
                    priority
                  />
                  <button 
                    className="absolute bottom-4 right-4 bg-white/80 dark:bg-black/50 p-2 rounded-full hover:bg-white dark:hover:bg-black transition-colors shadow-sm backdrop-blur-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(e);
                    }}
                  >
                    <Maximize className="w-4 h-4 text-neutral-700 dark:text-neutral-200" />
                  </button>
                </div>
                      {isExpanded && (
                        <div 
            className="fixed inset-0  z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={toggleExpand}
          >
            <div 
              className="relative w-[90vw] max-w-[1200px] aspect-[16/9] p-4 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={previewUrl}
                alt={`Expanded view of ${title}`}
                fill
                className="object-contain rounded-md"
                quality={100}
                priority
              />
              <button 
                className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors text-white"
                onClick={toggleExpand}
              >
                <Minimize className="w-6 h-6" />
              </button>
            </div>
          </div>
              )}
            </>
          ) : (
            <div className="text-neutral-400 dark:text-neutral-500 text-sm">
              No Preview
            </div>
          )}
        </div>
{/* Separator Line (Mobile Only) */}
<div className="md:hidden h-[1px] w-full bg-neutral-200 dark:bg-neutral-800" />

         {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col relative">
          {/* Date Badge */}
          <div className="absolute top-6 left-6">
            <time className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded-md">
              {formatDate(date)}
            </time>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold mb-3 mt-8 text-neutral-900 dark:text-neutral-100">{title}</h2>
          
          <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-6 flex-grow leading-relaxed">{description}</p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, index) => (
                <span 
                    key={index}
                    className="px-2.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700"
                >
                    {skill}
                </span>
                ))}
            </div>

            {pdfUrl && (
                <Link 
                href={pdfUrl}
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
                >
                View Certificate 
                <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card