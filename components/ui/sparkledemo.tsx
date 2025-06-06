import React from 'react'
import { SparklesCore } from "@/components/ui/sparkles"
export function SparklesPreview() {
  return (
    <div className="h-full w-full bg-transparent flex justify-center overflow-hidden rounded-md">
        {/* Gradients */}
      <div className="w-full h-full justify-center items-center  top-16 relative">
        {/* Gradients */}
        
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.5}
          maxSize={1.8}
          particleDensity={200}
          className="w-full h-full"
          particleColor="#ffff"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}


export default SparklesPreview