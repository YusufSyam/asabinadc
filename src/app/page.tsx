import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { Grid, GridItem, Group, Stack, VStack } from "@chakra-ui/react";
import HomeHeroSection from "./HomeHero.section";
import HomeOurImpactSection from "./HomeOurImpact.section";
import Wireframe from "@/components/Wireframe.component";
import HomeOurProgramSection from "./HomeOurProgram.section";
import HomeAboutUsSection from "./HomeAboutUs.section";

export default function Home() {
  return (
    <Stack gapY={"28"} paddingX={"24"} paddingBottom={"24"} className="">
      <HomeHeroSection />
      <HomeOurImpactSection />
      <HomeOurProgramSection />
      <HomeAboutUsSection />
    </Stack>
  );
}
