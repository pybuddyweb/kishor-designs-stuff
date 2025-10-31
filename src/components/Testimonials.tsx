import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Kishor transformed our brand identity completely. The new design system increased our conversion rate by 45% and our team finally has clarity on our visual direction. Best investment we made this year!",
      author: "Sarah Chen",
      role: "CEO",
      company: "TechFlow",
      logo: "/placeholder.svg",
    },
    {
      quote: "Working with Kishor was seamless. He understood our vision immediately and delivered designs that exceeded expectations. Our app's user satisfaction scores jumped from 3.2 to 4.8 stars after the redesign.",
      author: "Marcus Rodriguez",
      role: "Product Manager",
      company: "FreshEats",
      logo: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Success Stories</h2>
          <div className="w-20 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-smooth animate-fade-in-up border border-border relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Quote */}
              <p className="text-lg leading-relaxed mb-6 mt-4 italic">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <img
                  src={testimonial.logo}
                  alt={`${testimonial.company} logo`}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
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
