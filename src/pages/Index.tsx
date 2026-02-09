import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ProductCategories from "@/components/ProductCategories";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <ProductCategories />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
