import { AboutSection } from "../components/architecture/AboutSection";
import { ContactSection } from "../components/architecture/ContactSection";
import { ExperienceSection } from "../components/architecture/ExperienceSection";
import { HeroSection } from "../components/architecture/HeroSection";
import { ProcessSection } from "../components/architecture/ProcessSection";
import { ProjectsSection } from "../components/architecture/ProjectsSection";
import { ServicesSection } from "../components/architecture/ServicesSection";
import { ScrollToHeroButton } from "../components/common/ScrollToHeroButton";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { navigationItems } from "../data/architectureHome";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useScrollState } from "../hooks/useScrollState";

export function ArchitectureHomePage() {
  const isScrolled = useScrollState();

  useRevealOnScroll();

  return (
    <div className="bg-[#f5f0ea] text-[#17120d]">
      <Header
        activeLabel="Home"
        isScrolled={isScrolled}
        navigationItems={navigationItems}
      />
      <main>
        <HeroSection />
        <AboutSection />
        {/* <ServicesSection /> */}
        <ExperienceSection />
        {/* <ProjectsSection /> */}
        <ProcessSection />
        {/* <TestimonialsSection
          activeIndex={activeTestimonial}
          setActiveIndex={setActiveTestimonial}
          testimonials={testimonials}
        />
        <BlogSection /> */}
        <ContactSection />
      </main>
      <Footer />
      <ScrollToHeroButton />
    </div>
  );
}
