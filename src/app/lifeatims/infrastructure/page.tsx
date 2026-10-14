import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS-CDR Ahilyanagar Campus Infrastructure | Modern Facilities",
  description: "Explore IMS-CDR Ahilyanagar campus infrastructure with ICT classrooms, library, language lab, seminar halls and modern facilities for learning and development.",
  alternates: {
    canonical: "https://imscdr.ac.in/lifeatims/infrastructure",
  },
  openGraph: {
    title: "IMS-CDR Ahilyanagar Campus Infrastructure | Modern Facilities",
    description: "Explore IMS-CDR Ahilyanagar campus infrastructure with ICT classrooms, library, language lab, seminar halls and modern facilities for learning and development.",
    url: "https://imscdr.ac.in/lifeatims/infrastructure",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Ahilyanagar Campus Infrastructure | Modern Facilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Ahilyanagar Campus Infrastructure | Modern Facilities",
    description: "Explore IMS-CDR Ahilyanagar campus infrastructure with ICT classrooms, library, language lab, seminar halls and modern facilities for learning and development.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Image from "next/image";
import GallerySlider from "@/components/ui/GallerySlider";
import { galleryData } from "@/data/GallerySlider";

const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="row">
        <div className="col-md-7">
          <div className="subheading">
            A Modern Campus Designed for Learning
          </div>
          <div className="infrapara">
            Spread across 2.62 acres, IMS-CDR offers a spacious campus hosting
            state-of-the-art facilities and academic infrastructure that
            provides an ideal environment for overall excellence and holistic
            development. The institute is housed in a well-planned three-storied
            building with an additional SEED-C Building, offering excellent
            facilities for teaching, learning, research, and student engagement.
          </div>
        </div>
        <div className="col-md-5">
          <Image
            src="/images/campus/infraline.webp"
            alt="infrastructure"
            width={400}
            height={212}
            className="img-fluid"
            style={{ opacity: 0.6 }}
          />
        </div>
        <div className="col-md-12">
          <div className="infrastructure_main">
            <Image
              src="/images/campus/infrastructure/infrastructure.webp"
              alt="infrastructure"
              width={1400}
              height={522}
              className="img-fluid"
            />
            <div className="infrastructure_main_content">2.62 acres campus</div>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="subheading mb-3">
          The campus infrastructure includes:
        </div>
        <ImageGallery images={galleryData} />
      </div> */}

      <GallerySlider items={galleryData} />
    </div>
  );
};

export default page;
