import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MBA Downloads | IMS-CDR Ahilyanagar Course Resources",
  description: "Access MBA downloads from IMS-CDR Ahilyanagar, including course resources, academic documents, forms and useful information for students and applicants.",
  alternates: {
    canonical: "https://imscdr.ac.in/program-mba/downloads",
  },
  openGraph: {
    title: "MBA Downloads | IMS-CDR Ahilyanagar Course Resources",
    description: "Access MBA downloads from IMS-CDR Ahilyanagar, including course resources, academic documents, forms and useful information for students and applicants.",
    url: "https://imscdr.ac.in/program-mba/downloads",
    siteName: "BPHE Society's IMS-CDR Ahilyanagar",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/home/black_logo.jpg",
        width: 1200,
        height: 630,
        alt: "MBA Downloads | IMS-CDR Ahilyanagar Course Resources",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBA Downloads | IMS-CDR Ahilyanagar Course Resources",
    description: "Access MBA downloads from IMS-CDR Ahilyanagar, including course resources, academic documents, forms and useful information for students and applicants.",
    images: ["/images/home/black_logo.jpg"],
  },
};

// import React from "react";
// import Image from "next/image";
// import ExploreBtn from "@/components/ui/ExploreBtn";

// const page = () => {
//   return (
//     <div className="innerpagerightside">
//       <div className="div">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="ImageBox">
//               <Image
//                 src="/images/program/downloads.webp"
//                 alt=""
//                 width={450}
//                 height={400}
//                 className="img-fluid"
//               />
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className="heading">Downloads</div>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since 1966, when designers at Letraset and James Mosley, the
//               librarian at St Bride Printing Library in London, took a 1914
//               Cicero translation and scrambled it to make dummy text for
//               Letraset's Body Type sheets.
//             </p>
//             <ExploreBtn href="/" text="Know More" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;


import React from 'react'

const page = () => {
  return (
    <div className='innerpagerightside'>
      <div className="heading">Coming Soon</div>
    </div>
  )
}

export default page

