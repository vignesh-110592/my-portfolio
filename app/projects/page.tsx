import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Navigation from "@/components/navigation"
import Link from "next/link"

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation />

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-center mb-12 text-foreground">
            Featured Projects
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/ecommerce-dashboard.png"
                  alt="E-commerce Platform"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">E-commerce Platform</CardTitle>
                <CardDescription>
                  Full-stack e-commerce solution with payment integration, inventory management, and comprehensive admin
                  dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Stripe</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/task-management-app.png"
                  alt="Task Management App"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Task Management App</CardTitle>
                <CardDescription>
                  Collaborative task management tool with real-time updates, team features, and advanced project
                  tracking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Vue.js</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Socket.io</Badge>
                  <Badge variant="outline">Vuetify</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/weather-app-interface.png"
                  alt="Weather App"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Weather Forecast App</CardTitle>
                <CardDescription>
                  Beautiful weather app with location-based forecasts, interactive maps, and detailed weather analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">OpenWeather API</Badge>
                  <Badge variant="outline">Maps</Badge>
                  <Badge variant="outline">Expo</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl">Blog Platform</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Personal Blog Platform</CardTitle>
                <CardDescription>
                  Modern blog platform with markdown support, SEO optimization, and content management system.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">MDX</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Vercel</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl">Finance Tracker</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Personal Finance Tracker</CardTitle>
                <CardDescription>
                  Comprehensive finance management app with budget tracking, expense categorization, and financial
                  insights.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Chart.js</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl">Recipe App</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="font-serif">Recipe Discovery App</CardTitle>
                <CardDescription>
                  Social recipe sharing platform with ingredient-based search, meal planning, and cooking timers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Firebase</Badge>
                  <Badge variant="outline">Spoonacular API</Badge>
                  <Badge variant="outline">Dart</Badge>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl mb-4 text-card-foreground">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start a Conversation
              </Button>
            </Link>
            <Link href="/experience">
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
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
