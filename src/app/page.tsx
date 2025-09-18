import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { Grid, GridItem, Group, Stack, VStack } from "@chakra-ui/react";
import HomeHeroSection from "./HomeHero.section";
import HomeOurImpactSection from "./HomeOurImpact.section";
import Wireframe from "@/components/Wireframe.component";

export default function Home() {
  return (
    <Stack gapY={"24"} paddingX={"24"} paddingBottom={"24"} className="">
      <HomeHeroSection />
      <HomeOurImpactSection />
      <VStack>
        <ColoredHeaderText text="Our Program" />
        <Wireframe text="Asabina Workshop" />
        <Wireframe text="Sekelas Asabina" />
      </VStack>
      <VStack>
        <ColoredHeaderText text="Contact Us" />

        <Wireframe text="Di sini ada isian nama, email dan pesan" />
      </VStack>
    </Stack>
  );
}
