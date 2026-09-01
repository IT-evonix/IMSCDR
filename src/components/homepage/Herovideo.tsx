"use client";
import Image from "next/image";

const Herovideo = () => {
  return (
    <section className="hero-video w-100 position-relative">
      {/* <video className="w-100" autoPlay muted loop playsInline preload="auto">
        <source src="/videos/HeroBanner-Video.mp4" type="video/mp4" />
      </video> */}
      <video className="w-100" autoPlay muted loop playsInline preload="auto" poster="/images/banners/herobanner-img.webp">
        <source src="/videos/HeroBanner-Video.mp4" type="video/mp4" />
      </video>

      {/* <Image
        src="/images/banners/herobannernew.webp"
        alt="Banner Image"
        width={1920}
        height={910}
        className="img-fluid"
      /> */}
      <div className="herobanner_Content">
        <h3>
          Welcome to BPHES Institute of Management Studies,
          <br /> Career Development and Research (IMS-CDR)
        </h3>
        <h4>Awarded the Best Institute by </h4>
        <h1>Savitribai Phule Pune University</h1>
      </div>
    </section>
  );
};

export default Herovideo;
