"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function Portfolio() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/Vignesh_Sundaramahalingam_CV.pdf"
    link.download = "Vignesh_Sundaramahalingam_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/VickyPhoto.png"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
          </div>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-foreground mb-6">
            Hi, I'm <span className="text-primary">Vignesh Sundaramahalingam</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I am a System Engineer and Performance Engineer with a Master's in Embedded Systems, specializing in DevOps,
            container orchestration, infrastructure provisioning and automation. Skilled in designing scalable
            architectures, optimizing system performance, cloud services and automation solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              onClick={() => window.open("/Lebenslauf.pdf", "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
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
