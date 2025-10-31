import { Briefcase, GraduationCap, Award, Code, TrendingUp } from "lucide-react";

const About = () => {
  const milestones = [
    {
      icon: GraduationCap,
      year: "2019",
      title: "Creative Foundation",
      description:
        "Completed Visual Communication and began exploring digital design & web technologies.",
    },
    {
      icon: Briefcase,
      year: "2021",
      title: "Freelance Journey",
      description:
        "Started working with startups & businesses, delivering brand identities and responsive websites.",
    },
    {
      icon: Code,
      year: "2023",
      title: "Full-Stack Upgrade",
      description:
        "Expanded into front-end web development using React, Tailwind, and modern web frameworks.",
    },
    {
      icon: Award,
      year: "2025",
      title: "Creative Developer",
      description:
        "Recognized for bridging the gap between design and development with functional, aesthetic web experiences.",
    },
  ];

  const skills = [
    { name: "Brand & Visual Design", level: 95 },
    { name: "UI/UX Design", level: 90 },
    { name: "Front-End Development", level: 88 },
    { name: "React & Tailwind", level: 85 },
    { name: "Illustration & Motion Graphics", level: 80 },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-5"></div>

      <div className="container max-w-7xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            <TrendingUp className="w-4 h-4" />
            Get to Know Me
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">About Me</h2>
          <div className="w-24 h-1.5 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - Text & Skills */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all">
              <div className="space-y-6">
                <p className="text-xl leading-relaxed">
                  I'm{" "}
                  <span className="font-bold gradient-primary bg-clip-text text-transparent">
                    Kishor Anbu
                  </span>
                  , a passionate{" "}
                  <span className="font-semibold">Graphic Designer & Web Developer</span> who blends
                  creativity with technology. I build designs that not only look stunning but also
                  function seamlessly across devices.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  With 5+ years of experience crafting visuals and digital interfaces, I help
                  brands establish a strong online presence — from identity design to fully
                  responsive websites. My workflow merges art and code to deliver impactful
                  results.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not designing or coding, you'll find me exploring new UI trends,
                  improving web performance, or mentoring creatives stepping into tech.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="glass-card rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - Timeline */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-8">My Journey</h3>
            {milestones.map((milestone, index) => (
              <div key={index} className="group relative">
                {/* Connection line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-primary to-accent opacity-20"></div>
                )}

                <div className="glass-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group-hover:scale-105">
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
                        <milestone.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="font-bold text-xl mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
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
