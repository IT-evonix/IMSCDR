import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "IMS | Home Page",
  description:
    "BPHE Society's Institute of Management Studies Career Development & Research (IMSCDR)",
  icons: {
    icon: "/images/home/IMS_URL_LOGO.webp",
    shortcut: "/images/home/IMS_URL_LOGO.webp",
    apple: "/images/home/IMS_URL_LOGO.webp",
  },
  // openGraph: {
  //   title: "IMS-CDR | Home Page",
  //   description:
  //     "BPHE Society's Institute of Management Studies Career Development & Research (IMS-CDR)",
  //   url: "https://imscdr.ac.in/",
  //   siteName: "Institute of Management Studies",
  //   images: [
  //     {
  //       url: "https://imscdr.ac.in/images/home/black_logo.jpg",
  //       width: 500,
  //       height: 250,
  //       alt: "Institute of Management Studies",
  //     },
  //   ],
  //   locale: "en_IN",
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
