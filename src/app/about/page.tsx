import OurTeamSection from "@/components/OurTeamSection";
import QuestionSection from "@/components/QuestionSection";
import ServiceSection from "@/components/ServiceSection";
import StatisticSecondary from "@/components/StatisticSecondary";
import TestimonialSection from "@/components/TestimonialSection";

function AboutPage() {
  return (
    <>
      <ServiceSection />
      <StatisticSecondary />
      <QuestionSection />
      <TestimonialSection />
      <OurTeamSection />
    </>
  );
}

export default AboutPage;
