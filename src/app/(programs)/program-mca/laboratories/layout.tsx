import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCA Laboratories and Facilities | IMS-CDR",
  description: "MCA laboratories and facilities at IMS-CDR include an Advanced Programming Lab, smart classrooms, digital library, Wi-Fi, research support and project facilities.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mca/laboratories",
  },
  openGraph: {
    title: "MCA Laboratories and Facilities | IMS-CDR",
    description: "MCA laboratories and facilities at IMS-CDR include an Advanced Programming Lab, smart classrooms, digital library, Wi-Fi, research support and project facilities.",
    url: "https://imscdr.ac.in/program-mca/laboratories",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MCA Laboratories and Facilities | IMS-CDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MCA Laboratories and Facilities | IMS-CDR",
    description: "MCA laboratories and facilities at IMS-CDR include an Advanced Programming Lab, smart classrooms, digital library, Wi-Fi, research support and project facilities.",
    images: ["/images/home/black_logo.jpg"],
  },
};

export default function McaLaboratoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
