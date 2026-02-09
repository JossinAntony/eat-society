import { forwardRef } from "react";
import { Check, Truck, Award, Heart } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const features = [
  {
    icon: Check,
    title: "Ozone Washed",
    description: "All vegetables cleaned with ozone technology – pesticide-free & disinfected",
  },
  {
    icon: Truck,
    title: "Ready to Cook",
    description: "Grated & chopped veggies save you prep time in the kitchen",
  },
  {
    icon: Award,
    title: "Local Butchers",
    description: "Fresh meat sourced daily from trusted neighborhood butchers",
  },
  {
    icon: Heart,
    title: "Farm Organic",
    description: "Farm-fresh organic vegetables for health-conscious families",
  },
];

const About = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative opacity-0 animate-slide-in-left">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={aboutImage}
                alt="Our shop interior"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              A Tradition of <br />
              <span className="text-primary">Fresh Quality</span>
            </h2>
            <p className="font-body text-gray-600 text-lg mb-8 leading-relaxed">
              At Fresh & Prime, we bring you the best of both worlds: premium
              cooler-fresh meat from trusted local butchers, and time-saving
              ready-to-cook vegetables. Every vegetable is ozone-washed to
              eliminate pesticides and bacteria, then grated or chopped for
              your convenience. We also offer farm-fresh organic options for
              the health-conscious.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
About.displayName = "About";

export default About;
