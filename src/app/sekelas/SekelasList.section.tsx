"use client";

import EmptyBox from "@/components/EmptyBox.component";
import StrongText from "@/components/text/StrongText.component";
import { ISekelasData } from "@/utils/const/interfaces";
import { CSekelasData } from "@/utils/const/starterConst";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import SekelasCard from "./SekelasCard.component";

export interface ISekelasListSection {}

const SekelasListSection: React.FC<ISekelasListSection> = ({}) => {
  const [sekelasData] = useState<ISekelasData[]>(CSekelasData);

  const upcomingSekelas = sekelasData.filter((sekelas) => sekelas.isUpcoming);

  const pastSekelas = sekelasData.filter((sekelas) => !sekelas.isUpcoming);

  return (
    <>
      <Stack gapY={8}>
        <StrongText fontSize={"2xl"}>SEKELAS yang Akan Datang</StrongText>
        {upcomingSekelas?.length > 0 ? (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
            }}
            gapX={{
              lg: 12,
              md: 8,
              sm: 4,
              base: 4,
            }}
            gapY={{
              md: 16,
              base: 8,
            }}
          >
            {upcomingSekelas?.map((sekelas: ISekelasData, idx: number) => {
              return (
                <GridItem key={idx}>
                  <SekelasCard {...sekelas} />
                </GridItem>
              );
            })}
          </Grid>
        ) : (
          <EmptyBox
            title="Tidak ada jadwal SEKELAS yang akan datang"
            message="Belum ada jadwal kelas terbaru saat ini. Nantikan informasi berikutnya, karena kami terus menyiapkan program yang relevan dan bermanfaat untuk Anda"
          />
        )}
      </Stack>
      <Stack gapY={8} marginTop={8}>
        <StrongText fontSize={"2xl"}>SEKELAS sebelumnya</StrongText>
        {pastSekelas?.length > 0 ? (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              lg: "repeat(2, 1fr)",
              xl: "repeat(2, 1fr)",
            }}
            gapX={{
              lg: 12,
              md: 8,
              sm: 4,
              base: 4,
            }}
            gapY={{
              md: 16,
              base: 8,
            }}
          >
            {pastSekelas?.map((sekelas: ISekelasData, idx: number) => {
              return (
                <GridItem key={idx}>
                  <SekelasCard {...sekelas} />
                </GridItem>
              );
            })}
          </Grid>
        ) : (
          <EmptyBox
            title="Belum ada kegiatan SEKELAS sebelumnya"
            message="Belum ada kegiatan sebelumnya saat ini. Nantikan informasi berikutnya, karena kami terus menyiapkan program yang relevan dan bermanfaat untuk Anda"
          />
        )}
      </Stack>
    </>
  );
};
export default SekelasListSection;
