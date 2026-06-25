"use client";
import React from "react";
import Link from "next/link";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface InnerpageBannerProps {
  title: string;
  breadcrumbs: Breadcrumb[]; // 
}

const InnerpageBanner: React.FC<InnerpageBannerProps> = ({
  title,
  breadcrumbs,
}) => {
  return (
    <section className="innerbannersection">
      <div className="container">
        <div className="innerbannerinner">

          {/* Heading */}
          <h1 className="text-white text-center innerbannerheading whitespace-pre-line">
            {title}
          </h1>

          {/*  Breadcrumb */}
          <div className="breadcrumb_links d-flex align-items-center justify-content-center">

            {/* Static Home */}
            <Link href="/" className="homepagelink">
              Home
            </Link>

            <span className="opacity-50">|</span>

            {/* Dynamic  */}
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                
                {item.href ? (
                  <Link href={item.href} className="opacity-75">
                    {item.label}
                  </Link>
                ) : (
                  <span className="currentpage">
                    {item.label}
                  </span>
                )}

                {index < breadcrumbs.length - 1 && (
                  <span className="opacity-50">|</span>
                )}

              </React.Fragment>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default InnerpageBanner;