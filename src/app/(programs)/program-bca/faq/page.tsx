import Faq from "@/components/Faq";
import { bcaFaqs } from "@/data/faqData";

export default function MBAPage() {
  return (
    <div className="innerpagerightside">
      <Faq title="Frequently Asked Questions" faqs={bcaFaqs} />
    </div>
  );
}
