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
      <VStack gapY={{ md: 2, base: 0 }}>
        <ColoredHeaderText text="Our Impact" type="h2" />
        <SmallText color={"secondary-text"} textAlign={"center"}>
          Jejak kontribusi kami dalam membangun harapan dan masa depan
        </SmallText>
      </VStack>
      {/* <Wireframe text="Prestasi/track record asabina selama ini" /> */}
      <Grid templateColumns={"1fr 1fr 1fr"} gap={{md:8, base:4}} alignItems={"end"}>
        <GridItem w={"100%"}>
          <VStack className="self-end">
            <StrongText fontSize={{ base: "5xl", md: "6xl" }}>
              5<sup>+</sup>
            </StrongText>
            <SmallText textAlign={"center"}>Workshop terlaksana</SmallText>
          </VStack>
        </GridItem>
        <GridItem w={"100%"} className="">
          <VStack className="self-end">
            <StrongText fontSize={{ base: "7xl", md: "8xl" }}>
              100<sup>+</sup>
            </StrongText>
            <SmallText>Orang terbina</SmallText>
          </VStack>
        </GridItem>
        <GridItem w={"100%"}>
          <VStack className="self-end">
            <StrongText fontSize={{ base: "5xl", md: "6xl" }}>
              10<sup>+</sup>
            </StrongText>
            <SmallText textAlign={"center"}>Total Jam Ajar</SmallText>
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default HomeOurImpactSection;
