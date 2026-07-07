import InnerpageBanner from "@/components/InnerpageBanner";
import Image from "next/image";

export default function ChancellorSection() {
  return (
    <section className="innerpage-wrapper">
      <InnerpageBanner
        title="About Us"
        breadcrumbs={[{ label: "Director’s Message" }]}
      />
      <div className="chancellor-section">
        <div className="container">
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
              <div className="heading">Vikram P. Barnabas</div>
              <div className="subheading">
                Deputy Director
                <span className="w-100 d-block">
                  Bhaskar Pandurang Hivale Education (B.P.H.E.)
                </span>
              </div>
              <p
                className="mt-2 mt-sm-4"
                style={{ fontFamily: "Avenir-Next-Demi" }}
              >
                I am delighted to welcome you to IMS. The institute is approved by AICTE, and is built on the core idea of “Not Things But Men, I Dare You !”
              </p>
              <p>
                The Institute stands at the frontiers of excellence in curricular and extra curricular activities that make education whole. I invite you to peruse the extensive range of resources and opportunities that we offer to all the members of the Institute. From spacious classrooms to sports facilities, the amenities are first-class. Most important of all, the teaching and non-teaching staff at the Institute cultivate among them the culture to help students fulfil their higher education goals. I hope that you will take the time to learn more about Us and be inspired to join hands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
