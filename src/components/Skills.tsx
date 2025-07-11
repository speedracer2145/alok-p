import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Brain, Server, Wrench } from "lucide-react"

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "primary",
      skills: ["C", "C++", "Java", "Python", "Rust", "R", "Dart"]
    },
    {
      title: "Frameworks",
      icon: Server,
      color: "accent",
      skills: ["React", "Angular", "Django", "Flask", "Node.js"]
    },
    {
      title: "Design Tools",
      icon: Palette,
      color: "secondary",
      skills: ["Figma", "Sketch", "Blender", "Maya", "Photoshop", "Unity"]
    },
    {
      title: "Concepts",
      icon: Brain,
      color: "primary",
      skills: ["AI/ML", "Cloud Computing", "Compiler Design", "Virtual Memory"]
    },
    {
      title: "Core Strengths",
      icon: Wrench,
      color: "accent",
      skills: ["Full-stack Dev", "DevOps", "UI/UX", "Product Thinking"]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative digital solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 group h-full"
              >
                <CardContent className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-${category.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 flex-1">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        {/* Skill Level Indicators */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Expertise Levels</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { level: "Expert", skills: ["UI/UX Design", "React", "Python"], percentage: 90 },
              { level: "Advanced", skills: ["Full-stack Dev", "Machine Learning", "3D Design"], percentage: 80 },
              { level: "Proficient", skills: ["DevOps", "Rust", "Unity"], percentage: 70 }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-card border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-4">{item.level}</h4>
                  <div className="space-y-3">
                    {item.skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{skill}</span>
                          <span className="text-primary">{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}