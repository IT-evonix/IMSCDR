"use client";

import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Reshama Avhad",
    image: "/images/home/testimonials/testimonials1.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 2,
    name: "Yuvraj Jadhav",
    image: "/images/home/testimonials/testimonials2.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 3,
    name: "Mansha Sakhrani",
    image: "/images/home/testimonials/testimonials3.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 4,
    name: "Dev Agarwal",
    image: "/images/home/testimonials/testimonials4.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 5,
    name: "Pradip Patkal",
    image: "/images/home/testimonials/testimonials5.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 6,
    name: "Dr. Reshama Avhad",
    image: "/images/home/testimonials/testimonials1.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 7,
    name: "Yuvraj Jadhav",
    image: "/images/home/testimonials/testimonials2.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 8,
    name: "Mansha Sakhrani",
    image: "/images/home/testimonials/testimonials3.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 9,
    name: "Dev Agarwal",
    image: "/images/home/testimonials/testimonials4.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
  {
    id: 10,
    name: "Pradip Patkal",
    image: "/images/home/testimonials/testimonials5.webp",
    content:
      "Being from a science background with an M.Sc. to my name, I was extremely nervous to be starting.",
  },
];

// Duplicate data for smoother infinite loop
const sliderTestimonials = [
  ...testimonials,
  ...testimonials,
  ...testimonials,
];

export default function OurTestimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="our_testimonials">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-9 position-relative z-2">
            <div className="heading text-center text-white">
              Testimonials
            </div>

            <p className="text-center mb-3 mb-sm-5 text-white">
              Hear from our students and alumni about their learning experiences and career journeys at IMSCDR.
            </p>
          </div>
        </div>

        <div className="our_testimonials_inner">
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            speed={1000}
            spaceBetween={30}
            slidesPerView={1}
            watchOverflow={false}
            observer={true}
            observeParents={true}
            observeSlideChildren={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className="testimonials_slider"
          >
            {sliderTestimonials.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.id}-${index}`}>
                <div className="testimonials_box">
                  <div className="testimonials_img">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={180}
                      height={160}
                    />
                  </div>

                  <h3 className="subheading">{testimonial.name}</h3>

                  <p className="testimonials_content">
                    {testimonial.content}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-navigation">
            <button
              type="button"
              className="testimonial-prev"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              
            </button>

            <button
              type="button"
              className="testimonial-next"
              onClick={() => swiperRef.current?.slideNext()}
            >
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}