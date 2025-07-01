// src/components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { Project } from "@/lib/types";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container mx-auto">
        <SectionHeader
          title="Featured Projects"
          subtitle="Here are some of my recent projects showcasing my skills in backend development, AI integration, and full-stack solutions."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-colors group h-full">
                <CardHeader>
                  <CardTitle className="text-purple-400">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col justify-between flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.demo_url && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/50 hover:bg-purple-500/10"
                        asChild
                      >
                        <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          {project.live_site
                            ? "Live Site"
                            : "Demo"}
                        </a>
                      </Button>
                    )}
                    {project.github_url && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/50 hover:bg-purple-500/10"
                        asChild
                      >
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.download_url && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500/50 hover:bg-purple-500/10"
                        asChild
                      >
                        <a href={project.download_url} target="_blank" rel="noopener noreferrer">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}