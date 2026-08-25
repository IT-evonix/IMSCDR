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
    content: "Before joining IMS , I dreamt of being on a good position in a multinational company , IMS gave me the platform in the third semester of MBA in US MNC Eaton Corporation as a Management Trainee in HR . IMS polished my skills both theoretical and practical and it was easy to crack the interview. ",
  },
  {
    id: 2,
    name: "Shubham Kaswa",
    designation:"Bajaj Finance",
    image: "/images/home/testimonials/testimonials-2.webp",
    content: "I got placed in third semester with pre placement offer in Bajaj Finance as a deputy manager . It’s a dream come true as college campus placement gives you a promise and assurance that wherever we will be placed it will be a better place.",
  },
  {
    id: 5,
    name: "Prachi Shinde",
    designation:"",
    image: "/images/home/testimonials/testimonials-1.webp",
    content: "I will be passing out in 2027 and I am happy that I got an opportunity to work with Bajaj General’s Project Vistaar before the start of the second year . IMS gives you the platform to spread your wings and fly high.",
  },
  {
    id: 6,
    name: "Yuvraj Jadhav",
    designation:"",
    image: "/images/home/testimonials/testimonials-2.webp",
    content: "I will be passing out in 2027 and I am happy that I got an opportunity to work with Bajaj General’s Project Vistaar before the start of the second year . IMS gives you the platform to spread your wings and fly high.",
  },
  {
    id: 7,
    name: "Mansha Sakhrani",
    designation:"",
    image: "/images/home/testimonials/testimonials-3.webp",
    content: "The platform which IMS gives you for your self development and career development is at par with the corporate . The free hand which the students get to do anything during the college functions makes you fearless and ready to face the world. I had three offers in my hand from the placement department and I had to choose the best among three.",
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