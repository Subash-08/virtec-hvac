import { HeroSection } from "@/components/sections/HeroSection";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <FeaturedProducts />
      <ContactCTA />
    </>
  );
}
