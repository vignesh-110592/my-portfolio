import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Navigation from "@/components/navigation"

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-center mb-12 text-foreground">About Me</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience building web applications. I love
                turning complex problems into simple, beautiful designs that provide exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey in tech started with a curiosity about how websites work, which led me to dive deep into both
                frontend and backend development. I believe in writing clean, maintainable code and creating solutions
                that not only work well but also delight users.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source projects,
                mentoring junior developers, or sharing knowledge with the developer community through blog posts and
                speaking at local meetups.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="relative">
              <img src="/developer-workspace.png" alt="Developer workspace" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl mb-12 text-card-foreground">What Drives Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif font-semibold text-xl mb-4 text-card-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                I'm always exploring new technologies and approaches to solve problems more efficiently and creatively.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-xl mb-4 text-card-foreground">Quality</h3>
              <p className="text-muted-foreground">
                I believe in delivering high-quality work that stands the test of time and provides real value to users.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-xl mb-4 text-card-foreground">Automation</h3>
              <p className="text-muted-foreground">
                I'm passionate about automating repetitive tasks and creating efficient workflows that save time and
                reduce errors.
              </p>
            </div>
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
