export interface FacilityItem {
  id: number;
  title: string;
  icon: string;
  fullWidth?: boolean;
}

export const hostelFacilities: FacilityItem[] = [
  {
    id: 1,
    title: "Well-furnished rooms",
    icon: "/images/campus/hostel/furnished-rooms.webp",
  },
  {
    id: 2,
    title: "Dining Hall",
    icon: "/images/campus/hostel/dining-hall.webp",
  },
  {
    id: 3,
    title: "Common Room",
    icon: "/images/campus/hostel/common-room.webp",
  },
  {
    id: 4,
    title: "TV Room",
    icon: "/images/campus/hostel/tv-room.webp",
  },
  {
    id: 5,
    title: "Medical Room",
    icon: "/images/campus/hostel/medical-room.webp",
  },
  {
    id: 6,
    title: "Solar Water Heater",
    icon: "/images/campus/hostel/solar-water-heater.webp",
  },
  {
    id: 7,
    title: "Safe and secure residential environment",
    icon: "/images/campus/hostel/residential.webp",
    fullWidth: true,
  },
  {
    id: 8,
    title: "Hygienic facilities with continuous water and electricity supply",
    icon: "/images/campus/hostel/electricity.webp",
    fullWidth: true,
  },
];

export const hostelboysFacilities: FacilityItem[] = [
  {
    id: 1,
    title: "Well-furnished rooms",
    icon: "/images/campus/hostel/furnished-rooms.webp",
  },
  {
    id: 2,
    title: "Comfortable accommodation",
    icon: "/images/campus/hostel/common-room.webp",
  },
  {
    id: 3,
    title: "Dining and medical facilities",
    icon: "/images/campus/hostel/dining-hall.webp",
  },
  {
    id: 4,
    title: "Solar Water Heater",
    icon: "/images/campus/hostel/solar-water-heater.webp",
  },
  {
    id: 5,
    title: "Safe and disciplined atmosphere",
    icon: "/images/campus/hostel/residential.webp",
    fullWidth: true,
  },
  {
    id: 6,
    title: "Common facilities for recreation and study",
    icon: "/images/campus/hostel/common_study.webp",
    fullWidth: true,
  },
];