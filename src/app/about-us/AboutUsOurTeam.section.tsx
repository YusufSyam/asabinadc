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
  const [ourTeamData] = useState(CTeamProfile);
  return (
    <VStack gapY={16} marginBottom={12}>
      <VStack gapY={0}>
        <ColoredHeaderText text="Meet Our Team" type="h2" textAlign="center" />
        <SmallText
          color={"secondary-text"}
          width={{ md: "75%", base: "full" }}
          textAlign={"center"}
        >
          Asabina adalah rumah bagi para individu yang percaya bahwa perubahan
          bisa dimulai dari tindakan sederhana. Kenali lebih dekat orang-orang
          di balik program dan kegiatan kami.
        </SmallText>
      </VStack>
      <Grid
        templateColumns={{
          md: "repeat(3, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
        gapX={{ xl: 16, lg: 12, sm: 12, base: 8 }}
        gapY={{ xl: 24, lg: 20, md: 16, base: 12 }}
        marginX={{ xl: 20, lg: 0, md: 4, base: 4 }}
      >
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
