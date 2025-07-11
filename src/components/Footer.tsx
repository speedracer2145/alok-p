import { Button } from "@/components/ui/button"
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AP</span>
              </div>
              <span className="text-xl font-bold text-foreground">Alok Prakash</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Alok Prakash. All rights reserved.
            </p>
          </div>
          
          {/* Made with Love */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> and lots of ☕
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Designed & Developed with modern technologies
            </p>
          </div>
          
          {/* Social Links & Back to Top */}
          <div className="text-center md:text-right space-y-4">
            <div className="flex justify-center md:justify-end gap-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:scale-110 transition-transform" asChild>
                <a href="mailto:alokprakash1587@gmail.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group hover:border-primary hover:text-primary"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-primary mt-8 opacity-20"></div>
        
        {/* Bottom Section */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-xs">
            "Innovation distinguishes between a leader and a follower." - Steve Jobs
          </p>
        </div>
      </div>
    </footer>
  )
}