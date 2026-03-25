import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function Experience() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-3xl text-left">
            A journey through my career highlights, showcasing the roles, and projects that have shaped my expertise and fueled my passion for innovative technology solutions.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Current Position */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-2xl">Performance Engineer </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">Ferchau GmbH, Germany  </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      May 2023 - Feb 2025
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      Landshut, Germany
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Responsible for the site reliability and performance of all the system elements including robots, station, Bin interface, conveyors, inbound and outbound machines.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>System optimization and KPIs improvement of the robotics system</li>
                      <li>Automating the repetitive tasks using Ansible     </li>
                      <li>Developed performance test plans and strategies</li>
                      <li>Optimization of SQL queries and monitoring the performance of database server       </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">GitLab</Badge>
                    <Badge variant="secondary">Grafana</Badge>
                    <Badge variant="secondary">Kubernetes</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">LiDAR</Badge>
                    <Badge variant="secondary">Ubuntu</Badge>
                    <Badge variant="secondary">REST API</Badge>
                    <Badge variant="secondary">Bash</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Position */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-2xl">{"Intern"}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">Robert Bosch GmbH, Leonberg   </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Jun 2019 - Feb 2020
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      New York, NY
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    System development/SW driving comfort function
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Analysis of measurements in environmental perception.</li>
                      <li>Research in the topic of multipath propagation of radar waves.</li>
                      <li>Algorithm development to detect ghost objects due to reflection from moving vehicles in radar sensors.</li>
                      <li>Predicted the ghost objects in real time scenarios      </li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Radar</Badge>
                    <Badge variant="secondary">Mathematical Modelling</Badge>
                    <Badge variant="secondary">Bitbucket</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">Matlab</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Earlier Position */}
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-2xl">System Engineer </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">Tata Consultancy Services   </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      Mar 2020 - Dec 2021
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      Remote
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {"Responsible for managing and maintaining infrastructure, ensuring application reliability, and supporting continuous integration and deployment pipelines. Focused on monitoring, incident management, automation, and collaboration with development teams to optimize system performance and availability"}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Improved system uptime and performance through proactive monitoring, and root cause analysis.</li>
                      <li>Automated infrastructure and deployment tasks using scripts and configuration management tools. </li>
                      <li>Optimized CI/CD pipelines and implemented scalable and reliable containerized solutions.</li>
                      <li>Enhanced collaboration between development and operations teams, accelerating release cycles and ensuring stable deployments.</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Jenkins</Badge>
                    <Badge variant="secondary">DevOps</Badge>
                    <Badge variant="secondary">GitHub</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">Kafka</Badge>
                    <Badge variant="secondary">Jira</Badge>
                    <Badge variant="secondary">Dynatrace</Badge>
                    <Badge variant="secondary">Prometheus</Badge>
                    <Badge variant="secondary">Splunk</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl mb-4 text-card-foreground">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how my experience can contribute to your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get In Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2026 Vignesh Sundaramahalingam. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
