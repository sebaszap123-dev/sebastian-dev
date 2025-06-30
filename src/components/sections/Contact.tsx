"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { useTransition } from "react"
import Swal from "sweetalert2"
import { sendContactForm } from "@/actions/portfolio"

export default function Contact() {
  const [isPending, startTransition] = useTransition()

  const handleAction = async (formData: FormData) => {
    const confirm = await Swal.fire({
      title: "¿Enviar mensaje?",
      text: "Se enviará tu mensaje a mi correo.",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Sí, enviar",
      cancelButtonText: "Cancelar",
    })

    if (!confirm.isConfirmed) return

    Swal.fire({
      title: "Enviando...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    })

    const result = await sendContactForm(formData)

    Swal.close()

    if (result.success) {
      Swal.fire("¡Enviado!", "Tu mensaje fue enviado con éxito.", "success")
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    } else {
      Swal.fire("Error", result.success! || "Algo salió mal", "error")
    }
  }

  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="container mx-auto">
        <SectionHeader
          title="Let&apos;s Connect"
          subtitle="I&apos;m always interested in new opportunities and collaborations. Feel free to reach out!"
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
                  <CardTitle className="text-purple-400">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-300">Let&apos;s discuss your next project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-200">sfraustoz.dev@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <p className="text-gray-200">Colima, México</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400/60 hover:bg-purple-500/20 bg-slate-700/30 text-gray-200 hover:text-white hover:border-purple-300"
                        asChild
                      >
                        <a
                          href="https://github.com/sebaszap123-dev/sebastian-dev"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-400/60 hover:bg-purple-500/20 bg-slate-700/30 text-gray-200 hover:text-white hover:border-purple-300"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/miguel-sebastian-frausto-zapata-32a40a25a/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
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
                  <CardTitle className="text-purple-400">Send Message</CardTitle>
                  <CardDescription className="text-gray-300">I&apos;ll get back to you as soon as possible</CardDescription>
                </CardHeader>
                <CardContent>
                  <form
                    id="contact-form"
                    action={(formData) => {
                      startTransition(() => handleAction(formData))
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        disabled={isPending}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-300 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        disabled={isPending}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-300 disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={4}
                        required
                        disabled={isPending}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/20 rounded-lg focus:border-purple-400 focus:outline-none text-white placeholder-gray-300 resize-none disabled:opacity-50"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                    >
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
