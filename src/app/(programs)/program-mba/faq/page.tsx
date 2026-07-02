import Faq from "@/components/Faq";
import { mbaFaqs } from "@/data/faqData";

export default function MBAPage() {
  return (
    <div className="innerpagerightside">
      <Faq title="Frequently Asked Questions" faqs={mbaFaqs} />
    </div>
  );
}
