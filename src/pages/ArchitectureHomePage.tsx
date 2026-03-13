import { AboutSection } from "../components/architecture/AboutSection";
import { BlogSection } from "../components/architecture/BlogSection";
import { ContactSection } from "../components/architecture/ContactSection";
import { ExperienceSection } from "../components/architecture/ExperienceSection";
import { HeroSection } from "../components/architecture/HeroSection";
import { ProcessSection } from "../components/architecture/ProcessSection";
import { ProjectsSection } from "../components/architecture/ProjectsSection";
import { ServicesSection } from "../components/architecture/ServicesSection";
import { TestimonialsSection } from "../components/architecture/TestimonialsSection";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { navigationItems, testimonials } from "../data/architectureHome";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useRotatingIndex } from "../hooks/useRotatingIndex";
import { useScrollState } from "../hooks/useScrollState";

export function ArchitectureHomePage() {
  const isScrolled = useScrollState();
  const [activeTestimonial, setActiveTestimonial] = useRotatingIndex(
    testimonials.length,
  );

  useRevealOnScroll();

  return (
    <div className="bg-[#f5f0ea] text-[#17120d]">
      <Header isScrolled={isScrolled} navigationItems={navigationItems} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection
          activeIndex={activeTestimonial}
          setActiveIndex={setActiveTestimonial}
          testimonials={testimonials}
        />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
