import { StaticImageData } from "next/image";
import { Photo } from "react-photo-album";

export interface ITeamProfile {
  name: string;
  position: string;
  imageSrc: string | String | StaticImageData;
  cardVariant?: "burgundy" | "orange" | "magenta";
}

export interface IWorkshopData {
  workshopName: string;
  workshopTitle: string;
  slug: string;
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
  galleryPhotos?: IGalleryPhoto[]
}

export interface ISekelasData {
  sekelasName: string;
  date: Date;
  time?: string;
  description?: string;
  flyerImageSrc?: string | StaticImageData;
  location?: string;
  locationDetail?: string;
  slug?: string;
  isUpcoming?: boolean;
  meetingCount?: number;
  agenda?: string;
}

export interface IGalleryPhoto extends Photo {
  src: string;
  width: number;
  height: number;
}
