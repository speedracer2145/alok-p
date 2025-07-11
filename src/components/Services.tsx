import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Box, Code, Brain, Settings, ArrowRight } from "lucide-react"

export const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and visually stunning interfaces for apps and platforms that prioritize user experience and accessibility.",
      features: ["User Research & Testing", "Wireframing & Prototyping", "Design Systems", "Mobile-First Design"],
      icon: Smartphone,
      color: "primary"
    },
    {
      title: "3D Design & Animation",
      description: "Creating immersive 3D experiences and animations that bring ideas to life with cutting-edge modeling and rendering techniques.",
      features: ["3D Modeling", "Character Animation", "Environmental Design", "Real-time Rendering"],
      icon: Box,
      color: "accent"
    },
    {
      title: "Full-stack Development",
      description: "Building robust, scalable web applications using modern frameworks like MERN stack and Django for end-to-end solutions.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Cloud Deployment"],
      icon: Code,
      color: "secondary"
    },
    {
      title: "ML Modeling & Integration",
      description: "Developing and integrating machine learning models that solve real-world problems with data-driven insights and automation.",
      features: ["Predictive Modeling", "Computer Vision", "NLP Solutions", "Model Deployment"],
      icon: Brain,
      color: "primary"
    },
    {
      title: "DevOps Pipeline Automation",
      description: "Streamlining development workflows with automated CI/CD pipelines, containerization, and infrastructure management.",
      features: ["CI/CD Setup", "Docker Containerization", "Cloud Infrastructure", "Monitoring & Logging"],
      icon: Settings,
      color: "accent"
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            What I <span className="text-primary">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions that bridge creativity and technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 group overflow-hidden h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 bg-${service.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <IconComponent className={`w-7 h-7 text-${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-1">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-foreground/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn justify-between w-full hover:bg-primary/10 hover:text-primary"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-primary/10 border-primary/30 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Ready to bring your ideas to life?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate on your next project and create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg">
                  Start a Project
                </Button>
                <Button variant="neon" size="lg">
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}