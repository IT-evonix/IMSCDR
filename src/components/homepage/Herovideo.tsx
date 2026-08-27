"use client";
import Image from "next/image";

const Herovideo = () => {
  return (
    <section className="hero-video w-100 position-relative">
      {/* <video className="w-100" autoPlay muted loop playsInline>
        <source src="/videos/herovideo.mp4" type="video/mp4" />
      </video> */}

      <Image
        src="/images/banners/herobannernew.webp"
        alt="Banner Image"
        width={1920}
        height={910}
        className="img-fluid"
      />
      <div className="herobanner_Content">
        <h3>
          Welcome to BPHES Institute of Management Studies,
          <br /> Career Development and Research (IMSCDR)
        </h3>
        <h4>Awarded the Best Institute by </h4>
        <h1>Savitribai Phule Pune University</h1>
      </div>
    </section>
  );
};

export default Herovideo;
