import React from "react";
import Image from "next/image";
import ExploreBtn from "@/components/ui/ExploreBtn";
const page = () => {
  return (
    <div className="innerpagerightside">
      <section className="zigzag-section d-none">
        <div className="zigzag-row">
          <div className="parallaximg_image">
            <Image
              className="img-fluid"
              src="/images/about/aicte-sspu-naac.webp"
              alt="about imscdr"
              width={400}
              height={480}
            />
          </div>
          <div className="content-box">
            <div className="heading">AICTE, Savitribai Phule Pune University and NAAC Accrediation</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets.
            </p>

            <ExploreBtn href="/about" text="Know More" />
          </div>
        </div>
        <div className="zigzag-row reverse d-none">
          <div className="parallaximg_image">
            <Image
              className="img-fluid"
              src="/images/about/SPPU.webp"
              alt="about imscdr"
              width={350}
              height={350}
            />
          </div>
          <div className="content-box">
            <div className="heading">Savitribai Phule Pune University</div>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets. It has survived not only many
              decades, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised thanks to these
              sheets....
            </p>

            <ExploreBtn href="/about" text="Know More" />
          </div>
        </div>
        <div className="zigzag-row  d-none">
          <div className="parallaximg_image">
            <Image
              className="img-fluid"
              src="/images/about/Naac-Img.webp"
              alt="about imscdr"
              width={350}
              height={350}
            />
          </div>
          <div className="content-box">
            <div className="heading">NAAC Accrediation</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets. It has survived not only many
              decades, but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised thanks to these
              sheets....
            </p>
            <ExploreBtn href="/about" text="Know More" />
          </div>
        </div>
      </section>
      <div className="heading">Coming Soon</div>
    </div>
  );
};

export default page;
