import { forwardRef } from "react";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Market Street", "Downtown, City 12345"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(555) 123-4567", "(555) 987-6543"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon-Sat: 7AM - 8PM", "Sunday: 8AM - 6PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["hello@freshandprime.com", "orders@freshandprime.com"],
  },
];

const Contact = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Have questions about our products or want to place a special order?
            Reach out to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Contact Information
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 bg-card rounded-xl shadow-soft opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  {item.details.map((detail) => (
                    <p
                      key={detail}
                      className="font-body text-muted-foreground text-sm"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-soft">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone (Optional)
                </label>
                <Input type="tel" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your order or question..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});
Contact.displayName = "Contact";

export default Contact;
