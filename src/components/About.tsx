import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  const milestones = [
    {
      icon: GraduationCap,
      year: "2018",
      title: "Design Journey Begins",
      description: "Graduated with honors in Visual Communication Design",
    },
    {
      icon: Briefcase,
      year: "2020",
      title: "Freelance Launch",
      description: "Started working with tech startups and marketing agencies",
    },
    {
      icon: Award,
      year: "2023",
      title: "Industry Recognition",
      description: "Featured in Design Weekly, 50+ successful client projects",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg leading-relaxed">
              I'm <span className="font-semibold text-primary">Kishor Anbu</span>, a graphic designer who blends strategy with playful aesthetics. I help brands speak clearly through strong visual identity and intuitive assets.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With 5+ years of experience working with startup founders, marketing managers, and small businesses, I specialize in creating memorable design systems that drive results. My approach combines bold creativity with strategic thinking to deliver visuals that don't just look good—they work.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not designing, you'll find me exploring new design trends, sketching ideas, or helping fellow designers grow their craft.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-6 animate-slide-in-right">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-smooth group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-semibold text-primary">{milestone.year}</span>
                    <div className="h-px flex-1 bg-border"></div>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
