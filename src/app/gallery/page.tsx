"use client";

import { Stack, VStack, Text, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import galleryHero from "../../../public/assets/images/gallery-hero.png";
import Image from "next/image";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import Wireframe from "@/components/Wireframe.component";
import {
  ColumnsPhotoAlbum,
  MasonryPhotoAlbum,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import SmallText from "@/components/text/SmallText.component";
import { CGalleryPhotos } from "@/utils/const/starterConst";

export interface IGalleryPage {}

const GalleryPage: React.FC<IGalleryPage> = ({}) => {
  const [index, setIndex] = useState(-1);

  return (
    <Stack
      gapY={"24"}
      paddingX={"24"}
      paddingBottom={"24"}
      paddingTop={"12"}
      className="border-t-2 border-secondary"
    >
      <VStack marginTop={12}>
        <div className="mb-12">
          <Image
            src={galleryHero}
            style={{ objectFit: "contain" }}
            alt="Gallery Hero"
          />
        </div>
        <VStack gapY={0}>
          <ColoredHeaderText text="Asabina Gallery" />
          <SmallText color={"secondary-text"}>
            Lorem ipsum dolor sit amet.
          </SmallText>
        </VStack>
      </VStack>
      <Box width={"100%"}>
        <MasonryPhotoAlbum
          photos={CGalleryPhotos}
          columns={3}
          skeleton
          padding={0}
          spacing={4}
          onClick={({ index: currentIndex }) => setIndex(currentIndex)}
        />
      </Box>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={CGalleryPhotos}
      />
    </Stack>
  );
};
export default GalleryPage;
