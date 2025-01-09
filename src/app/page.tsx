import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import QuestionSection from "@/components/QuestionSection";
import ServiceSection from "@/components/ServiceSection";
import StatisticSection from "@/components/StatisticSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-green-100 to-pink-200">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <StatisticSection />
      {/* <FeatureSection /> */}
      <QuestionSection />
      <ContactForm />
      <TestimonialSection />
      <GallerySection />
    </div>
  );
}
