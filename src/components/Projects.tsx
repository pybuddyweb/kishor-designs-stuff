import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "TechFlow - SaaS Branding",
      problem: "Startup needed a bold identity to stand out in crowded market",
      solution: "Created modern brand system with vibrant gradients and clean typography",
      outcome: "40% increase in brand recognition, featured on Product Hunt",
      image: project1Image,
      skills: ["Adobe Illustrator", "Figma", "Brand Strategy"],
    },
    {
      title: "FreshEats - Mobile App UI",
      problem: "Food delivery app had poor user retention due to confusing navigation",
      solution: "Redesigned entire user flow with intuitive interface and playful illustrations",
      outcome: "User retention increased by 65%, 4.8★ App Store rating",
      image: project2Image,
      skills: ["Figma", "UI Design", "Prototyping"],
    },
    {
      title: "Bloom Beauty - Social Campaign",
      problem: "Beauty brand struggled with inconsistent social media presence",
      solution: "Developed cohesive content system with templates and brand guidelines",
      outcome: "300% growth in engagement, gained 50K followers in 3 months",
      image: project3Image,
      skills: ["Photoshop", "Canva", "Social Media Design"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-hero rounded-full blur-3xl opacity-5"></div>
      
      <div className="container max-w-7xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            <Eye className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h2>
          <div className="w-24 h-1.5 gradient-accent mx-auto rounded-full"></div>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real results for real businesses
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden h-80 lg:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-8">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-bold mb-6 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 gradient-primary"></div>
                        <p className="text-sm font-bold text-primary uppercase tracking-wide">Challenge</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 gradient-accent"></div>
                        <p className="text-sm font-bold text-accent uppercase tracking-wide">Solution</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-foreground"></div>
                        <p className="text-sm font-bold uppercase tracking-wide">Impact</p>
                      </div>
                      <p className="font-semibold text-lg">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="px-4 py-1.5 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
