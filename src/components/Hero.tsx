import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import portraitImage from "@/assets/portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-10 blur-3xl"></div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Portrait */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={portraitImage}
                alt="Kishor Anbu - Graphic Designer"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-card-hover border-4 border-primary/20"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Freelance Graphic Designer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Kishor Anbu
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl">
              I design bold visuals that get noticed and remembered.
            </p>

            <p className="text-lg text-muted-foreground max-w-xl">
              Turning ideas into bold, usable visuals for startups and businesses that want to stand out.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group gradient-primary hover:shadow-card-hover transition-smooth text-lg"
              >
                View Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="text-lg border-2 hover:border-primary hover:text-primary transition-smooth"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
