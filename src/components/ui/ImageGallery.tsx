"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export interface GalleryItem {
  id: number;
  src: string;
  name: string;
}

interface ImageGalleryProps {
  images: GalleryItem[];
  className?: string;
}

const ImageGallery = ({ images, className = "" }: ImageGalleryProps) => {
  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]');

    return () => {
      Fancybox.unbind('[data-fancybox="gallery"]');
    };
  }, []);

  return (
    <div className="mainimage_gallery">
      <div className={`image-gallery ${className}`}>
        <div className="row g-4">
          {images.map((item) => (
            <div className="col-lg-4 col-md-6 col-12" key={item.id}>
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
    </div>
  );
};

export default ImageGallery;
