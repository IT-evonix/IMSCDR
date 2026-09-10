import Faq from "@/components/Faq";
import { mcaFaqs } from "@/data/faqData";

export default function MBAPage() {
  return (
    <div className="innerpagerightside">
      <Faq title="Frequently Asked Questions" faqs={mcaFaqs} />
    </div>
  );
}
