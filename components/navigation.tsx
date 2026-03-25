"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function Navigation() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/education", label: "Education" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ]

  const handleNavClick = () => {
    setTimeout(() => window.scrollTo(0, 0), 100)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-serif font-bold text-xl text-primary">
            <Link href="/" onClick={handleNavClick}>
              Home
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`transition-colors ${
                  pathname === item.href ? "text-primary font-medium" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
