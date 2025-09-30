import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

export interface IHomeOurImpactSection {
  refForScroll: React.RefObject<HTMLDivElement | null>;
}

const HomeOurImpactSection: React.FC<IHomeOurImpactSection> = ({
  refForScroll,
}) => {
  return (
    <VStack className=" w-full" ref={refForScroll}>
      <VStack>
        <ColoredHeaderText text="Our Impact" type="h2" />
        <SmallText color={"secondary-text"}>
          Jejak kontribusi kami dalam membangun harapan dan masa depan
        </SmallText>
      </VStack>
      {/* <Wireframe text="Prestasi/track record asabina selama ini" /> */}
      <Grid templateColumns={"1fr 1fr 1fr"} gap={8}>
        <GridItem w={"100%"} className="mt-14">
          <VStack className="self-end">
            <StrongText fontSize={"6xl"}>
              5<sup>+</sup>
            </StrongText>
            <SmallText>Workshop terlaksana</SmallText>
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
              10<sup>+</sup>
            </StrongText>
            <SmallText>Total Jam Ajar</SmallText>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default HomeOurImpactSection;
