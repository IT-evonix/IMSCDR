import type { Metadata } from "next";
import Script from "next/script";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./notices-circular.css";

import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://imscdr.ac.in"),

  title: {
    default: "IMS-CDR Ahilyanagar | Institute of Management Studies",
    template: "%s",
  },

  description:
    "Explore IMS-CDR Ahilyanagar, a leading Institute of Management Studies offering industry-focused programs. Apply for IMS admission and build your future.",

  icons: {
    icon: "/images/home/IMS_URL_LOGO.webp",
    shortcut: "/images/home/IMS_URL_LOGO.webp",
    apple: "/images/home/IMS_URL_LOGO.webp",
  },

  alternates: {
    canonical: "https://imscdr.ac.in",
  },

  openGraph: {
    title: "IMS-CDR Ahilyanagar | Institute of Management Studies",
    description:
      "Explore IMS-CDR Ahilyanagar, a leading Institute of Management Studies offering industry-focused programs. Apply for IMS admission and build your future.",
    url: "https://imscdr.ac.in",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "IMS-CDR Ahilyanagar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IMS-CDR Ahilyanagar | Institute of Management Studies",
    description:
      "Explore IMS-CDR Ahilyanagar, a leading Institute of Management Studies offering industry-focused programs. Apply for IMS admission and build your future.",
    images: ["/images/home/black_logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 return (
  <html lang="en">
    <head>
      {/* Google tag - Keep this first inside head */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-37Y9QY0YLC"
        strategy="beforeInteractive"
      />

      <Script
        id="google-analytics-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-37Y9QY0YLC');
          `,
        }}
      />
    </head>

    <body>
      <LayoutWrapper>{children}</LayoutWrapper>
    </body>
  </html>
);
}
