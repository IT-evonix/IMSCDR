import React from "react";
import Link from "next/link";
import Image from "next/image";
import InnerpageBanner from "@/components/InnerpageBanner";
import { newsData } from "@/data/newsData";

const Page = () => {
  return (
    <div className="innerpage-wrapper">
      <InnerpageBanner
        title="News & Events"
        breadcrumbs={[{ label: "News & Events" }]}
      />

      <section className="news-events-section">
        <div className="container">
          <div className="row">
            {newsData.map((item) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={item.id}>
                <div className="news-card">

                  {/* Image */}
                  {item.image && (
                    <div className="news-image">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={380}
                      />
                    </div>
                  )}

                  <div className="news-content">

                    {/* Date */}
                    {item.date && (
                      <span className="news-date">{item.date}</span>
                    )}

                    {/* Title */}
                    <div className="subheading">{item.title}</div>

                    {/* Description */}
                    {item.description && (
                      <p>{item.description[0]}</p>
                    )}

                    {/* Read More */}
                    {item.type === "detail" ? (
                      <Link href={item.link} className="news-btn">
                        <span>Read More</span>

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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="news-btn"
                      >
                        <span>Read More</span>

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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;