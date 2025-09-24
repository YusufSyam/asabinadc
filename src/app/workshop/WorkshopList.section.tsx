"use client";

import StrongText from "@/components/text/StrongText.component";
import { IWorkshopData } from "@/utils/const/interfaces";
import { CWorkshopData } from "@/utils/const/starterConst";
import { Stack, Grid, GridItem, Group, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import WorkshopCard from "./WorkshopCard.component";
import { StickerEmpty } from "@/components/icons/Stickers.component";
import SmallText from "@/components/text/SmallText.component";
import EmptyBox from "@/components/EmptyBox.component";

export interface IWorkshopListSection {}

const WorkshopListSection: React.FC<IWorkshopListSection> = ({}) => {
  const [workshopData, setWorkshopData] =
    useState<IWorkshopData[]>(CWorkshopData);

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
        <StrongText fontSize={"2xl"}>Upcoming Workshop</StrongText>
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
            title="Tidak ada Upcoming Workshop"
            message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis labore aliquid vitae doloribus amet nisi reiciendis neque perspiciatis ipsa cum."
          />
        )}
      </Stack>
      <Stack gapY={8} marginTop={8}>
        <StrongText fontSize={"2xl"}>Previous Workshop</StrongText>
        <Grid
          // Kunci utamanya ada di sini
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
