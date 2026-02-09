import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import meatImage from "@/assets/meat-category.jpg";
import vegetablesImage from "@/assets/vegetables-category.jpg";

const categories = [
  {
    title: "Cooler-Fresh Meat",
    description:
      "Premium cuts from trusted local butchers, kept fresh in our coolers. Beef, lamb, pork, and poultry – expertly butchered and ready for your kitchen.",
    image: meatImage,
    features: ["Local Butchers", "Cooler Fresh", "Daily Supply"],
    color: "secondary",
  },
  {
    title: "Ready-to-Cook Veggies",
    description:
      "Save time with our grated & chopped vegetables – all ozone-washed to remove pesticides and fully disinfected. Just open and cook!",
    image: vegetablesImage,
    features: ["Ozone Washed", "Grated & Chopped", "Pesticide Free"],
    color: "primary",
  },
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quality You Can Taste
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            We source only the finest meats and freshest vegetables from local
            farms committed to sustainable practices.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-elevated transition-all duration-500 opacity-0 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-${category.color}/80 to-transparent opacity-60`}
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  {category.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button
                  variant={category.color === "primary" ? "default" : "secondary"}
                  className="group/btn"
                >
                  Explore {category.title.split(" ")[1]}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
