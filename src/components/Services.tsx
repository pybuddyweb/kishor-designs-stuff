import { Palette, Smartphone, Share2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Complete brand systems that tell your story and connect with your audience.",
      deliverables: ["Logo design", "Brand guidelines", "Color palettes", "Typography systems"],
      pricing: "Starting at $800",
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "UI/UX Visuals",
      description: "Beautiful, intuitive interface designs that users love to interact with.",
      deliverables: ["App interfaces", "Web design", "Prototypes", "Design systems"],
      pricing: "Starting at $1,200",
      color: "accent",
    },
    {
      icon: Share2,
      title: "Social Media Assets",
      description: "Eye-catching content that stops the scroll and drives engagement.",
      deliverables: ["Post templates", "Story designs", "Ad creatives", "Content calendars"],
      pricing: "Starting at $500",
      color: "primary",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 px-4 relative overflow-hidden bg-secondary/30">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 gradient-primary rounded-full blur-3xl opacity-5"></div>
      
      <div className="container max-w-7xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Palette className="w-4 h-4" />
            What I Offer
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Services</h2>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full"></div>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Flexible design solutions tailored to your needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2 border-transparent hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className="mb-8">
                <div className={`w-16 h-16 rounded-2xl ${service.color === 'primary' ? 'gradient-primary' : 'gradient-accent'} flex items-center justify-center group-hover:scale-110 group-hover:shadow-glow transition-all duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>

              {/* Deliverables */}
              <div className="mb-8">
                <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">What you get:</p>
                <ul className="space-y-3">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rounded-full ${service.color === 'primary' ? 'bg-primary' : 'bg-accent'}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-6 border-t border-border/50 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                    {service.pricing}
                  </span>
                </div>
                <Button
                  variant="outline"
                  className="w-full group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
