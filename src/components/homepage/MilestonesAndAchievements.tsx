"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const achievements = [
  {
    title: "A First in Maharashtra Education",
    highlight: "ISO",
    subtitle: "Certification",
  },
  {
    title: "Best Institute Award by",
    highlight: "SPPU",
    subtitle: "",
  },
  {
    title: "Re-Accredited Institute",
    highlight: "NAAC",
    subtitle: "",
  },
  {
    title: "PhD holder teachers",
    highlight: "65%",
    subtitle: "",
  },
  {
    title: "Placement track record",
    highlight: "Excellent",
    subtitle: "",
  },

  //   Dublicate Slides
  {
    title: "A First in Maharashtra Education",
    highlight: "ISO",
    subtitle: "Certification",
  },
  {
    title: "Best Institute Award by",
    highlight: "SPPU",
    subtitle: "",
  },
  {
    title: "Re-Accredited Institute",
    highlight: "NAAC",
    subtitle: "",
  },
  {
    title: "PhD holder teachers",
    highlight: "65%",
    subtitle: "",
  },
  {
    title: "Placement track record",
    highlight: "Excellent",
    subtitle: "",
  },
];

export default function MilestonesAndAchievements() {
  return (
    <section className="achievement-section">
      <div className="container">
        <div className="achievement-heading">
          <div className="row justify-content-center">
            <div className="col-md-9 position-relative z-2">
              <div className="heading text-white text-center">
                Milestones & Achievements
              </div>
              <p className="text-center">
                Lorem Ipsum has been the industrys standard dummy text ever
                since the unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
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
          className="achievement-swiper"
        >
          {achievements.map((item, index) => ( 
            <SwiperSlide key={index}>
              <div className="achievement-card">
                <div className="achievement-content">
                  {item.title && <h3>{item.title}</h3>}

                  <h4>{item.highlight}</h4>

                  {item.subtitle && <p>{item.subtitle}</p>}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
