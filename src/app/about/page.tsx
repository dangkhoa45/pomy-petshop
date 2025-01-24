"use client";
import AboutSecondary from "@/components/AboutSecondary";
import QuestionSection from "@/components/QuestionSection";
import ServiceSection from "@/components/ServiceSection";
import StatisticSecondary from "@/components/StatisticSecondary";
import TestimonialSection from "@/components/TestimonialSection";
import { useEffect } from "react";

function AboutPage() {
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
      <AboutSecondary />
      <ServiceSection />
      <StatisticSecondary />
      <QuestionSection />
      <TestimonialSection />
    </div>
  );
}

export default AboutPage;
