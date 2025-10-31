import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
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
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative overflow-hidden h-64 md:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-6">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Challenge</p>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-1">Solution</p>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-accent mb-1">Impact</p>
                      <p className="font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="px-3 py-1">
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
