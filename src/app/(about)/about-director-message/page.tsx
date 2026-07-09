import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";

export default function ChancellorSection() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Director’s Message"
        breadcrumbs={[{ label: "Director’s Message" }]}
      />
      <div className="chancellor-section">
        <div className="container">
          <div className="chancellor-wrapper">
            <div className="chancellor-left">
              <div className="chancellor-image">
                <Image
                  src="/images/about/director.webp"
                  alt="Dr. S. B. Mujumdar"
                  width={333}
                  height={325}
                  priority
                />
              </div>
            </div>

            <div className="chancellor-content">
              <div className="heading">M. B. Mehta</div>
              <div className="subheading">
                Director
                <span className="w-100 d-block">
                  Bhaskar Pandurang Hivale Education (B.P.H.E.)
                </span>
              </div>
              {/* <p
                className="mt-2 mt-sm-4"
                style={{ fontFamily: "Avenir-Next-Demi" }}
              >
                The Bhaskar Pandurang Hivale Education (B.P.H.E.) Society’s
                Institute of Management Studies, Career Development and Research
                (IMS) is a premier management institute conducting various
                quality programmes in Management and Information Technology in
                Ahmednagar.
              </p> */}
              <p className="mt-2 mt-sm-4">
                Welcome to BPHES Institute of Management Studies, Career Development and Research (IMSCDR), Ahilyanagar. As a premier institute offering quality program in Management and Information Technology, we are proud to be affiliated with Savitribai Phule Pune University and recognized by AICTE, New Delhi.
              </p>
              <p>Our strength lies in our forward-thinking approach to education. With experienced faculty, modern teaching methods, and state-of-the-art infrastructure, we create an environment where students can truly thrive. We design our courses to meet real-world needs, ensuring you gain relevant knowledge and practical skills that employers value.</p>
              <p>Beyond the classroom, we focus on your overall growth through strong industry connections, meaningful research opportunities, professional training, and community-oriented activities. Our consistent placement record speaks to the trust that leading companies place in our students.</p>
              <p>I invite you to be part of a learning community that values innovation, integrity, and excellence. At IMSCDR, we are committed to shaping not just successful professionals, but responsible individuals ready to make a positive impact. Your journey toward a rewarding career begins here.</p>
              
              
              <div className="about-nacc d-none">
                <div className="about-naccimg">
                  <Image
                    src="/images/about/naac.webp"
                    alt="Dr. S. B. Mujumdar"
                    width={90}
                    height={86}
                    priority
                  />
                </div>
                <div className="about-nacc-content">
                  IMS has been Re‐accredited as NAAC Re-Accredited Institute by
                  National Assessment & Accreditation Council of India (NAAC),
                  Bengaluru. As per the exclusive survey conducted by Nationally
                  well known magazine Business Baron, November 2019, IMS
                  Ahmednagar is ranked 25 in India’s Top B‐School Brands.
                </div>
              </div>
              
              <div className="about-nacc aboutaward d-none">
                <div className="about-naccimg">
                  <Image
                    src="/images/about/award.webp"
                    alt="Dr. S. B. Mujumdar"
                    width={60}
                    height={57}
                    priority
                  />
                </div>
                <div className="about-nacc-content">
                  IMS has received many prestigious awards like the Best Institute Award from S. P. Pune University, National  Award for Leadership in IT Education from Canon India Pvt. Ltd., Best B‐ School Library Award from Discovery Education Media ‐ MBA by Choice,  Most Upcoming Best B‐School award by ASSOCHAM, New Delhi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
