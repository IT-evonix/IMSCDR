"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { GalleryItem } from "@/data/GallerySlider";

interface GallerySliderProps {
  items: GalleryItem[];
  autoplay?: boolean;
  autoplayDelay?: number;
  slidesToShow?: number;
}

export default function GallerySlider({
  items,
  autoplay = true,
  autoplayDelay = 7000,
  slidesToShow = 3,
}: GallerySliderProps) {
  const [currentIndex, setCurrentIndex] = useState(slidesToShow);
  const [enableTransition, setEnableTransition] = useState(true);

  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /*
   * ==========================================
   * Clone slides for infinite loop
   * ==========================================
   */

  const clonedItems = [
    ...items.slice(-slidesToShow),
    ...items,
    ...items.slice(0, slidesToShow),
  ];

  const maxIndex = items.length + slidesToShow;

  /*
   * ==========================================
   * Fancybox
   * ==========================================
   */

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']");

    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
      Fancybox.close();
    };
  }, []);

  /*
   * ==========================================
   * Next Button
   * ==========================================
   */

  const handleNext = useCallback(() => {
    setEnableTransition(true);

    setCurrentIndex((prev) => prev + 1);
  }, []);

  /*
   * ==========================================
   * Previous Button
   * ==========================================
   */

  const handlePrev = useCallback(() => {
    setEnableTransition(true);

    setCurrentIndex((prev) => prev - 1);
  }, []);

  /*
   * ==========================================
   * Infinite Loop
   * ==========================================
   */

  useEffect(() => {
    if (!enableTransition) {
      return;
    }

    /*
     * Last clone reached
     * Move silently to first real slide
     */
    if (currentIndex === maxIndex) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(slidesToShow);
      }, 500);

      return () => clearTimeout(timer);
    }

    /*
     * First clone reached
     * Move silently to last real slide
     */
    if (currentIndex === 0) {
      const timer = setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(items.length);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, maxIndex, slidesToShow, items.length, enableTransition]);

  /*
   * ==========================================
   * Autoplay
   * ==========================================
   */

  const startAutoplay = useCallback(() => {
    if (!autoplay || items.length <= slidesToShow) {
      return;
    }

    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    autoplayRef.current = setInterval(() => {
      setEnableTransition(true);

      setCurrentIndex((prev) => prev + 1);
    }, autoplayDelay);
  }, [autoplay, autoplayDelay, items.length, slidesToShow]);

  /*
   * ==========================================
   * Start Autoplay
   * ==========================================
   */

  useEffect(() => {
    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [startAutoplay]);

  /*
   * ==========================================
   * Empty State
   * ==========================================
   */

  if (!items.length) {
    return null;
  }

  /*
   * ==========================================
   * Slider Position
   * ==========================================
   */

  const translatePercentage = (currentIndex * 100) / slidesToShow;

  return (
    <div className="gallery-slider mainimage_gallery">
      <div className="gallery-slider-wrapper">
        <div
          className="gallery-slider-track"
          style={{
            transform: `translateX(-${translatePercentage}%)`,
            transition: enableTransition
              ? "transform 0.5s ease-in-out"
              : "none",
          }}
        >
          {clonedItems.map((item, index) => (
            <div
              className="gallery-slider-item"
              key={`${item.id}-${index}`}
              style={{
                flex: `0 0 ${100 / slidesToShow}%`,
              }}
            >
              <div className="gallery-card">
                <a
                  href={item.src}
                  data-fancybox="gallery"
                  data-caption={item.name}
                  className="gallery-image-link"
                >
                  <div className="gallery-image-wrapper">
                    <Image
                      src={item.src}
                      alt={item.name}
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
      <div className="gallery-slider-controls">
        <button
          type="button"
          className="gallery-slider-prev"
          onClick={() => {
            handlePrev();
            startAutoplay();
          }}
          aria-label="Previous slide"
        >
          <Image
            width={100}
            height={100}
            src="/images/campus/leftarrow.png"
            alt="Value"
            className="img-fluid"
          />
        </button>

        <button
          type="button"
          className="gallery-slider-next"
          onClick={() => {
            handleNext();
            startAutoplay();
          }}
          aria-label="Next slide"
        >
          <Image
            width={100}
            height={100}
            src="/images/campus/rightarrow.png"
            alt="Value"
            className="img-fluid"
          />
        </button>
      </div>
    </div>
  );
}
