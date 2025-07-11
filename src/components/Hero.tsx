import { Button } from "@/components/ui/button"
import { Download, Eye, Mail, Github, Linkedin } from "lucide-react"

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Clean white grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_100%_/_0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_100%_/_0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      {/* Minimal white geometric accents */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-foreground/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-foreground/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-1/4 left-1/3 w-4 h-4 border border-foreground/20 rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Subtle white glow effects */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-foreground/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-6 text-center z-10">
        {/* Clean White Profile Section */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-48 h-48 rounded-full bg-foreground/5 border-2 border-foreground/10 flex items-center justify-center backdrop-blur-sm hover:bg-foreground/10 transition-all duration-500">
              <div className="text-6xl font-bold text-foreground">AP</div>
            </div>
            <div className="absolute -inset-2 rounded-full bg-foreground/5 blur-sm group-hover:bg-foreground/10 transition-all duration-500"></div>
          </div>
        </div>
        
        <div className="animate-fade-in space-y-10">
          <div className="space-y-6">
            <h1 className="text-7xl lg:text-9xl font-bold leading-tight">
              <span className="block text-foreground/90">Hi, I'm</span>
              <span className="block text-foreground">Alok Prakash</span>
            </h1>
            
            <div className="w-32 h-0.5 bg-foreground/30 mx-auto"></div>
          </div>
          
          <p className="text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            I design, build, and innovate at the intersection of{" "}
            <span className="text-foreground font-semibold">design</span> and{" "}
            <span className="text-primary font-semibold">technology</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Button variant="default" size="xl" className="group bg-foreground text-background hover:bg-foreground/90 shadow-[0_0_20px_hsl(0_0%_100%_/_0.2)]">
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Work
            </Button>
            <Button variant="outline" size="xl" className="group border-foreground/30 text-foreground hover:border-foreground hover:bg-foreground/10">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
            <Button variant="ghost" size="xl" className="group text-foreground/80 hover:bg-foreground/10 hover:text-foreground">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-8 pt-6 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button variant="ghost" size="icon" className="rounded-full text-foreground/70 hover:scale-110 hover:bg-foreground/10 hover:text-foreground transition-all duration-300">
              <Github className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-foreground/70 hover:scale-110 hover:bg-foreground/10 hover:text-foreground transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </Button>
          </div>
        </div>
        
        {/* Clean scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-3">
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center relative">
              <div className="w-1.5 h-3 bg-foreground/60 rounded-full mt-2 animate-tech-pulse"></div>
            </div>
            <div className="text-xs text-foreground/50 uppercase tracking-wider font-medium">Scroll</div>
          </div>
        </div>
      </div>
    </section>
  )
}