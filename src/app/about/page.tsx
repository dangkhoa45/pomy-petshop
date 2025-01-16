import OurTeamSection from "@/components/OurTeamSection";
import QuestionSection from "@/components/QuestionSection";
import ServiceSection from "@/components/ServiceSection";
import StatisticSecondary from "@/components/StatisticSecondary";
import TestimonialSection from "@/components/TestimonialSection";

function AboutPage() {
  return (
    <div className="bg-gradient-to-r from-green-100 to-pink-200">
      <ServiceSection />
      <StatisticSecondary />
      <QuestionSection />
      <TestimonialSection />
      <OurTeamSection />
    </div>
  );
}

export default AboutPage;
