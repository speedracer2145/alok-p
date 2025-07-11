import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Calendar, Users, Zap } from "lucide-react"

export const Projects = () => {
  const projects = [
    {
      title: "BetaLabs Club Website",
      description: "Interactive club site with animated Figma-based design & event scheduling tools. Features modern UI animations and seamless user experience.",
      status: "Completed",
      category: "Web Development",
      technologies: ["React", "Figma", "Animation", "Event Management"],
      features: ["Animated UI", "Event Scheduling", "Responsive Design", "Interactive Elements"],
      metrics: { users: "500+", performance: "95%", uptime: "99.9%" },
      image: "/api/placeholder/400/250",
      link: "#",
      github: "#"
    },
    {
      title: "Programming Compiler",
      description: "Multi-language compiler with syntax highlighting and error feedback. Built with modern compiler design principles and user-friendly interface.",
      status: "In Progress",
      category: "Systems Programming",
      technologies: ["Rust", "Compiler Design", "AST", "LLVM"],
      features: ["Multi-language Support", "Syntax Highlighting", "Error Detection", "Code Optimization"],
      metrics: { languages: "5", accuracy: "98%", speed: "2x faster" },
      image: "/api/placeholder/400/250",
      link: "#",
      github: "#"
    },
    {
      title: "Eventify Platform",
      description: "Automated platform for event scheduling and management. Built with REST APIs delivering 30% performance gain in handling data.",
      status: "In Progress",
      category: "Full-stack",
      technologies: ["REST API", "Database", "Automation", "Performance"],
      features: ["Event Automation", "Real-time Updates", "Analytics Dashboard", "Multi-user Support"],
      metrics: { improvement: "+30%", events: "1000+", response: "<100ms" },
      image: "/api/placeholder/400/250",
      link: "#",
      github: "#"
    }
  ]

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 group overflow-hidden h-full hover:scale-[1.02] hover:shadow-xl"
            >
              <CardContent className="p-0 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-primary/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-2 border-foreground/20 rounded-lg transform rotate-45 group-hover:rotate-12 transition-transform duration-500"></div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="bg-background/90 backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Project Metrics</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button variant="default" size="sm" className="flex-1 group/btn">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      View Live
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 group/btn">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
          <Button variant="neon" size="lg" className="group">
            <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}