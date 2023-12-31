import HeroSection from "./HeroSection";
import ReviewSection from "./ReviewSection";
import ProjectSection from "./ProjectSection";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <ReviewSection />
      <ProjectSection />
      <CTASection />
    </div>
  );
}
