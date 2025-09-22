import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import SekelasCard from "./SekelasCard.component";
import StrongText from "@/components/text/StrongText.component";

export interface ISekelas {}

const Sekelas: React.FC<ISekelas> = ({}) => {
  return (
    <Stack
      gapY={"12"}
      paddingX={"24"}
      paddingBottom={"24"}
      paddingTop={"12"}      className="border-t-2 border-secondary"

    >
      <ColoredHeaderText
        subTitle="SEKELAS (Sejenak Kelas) Asabina adalah program Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, animi."
        text="SEKELAS Asabina"
      />
      <Stack gapY={8}>
        <StrongText fontSize={"2xl"}>SEKELAS Aktif</StrongText>
        <Grid
          // Kunci utamanya ada di sini
          templateColumns={{
            base: "repeat(1, 1fr)", // 1 kolom di layar mobile
            md: "repeat(2, 1fr)", // 2 kolom di layar tablet
            lg: "repeat(2, 1fr)", // 4 kolom di layar desktop
          }}
          gap={16} // Jarak antar item
        >
          <GridItem>
            <SekelasCard oprec />
          </GridItem>
          <GridItem>
            <SekelasCard />
          </GridItem>
        </Grid>
      </Stack>
      <Stack gapY={8} marginTop={8}>
        <StrongText fontSize={"2xl"}>SEKELAS sebelumnya</StrongText>
        <Grid
          // Kunci utamanya ada di sini
          templateColumns={{
            base: "repeat(1, 1fr)", // 1 kolom di layar mobile
            md: "repeat(2, 1fr)", // 2 kolom di layar tablet
            lg: "repeat(2, 1fr)", // 4 kolom di layar desktop
          }}
          gap={16} // Jarak antar item
        >
          <GridItem>
            <SekelasCard />
          </GridItem>
          <GridItem>
            <SekelasCard />
          </GridItem>
          <GridItem>
            <SekelasCard />
          </GridItem>
          <GridItem>
            <SekelasCard />
          </GridItem>
          <GridItem>
            <SekelasCard />
          </GridItem>
          <GridItem>
            <SekelasCard />
          </GridItem>
          <GridItem>
            <SekelasCard />
          </GridItem>
        </Grid>
      </Stack>
    </Stack>
  );
};
export default Sekelas;
