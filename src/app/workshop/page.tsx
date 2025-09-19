import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import WorkshopCard from "./WorkshopCard.component";
import StrongText from "@/components/text/StrongText.component";

export interface IWorkshop {}

const Workshop: React.FC<IWorkshop> = ({}) => {
  return (
    <Stack
      gapY={"12"}
      paddingX={"24"}
      paddingBottom={"24"}
      paddingTop={"12"}
      className="border-t-2 border-burgundy"
    >
      <ColoredHeaderText
        subTitle="Asabina workshop adalah program Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, animi."
        text="Asabina Workshop"
      />

      <Stack gapY={8}>
        <StrongText fontSize={"2xl"}>Upcoming Workshop</StrongText>
        <Grid
          // Kunci utamanya ada di sini
          templateColumns={{
            base: "repeat(1, 1fr)", // 1 kolom di layar mobile
            md: "repeat(2, 1fr)", // 2 kolom di layar tablet
            lg: "repeat(3, 1fr)", // 4 kolom di layar desktop
          }}
          gap={16} // Jarak antar item
        >
          <GridItem>
            <WorkshopCard />
          </GridItem>
          <GridItem>
            <WorkshopCard />
          </GridItem>
        </Grid>
      </Stack>
      <Stack gapY={8} marginTop={8}>
        <StrongText fontSize={"2xl"}>Workshop Sebelumnya</StrongText>
        <Grid
          // Kunci utamanya ada di sini
          templateColumns={{
            base: "repeat(1, 1fr)", // 1 kolom di layar mobile
            md: "repeat(2, 1fr)", // 2 kolom di layar tablet
            lg: "repeat(3, 1fr)", // 4 kolom di layar desktop
          }}
          gap={16} // Jarak antar item
        >
          <GridItem>
            <WorkshopCard cardVariant="light-orange" />
          </GridItem>
          <GridItem>
            <WorkshopCard cardVariant="light-orange" />
          </GridItem>
          <GridItem>
            <WorkshopCard cardVariant="light-orange" />
          </GridItem>
          <GridItem>
            <WorkshopCard cardVariant="light-orange" />
          </GridItem>
        </Grid>
      </Stack>
    </Stack>
  );
};
export default Workshop;
