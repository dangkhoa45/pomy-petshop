"use client";
import {
  AboutSection,
  GallerySection,
  HeroSection,
  ServiceSection,
  StatisticSection,
  TestimonialSection,
} from "@/components/sections";
import { ContactForm, QuestionSection } from "@/components/features";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => event.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key === "I") ||
        (event.ctrlKey && event.shiftKey && event.key === "C") ||
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-100 to-pink-200">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <QuestionSection />
      <StatisticSection />
      <ContactForm />
      <TestimonialSection />
      <GallerySection />
    </div>
  );
}
