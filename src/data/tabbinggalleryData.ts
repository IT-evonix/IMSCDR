export interface GalleryItem {
  id: number;
  src: string;
  name?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
  images: GalleryItem[];
}

export const tabbingGalleryData: GalleryCategory[] = [
  {
    id: "campus",
    label: "Campus",
    images: [
      {
        id: 1,
        src: "/images/common-image1.webp",
      },
      {
        id: 2,
        src: "/images/common-image1.webp",
      },
      {
        id: 3,
        src: "/images/common-image1.webp",
      },
    ],
  },

{
    id: "events",
    label: "Events",
    images: [
      {
        id: 1,
        src: "/images/common-image1.webp",
        name: "Annual Event",
      },
      {
        id: 2,
        src: "/images/common-image1.webp",
        name: "Cultural Event",
      },
    ],
  },

{
    id: "activities",
    label: "Activities",
    images: [
      {
        id: 1,
        src: "/images/common-image1.webp",
        name: "Student Activity",
      },
      {
        id: 2,
        src: "/images/common-image1.webp",
        name: "Workshop",
      },
    ],
  },

];
