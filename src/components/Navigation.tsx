import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, User, Briefcase, Code, Wrench, FolderOpen, Mail } from "lucide-react"

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Code },
    { label: "Services", href: "#services", icon: Wrench },
    { label: "Projects", href: "#projects", icon: FolderOpen },
    { label: "Contact", href: "#contact", icon: Mail }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AP</span>
            </div>
            <span className="text-xl font-bold text-foreground">Alok Prakash</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="text-muted-foreground hover:text-primary transition-colors group"
                  onClick={() => scrollToSection(item.href)}
                >
                  <IconComponent className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  {item.label}
                </Button>
              )
            })}
          </div>
          
          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" onClick={() => scrollToSection('#contact')}>
              Let's Connect
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/50">
            <div className="p-6 space-y-4">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start text-muted-foreground hover:text-primary transition-colors group"
                    onClick={() => scrollToSection(item.href)}
                  >
                    <IconComponent className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                    {item.label}
                  </Button>
                )
              })}
              <Button 
                variant="hero" 
                className="w-full mt-4"
                onClick={() => scrollToSection('#contact')}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}