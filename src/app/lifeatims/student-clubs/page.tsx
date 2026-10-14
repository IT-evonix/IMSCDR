import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Clubs at IMS-CDR Ahilyanagar | Campus Activities",
  description: "Discover student clubs at IMS-CDR Ahilyanagar that encourage leadership, creativity, teamwork, cultural participation and engaging experiences beyond the classroom.",
  alternates: {
    canonical: "https://imscdr.ac.in/lifeatims/student-clubs",
  },
  openGraph: {
    title: "Student Clubs at IMS-CDR Ahilyanagar | Campus Activities",
    description: "Discover student clubs at IMS-CDR Ahilyanagar that encourage leadership, creativity, teamwork, cultural participation and engaging experiences beyond the classroom.",
    url: "https://imscdr.ac.in/lifeatims/student-clubs",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Student Clubs at IMS-CDR Ahilyanagar | Campus Activities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Clubs at IMS-CDR Ahilyanagar | Campus Activities",
    description: "Discover student clubs at IMS-CDR Ahilyanagar that encourage leadership, creativity, teamwork, cultural participation and engaging experiences beyond the classroom.",
    images: ["/images/home/black_logo.jpg"],
  },
};

import React from "react";
import Table from "@/components/ui/Table";
import {
  committeesColumns,
  committeesText,
} from "@/data/tablemembers";

const Page = () => {
  return (
    <div className="innerpagerightside">
      <div className="heading">Student Committees & Clubs</div>
      <p className="mb-3">IMS-CDR promotes leadership, teamwork, and holistic development through active student participation in various committees and clubs.</p>
      <Table
        columns={committeesColumns}
        data={committeesText}
      />
      <p className="mt-4">These committees provide students with valuable opportunities to develop leadership, communication, teamwork, and organizational skills beyond the classroom.</p>
    </div>
  );
};

export default Page;