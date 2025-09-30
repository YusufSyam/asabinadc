"use client";

import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { Grid, GridItem, Group, Stack, VStack } from "@chakra-ui/react";
import HomeHeroSection from "./HomeHero.section";
import HomeOurImpactSection from "./HomeOurImpact.section";
import Wireframe from "@/components/Wireframe.component";
import HomeOurProgramSection from "./HomeOurProgram.section";
import HomeAboutUsSection from "./HomeAboutUs.section";
import { useRef } from "react";

export default function Home() {
  // 1. Buat satu ref untuk setiap section tujuan
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

  // 2. Buat SATU fungsi scroll generik
  const handleScrollToSection = (
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Stack gapY={"28"} paddingX={"24"} paddingBottom={"24"} className="">
      <HomeHeroSection
        onScrollTo2={() => handleScrollToSection(section2Ref)}
        onScrollTo3={() => handleScrollToSection(section3Ref)}
        onScrollTo4={() => handleScrollToSection(section4Ref)}
      />
      <HomeOurImpactSection refForScroll={section2Ref} />
      <HomeOurProgramSection refForScroll={section3Ref} />
      <HomeAboutUsSection refForScroll={section4Ref} />
    </Stack>
  );
}
