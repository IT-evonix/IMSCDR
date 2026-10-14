import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (slug === "annual-cultural-festival-2026") {
    return {
      title: "Annual Cultural Festival 2026 | IMS-CDR Ahilyanagar",
      description:
        "Experience the Annual Cultural Festival 2026 at IMS-CDR Ahilyanagar with vibrant performances, competitions, & student activities celebrating talent and creativity.",
      alternates: {
        canonical:
          "https://imscdr.ac.in/news-events/annual-cultural-festival-2026",
      },
      openGraph: {
        title: "Annual Cultural Festival 2026 | IMS-CDR Ahilyanagar",
        description:
          "Experience the Annual Cultural Festival 2026 at IMS-CDR Ahilyanagar with vibrant performances, competitions, & student activities celebrating talent and creativity.",
        url: "https://imscdr.ac.in/news-events/annual-cultural-festival-2026",
        siteName: "BPHE Society's IMS-CDR Ahilyanagar",
        locale: "en_IN",
        type: "website",
        images: [
          {
            url: "/images/home/black_logo.jpg",
            width: 1200,
            height: 630,
            alt: "Annual Cultural Festival 2026 | IMS-CDR Ahilyanagar",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Annual Cultural Festival 2026 | IMS-CDR Ahilyanagar",
        description:
          "Experience the Annual Cultural Festival 2026 at IMS-CDR Ahilyanagar with vibrant performances, competitions, & student activities celebrating talent and creativity.",
        images: ["/images/home/black_logo.jpg"],
      },
    };
  }

  const formattedTitle = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${formattedTitle} | IMS-CDR Ahilyanagar`,
    description: `${formattedTitle} - Read more about this event at IMS-CDR Ahilyanagar.`,
    alternates: {
      canonical: `https://imscdr.ac.in/news-events/${slug}`,
    },
    openGraph: {
      title: `${formattedTitle} | IMS-CDR Ahilyanagar`,
      description: `${formattedTitle} - Read more about this event at IMS-CDR Ahilyanagar.`,
      url: `https://imscdr.ac.in/news-events/${slug}`,
      siteName: "BPHE Society's IMS-CDR Ahilyanagar",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/images/home/black_logo.jpg",
          width: 1200,
          height: 630,
          alt: formattedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedTitle} | IMS-CDR Ahilyanagar`,
      description: `${formattedTitle} - Read more about this event at IMS-CDR Ahilyanagar.`,
      images: ["/images/home/black_logo.jpg"],
    },
  };
}

export default function NewsSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
