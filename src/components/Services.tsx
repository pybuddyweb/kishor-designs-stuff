import { Palette, Smartphone, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Complete brand systems that tell your story and connect with your audience.",
      deliverables: ["Logo design", "Brand guidelines", "Color palettes", "Typography systems"],
      pricing: "Starting at $800",
    },
    {
      icon: Smartphone,
      title: "UI/UX Visuals",
      description: "Beautiful, intuitive interface designs that users love to interact with.",
      deliverables: ["App interfaces", "Web design", "Prototypes", "Design systems"],
      pricing: "Starting at $1,200",
    },
    {
      icon: Share2,
      title: "Social Media Assets",
      description: "Eye-catching content that stops the scroll and drives engagement.",
      deliverables: ["Post templates", "Story designs", "Ad creatives", "Content calendars"],
      pricing: "Starting at $500",
    },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 gradient-accent mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible design solutions tailored to your needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth animate-fade-in-up border border-border hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Deliverables */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-primary mb-3">What you get:</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="pt-6 border-t border-border">
                <p className="text-xl font-bold text-primary mb-4">{service.pricing}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-smooth"
                  onClick={scrollToContact}
                >
                  Get a Quote
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
