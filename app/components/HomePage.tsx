import HeroSection from "./sections/HeroSection";
import VisionMissionSection from "./sections/VisionMissionSection";
import ProblemSection from "./sections/ProblemSection";
import LlmoSection from "./sections/LlmoSection";
import ReasonSection from "./sections/ReasonSection";
import ServiceSection from "./sections/ServiceSection";
import AiDevelopmentSection from "./sections/AiDevelopmentSection";
import CompanySection from "./sections/CompanySection";
import CtaSection from "./sections/CtaSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

export default function HomePage() {
  return (
    <div className="bg-[#f5f6f8] text-[#333333]">
      <HeroSection />
      <VisionMissionSection />
      <ProblemSection />
      <LlmoSection />
      <ReasonSection />
      <ServiceSection />
      <AiDevelopmentSection />
      <CompanySection />
      <CtaSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
