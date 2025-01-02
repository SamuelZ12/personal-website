import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";
import Image from "next/image";

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
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex flex-col space-y-6">
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              {/* Project Details */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <h2 className="text-xl font-medium tracking-tight">
                    {project.title}
                    <span className="ml-2 text-neutral-600 dark:text-neutral-400 text-sm">
                      {project.year}
                    </span>
                  </h2>
                </div>
                <div className="md:w-2/3">
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
