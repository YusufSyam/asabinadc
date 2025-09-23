import { ITeamProfile } from "./interfaces";
import azasiImg from "../../../public/assets/images/teams-profile/azasi.JPG";
import fahmiImg from "../../../public/assets/images/teams-profile/fahmi.JPG";
import fauzanImg from "../../../public/assets/images/teams-profile/fauzan.JPG";
import ichaImg from "../../../public/assets/images/teams-profile/icha.JPG";
import rifkaImg from "../../../public/assets/images/teams-profile/rifka.JPG";
import rifqiImg from "../../../public/assets/images/teams-profile/rifqi.png";
import septiImg from "../../../public/assets/images/teams-profile/septi.JPG";
import shafwanImg from "../../../public/assets/images/teams-profile/shafwan.JPG";
import yusufImg from "../../../public/assets/images/teams-profile/yusuf.JPG";

export const CTeamProfile: ITeamProfile[] = [
  {
    name: "Muhammad Shafwan",
    imageSrc: shafwanImg,
    cardVariant: "burgundy",
    position: "Chairman",
  },
  {
    name: "Fauzan Muntazar",
    imageSrc: fauzanImg,
    cardVariant: "magenta",
    position: "Secretary",
  },
  {
    name: "M. Azasi Ma’Arif",
    imageSrc: azasiImg,
    cardVariant: "orange",
    position: "Treasurer",
  },
  {
    name: "Nur Wahdannisa",
    imageSrc: ichaImg,
    cardVariant: "magenta",
    position: "Head of Media & Publications",
  },
  {
    name: "Fahmi",
    imageSrc: fahmiImg,
    cardVariant: "burgundy",
    position: "Head of Knowledge & Education",
  },
  {
    name: "Septi Intan Amalia",
    imageSrc: septiImg,
    cardVariant: "orange",
    position: "Head of Public Relations",
  },
  {
    name: "Rifqi Rayhan",
    imageSrc: rifqiImg,
    cardVariant: "orange",
    position: "Media & Publication Officer",
  },
  {
    name: "Rifka Fadhilah",
    imageSrc: rifkaImg,
    cardVariant: "magenta",
    position: "Head of Social Development",
  },
  {
    name: "Muh. Yusuf Syam",
    imageSrc: yusufImg,
    cardVariant: "burgundy",
    position: "Head of IT & Digitalization",
  },
];
