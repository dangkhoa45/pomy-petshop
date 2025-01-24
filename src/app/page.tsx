"use client"
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import QuestionSection from "@/components/QuestionSection";
import ServiceSection from "@/components/ServiceSection";
import StatisticSection from "@/components/StatisticSection";
import TestimonialSection from "@/components/TestimonialSection";
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
