"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Fancybox } from "@fancyapps/ui";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { tabbingGalleryData } from "@/data/tabbinggalleryData";

const TabbingGallery = () => {
  const [activeTab, setActiveTab] = useState(tabbingGalleryData[0]?.id || "");

  const swiperRef = useRef<SwiperType | null>(null);

  const activeCategory = tabbingGalleryData.find(
    (category) => category.id === activeTab,
  );

  /*
   * Fancybox
   */
  useEffect(() => {
    const selector = `[data-fancybox="gallery-${activeTab}"]`;

    Fancybox.bind(selector);

    return () => {
      Fancybox.unbind(selector);
      Fancybox.close();
    };
  }, [activeTab]);

  /*
   * Tab click
   */
  const handleTabChange = (tabId: string, index: number) => {
    setActiveTab(tabId);

    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="mainimage_gallery">
      {/* =========================
          Gallery Tabs
      ========================== */}
      <div className="gallery-tabs">
        <button
          type="button"
          className="gallery-tab-arrow gallery-tab-prev"
          aria-label="Previous gallery tabs"
        >
          <span>‹</span>
        </button>

        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          navigation={{
            prevEl: ".gallery-tab-prev",
            nextEl: ".gallery-tab-next",
          }}
          slidesPerView="auto"
          spaceBetween={10}
          watchOverflow={true}
          className="gallery-tabs-swiper"
        >
          {tabbingGalleryData.map((category, index) => (
            <SwiperSlide key={category.id} className="gallery-tab-slide">
              <button
                type="button"
                className={`gallery-tab ${
                  activeTab === category.id ? "active" : ""
                }`}
                onClick={() => handleTabChange(category.id, index)}
              >
                {category.label}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className="gallery-tab-arrow gallery-tab-next"
          aria-label="Next gallery tabs"
        >
          <span>›</span>
        </button>
      </div>

      {/* =========================
          Active Gallery
      ========================== */}
      {activeCategory && (
        <div className="image-gallery">
          <div className="row g-2 g-md-4">
            {activeCategory.images.map((item) => (
              <div className="col-lg-4 col-sm-6 col-6" key={item.id}>
                <div className="gallery-card">
                  <a
                    href={item.src}
                    data-fancybox={`gallery-${activeTab}`}
                    data-caption={item.name}
                    className="gallery-image-link"
                  >
                    <div className="gallery-image-wrapper">
                      <Image
                        src={item.src}
                        alt={item.name || "Gallery image"}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="gallery-image"
                      />

                      <div className="gallery-overlay">
                        <span className="gallery-view">View Image</span>
                      </div>
                    </div>
                  </a>

                  <div className="gallery-name">{item.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TabbingGallery;
