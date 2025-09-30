"use client";

import OurTeamPhotoCard from "@/components/card/OurTeamPhotoCard.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import { ITeamProfile } from "@/utils/const/interfaces";
import { CTeamProfile } from "@/utils/const/starterConst";
import { VStack, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export interface IAboutUsOurTeam {}

const AboutUsOurTeam: React.FC<IAboutUsOurTeam> = ({}) => {
  const [ourTeamData, setOurTeamData] = useState(CTeamProfile);
  return (
    <VStack gapY={16} marginBottom={12}>
      <VStack gapY={0}>
        <ColoredHeaderText text="Meet Our Team" type="h2" />
        <SmallText color={"secondary-text"} width={"75%"} textAlign={"center"}>
          Asabina adalah rumah bagi para individu yang percaya bahwa perubahan
          bisa dimulai dari tindakan sederhana. Kenali lebih dekat orang-orang
          di balik program dan kegiatan kami.
        </SmallText>
      </VStack>
      <Grid templateColumns="repeat(3, 1fr)" gapX={16} gapY={24} marginX={20}>
        {ourTeamData?.map((teamData: ITeamProfile, idx: number) => {
          return (
            <GridItem key={idx}>
              <OurTeamPhotoCard {...teamData} />
            </GridItem>
          );
        })}
      </Grid>
    </VStack>
  );
};
export default AboutUsOurTeam;
