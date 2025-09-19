import OurProgramCard from "@/components/card/OurProgramCard.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import Wireframe from "@/components/Wireframe.component";
import ROUTES from "@/utils/const/routes";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

export interface IHomeOurProgramSection {}

const HomeOurProgramSection: React.FC<IHomeOurProgramSection> = ({}) => {
  return (
    <VStack gapY={8}>
      <VStack>
        <ColoredHeaderText text="Our Program" />
        <SmallText className="w-1/2 text-center !text-secondary-text">
          ASABINA Development Center memiliki 2 program utama, yaitu ASABINA
          Workshop dan SEKELAS ASABINA, Lorem ipsum, dolor sit amet consectetur
          adipisicing elit.
        </SmallText>
      </VStack>
      <Grid templateColumns={"1fr 1fr"} gapX={12} paddingX={24} className="w-full">
        <GridItem minWidth="0">
            <OurProgramCard href={ROUTES.WORKSHOP} firstTitle="ASABINA" secondTitle="Workshop" />
        </GridItem>
        <GridItem minWidth="0">
            <OurProgramCard href={ROUTES.SEKELAS} cardVariant="burgundy" firstTitle="SEKELAS" secondTitle="ASABINA" />
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default HomeOurProgramSection;
