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
            <div className="heading text-center">Life at BPHES IMS-CDR</div>
            <p className="text-center mb-5">
              Experience a vibrant campus where academic pursuits go hand-in-hand with cultural, sports, and organizational activities, fostering holistic development and lifelong connections.
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
            href="/images/home/gallery/CampusLife4.webp"
            data-fancybox="gallery"
            className="galleryItem centerTall"
          >
            <Image
              src="/images/home/gallery/CampusLife4.webp"
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
             <ExploreBtn href="/lifeatims/gallery" />
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import { useEffect } from "react";
// import Image from "next/image";
// import ExploreBtn from "../ui/ExploreBtn";

// import { Fancybox } from "@fancyapps/ui";
// import "@fancyapps/ui/dist/fancybox/fancybox.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// const campusImages = [
//   {
//     src: "/images/home/gallery/CampusLife1.png",
//     alt: "Campus Life 1",
//   },
//   {
//     src: "/images/home/gallery/CampusLife2.png",
//     alt: "Campus Life 2",
//   },
//   {
//     src: "/images/home/gallery/CampusLife3.png",
//     alt: "Campus Life 3",
//   },
//   {
//     src: "/images/home/gallery/CampusLife4.webp",
//     alt: "Campus Life 4",
//   },
//   {
//     src: "/images/home/gallery/CampusLife5.png",
//     alt: "Campus Life 5",
//   },
//   {
//     src: "/images/home/gallery/CampusLife6.png",
//     alt: "Campus Life 6",
//   },
//   {
//     src: "/images/home/gallery/CampusLife7.png",
//     alt: "Campus Life 7",
//   },
// ];

// export default function CampusLife() {
//   useEffect(() => {
//     Fancybox.bind("[data-fancybox='campus-gallery']");

//     return () => {
//       Fancybox.unbind("[data-fancybox='campus-gallery']");
//       Fancybox.close();
//     };
//   }, []);

//   return (
//     <section className="gallerySection">
//       <div className="container-fluid">

//         {/* Heading */}
//         <div className="row justify-content-center">
//           <div className="col-md-7">
//             <div className="heading text-center">
//               Life at BPHES IMS-CDR
//             </div>

//             <p className="text-center mb-5">
//               Experience a vibrant campus where academic pursuits go
//               hand-in-hand with cultural, sports, and organizational
//               activities, fostering holistic development and lifelong
//               connections.
//             </p>
//           </div>
//         </div>

//         {/* ================================
//             DESKTOP GALLERY
//             Existing design - NO CHANGE
//         ================================= */}
//         <div className="galleryWrapper desktopGallery">

//           {/* Image 1 */}
//           <a
//             href={campusImages[0].src}
//             data-fancybox="campus-gallery"
//             className="galleryItem tall"
//           >
//             <Image
//               src={campusImages[0].src}
//               alt={campusImages[0].alt}
//               width={800}
//               height={600}
//               className="galleryImg"
//             />
//           </a>

//           {/* Column 1 */}
//           <div className="doubleColumn">
//             {[campusImages[1], campusImages[2]].map((image) => (
//               <a
//                 key={image.src}
//                 href={image.src}
//                 data-fancybox="campus-gallery"
//                 className="galleryItem half"
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   width={800}
//                   height={600}
//                   className="galleryImg"
//                 />
//               </a>
//             ))}
//           </div>

//           {/* Center */}
//           <a
//             href={campusImages[3].src}
//             data-fancybox="campus-gallery"
//             className="galleryItem centerTall"
//           >
//             <Image
//               src={campusImages[3].src}
//               alt={campusImages[3].alt}
//               width={800}
//               height={600}
//               className="galleryImg"
//             />
//           </a>

//           {/* Column 2 */}
//           <div className="doubleColumn">
//             {[campusImages[4], campusImages[5]].map((image) => (
//               <a
//                 key={image.src}
//                 href={image.src}
//                 data-fancybox="campus-gallery"
//                 className="galleryItem half"
//               >
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   width={800}
//                   height={600}
//                   className="galleryImg"
//                 />
//               </a>
//             ))}
//           </div>

//           {/* Image 7 */}
//           <a
//             href={campusImages[6].src}
//             data-fancybox="campus-gallery"
//             className="galleryItem tall"
//           >
//             <Image
//               src={campusImages[6].src}
//               alt={campusImages[6].alt}
//               width={800}
//               height={600}
//               className="galleryImg"
//             />
//           </a>
//         </div>

//         {/* ================================
//             MOBILE SLIDER
//         ================================= */}
//         <div className="mobileGallery">

//           <Swiper
//             modules={[Pagination]}
//             slidesPerView={1}
//             spaceBetween={15}
//             pagination={{
//               clickable: true,
//             }}
//           >
//             {campusImages.map((image) => (
//               <SwiperSlide key={image.src}>
//                 <a
//                   href={image.src}
//                   data-fancybox="campus-gallery"
//                   className="mobileGalleryItem"
//                 >
//                   <Image
//                     src={image.src}
//                     alt={image.alt}
//                     width={800}
//                     height={600}
//                     className="mobileGalleryImg"
//                     sizes="(max-width: 767px) 100vw"
//                   />
//                 </a>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//         </div>

//         {/* Explore More */}
//         <div className="row justify-content-center">
//           <div className="col-md-5 text-center mt-4">
//             <ExploreBtn href="/lifeatims/gallery" />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

