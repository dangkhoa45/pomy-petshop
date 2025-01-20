import FeatureService from "@/components/FeatureService";
import PricingService from "@/components/PricingService";
import QuestionService from "@/components/QuestionService";

function ServicePage() {
  return (
    <div className="bg-gradient-to-r from-green-100 to-pink-200">
      <FeatureService />
      <QuestionService />
      <PricingService />

      {/* <ServiceList /> */}
    </div>
  );
}

export default ServicePage;
