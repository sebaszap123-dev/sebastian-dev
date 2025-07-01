// src/components/sections/Experience.tsx
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { ExperiencePost } from "@/lib/types";

interface ExperienceProps {
  experiences: ExperiencePost[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="container mx-auto">
        <SectionHeader
          title="Professional Experience"
          subtitle="My journey in the tech industry"
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-colors">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-purple-400">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-lg font-semibold text-white">
                        Company: {exp.company} | {exp.employment_type}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 mb-2"
                      >
                        {exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}
                      </Badge>
                      <p className="text-sm text-gray-400">{exp.employment_type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
              <p className="text-gray-300 mb-4">{exp.description}</p>

              {exp.technologies.achievements && exp.technologies.achievements.length > 0 && (
                <>
                  <p className="text-gray-300 mb-3 font-medium">Key Achievements</p>
                  <ul className="space-y-2 mb-6">
                    {exp.technologies.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {exp.technologies.technologies && exp.technologies.technologies.length > 0 && (
                <>
                  <p className="text-gray-300 mb-3 font-medium">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
            </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}