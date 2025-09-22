import { Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";
import galleryHero from "../../../public/assets/images/gallery-hero.png";
import Image from "next/image";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import Wireframe from "@/components/Wireframe.component";

export interface IGalleryPage {}

const GalleryPage: React.FC<IGalleryPage> = ({}) => {
  return (
    <Stack gapY={"24"} paddingX={"24"} paddingBottom={"24"}       className="border-t-2 border-secondary"
>
      <VStack marginTop={12}>
        <div className="">
          <Image
            src={galleryHero}
            style={{ objectFit: "contain" }}
            alt="Gallery Hero"
          />
        </div>
        <ColoredHeaderText text="Asabina Gallery" />
      </VStack>
      <Wireframe text={"[Di sini kolase/galeri gambar-gambar]"}/>
    </Stack>
  );
};
export default GalleryPage;
