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
        <StrongText fontSize={"2xl"}>SEKELAS Aktif</StrongText>
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
            title="Tidak ada Upcoming Workshop"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis labore aliquid vitae doloribus amet nisi reiciendis neque perspiciatis ipsa cum."
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
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis labore aliquid vitae doloribus amet nisi reiciendis neque perspiciatis ipsa cum."
          />
        )}
      </Stack>
    </>
  );
};
export default SekelasListSection;
