import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

export const metadata: Metadata = {
  title: "IMS | Home Page",
  description: "BPHE Society's Institute of Management Studies Career Development & Research (IMSCDR)",
  icons: {
    icon: "/images/home/IMS_URL_LOGO.webp",
    shortcut: "/images/home/IMS_URL_LOGO.webp",
    apple: "/images/home/IMS_URL_LOGO.webp",
  },
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
