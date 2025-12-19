"use client";
import React from "react";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import LaserFlow from "@/components/LaserFlow";

interface ProjectData {
  id: number;
  title: string;
  url: string;
  description: string;
  learnings: string[];
  tech: string[];
  tags: string[];
  color: string;
}

const projects: ProjectData[] = [
  {
    id: 5,
    title: "RESQ – Disaster / Emergency Response System",
    url: "https://resq-jade.vercel.app",
    description: "A web-based emergency response system that allows users to report incidents with real-time location data and categorized disaster types.",
    learnings: [
      "Real-world problem modeling",
      "Geolocation APIs",
      "Client-side state management",
      "Integrating maps and external services",
      "Thinking in systems, not just pages"
    ],
    tech: ["JavaScript / TypeScript", "Next.js", "Leaflet / Maps", "Firebase", "HTML / CSS"],
    tags: ["Next.js", "TypeScript", "Geolocation", "Maps", "Crisis Management", "System Design"],
    color: "#2E2E2E" // Dark Gray/Black theme
  },
  {
    id: 4,
    title: "Portfolio Website",
    url: "https://bdhu.vercel.app/",
    description: "A personal portfolio website showcasing projects, skills, and developer profile.",
    learnings: [
      "Information architecture",
      "Basic UX decisions",
      "Deployment workflow (Vercel)",
      "Owning your developer narrative"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Next.js"],
    tags: ["Portfolio", "Personal Branding", "Frontend", "Web Deployment", "UX Basics"],
    color: "#4A4A4A" // Slightly lighter gray
  },
  {
    id: 3,
    title: "Pookalam (Onam Design)",
    url: "https://pookalam-coral.vercel.app/",
    description: "A creative cultural web project visualizing a traditional Pookalam using web technologies.",
    learnings: [
      "CSS positioning and layering",
      "Visual composition using code",
      "Precision styling without images",
      "Creative problem solving with constraints"
    ],
    tech: ["HTML", "CSS"],
    tags: ["Creative Coding", "CSS Art", "UI Design", "Visual Layout", "Cultural Project"],
    color: "#eab308" // Yellow/Gold for Onam
  },
  {
    id: 2,
    title: "Carmel College Website Clone",
    url: "https://carmel-clone.vercel.app/index.html",
    description: "A static clone of an institutional website focused on layout accuracy, navigation structure, and responsive design.",
    learnings: [
      "Translating a real website into code",
      "CSS layout systems (Flexbox / Grid)",
      "Responsiveness across screen sizes",
      "Asset organization and semantic HTML"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    tags: ["Responsive Design", "CSS Layout", "Website Cloning", "Semantic HTML", "Frontend Development"],
    color: "#3b82f6" // Blue
  },
  {
    id: 1,
    title: "Calculator",
    url: "https://calculator-ten-pearl-27.vercel.app",
    description: "A responsive web-based calculator implementing basic arithmetic operations with real-time input handling and error prevention.",
    learnings: [
      "DOM manipulation and event-driven logic",
      "State handling in the browser",
      "Input validation and edge cases",
      "Writing predictable UI logic"
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    tags: ["JavaScript", "DOM Manipulation", "Event Handling", "Frontend Basics", "UI Logic"],
    color: "#ef4444" // Red
  },
];

const ProjectSection = () => {
  return (
    <div className="relative w-full bg-neutral-950">
      {/* Laser Flow Effect - Pulled up into Hero */}
      <div className="absolute -top-[700px] left-0 w-full h-[1500px] pointer-events-none z-0">
         <LaserFlow 
           color="#3b82f6" 
           wispDensity={1.2} 
           flowSpeed={0.4} 
           fogIntensity={0.6}
           verticalSizing={2.0}
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <ScrollStack
          itemDistance={80}
          itemScale={0.05}
          itemStackDistance={40}
          stackPosition="30%"
          scaleEndPosition="10%"
          baseScale={0.9}
          blurAmount={2}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.id} itemClassName="bg-neutral-900 border border-neutral-800">
              <div className="flex flex-col h-full relative overflow-hidden group">
                {/* Decorative background gradient */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top right, ${project.color}, transparent 60%)`
                  }}
                />

                <div className="relative z-10 flex flex-col h-full p-6 md:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-xs rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors text-white"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 flex-1">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-neutral-400 text-sm uppercase tracking-wider mb-2">About</h4>
                        <p className="text-neutral-200 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-neutral-400 text-sm uppercase tracking-wider mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                              <span key={t} className="text-neutral-300 font-mono text-sm bg-neutral-800/50 px-2 py-1 rounded">
                                {t}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-neutral-800/30 rounded-2xl p-6 border border-neutral-800/50">
                      <h4 className="text-neutral-400 text-sm uppercase tracking-wider mb-4">Key Learnings</h4>
                      <ul className="space-y-3">
                        {project.learnings.map((learning, idx) => (
                          <li key={idx} className="flex items-start text-neutral-300">
                            <span className="mr-3 text-neutral-500">•</span>
                            {learning}
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                            <Button asChild className="w-full" starColor={project.color} starSpeed="5s">
                              <a href={project.url} target="_blank" rel="noopener noreferrer">
                                View Project
                              </a>
                            </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </div>
  );
};

export default ProjectSection;
