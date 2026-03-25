import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Award, AwardIcon, ExternalLink } from "lucide-react"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function Education() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-foreground mb-4">Education & Learning</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My academic foundation in Electrical and Electronics engineering, Embedded Systems, and continuous learning
            journey in emerging technologies.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Master's Degree */}
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-2xl">Master of Science in Embedded Systems</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      Technische Universität Chemnitz
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-mono">10/2018 – 12/2022</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      Chemnitz, Germany
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">GPA: 2.0 (German System)</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized in embedded systems design, real-time systems, and hardware-software integration.
                    Focused on computer vision, signal processing, automotive applications and sensor systems.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Master Thesis:</h4>
                    <p className="text-muted-foreground">
                      "Detection and Handling of Multipath Propagation in Radar Object Tracking" - Robert Bosch GmbH,
                      Leonberg (02/2022 – 09/2022)
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Areas:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Design of Embedded Systems </li>
                        <li>Real-time Systems</li>
                        <li>Digital & Video Signal Processing</li>
                        <li>Automotive Sensor Systems </li>
                      </ul>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Components & Architecture </li>
                        <li>Hardware-Software Codesign</li>
                        <li>Design of Digital Systems </li>
                        <li>C/C++, Python Programming</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bachelor's Degree */}
            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-2xl">
                      Bachelor of Engineering in Electrical & Electronics
                    </CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      R.M.D Engineering College
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-mono">09/2009 – 05/2013</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      Tamil Nadu, India
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">GPA: 2.0 (German Equivalent)</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive study in electrical and electronics engineering with focus on Microprocessors, Micro
                    controller, control systems, and electric machine.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Bachelor Thesis:</h4>
                    <p className="text-muted-foreground">
                      "Design of Diode Clamped Multilevel Inverter with Multi-carrier Pulse Width Modulation"
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Coursework:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Power Electronics</li>
                        <li>Control Systems</li>
                        <li>Digital Signal Processing</li>
                        <li>Microprocessors and Micro controller </li>
                      </ul>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Linear Integrated Circuits and Applications </li>
                        <li>Electronic Devices and Circuits </li>
                        <li>Data Structures and Algorithm</li>
                        <li>Numerical Methods</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Higher Secondary */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="font-serif text-2xl">Higher Secondary Education</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      Government Boys Higher Secondary School
                    </CardDescription>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="font-mono">06/2008 – 04/2009</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      Tamil Nadu, India
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">GPA: 2.05 (German Equivalent)</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Completed higher secondary education with focus on Mathematics, Physics, Chemistry, and Biology
                    providing strong foundation for engineering studies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <div className="space-y-6">
              <h2 className="font-serif font-bold text-3xl text-foreground">Certification & Courses</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">Microsoft Certified: Azure DevOps Expert</CardTitle>
                        <CardDescription className="text-primary font-medium">Microsoft</CardDescription>
                      </div>
                      <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Obtained: March 2026
                      </div>
                      <p className="text-sm text-muted-foreground">
                        DevOps Strategy & Planning, Source Control, CI/CD Pipelines, Infrastructure as Code, Containers & Kubernetes, Release Management, Testing strategy,
                        Security & compliance, Artifact management, Monitoring & Feedback, and GitHub Integration and Automation
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          Agile
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Scrum
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Git+Azure Repos
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Azure Pipelines
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Bicep
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          ARM
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          ACR
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Azure Artifacts
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          GitHub Actions
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Azure Monitor & Application Insights
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">Agile Scrum Foundation</CardTitle>
                        <CardDescription className="text-primary font-medium">EXIN</CardDescription>
                      </div>
                      <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Obtained: March 2026
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Agile Mindset & Principles, Scrum Framework basics, Scrum Roles, Events, Artifacts, Agile Estimation & Planning and Quality & Testing in Agile
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          Sprint Planning
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Sprint Review
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Sprint Retrospective
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Relative estimation
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          User Story Mapping
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Definition of Done
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Velocity
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">Microsoft Certified: Azure Admin Associate</CardTitle>
                        <CardDescription className="text-primary font-medium">Microsoft</CardDescription>
                      </div>
                      <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Obtained: January 2026
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Identity and access management, Azure compute, Virtual networking, Storage, Azure governance and compliance, Monitoring and troubleshooting, and Azure administration best practices
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          Identity
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          NSG
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Policy
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Disaster recovery
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Azure CLI
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Powershell
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          VNet, VM
                        </Badge>
                       
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">Microsoft Certified: Azure Fundamentals</CardTitle>
                        <CardDescription className="text-primary font-medium">Microsoft</CardDescription>
                      </div>
                      <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Obtained: December 2025
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Cloud concepts, Architecture and services, Management and governance
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          IaaS
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          PaaS
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          SaaS
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Cloud Computing
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Scalability
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Availability
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">Introduction to Kubernetes (LFS158)</CardTitle>
                        <CardDescription className="text-primary font-medium">LINUX FOUNDATION</CardDescription>
                      </div>
                      <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Obtained: March 2025
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Kubernetes architecture, core components, and fundamentals of deploying, managing, and scaling
                        containerized applications using kubectl
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          Pods
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Deployments
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Services
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Namespaces
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          ConfigMaps
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Secrets
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">
                          BigData and Hadoop Ecosystem - MapR_Intermediate
                        </CardTitle>
                        <CardDescription className="text-primary font-medium">
                          Tata Consultancy Services
                        </CardDescription>
                      </div>
                      <Award className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Obtained: February 2017
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Hadoop architecture, HDFS, MapReduce and Hadoop ecosystem for large scale data processing and
                        management
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          Hive
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Pig
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Sqoop
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          HBase
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">Kafka Foundation</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          Tata Consultancy Services
                        </CardDescription>
                      </div>
                      <AwardIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Obtained: January 2017
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Core concepts of Apache Kafka, including distributed messaging, topics, partitions, producers,
                        consumers, and the fundamentals of building real-time data streaming pipelines.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          Kafka Connect
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Zookeeper
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Streams API
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="font-serif text-xl">Cloud Computing Foundation</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          Tata Consultancy Services
                        </CardDescription>
                      </div>
                      <AwardIcon className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2" />
                        Obtained: May 2016
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Core concepts of cloud models (IaaS, PaaS, SaaS), deployment types (public, private, hybrid),
                        virtualization, and fundamentals of cloud security and scalability.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">
                          High Availability
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Scalability
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Cost Optimization
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Continuous Learning */}
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-card-foreground">Continuous Learning</CardTitle>
                <CardDescription>Staying current with the latest technologies and industry trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Technology evolves rapidly, and I'm committed to continuous learning. I regularly engage with the
                    developer community through conferences, online courses, and open-source contributions.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">Recent Learning Focus:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Ansible configuration automation using AWS EC2 instances</li>
                      <li>Hosting a static website using Amazon S3</li>
                      <li>CI/CD best practice using Jenkins, GitHub Actions, Azure Pipeline workflows</li>
                      <li>Infrastructure provisioning in Terraform</li>
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">YAML</Badge>
                    <Badge variant="secondary">Ansible</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Typescript</Badge>
                    <Badge variant="secondary">IaC</Badge>
                    <Badge variant="secondary">Container Orchestration</Badge>
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
          <h2 className="font-serif font-bold text-3xl mb-4 text-card-foreground">Ready to Learn More?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            My educational foundation and continuous learning drive help me tackle complex challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/experience">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Experience
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
