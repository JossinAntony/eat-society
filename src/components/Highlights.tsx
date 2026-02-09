import { forwardRef } from "react";
import { Droplets, Leaf, Scissors, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: Droplets,
    title: "Ozone Washed",
    description:
      "Advanced ozone cleaning technology removes 99.9% of pesticides, bacteria, and harmful residues from all vegetables.",
    color: "primary",
  },
  {
    icon: Scissors,
    title: "Grated & Chopped",
    description:
      "Skip the prep work! Our vegetables come ready-to-cook – perfectly grated, chopped, or sliced for your convenience.",
    color: "accent",
  },
  {
    icon: ShieldCheck,
    title: "100% Pesticide Free",
    description:
      "Every vegetable is thoroughly disinfected and safe for your family. No chemicals, no worries.",
    color: "secondary",
  },
  {
    icon: Leaf,
    title: "Farm-Fresh Organic",
    description:
      "Choose from our selection of certified organic vegetables, grown sustainably on local farms.",
    color: "primary",
  },
];

const Highlights = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Freshness You Can Trust
          </h2>
          <p className="font-body text-gray-500">
            We go the extra mile to ensure every product meets the highest
            standards of quality and safety.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-gray-50 p-6 rounded-2xl shadow-soft text-center group hover:shadow-elevated transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
Highlights.displayName = "Highlights";

export default Highlights;
