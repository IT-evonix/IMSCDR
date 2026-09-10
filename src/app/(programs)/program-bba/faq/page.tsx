import Faq from "@/components/Faq";
import { bbaFaqs } from "@/data/faqData";

export default function MBAPage() {
  return (
    <div className="innerpagerightside">
      <Faq title="Frequently Asked Questions" faqs={bbaFaqs} />
    </div>
  );
}
