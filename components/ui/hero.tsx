'use client';

import HeroParticles from '@/components/ui/hero-particles';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';

const Hero = () => {
  return (
    <section className="relative flex items-center h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <HeroParticles imageSrc="/bdhu.png" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-0">
        <div className="max-w-2xl text-center md:text-left text-neutral-900 dark:text-white">
          
          {/* Intro */}
          <h4 className="mb-4 text-xl md:text-2xl text-neutral-500 dark:text-neutral-400">
            Hi, I’m{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-500">
              Bidhun
            </span>
          </h4>

          {/* Headline */}
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I’m{' '}
            <span className="text-blue-600 dark:text-blue-500 inline-block">
              <LayoutTextFlip
                text=""
                words={[
                  'a Frontend Developer',
                  'UI-focused',
                  'building with React & Next.js',
                  'turning design into code',
                ]}
              />
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 text-base md:text-lg text-neutral-600 dark:text-neutral-300">
            UI-focused frontend developer building responsive, user-friendly web
            interfaces using React, Next.js, and Figma.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="px-8 py-3 font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 text-center"
            >
              Contact Me
            </a>

            <a
              href="/Bidhun_CV.pdf"
              download
              className="px-8 py-3 font-semibold rounded-full border border-blue-600 text-blue-600 dark:text-blue-500 hover:border-blue-700 transition shadow-lg hover:shadow-blue-500/20 text-center"
            >
              Download CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
