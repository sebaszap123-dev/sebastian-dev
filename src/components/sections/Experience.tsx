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
import { experiences } from "@/lib/experiences";

export default function Experience() {
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
              key={index}
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
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="outline"
                        className="border-purple-500/50 text-purple-300 mb-2"
                      >
                        {exp.period}
                      </Badge>
                      <p className="text-sm text-gray-400">{exp.type}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-400"
                      >
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
