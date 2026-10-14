import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMS-CDR Blogs | Management, Business & Education Insights",
  description: "Read IMS-CDR blogs on management, business, computer applications and education, with useful insights for MBA, MCA, BBA, BCA and PhD students.",
  alternates: {
    canonical: "https://imscdr.ac.in/blogs",
  },
  openGraph: {
    title: "IMS-CDR Blogs | Management, Business & Education Insights",
    description: "Read IMS-CDR blogs on management, business, computer applications and education, with useful insights for MBA, MCA, BBA, BCA and PhD students.",
    url: "https://imscdr.ac.in/blogs",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Blogs | Management, Business & Education Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Blogs | Management, Business & Education Insights",
    description: "Read IMS-CDR blogs on management, business, computer applications and education, with useful insights for MBA, MCA, BBA, BCA and PhD students.",
    images: ["/images/home/black_logo.jpg"],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
