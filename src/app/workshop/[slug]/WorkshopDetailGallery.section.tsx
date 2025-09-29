"use client";

import StrongText from "@/components/text/StrongText.component";
import { IGalleryPhoto } from "@/utils/const/interfaces";
import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface IWorkshopDetailGallery {
  gallery: IGalleryPhoto[];
}

const WorkshopDetailGallery: React.FC<IWorkshopDetailGallery> = ({
  gallery,
}) => {
  const [index, setIndex] = useState(-1);
  return (
    <Stack gapY={12}>
      <StrongText className="text-center">Galeri Workshop</StrongText>
      <RowsPhotoAlbum
        photos={gallery}
        onClick={({ index: currentIndex }) => setIndex(currentIndex)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={gallery}
      />
    </Stack>
  );
};
export default WorkshopDetailGallery;
