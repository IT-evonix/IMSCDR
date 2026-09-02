import Image from "next/image";

export default function ChancellorSection() {
  return (
    <section className="innerpage-wrapper innerpagerightside">
      <div className="chancellor-section">
        <div className="chancellor-wrapper">
          <div className="chancellor-left">
            <div className="chancellor-image">
              <Image
                src="/images/about/dy-director.webp"
                alt="Dr. S. B. Mujumdar"
                width={333}
                height={325}
                priority
              />
            </div>
          </div>

          <div className="chancellor-content">
            <div className="heading">Dr. Vikram P. Barnabas</div>
            <div className="subheading">
              Deputy Director
              <span className="w-100 d-block">
                Bhaskar Pandurang Hivale Education (B.P.H.E.)
              </span>
            </div>
            {/* <p
              className="mt-2 mt-sm-4"
              style={{ fontFamily: "Avenir-Next-Demi" }}
            >
              I am delighted to welcome you to IMS-CDR. The institute is approved by
              AICTE, and is built on the core idea of “Not Things But Men, I
              Dare You !”
            </p> */}
            <p className="mt-2 mt-sm-4">It is my privilege to welcome you to IMS-CDR. As an AICTE-approved institute, our foundation rests on the enduring philosophy of "Not Things But Men, I Dare You!," a commitment to nurturing character and competence above all.</p>
            <p>
              We take pride in maintaining high standards across academic and co-curricular activities, for we believe true education extends beyond the classroom. Our campus offers well-equipped classrooms, sports facilities, and a range of resources designed to support your holistic growth. Most importantly, our dedicated teaching and non-teaching staff remain deeply invested in guiding students toward their higher education aspirations. 
            </p>
            <p>I invite you to explore what IMS-CDR has to offer and consider joining us in this journey of learning and self-discovery. We look forward to welcoming you into our community. </p>
          </div>
        </div>
      </div>
    </section>
  );
}
