import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Cloud, Database, Code2, GitBranch, Wrench } from "lucide-react"
import Navigation from "@/components/navigation"

export default function Skills() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-center mb-12 text-foreground">
            Skills & Expertise
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cpu className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-serif">Embedded Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Digital Signal Processing</Badge>
                  <Badge variant="secondary">Software designs</Badge>
                  <Badge variant="secondary">Arduino</Badge>
                  <Badge variant="secondary">ESP32</Badge>
                  <Badge variant="secondary">CAN</Badge>
                  <Badge variant="secondary">Flexray</Badge>
                  <Badge variant="secondary">Components & Architectures</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code2 className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-serif">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">C</Badge>
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">MATLAB/Simulink</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-serif">Database & Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">DB2</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">PL/SQL</Badge>
                  <Badge variant="secondary">MS SQL</Badge>
                  <Badge variant="secondary">MariaDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <GitBranch className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-serif">Versioning Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">GitHub</Badge>
                  <Badge variant="secondary">Bitbucket</Badge>
                  <Badge variant="secondary">Gitlab</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-serif">DevOps & Cloud</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Jenkins</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Azure</Badge>
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">Kubernetes</Badge>
                  <Badge variant="secondary">IaC</Badge>
                  <Badge variant="secondary">GitHub Action</Badge>
                  <Badge variant="secondary">Vercel</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wrench className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle className="font-serif">Tools & Softwares</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Ansible</Badge>
                  <Badge variant="secondary">Grafana</Badge>
                  <Badge variant="secondary">Splunk</Badge>
                  <Badge variant="secondary">Dynatrace</Badge>
                  <Badge variant="secondary">Kibana</Badge>
                  <Badge variant="secondary">VS Code</Badge>
                  <Badge variant="secondary">REST APIs</Badge>
                  <Badge variant="secondary">OpenSSH</Badge>
                  <Badge variant="secondary">Prometheus</Badge>
                  <Badge variant="secondary">Jira</Badge>
                </div>
              </CardContent>
            </Card>
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
