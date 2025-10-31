import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import portraitImage from "@/assets/portrait.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Portrait with enhanced styling */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative group">
              {/* Glow effects */}
              <div className="absolute -inset-8 gradient-primary rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="absolute -inset-4 gradient-accent rounded-full blur-2xl opacity-10 animate-pulse"></div>
              
              {/* Portrait */}
              <div className="relative">
                <img
                  src={portraitImage}
                  alt="Kishor Anbu - Graphic Designer"
                  className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-card-hover border-4 border-white/50 group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-6 py-3 shadow-card">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span className="font-semibold text-sm">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Freelance Graphic Designer
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Kishor <span className="gradient-primary bg-clip-text text-transparent">Anbu</span>
              </h1>
            </div>

            <p className="text-2xl md:text-3xl font-light text-foreground/90 max-w-2xl leading-relaxed">
              I design <span className="font-semibold text-primary">bold visuals</span> that get noticed and remembered.
            </p>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Turning ideas into bold, usable visuals for startups and businesses that want to stand out in the digital landscape.
            </p>

            {/* CTAs with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group gradient-primary hover:shadow-glow transition-all duration-300 text-lg h-14 px-8"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="text-lg h-14 px-8 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all"
              >
                Let's Talk
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 gradient-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
