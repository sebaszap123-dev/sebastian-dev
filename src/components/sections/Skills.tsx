"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeader } from "@/components/ui/section-header";
import { skills, certifications } from "@/lib/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="container mx-auto">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="Technologies I work with"
        />

        <Tabs defaultValue="backend" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-slate-800/50 border border-purple-500/20">
            <TabsTrigger
              value="backend"
              className="data-[state=active]:bg-purple-600"
            >
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-purple-600"
            >
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="mobile"
              className="data-[state=active]:bg-purple-600"
            >
              Mobile
            </TabsTrigger>
            <TabsTrigger
              value="database"
              className="data-[state=active]:bg-purple-600"
            >
              Database
            </TabsTrigger>
            <TabsTrigger
              value="cloud"
              className="data-[state=active]:bg-purple-600"
            >
              Cloud/DevOps
            </TabsTrigger>
            <TabsTrigger
              value="ai"
              className="data-[state=active]:bg-purple-600"
            >
              AI/ML
            </TabsTrigger>
          </TabsList>

          {Object.entries(skills).map(([category, skillList]) => (
            <TabsContent key={category} value={category} className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {skillList.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4 text-center hover:border-purple-400/40 transition-colors"
                  >
                    <span className="text-white font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-purple-400">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-purple-500/20 rounded-lg p-4 hover:border-purple-400/40 transition-colors"
              >
                <p className="text-gray-300">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
