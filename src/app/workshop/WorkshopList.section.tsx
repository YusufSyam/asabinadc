"use client";

import EmptyBox from "@/components/EmptyBox.component";
import StrongText from "@/components/text/StrongText.component";
import { IWorkshopData } from "@/utils/const/interfaces";
import { CWorkshopData } from "@/utils/const/starterConst";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import WorkshopCard from "./WorkshopCard.component";

export interface IWorkshopListSection {}

const WorkshopListSection: React.FC<IWorkshopListSection> = ({}) => {
  const [workshopData] = useState<IWorkshopData[]>(CWorkshopData);

  const upcomingWorkshops = workshopData.filter(
    (workshop) => workshop.isUpcoming
  );

  const temppPastWorkshops = workshopData.filter(
    (workshop) => !workshop.isUpcoming
  );
  const pastWorkshops = temppPastWorkshops.toReversed();

  return (
    <>
      <Stack gapY={8}>
        <StrongText fontSize={"2xl"}>Workshop yang Akan Datang</StrongText>
        {upcomingWorkshops?.length > 0 ? (
          <Grid
            // Kunci utamanya ada di sini
            templateColumns={{
              base: "repeat(1, 1fr)", // 1 kolom di layar mobile
              md: "repeat(2, 1fr)", // 2 kolom di layar tablet
              lg: "repeat(3, 1fr)", // 4 kolom di layar desktop
            }}
            gap={16} // Jarak antar item
          >
            {upcomingWorkshops?.map(
              (workshopData: IWorkshopData, idx: number) => {
                return (
                  <GridItem key={"workshop-" + idx}>
                    <WorkshopCard
                      key={idx}
                      {...workshopData}
                      cardVariant="orange"
                    />
                  </GridItem>
                );
              }
            )}
          </Grid>
        ) : (
          <EmptyBox
            title="Tidak ada Workshop yang akan datang"
            message="Belum ada jadwal workshop terbaru saat ini. Nantikan informasi berikutnya, karena kami terus menyiapkan program yang relevan dan bermanfaat untuk Anda"
          />
        )}
      </Stack>
      <Stack gapY={8} marginTop={8}>
        <StrongText fontSize={"2xl"}>Workshop Sebelumnya</StrongText>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)", // 1 kolom di layar mobile
            md: "repeat(2, 1fr)", // 2 kolom di layar tablet
            lg: "repeat(3, 1fr)", // 4 kolom di layar desktop
          }}
          gap={16} // Jarak antar item
        >
          {pastWorkshops?.map((workshopData: IWorkshopData, idx: number) => {
            return (
              <GridItem key={"workshop-" + idx}>
                <WorkshopCard
                  key={idx}
                  {...workshopData}
                  cardVariant="light-orange"
                />
              </GridItem>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};
export default WorkshopListSection;
