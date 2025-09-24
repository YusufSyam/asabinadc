import { StaticImageData } from "next/image";

export interface ITeamProfile {
  name: string;
  position: string;
  imageSrc: string | String | StaticImageData;
  cardVariant?: "burgundy" | "orange" | "magenta";
}

export interface IWorkshopData {
  workshopName: string;
  workshopTitle: string;
  location: string;
  locationDetail: string;
  date: Date;
  time: string;
  description: string;
  speaker: string[];
  enrollLink: string | null;
  documentationLink: string;
  isUpcoming?: boolean;
  flyerImageSrc?: string | StaticImageData;
}