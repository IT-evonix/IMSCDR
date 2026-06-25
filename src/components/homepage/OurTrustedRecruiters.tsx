"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  "/images/home/logos/logo1.webp",
  "/images/home/logos/logo2.webp",
  "/images/home/logos/logo3.webp",
  "/images/home/logos/logo4.webp",
  "/images/home/logos/logo5.webp",
  "/images/home/logos/logo6.webp",
  "/images/home/logos/logo1.webp",
  "/images/home/logos/logo2.webp",
  "/images/home/logos/logo3.webp",
  "/images/home/logos/logo4.webp",
  "/images/home/logos/logo5.webp",
  "/images/home/logos/logo6.webp",
];

export default function OurTrustedRecruiters() {
  return (
    <div className="companylogo-slider">
      <div className="heading text-center mb-3 mb-4">
        Our Trusted Recruiters
      </div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        speed={3000}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
        className="logo-slider"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="logo-item">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={180}
                height={80}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
