"use client";

import Image from "next/image";
import ExploreBtn from "../ui/ExploreBtn";

export default function CampusLife() {
  return (
    <section className="gallerySection">
      <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-md-7">
                <div className="heading text-center">
                    Campus Life and Memories
                </div>
                <p className="text-center mb-5">Lorem Ipsum has been the industry's standard dummy text ever since the unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
        </div>
        <div className="galleryWrapper">
          <div className="galleryItem tall">
            <Image
              src="/images/home/gallery/CampusLife1.png"
              alt=""
              fill
              className="galleryImg"
            />
          </div>
          <div className="doubleColumn">
            <div className="galleryItem half">
              <Image
                src="/images/home/gallery/CampusLife2.png"
                alt=""
                fill
                className="galleryImg"
              />
            </div>

            <div className="galleryItem half">
              <Image
                src="/images/home/gallery/CampusLife3.png"
                alt=""
                fill
                className="galleryImg"
              />
            </div>
          </div>
          <div className="galleryItem centerTall">
            <Image
              src="/images/home/gallery/CampusLife4.png"
              alt=""
              fill
              className="galleryImg"
            />
          </div>
          <div className="doubleColumn">
            <div className="galleryItem half">
              <Image
                src="/images/home/gallery/CampusLife5.png"
                alt=""
                fill
                className="galleryImg"
              />
            </div>

            <div className="galleryItem half">
              <Image
                src="/images/home/gallery/CampusLife6.png"
                alt=""
                fill
                className="galleryImg"
              />
            </div>
          </div>
          <div className="galleryItem tall">
            <Image
              src="/images/home/gallery/CampusLife7.png"
              alt=""
              fill
              className="galleryImg"
            />
          </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-5 text-center mt-4">
                <ExploreBtn/>
            </div>
        </div>
      </div>
    </section>
  );
}
