import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh meat and vegetables"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <span
            className="inline-block px-4 py-2 bg-primary/20 text-primary-foreground rounded-full text-sm font-medium mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Local Butchers • Ozone Washed • Ready to Cook
          </span>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Fresh Meat & <br />
            <span className="text-primary">Ready-to-Cook Veggies</span>
          </h1>

          <p
            className="font-body text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Premium cooler-fresh meat from local butchers. Grated & chopped
            vegetables, ozone-washed and 100% pesticide-free – straight from
            the farm to your kitchen.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" className="group">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              View Products
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                100%
              </p>
              <p className="text-sm text-primary-foreground/70">
                Ozone Washed
              </p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Local
              </p>
              <p className="text-sm text-primary-foreground/70">
                Trusted Butchers
              </p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Fresh
              </p>
              <p className="text-sm text-primary-foreground/70">
                Ready to Cook
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
Hero.displayName = "Hero";

export default Hero;
