"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, MapPin, Phone, Calendar } from "lucide-react"
import Navigation from "@/components/navigation"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif font-bold text-4xl md:text-5xl mb-6 text-foreground">Let's Work Together</h1>
            <p className="text-xl text-muted-foreground">
              I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can
              collaborate!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <Mail className="w-5 h-5 mr-2 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Drop me a line and I'll get back to you as soon as possible.
                </p>
                <Button className="bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  vignesh.sundaramahalingam@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-serif flex items-center">
                  <Linkedin className="w-5 h-5 mr-2 text-primary" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Connect with me on LinkedIn for professional networking.</p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => window.open("https://www.linkedin.com/in/vignesh-sundaramahalingam-12954055/", "_blank")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Github className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-serif font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-muted-foreground mb-3">Check out my code</p>
                <Button variant="outline" size="sm" onClick={() => window.open("https://github.com/vignesh-110592", "_blank")}>
                  View Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-serif font-semibold mb-2">Location</h3>
                <p className="text-sm text-muted-foreground">Ingolstadt, Germany</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Phone className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-serif font-semibold mb-2">Phone</h3>
                <p className="text-sm text-muted-foreground">+49 179 257 3336</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="font-serif text-center">Ready to Start a Project?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from
                you. Let's discuss how we can bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
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
