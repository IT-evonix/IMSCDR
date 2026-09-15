// import Image from "next/image";
// import Link from "next/link";

// const CoursesWeOffer = () => {
//   return (
//     <section className="CoursesWeOffer_sec">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-9 mb-2 mb-sm-4 position-relative z-2">
//             <div className="heading text-white">Our Courses</div>
//             <p className="text-white">
//               We offer a diverse range of programmes across management and computer applications, including MBA, MCA, BBA, and BCA, along with doctoral studies through our Ph.D. programmes. All courses are affiliated to Savitribai Phule Pune University and approved by AICTE, New Delhi. Each programme is designed to blend academic rigor with practical industry exposure, preparing students for successful careers in their chosen fields.
//             </p>
//           </div>
//         </div>
//         <div className="CoursesWeOffer_inner">
//           <Link href="/program-mba/overview" className="course_card">
//             <div className="course_card_inner">
//               <Image
//                 src="/images/home/Coursesimg1.webp"
//                 alt="Master of Business Administration"
//                 width={1200}
//                 height={600}
//                 className="img-fluid"
//               />
//               <div className="Courses_content">
//                 <div className="subheading">
//                   Master of Business <br /> Administration
//                 </div>
//                 <svg
//                   width="14"
//                   height="11"
//                   viewBox="0 0 14 11"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </Link>
//           <Link href="/program-mca/overview" className="course_card">
//             <div className="course_card_inner">
//               <Image
//                 src="/images/home/Coursesimg2.webp"
//                 alt="Master of Business Administration"
//                 width={1200}
//                 height={600}
//                 className="img-fluid"
//               />
//               <div className="Courses_content">
//                 <div className="subheading">
//                   Master in Computer <br /> Application
//                 </div>
//                 <svg
//                   width="14"
//                   height="11"
//                   viewBox="0 0 14 11"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </Link>
//           <Link href="/program-bca/overview" className="course_card">
//             <div className="course_card_inner">
//               <Image
//                 src="/images/home/Coursesimg3new.webp"
//                 alt="Master of Business Administration"
//                 width={1200}
//                 height={600}
//                 className="img-fluid"
//               />
//               <div className="Courses_content">
//                 <div className="subheading">
//                   Bachelor of Computer <br /> Applications
//                 </div>
//                 <svg
//                   width="14"
//                   height="11"
//                   viewBox="0 0 14 11"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </Link>
//           <Link href="/program-bba/overview" className="course_card">
//             <div className="course_card_inner">
//               <Image
//                 src="/images/home/Coursesimg4.webp"
//                 alt="Master of Business Administration"
//                 width={1200}
//                 height={600}
//                 className="img-fluid"
//               />
//               <div className="Courses_content">
//                 <div className="subheading">
//                   Bachelor of Business <br /> Administration
//                 </div>
//                 <svg
//                   width="14"
//                   height="11"
//                   viewBox="0 0 14 11"
//                   fill="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursesWeOffer;

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const courses = [
//   {
//     href: "/program-mba/overview",
//     image: "/images/home/Coursesimg1.webp",
//     alt: "Master of Business Administration",
//     title: (
//       <>
//         Master of Business <br /> Administration
//       </>
//     ),
//   },
//   {
//     href: "/program-mca/overview",
//     image: "/images/home/Coursesimg2.webp",
//     alt: "Master in Computer Application",
//     title: (
//       <>
//         Master in Computer <br /> Application
//       </>
//     ),
//   },
//   {
//     href: "/program-bca/overview",
//     image: "/images/home/Coursesimg3new.webp",
//     alt: "Bachelor of Computer Applications",
//     title: (
//       <>
//         Bachelor of Computer <br /> Applications
//       </>
//     ),
//   },
//   {
//     href: "/program-bba/overview",
//     image: "/images/home/Coursesimg4.webp",
//     alt: "Bachelor of Business Administration",
//     title: (
//       <>
//         Bachelor of Business <br /> Administration
//       </>
//     ),
//   },
// ];

// const CourseCard = ({ course }: { course: (typeof courses)[number] }) => {
//   return (
//     <Link href={course.href} className="course_card">
//       <div className="course_card_inner">
//         <Image
//           src={course.image}
//           alt={course.alt}
//           width={1200}
//           height={600}
//           className="img-fluid"
//         />

//         <div className="Courses_content">
//           <div className="subheading">{course.title}</div>

//           <svg
//             width="14"
//             height="11"
//             viewBox="0 0 14 11"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
//               stroke="white"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//     </Link>
//   );
// };

// const CoursesWeOffer = () => {
//   return (
//     <section className="CoursesWeOffer_sec">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-9 mb-2 mb-sm-4 position-relative z-2">
//             <div className="heading text-white">Our Courses</div>

//             <p className="text-white">
//               We offer a diverse range of programmes across management and
//               computer applications, including MBA, MCA, BBA, and BCA, along
//               with doctoral studies through our Ph.D. programmes. All courses
//               are affiliated to Savitribai Phule Pune University and approved by
//               AICTE, New Delhi. Each programme is designed to blend academic
//               rigor with practical industry exposure, preparing students for
//               successful careers in their chosen fields.
//             </p>
//           </div>
//         </div>

//         {/* ================= DESKTOP ================= */}
//         <div className="CoursesWeOffer_inner desktopCourses">
//           {courses.map((course) => (
//             <CourseCard key={course.href} course={course} />
//           ))}
//         </div>

//         {/* ================= MOBILE ================= */}
//         <div className="mobileCourses">
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             slidesPerView={1}
//             slidesPerGroup={1}
//             spaceBetween={15}
//             loop={true}
//             speed={500}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//           >
//             {courses.map((course) => (
//               <SwiperSlide key={course.href}>
//                 <CourseCard course={course} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoursesWeOffer;

"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,  } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const courses = [
  {
    href: "/program-mba/overview",
    image: "/images/home/Coursesimg1.webp",
    alt: "Master of Business Administration",
    title: (
      <>
        {" "}
        Master of Business <br /> Administration{" "}
      </>
    ),
  },
  {
    href: "/program-mca/overview",
    image: "/images/home/Coursesimg2.webp",
    alt: "Master in Computer Application",
    title: (
      <>
        {" "}
        Master in Computer <br /> Application{" "}
      </>
    ),
  },
  {
    href: "/program-bca/overview",
    image: "/images/home/Coursesimg3new.webp",
    alt: "Bachelor of Computer Applications",
    title: (
      <>
        {" "}
        Bachelor of Computer <br /> Applications{" "}
      </>
    ),
  },
  {
    href: "/program-bba/overview",
    image: "/images/home/Coursesimg4.webp",
    alt: "Bachelor of Business Administration",
    title: (
      <>
        {" "}
        Bachelor of Business <br /> Administration{" "}
      </>
    ),
  },
];
type Course = (typeof courses)[number];
const CourseCard = ({ course }: { course: Course }) => {
  return (
    <Link href={course.href} className="course_card">
      {" "}
      <div className="course_card_inner">
        {" "}
        <Image
          src={course.image}
          alt={course.alt}
          width={1200}
          height={600}
          className="img-fluid"
        />{" "}
        <div className="Courses_content">
          {" "}
          <div className="subheading">{course.title}</div>{" "}
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />{" "}
          </svg>{" "}
        </div>{" "}
      </div>{" "}
    </Link>
  );
};
const CoursesWeOffer = () => {
  return (
    <section className="CoursesWeOffer_sec">
      {" "}
      <div className="container">
        {" "}
        <div className="row">
          {" "}
          <div className="col-md-9 mb-2 mb-sm-4 position-relative z-2">
            {" "}
            <div className="heading text-white">Our Courses</div>{" "}
            <p className="text-white">
              {" "}
              We offer a diverse range of programmes across management and
              computer applications, including MBA, MCA, BBA, and BCA, along
              with doctoral studies through our Ph.D. programmes. All courses
              are affiliated to Savitribai Phule Pune University and approved by
              AICTE, New Delhi. Each programme is designed to blend academic
              rigor with practical industry exposure, preparing students for
              successful careers in their chosen fields.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        {/* ================= DESKTOP ================= */}{" "}
        <div className="CoursesWeOffer_inner desktopCourses">
          {" "}
          {courses.map((course) => (
            <CourseCard key={course.href} course={course} />
          ))}{" "}
        </div>{" "}
        {/* ================= MOBILE ================= */}{" "}
        <div className="mobileCourses">
          {" "}
          <Swiper
            modules={[Pagination,]}
            slidesPerView={1}
            slidesPerGroup={1}
            spaceBetween={15}
            loop={true}
            speed={500}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            pagination={{ clickable: true, dynamicBullets: false }}
          >
            {" "}
            {courses.map((course) => (
              <SwiperSlide key={course.href}>
                {" "}
                <CourseCard course={course} />{" "}
              </SwiperSlide>
            ))}{" "}
          </Swiper>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default CoursesWeOffer;
