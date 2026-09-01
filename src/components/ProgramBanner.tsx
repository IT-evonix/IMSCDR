// "use client";

// import { usePathname } from "next/navigation";
// import InnerpageBanner from "@/components/InnerpageBanner";

// interface Props {
//   heading: string;
//   bannerTitle?: string;
// }

// export default function ProgramBanner({
//   heading,
//   bannerTitle,
// }: Props) {
//   const pathname = usePathname();

//   const slug = pathname.split("/").pop() || "";

//   // Generate title from URL slug
//   const slugTitle = slug
//     .split("-")
//     .map(
//       (word) =>
//         word.charAt(0).toUpperCase() + word.slice(1)
//     )
//     .join(" ");

//   // Manual title has priority, otherwise use URL slug title
//   const pageTitle = bannerTitle || slugTitle;

//   return (
//     <InnerpageBanner
//       title={pageTitle}
//       breadcrumbs={[
//         {
//           label: "Programmes",
//           href: "/programmes",
//         },
//         {
//           label: heading,
//         },
//         {
//           label: pageTitle,
//         },
//       ]}
//     />
//   );
// }



"use client";

import { usePathname } from "next/navigation";
import InnerpageBanner from "@/components/InnerpageBanner";

interface Props {
  heading: string;
  bannerTitle?: string;
}

export default function ProgramBanner({
  heading,
  bannerTitle,
}: Props) {
  const pathname = usePathname();

  const slug = pathname.split("/").pop() || "";

  const slugTitle = slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");

  // Manual title असेल तर तो वापरेल,
  // नाहीतर URL slug वापरेल
  const pageTitle = bannerTitle || slugTitle;

  return (
    <InnerpageBanner
      title={pageTitle}
      breadcrumbs={[
        {
          label: "Programmes",
          href: "/programmes",
        },
        {
          label: heading,
        },
        {
          label: pageTitle,
        },
      ]}
    />
  );
}