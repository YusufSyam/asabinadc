import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import Wireframe from "@/components/Wireframe.component";
import { VStack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export interface IHomeOurImpactSection {}

const HomeOurImpactSection: React.FC<IHomeOurImpactSection> = ({}) => {
  return (
    <VStack className=" w-full">
      <ColoredHeaderText text="Our Impact" type="h2" />
      {/* <Wireframe text="Prestasi/track record asabina selama ini" /> */}
      <Grid templateColumns={"1fr 1fr 1fr"} gap={8}>
        <GridItem w={"100%"} className="mt-14">
          <VStack className="self-end">
            <StrongText fontSize={"6xl"}>
              10<sup>+</sup>
            </StrongText>
            <SmallText>Workshop</SmallText>
          </VStack>
        </GridItem>
        <GridItem w={"100%"}>
          <VStack>
            <StrongText fontSize={"8xl"}>
              100<sup>+</sup>
            </StrongText>
            <SmallText>Orang terbina</SmallText>
          </VStack>
        </GridItem>
        <GridItem w={"100%"} className="mt-14">
          <VStack className="self-end">
            <StrongText fontSize={"6xl"}>
              5<sup>+</sup>
            </StrongText>
            <SmallText>Panti diajar</SmallText>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default HomeOurImpactSection;
