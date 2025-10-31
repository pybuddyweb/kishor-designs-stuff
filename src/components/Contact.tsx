import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Twitter, Instagram, FileDown, Send, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.", {
      description: "Usually within 24 hours",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background"></div>
      
      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Send className="w-4 h-4" />
            Get in Touch
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Work Together</h2>
          <div className="w-24 h-1.5 gradient-primary mx-auto rounded-full"></div>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Drop me a message and let's create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-slide-in-left">
            <div className="glass-card rounded-3xl p-8 lg:p-10 shadow-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-3 text-foreground">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="h-14 border-2 focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-3 text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="h-14 border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3 text-foreground">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and timeline..."
                    className="min-h-40 resize-none border-2 focus:border-primary transition-colors"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary hover:shadow-glow transition-all duration-300 h-14 text-lg font-semibold"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in-right">
            {/* Direct Contact */}
            <div className="glass-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all">
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-5">
                <a
                  href="mailto:kishor@example.com"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">Email</div>
                    <div className="font-medium group-hover:text-primary transition-colors">
                      kishor@example.com
                    </div>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-accent/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center group-hover:shadow-glow transition-all">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">WhatsApp</div>
                    <div className="font-medium group-hover:text-accent transition-colors">
                      +1 (234) 567-890
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted/30">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground mb-1">Location</div>
                    <div className="font-medium">Remote Worldwide</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-3xl p-8 shadow-card">
              <h3 className="text-xl font-bold mb-6">Connect Online</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-2xl bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-2xl bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-2xl bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Resume Download */}
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 gradient-hero opacity-90"></div>
              <div className="relative p-8 text-white">
                <h3 className="text-xl font-bold mb-3">Download Resume</h3>
                <p className="mb-6 text-white/90 leading-relaxed">
                  Get my full resume with detailed experience and portfolio.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-white hover:bg-white/90 text-primary font-semibold"
                >
                  <FileDown className="mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
