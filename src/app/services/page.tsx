"use client";
import { CTA } from "@/components/shared";
import { FeatureService, QuestionService } from "@/components/features";
import { PricingServiceHotel, PricingServiceSPA } from "@/components/pricing";
import { useEffect } from "react";

function ServicePage() {
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
      <FeatureService />
      <QuestionService />
      <CTA />
      <PricingServiceSPA />
      <PricingServiceHotel />
    </div>
  );
}

export default ServicePage;
