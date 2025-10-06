import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React from "react";
import SekelasCard from "./SekelasCard.component";
import StrongText from "@/components/text/StrongText.component";
import SekelasListSection from "./SekelasList.section";

export interface ISekelas {}

const Sekelas: React.FC<ISekelas> = ({}) => {
  return (
    <Stack
      gapY={"12"}
      paddingX={{ base: "8", md: "12", lg: "24" }}
      paddingBottom={"24"}
      paddingTop={"12"}
      className="border-t-2 border-secondary"
    >
      <ColoredHeaderText
        subTitle="SEKELAS (Sejenak Kelas) Asabina adalah program pendidikan dasar untuk anak-anak di daerah kurang terjangkau"
        text="SEKELAS ASABINA"
      />
      <SekelasListSection />
    </Stack>
  );
};
export default Sekelas;
