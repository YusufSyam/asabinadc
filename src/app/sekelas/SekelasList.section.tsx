"use client"

import StrongText from "@/components/text/StrongText.component";
import { Stack, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import SekelasCard from "./SekelasCard.component";
import { CSekelasData } from "@/utils/const/starterConst";
import { ISekelasData } from "@/utils/const/interfaces";
import EmptyBox from "@/components/EmptyBox.component";

export interface ISekelasListSection {}

const SekelasListSection: React.FC<ISekelasListSection> = ({}) => {
  const [sekelasData, setSekelasData] = useState<ISekelasData[]>(CSekelasData);

  const upcomingSekelas = sekelasData.filter((sekelas) => sekelas.isUpcoming);

  const pastSekelas = sekelasData.filter((sekelas) => !sekelas.isUpcoming);

  return (
    <>
      <Stack gapY={8}>
        <StrongText fontSize={"2xl"}>SEKELAS yang Akan Datang</StrongText>
        {upcomingSekelas?.length > 0 ? (
          <Grid
            // Kunci utamanya ada di sini
            templateColumns={{
              base: "repeat(1, 1fr)", // 1 kolom di layar mobile
              md: "repeat(2, 1fr)", // 2 kolom di layar tablet
              lg: "repeat(2, 1fr)", // 4 kolom di layar desktop
            }}
            gap={16} // Jarak antar item
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
            // Kunci utamanya ada di sini
            templateColumns={{
              base: "repeat(1, 1fr)", // 1 kolom di layar mobile
              md: "repeat(2, 1fr)", // 2 kolom di layar tablet
              lg: "repeat(2, 1fr)", // 4 kolom di layar desktop
            }}
            gap={16} // Jarak antar item
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
