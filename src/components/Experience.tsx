import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Palette, Calendar } from "lucide-react"

export const Experience = () => {
  const experiences = [
    {
      company: "Granville",
      role: "Designer & Intern",
      period: "Dec 2024 – Feb 2025",
      type: "Internship",
      description: "Designed an MIS for FSRP (Malawi), worked on UX/UI for ALETU and PAYGo platforms, and collaborated cross-functionally on scalable platforms.",
      achievements: [
        "Designed comprehensive MIS system",
        "Improved UX/UI for multiple platforms",
        "Cross-functional collaboration",
        "Scalable platform development"
      ],
      icon: Building2,
      color: "primary"
    },
    {
      company: "Beta-Labs, IIIT Kottayam",
      role: "Lead of Design",
      period: "Aug 2024 – Present",
      type: "Leadership",
      description: "Leading design initiatives for website and app design, branding, and product UI development.",
      achievements: [
        "Website and app design leadership",
        "Brand identity development",
        "Product UI/UX design",
        "Team coordination and mentoring"
      ],
      icon: Palette,
      color: "accent"
    },
    {
      company: "GDSC IIIT Kottayam",
      role: "Design Member",
      period: "2022 – 2023",
      type: "Community",
      description: "Handled event graphics and coordinated 20+ design-driven sessions for the Google Developer Student Club.",
      achievements: [
        "Event graphics design",
        "Coordinated 20+ sessions",
        "Community engagement",
        "Design workflow optimization"
      ],
      icon: Users,
      color: "secondary"
    }
  ]

  return (
    <section id="experience" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey through innovative companies and impactful projects
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-500 group overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6 items-start">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-${exp.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className={`w-6 h-6 text-${exp.color}`} />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-2">{exp.company}</h3>
                      <p className="text-primary font-semibold text-lg">{exp.role}</p>
                    </div>
                    
                    {/* Description */}
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Visual Element */}
                    <div className="lg:col-span-1 flex justify-center lg:justify-end">
                      <div className="w-24 h-24 bg-gradient-primary rounded-lg opacity-20 group-hover:opacity-40 transition-opacity flex items-center justify-center">
                        <div className="w-12 h-12 border-2 border-foreground/30 rounded-lg transform rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}