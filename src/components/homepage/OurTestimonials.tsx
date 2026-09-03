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
  designation:string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Payal Avhad",
    designation:"Management Trainee , Eaton",
    image: "/images/home/testimonials/testimonials-1.webp",
    content: "IMSCDR polished my theoretical and practical skills.",
  },
  {
    id: 2,
    name: "Shubham Kaswa", 
    designation:"Bajaj Finance",
    image: "/images/home/testimonials/testimonials-2.webp",
    content: "Campus placement gives you a promise and assurance of a promising career.",
  },
  {
    id: 3,
    name: "Ritika Ranglani",
    designation:"Finance Management Trainee-Uniklinger",
    image: "/images/home/testimonials/testimonials-Uniklinger.webp",
    content: "Thankful to IMSCDR for placing me in a German Company in Ahilyanagar.",
  },
  {
    id: 4,
    name: "Afrin Shaikh",
    designation:"MCA - Bajaj General Vistaar",
    image: "/images/home/testimonials/testimonials-3.webp",
    content: "IMSCDR got me an opportunity to work with Bajaj General’s Project Vistaar before starting my 2nd year.",
  },
  {
    id: 5,
    name: "Prachi Shinde",
    designation:"MCA - Bajaj General Vistaar",
    image: "/images/home/testimonials/testimonials-4.webp",
    content: "Happy to work with Bajaj General’s Project Vistaar before my 2nd year at I MSCDR.",
  },
  {
    id: 6,
    name: "Rifat Bagwan",
    designation:"Trainee DRDO Ahmednagar",
    image: "/images/home/testimonials/testimonials-5.webp",
    content: "IMSCDR offers corporate-level platform for your self-development and career development.",
  },
  {
    id: 7,
    name: "Sharjil Iqbal",
    designation:"MCA - Arham IT solutions",
    image: "/images/home/testimonials/testimonials-6.webp",
    content: "I got placed through an internship provided by the IMSCDR placement cell.",
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
              Hear from our students and alumni about their learning experiences and career journeys at IMS-CDR.
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
                  <div className="designation">{testimonial.designation}</div>
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