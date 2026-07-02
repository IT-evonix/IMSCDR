"use client";

import { useEffect } from "react";
import Image from "next/image";
import ExploreBtn from "../ui/ExploreBtn";

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function CampusLife() {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']");

    return () => {
      Fancybox.unbind("[data-fancybox='gallery']");
      Fancybox.close();
    };
  }, []);

  return (
    <section className="gallerySection">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="heading text-center">Campus Life and Memories</div>

            <p className="text-center mb-5">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the unknown printer took a galley of type and scrambled it to make
              a type specimen book
            </p>
          </div>
        </div>

        <div className="galleryWrapper">
          {/* Image 1 */}
          <a
            href="/images/home/gallery/CampusLife1.png"
            data-fancybox="gallery"
            className="galleryItem tall"
          >
            <Image
              src="/images/home/gallery/CampusLife1.png"
              alt="Campus Life 1"
              width={800}
              height={600}
              className="galleryImg"
            />
          </a>

          {/* Column 1 */}
          <div className="doubleColumn">
            <a
              href="/images/home/gallery/CampusLife2.png"
              data-fancybox="gallery"
              className="galleryItem half"
            >
              <Image
                src="/images/home/gallery/CampusLife2.png"
                alt="Campus Life 2"
                width={800}
                height={600}
                className="galleryImg"
              />
            </a>

            <a
              href="/images/home/gallery/CampusLife3.png"
              data-fancybox="gallery"
              className="galleryItem half"
            >
              <Image
                src="/images/home/gallery/CampusLife3.png"
                alt="Campus Life 3"
                width={800}
                height={600}
                className="galleryImg"
              />
            </a>
          </div>

          {/* Center */}
          <a
            href="/images/home/gallery/CampusLife4.png"
            data-fancybox="gallery"
            className="galleryItem centerTall"
          >
            <Image
              src="/images/home/gallery/CampusLife4.png"
              alt="Campus Life 4"
              width={800}
              height={600}
              className="galleryImg"
            />
          </a>

          {/* Column 2 */}
          <div className="doubleColumn">
            <a
              href="/images/home/gallery/CampusLife5.png"
              data-fancybox="gallery"
              className="galleryItem half"
            >
              <Image
                src="/images/home/gallery/CampusLife5.png"
                alt="Campus Life 5"
                width={800}
                height={600}
                className="galleryImg"
              />
            </a>

            <a
              href="/images/home/gallery/CampusLife6.png"
              data-fancybox="gallery"
              className="galleryItem half"
            >
              <Image
                src="/images/home/gallery/CampusLife6.png"
                alt="Campus Life 6"
                width={800}
                height={600}
                className="galleryImg"
              />
            </a>
          </div>

          {/* Image 7 */}
          <a
            href="/images/home/gallery/CampusLife7.png"
            data-fancybox="gallery"
            className="galleryItem tall"
          >
            <Image
              src="/images/home/gallery/CampusLife7.png"
              alt="Campus Life 7"
              width={800}
              height={600}
              className="galleryImg"
            />
          </a>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5 text-center mt-4">
            <ExploreBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
