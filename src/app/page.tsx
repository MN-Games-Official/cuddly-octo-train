import VideoHero from "@/components/sections/VideoHero";
import TrustBanner from "@/components/sections/TrustBanner";
import PlatformOverview from "@/components/sections/PlatformOverview";
import ProductShowcase from "@/components/sections/ProductShowcase";
import ClosingCTA from "@/components/sections/ClosingCTA";

export default function Home() {
  return (
    <>
      <VideoHero />
      <TrustBanner />
      <PlatformOverview />
      <ProductShowcase />
      <ClosingCTA />
    </>
  );
}