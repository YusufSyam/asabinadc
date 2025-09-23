"use client"

import OurTeamPhotoCard from "@/components/card/OurTeamPhotoCard.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import { ITeamProfile } from "@/utils/const/interfaces";
import { CTeamProfile } from "@/utils/const/starterConst";
import { VStack, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";

export interface IAboutUsOurTeam {}

const AboutUsOurTeam: React.FC<IAboutUsOurTeam> = ({}) => {
  const [ourTeamData, setOurTeamData] = useState(CTeamProfile);
  return (
    <VStack gapY={12}>
      <ColoredHeaderText text="Meet Our Team" type="h2" />
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
