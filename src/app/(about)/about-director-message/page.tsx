import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";
import Link from "next/link";

export default function ChancellorSection() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="Director’s Message"
        breadcrumbs={[{ label: "Director’s Message" }]}
      />
      <div className="chancellor-section">
        <div className="container">
          {/* Top Section */}
          <div className="chancellor-wrapper">
            {/* Left Content */}
            <div className="chancellor-content">
              <div className="heading">M. B. Mehta</div>
                <div className="subheading">
                  Director
                  <span className="w-100 d-block">
                    Bhaskar Pandurang Hivale Education (B.P.H.E.)
                  </span>
                </div>
              <p className="mt-2 mt-sm-4">
                The Bhaskar Pandurang Hivale Education (B.P.H.E.) Society’s
                Institute of Management Studies, Career Development and Research
                (IMS) is a premier management institute conducting various
                quality programmes in Management and Information Technology in
                Ahmednagar. IMS is affiliated to the Savitribai Phule Pune
                University, Pune and is recognized by the All India Council for
                Technical Education (AICTE), New Delhi. IMS has reputation for
                novel and need based courses, visionary leadership, well
                qualified and experienced faculty members, modern and
                interactive teaching methodology, state of the art
                infrastructure, innovative student development initiatives,
                strong industry interface, good placements, meticulous research,
                meaningful consultancy, professional training, fair and
                transparent governance and community‐oriented activities.
              </p>
              <p>
                IMS has been Re‐accredited as NAAC Re-Accredited Institute by
                National Assessment & Accreditation Council of India (NAAC),
                Bengaluru. As per the exclusive survey conducted by Nationally
                well known magazine Business Baron, November 2019, IMS
                Ahmednagar is ranked 25 in India’s Top B‐School Brands.
              </p>
              <p className="m-0">
                IMS has received many prestigious awards like the Best Institute
                Award from S. P. Pune University, National Award for Leadership
                in IT Education from Canon India Pvt. Ltd., Best B‐ School
                Library Award from Discovery Education Media ‐ MBA by Choice,
                Most Upcoming Best B‐School award by ASSOCHAM, New Delhi.
              </p>
            </div>

            {/* Right Image */}
            <div className="profileDataright">
              <div className="chancellor-image">
                <div className="bg-circle"></div>
                <div className="dot-pattern">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i}></span>
                  ))}
                </div>
                <Image
                  src="/images/about/director.webp"
                  alt="Dr. S. B. Mujumdar"
                  width={600}
                  height={515}
                  priority
                />
              </div>
              {/* <div className="profileData">
                <div className="heading">M. B. Mehta</div>
                <div className="subheading">
                  Director
                  <span className="w-100 d-block">
                    Bhaskar Pandurang Hivale Education (B.P.H.E.)
                  </span>
                </div>
              </div> */}
              
            </div>
          </div>

          {/* Quote Card */}

          <div className="quote-card">
            <div className="quote-left">“</div>
            <div className="quote-content">
              <p>
                The true purpose of education is not just to create employable
                individuals, but to empower people to be compassionate,
                responsible and constructive members of society.
              </p>
              <div className="subheading">– Director Name</div>
              <span style={{ fontSize: "14px" }}>
                Director, Bhaskar Pandurang Hivale Education (B.P.H.E.)
              </span>
            </div>
            <div className="quote-right">”</div>
          </div>
        </div>
      </div>
    </section>
  );
}
