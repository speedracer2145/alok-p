import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Lightbulb } from "lucide-react"

export const About = () => {
  const education = [
    {
      period: "2022 - 2026",
      institution: "IIIT Kottayam",
      degree: "B.Tech",
      description: "Computer Science & Engineering"
    },
    {
      period: "2020 - 2022",
      institution: "Swargarani School and PU College",
      degree: "Pre-University",
      description: "Science Stream"
    },
    {
      period: "2018 - 2020",
      institution: "Shalom Int'l School, Gurgaon",
      degree: "High School",
      description: "CBSE Board"
    },
    {
      period: "2010 - 2018",
      institution: "SJR Kengeri Public School",
      degree: "Primary & Secondary",
      description: "Foundation Years"
    }
  ]

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">My Story</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I am an active <span className="text-primary font-semibold">3D designer</span> with a deep love for design, innovation, and machine learning. I'm driven by curiosity, challenges, and the desire to craft meaningful, futuristic digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mt-4">
                  My journey spans from creative design to full-stack development and cutting-edge AI/ML implementations. I believe in the power of technology to transform ideas into reality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card border-border/50 hover:border-accent/30 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Philosophy</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "Design is not just what it looks like and feels like. Design is how it works." I approach every project with this mindset, ensuring that beauty and functionality go hand in hand.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education Journey</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-hover:bg-primary/50 transition-colors"></div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-3 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                  
                  <Card className="bg-card/50 border-border/30 hover:border-primary/30 hover:bg-gradient-card transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{item.institution}</h4>
                      <p className="text-accent font-medium mb-2">{item.degree}</p>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}