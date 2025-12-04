'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { DownloadButton } from '@/components/ui/download-button';

import HeroParticles from '@/components/ui/hero-particles';

const Hero = () => {
  const typedRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'a Web Developer',
          'a Frontend Developer',
          'exploring Next.js & React',
          'practicing UI Design in Figma',
          'learning TypeScript',
          'exploring Web Development',
        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      });

      return () => typed.destroy(); // Cleanup on unmount
    }
  }, []);

  return (
    <section className="w-full relative h-screen min-h-[600px] overflow-hidden flex items-center">
      {/* Full Screen Particle Animation */}
      <HeroParticles 
         imageSrc="/bdhu.png"
         morphDelay={1300}
      />

      <div className="max-w-7xl mx-auto w-full px-4 md:px-0 relative z-10 pointer-events-none">
        {/* Text Section - Pointer events auto to allow interaction with buttons */}
        <div className="text-center md:text-left text-neutral-900 dark:text-white max-w-2xl pointer-events-auto">
          <h4 className="text-xl md:text-2xl font-semibold mb-4">
            Hello, My name is{' '}
            <span className="text-orange-600 dark:text-orange-500 font-serif bg-orange-100 dark:bg-slate-900/40 px-2 py-1 rounded-md">BIDHUN</span>
          </h4>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            I'm{' '}
            <span
              ref={typedRef}
              className="typing libre-baskerville-bold text-orange-600 dark:text-orange-500"
            ></span>
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 capitalize mb-8">
            Aspiring beginner front-end developer learning Next.js, React, and UI design with Figma.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-3 text-white font-semibold rounded-full bg-green-600 hover:bg-green-700 transition-all shadow-lg hover:shadow-green-500/20">
              Hire Me
            </button>
            <DownloadButton className="rounded-full px-8 py-6 text-base" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
