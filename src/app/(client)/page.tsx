import BrandIntroduction from "@/components/layout/BrandIntroduction";
import ContactForm from "@/components/layout/ContactForm";
import HeroSection from "@/components/layout/HeroSection";
import ProductShowcase from "@/components/layout/ProductShowcase";
import Testimonials from "@/components/layout/Testimonials";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BrandIntroduction />
      <ProductShowcase />
      {/* <ProductionProcess /> */}
      <Testimonials />
      <ContactForm />
      <Toaster position="top-right" richColors />
    </div>
  );
}
