"use client";

import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import { CGalleryPhotos } from "@/utils/const/starterConst";
import { Blockquote, Box, Float, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryHero from "../../../public/assets/images/gallery-hero.png";

export interface IGalleryPage {}

const GalleryPage: React.FC<IGalleryPage> = ({}) => {
  const [index, setIndex] = useState(-1);

  return (
    <Stack
      gapY={"24"}
      paddingX={{ base: "8", md: "12", lg: "24" }}
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
            Setiap langkah kecil menuju perubahan, kami abadikan sebagai bukti
            nyata perjalanan bersama
          </SmallText>
          {/* <Blockquote.Root
            variant="plain"
            colorPalette="white"
            className="z-10"
            width={"50%"}
          >
            <Float placement="top-start" offsetY={2}>
              <Blockquote.Icon color={"secondary-text"} />
            </Float>
            <Blockquote.Content className="text-secondary-text tracking-5 text-[16px] text-justify">
              Setiap langkah kecil menuju perubahan, kami abadikan sebagai bukti
              nyata perjalanan bersama. Dokumentasi ini bukan hanya sekadar
              catatan visual, melainkan refleksi atas komitmen Asabina dalam
              memberikan akses pendidikan, pelatihan, serta ruang kolaborasi
              yang inklusif bagi masyarakat
            </Blockquote.Content>
          </Blockquote.Root> */}
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
