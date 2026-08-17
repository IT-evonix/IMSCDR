import React from "react";
import Image from "next/image";
import ExploreBtn from "@/components/ui/ExploreBtn";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="div">
        <div className="row">
          <div className="col-md-6">
            <div className="ImageBox">
              <Image
                src="/images/program/downloads.webp"
                alt=""
                width={450}
                height={400}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="heading">Downloads</div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since 1966, when designers at Letraset and James Mosley, the
              librarian at St Bride Printing Library in London, took a 1914
              Cicero translation and scrambled it to make dummy text for
              Letraset's Body Type sheets.
            </p>
            <ExploreBtn href="/" text="Know More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
