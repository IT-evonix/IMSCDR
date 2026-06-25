import React from "react";
import Image from "next/image";

const CoursesWeOffer = () => {
  return (
    <section className="CoursesWeOffer_sec">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-2 mb-sm-4">
            <div className="heading text-white">Courses We Offer</div>
            <p className="text-white">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="CoursesWeOffer_inner">
          <div className="course_card">
            <div className="course_card_inner">
              <Image
                src="/images/home/Coursesimg1.webp"
                alt="Master of Business Administration"
                width={1200}
                height={600}
                className="img-fluid"
              />
              <div className="Courses_content">
                <div className="subheading">
                  Master of Business <br /> Administration
                </div>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="course_card">
            <div className="course_card_inner">
              <Image
                src="/images/home/Coursesimg2.webp"
                alt="Master of Business Administration"
                width={1200}
                height={600}
                className="img-fluid"
              />
              <div className="Courses_content">
                <div className="subheading">
                  Master in Computer <br /> Application
                </div>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="course_card">
            <div className="course_card_inner">
              <Image
                src="/images/home/Coursesimg3.webp"
                alt="Master of Business Administration"
                width={1200}
                height={600}
                className="img-fluid"
              />
              <div className="Courses_content">
                <div className="subheading">
                  Doctor of <br /> Philosophy
                </div>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="course_card">
            <div className="course_card_inner">
              <Image
                src="/images/home/Coursesimg4.webp"
                alt="Master of Business Administration"
                width={1200}
                height={600}
                className="img-fluid"
              />
              <div className="Courses_content">
                <div className="subheading">
                  Bachelor of Business <br /> Administration
                </div>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.625 10.5L13.5 5.5L8.625 0.5M13.5 5.5L4.96875 5.5M0.5 5.5L2.53125 5.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesWeOffer;
