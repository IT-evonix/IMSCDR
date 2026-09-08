
import ImageGallery from "@/components/ui/ImageGallery";
import { LifeAtImsGallery } from "@/data/galleryData";
import React from "react";


const page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">
        Gallery
      </div>
      <ImageGallery images={LifeAtImsGallery} />
    </div>
  );
};

export default page;
