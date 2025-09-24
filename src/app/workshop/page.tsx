import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import WorkshopCard from "./WorkshopCard.component";
import StrongText from "@/components/text/StrongText.component";
import { CWorkshopData } from "@/utils/const/starterConst";
import { IWorkshopData } from "@/utils/const/interfaces";
import WorkshopListSection from "./WorkshopList.section";

export interface IWorkshop {}

const Workshop: React.FC<IWorkshop> = ({}) => {
  return (
    <Stack
      gapY={"12"}
      paddingX={"24"}
      paddingBottom={"24"}
      paddingTop={"12"}
      className="border-t-2 border-secondary"
    >
      <ColoredHeaderText
        subTitle="Asabina workshop adalah program Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, animi."
        text="Asabina Workshop"
      />

      <WorkshopListSection/>  
    </Stack>
  );
};
export default Workshop;
