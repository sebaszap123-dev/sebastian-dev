"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="container mx-auto">
        <SectionHeader
          title="Let&#39;s Connect"
          subtitle="I&#39;m always interested in new opportunities and collaborations. Feel free to reach out!"
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-purple-400">
                    Get in Touch
                  </CardTitle>
                  <CardDescription>
                    Let&#39;s discuss your next project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-400">sfraustoz.dev@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-gray-400">Colima, México</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-semibold mb-4">Follow Me</h4>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500/50 hover:bg-purple-500/10"
                      >
                        <Github className="h-4 w-4" href="https://github.com/sebaszap123-dev/sebastian-dev"/>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500/50 hover:bg-purple-500/10"
                      >
                        <Linkedin className="h-4 w-4" href="https://www.linkedin.com/in/miguel-sebastian-frausto-zapata-32a40a25a/"/>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-purple-400">
                    Send Message
                  </CardTitle>
                  <CardDescription>
                    I&#39;ll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows={4}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-400 resize-none"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
