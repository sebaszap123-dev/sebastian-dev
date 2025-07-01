import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExperiencePost } from "@/lib/types"


interface ExperienceProps {
  experiences: ExperiencePost[]
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experiences: experiences }) => {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
      <p className="text-gray-400">My professional journey so far.</p>

      <div className="mt-6 space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{exp.title}</CardTitle>
              <p className="text-gray-400">
                {exp.company} | {exp.start_date} - {exp.end_date}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{exp.description}</p>

              {exp.technologies.achievements && exp.technologies.achievements.length > 0 && (
                <>
                  <h4 className="text-gray-300 font-semibold mb-3">Key Achievements</h4>
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
                  <h4 className="text-gray-300 font-semibold mb-3">Technologies Used</h4>
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
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
