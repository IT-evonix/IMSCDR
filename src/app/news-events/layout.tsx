import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News and Events |IMS-CDR Ahilyanagar Management Institute",
  description: "Stay updated with the latest news, events, workshops, seminars, and campus activities at IMS-CDR Ahilyanagar. Discover academic and student achievements.",
  alternates: {
    canonical: "https://imscdr.ac.in/news-events",
  },
  openGraph: {
    title: "News and Events |IMS-CDR Ahilyanagar Management Institute",
    description: "Stay updated with the latest news, events, workshops, seminars, and campus activities at IMS-CDR Ahilyanagar. Discover academic and student achievements.",
    url: "https://imscdr.ac.in/news-events",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "News and Events |IMS-CDR Ahilyanagar Management Institute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "News and Events |IMS-CDR Ahilyanagar Management Institute",
    description: "Stay updated with the latest news, events, workshops, seminars, and campus activities at IMS-CDR Ahilyanagar. Discover academic and student achievements.",
    images: ["/images/home/black_logo.jpg"],
  },
};

export default function NewsEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
