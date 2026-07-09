export interface NewsItem {
  id: number;
  slug?: string;
  title: string;
  description?: string[];
  image?: string;
  date?: string;
  type: "detail" | "pdf";
  link: string;
}

export const newsData: NewsItem[] = [
  {
    id: 1,
    slug: "feedback-action-taken-reports",
    title: "Feedback Action Taken Reports",
    image: "/images/news-and-events/newsandevents.webp",
    type: "pdf",
    link: "/pdf/news-and-events/Feedback-Action-Taken-Report.pdf",
  },
  {
    id: 2,
    slug: "Feedback-Analysis",
    title: "Feedback Analysis",
    image: "/images/news-and-events/newsandevents.webp",
    type: "pdf",
    link: "/pdf/news-and-events/Feedback-Analysis.pdf",
  },
  {
    id: 3,
    slug: "NAAC-Cycle-3-SSR-Revised-(June-2024).pdf",
    title: "Holiday Notice",
    image: "/images/news-and-events/newsandevents.webp",
    type: "pdf",
    link: "/pdf/news-and-events/NAAC-Cycle-3-SSR-Revised-(June-2024).pdf",
  },
  {
    id: 4,
    slug: "news1",
    title: "News 1",
    image: "/images/news-and-events/newsandevents.webp",
    type: "pdf",
    link: "/pdf/news-and-events/news1.pdf",
  },
  {
    id: 5,
    slug: "news2",
    title: "News 2",
    image: "/images/news-and-events/newsandevents.webp",
    type: "pdf",
    link: "/pdf/news-and-events/news2.pdf",
  },
//   {
//     id: 6,
//     slug: "sports-meet-2026",
//     title: "Annual Sports Meet 2026",
//     description: [
//       "Annual Sports Meet 2026",
//     ],
//     image: "/images/news-and-events/newsandevents.webp",
//     date: "20 June 2026",
//     type: "detail",
//     link: "/news-events/sports-meet-2026",
//   },
  {
    id: 6,
    slug: "annual-cultural-festival-2026",
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",

      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",

      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets.",
    ],
    image: "/images/news-and-events/newsandevents.webp",
    date: "12 July 2026",
    type: "detail",
    link: "/news-events/annual-cultural-festival-2026",
  },
];
