'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

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
    <section className="w-full h-full relative top-56 pb-20 md:-left-20 lg:-left-44 sm:-left-10 left-0">
      <div className="lg:px-16 px-8 flex flex-col-reverse sm:flex-row gap-6 justify-center items-center">
        {/* Text Section */}
        <div className="sm:text-left text-center text-white">
          <h4 className="sm:text-2xl text-3xl font-semibold w-fit  p-3">
            Hello, My name is{' '}
            <span className="text-orange-600 sm:text-2xl text-xl bg-slate-900/40 font-serif">BIDHUN</span>
          </h4>

          <h1 className="mt-4 sm:text-4xl text-2xl">
            I'm{' '}
            <span
              ref={typedRef}
              className="typing libre-baskerville-bold text-orange-600 "
            ></span>
          </h1>

          <p className="mt-4 text-lg capitalize">
            Aspiring beginner front-end developer learning Next.js, React, and UI design with Figma.
          </p>

          <div className="mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
            <button className="p-2 px-6 text-white font-semibold rounded-full outline-2 outline-green-500 hover:bg-green-600 transition ease-in-out delay-150">
              Hire Me
            </button>
            <button className="p-2 px-6 text-white font-semibold rounded-full outline-2 outline-yellow-500 hover:bg-yellow-600 transition ease-in-out delay-150">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
