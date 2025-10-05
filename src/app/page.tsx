"use client";

import { Stack } from "@chakra-ui/react";
import { useRef } from "react";
import HomeAboutUsSection from "./HomeAboutUs.section";
import HomeHeroSection from "./HomeHero.section";
import HomeOurImpactSection from "./HomeOurImpact.section";
import HomeOurProgramSection from "./HomeOurProgram.section";

export default function Home() {
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const section4Ref = useRef<HTMLDivElement>(null);

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
    <Stack
      gapY={{md:"28", base:"24"}}
      paddingX={{ base: "8", md: "12", lg: "24" }}
      paddingBottom={"24"}
      className=""
    >
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
