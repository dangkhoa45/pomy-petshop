import FeatureService from "@/components/FeatureService";
import QuestionService from "@/components/QuestionService";
import ServiceList from "@/components/ServiceList";

function ServicePage() {
  return (
    <div className="bg-gradient-to-r from-green-100 to-pink-200">
      <FeatureService />
      <QuestionService />
      <ServiceList />
    </div>
  );
}

export default ServicePage;
