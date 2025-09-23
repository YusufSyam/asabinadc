import { StaticImageData } from "next/image";

export interface ITeamProfile {
  name: string;
  position: string;
  imageSrc: string | String | StaticImageData;
  cardVariant?: "burgundy" | "orange" | "magenta";
}