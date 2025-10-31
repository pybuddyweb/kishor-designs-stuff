import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Kishor transformed our brand identity completely. The new design system increased our conversion rate by 45% and our team finally has clarity on our visual direction. Best investment we made this year!",
      author: "Sarah Chen",
      role: "CEO",
      company: "TechFlow",
      logo: "/placeholder.svg",
      rating: 5,
    },
    {
      quote: "Working with Kishor was seamless. He understood our vision immediately and delivered designs that exceeded expectations. Our app's user satisfaction scores jumped from 3.2 to 4.8 stars after the redesign.",
      author: "Marcus Rodriguez",
      role: "Product Manager",
      company: "FreshEats",
      logo: "/placeholder.svg",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 gradient-accent rounded-full blur-3xl opacity-5"></div>
      
      <div className="container max-w-7xl mx-auto relative">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            <Quote className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Client Success Stories</h2>
          <div className="w-24 h-1.5 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group glass-card rounded-3xl p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Decorative quote background */}
              <div className="absolute top-0 right-0 w-32 h-32 gradient-primary opacity-5 rounded-bl-full"></div>
              
              {/* Quote icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center shadow-glow">
                  <Quote className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at <span className="text-primary font-medium">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
