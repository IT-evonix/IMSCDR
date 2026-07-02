import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import InnerpageBanner from "@/components/InnerpageBanner";
import { newsData } from "@/data/newsData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const news = newsData.find(
    (item) => item.slug === slug && item.type === "detail"
  );

  if (!news) {
    notFound();
  }

  return (
    <div className="innerpage-wrapper">
      <InnerpageBanner
         title="News & Events Detail"
        breadcrumbs={[
          {
            label: "News & Events",
            href: "/news-events",
          },
          {
            label: news.title,
          },
        ]}
      />

      <section className="news-detail-section">
        <div className="container">

          {/* Image */}
          {news.image && (
            <div className="news-detail-image">
              <Image
                src={news.image}
                alt={news.title}
                width={1200}
                height={700}
                priority
              />
            </div>
          )}

          <div className="news-detail-content">

            {/* Date */}
            {news.date && (
              <span className="news-date">{news.date}</span>
            )}

            {/* Title */}
            <div className="heading">{news.title}</div>

            {/* Description */}
            {news.description?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            

            <Link href="/news-events" className="back-btn">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.375 10.5L0.5 5.5L5.375 0.5M0.5 5.5L9.03125 5.5M13.5 5.5L11.4688 5.5"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Back to News & Events</span>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}