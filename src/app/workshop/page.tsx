import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import { Stack } from "@chakra-ui/react";
import React from "react";
import WorkshopListSection from "./WorkshopList.section";

export interface IWorkshop {}

const Workshop: React.FC<IWorkshop> = ({}) => {
  return (
    <Stack
      gapY={"12"}
      paddingX={{ base: "8", md: "12", lg: "24" }}
      paddingBottom={"24"}
      paddingTop={"12"}
      className="border-t-2 border-secondary"
    >
      <ColoredHeaderText
        subTitle="Asabina workshop adalah program pelatihan keterampilan praktis, mulai dari teknis hingga soft skills yang relevan dengan dunia kerja."
        text="ASABINA Workshop"
      />

      <WorkshopListSection />
    </Stack>
  );
};
export default Workshop;
