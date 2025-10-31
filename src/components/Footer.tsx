import { Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-secondary/20">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              Kishor Anbu
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Crafted with <Heart className="w-4 h-4 text-accent fill-accent" /> for amazing clients
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap gap-8 justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Copyright & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kishor Anbu. All rights reserved.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1 group"
            >
              Back to Top 
              <span className="inline-block group-hover:-translate-y-1 transition-transform">↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
