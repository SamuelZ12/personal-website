import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { TiltImage } from '../components/TiltImage';

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-12 text-3xl font-medium tracking-tight">Projects</h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col space-y-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <TiltImage
                src={project.image}
                alt={project.title}
                className="shadow-lg"
              />
            </a>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="flex items-baseline gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-800 dark:hover:text-neutral-200"
                  >
                    <h2 className="text-xl font-medium tracking-tight">
                      {project.title}
                    </h2>
                  </a>
                  <span className="text-neutral-600 dark:text-neutral-400 text-sm">
                    {project.year}
                  </span>
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
