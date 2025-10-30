"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Languages,
  Heart,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="container mx-auto">
        <SectionHeader title="About Me" subtitle="Get to know me better" />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I currently work at Smarttie as a Python developer using
                  Django. I&#39;m also studying a DevOps course with certification
                  from IBM. My journey in tech started at 8, exploring the
                  internet and hacking, and led me to complete a degree in
                  software engineering.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  With over 3 years of experience in backend development, I
                  specialize in creating scalable solutions and integrating AI
                  technologies. Currently expanding my skills in frontend
                  development with React and Next.js.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-400">Born: September 2, 2001</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-400">Colima, México</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-400">Spanish, English (B1)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-purple-400" />
                    <span className="text-gray-400">Music, Universe, Games</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-400">Software Engineering</h4>
                    <p className="text-gray-400">
                      University of Colima • Jun 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-400">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 hover:bg-purple-500/10"
                    onClick={() => window.open("https://github.com/sebaszap123-dev", "_blank")}
                  >
                    <Github className="h-4 w-4"/>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 hover:bg-purple-500/10"
                    onClick={() => window.open("https://www.linkedin.com/in/miguel-sebastian-frausto-zapata-32a40a25a/", "_blank")}
                  >
                    <Linkedin className="h-4 w-4"/>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 hover:bg-purple-500/10"
                    onClick={() => window.open("mailto:contact@sebastianfrausto.com", "_blank")}
                  >
                    <Mail className="h-4 w-4"/>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
