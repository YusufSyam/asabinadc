import MissionCard from "@/components/card/MissionCard.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import Wireframe from "@/components/Wireframe.component";
import { Stack, VStack, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

export interface IAboutUsPage {}

const AboutUsPage: React.FC<IAboutUsPage> = ({}) => {
  return (
    <Stack
      gapY={"24"}
      paddingX={"24"}
      paddingBottom={"24"}
      className="border-t-2 border-secondary"
    >
      '
      <VStack>
        <ColoredHeaderText text="About Us" />
        <SmallText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos cum
          quod rerum laboriosam perferendis adipisci voluptate culpa repellat et
          omnis. Neque hic aliquid sapiente explicabo illo in cumque libero
          deserunt exercitationem possimus repudiandae nobis tempora
          necessitatibus, accusamus maxime facilis dolore asperiores quos natus
          voluptates quasi ex amet incidunt a. Optio!
        </SmallText>
      </VStack>
      <VStack gapY={8} className="w-full">
        <ColoredHeaderText text="Our Vision & Mission"></ColoredHeaderText>
        <Grid templateColumns="1fr 1fr 1fr" gapX={20} className="w-full  p-4">
          {/* Kolom Pertama (2/3 dari lebar) */}
          <GridItem className="bg-white">
            <MissionCard
              title="Menyediakan Program pengembangan diri"
              description="Untuk mendukung keterampilan pribadi maupun profesional tanpa memandang latar belakang"
            />
          </GridItem>
          <GridItem className="bg-white">
            <MissionCard
              title="Menyediakan Program pengembangan diri"
              description="Untuk mendukung keterampilan pribadi maupun profesional tanpa memandang latar belakang"
            />
          </GridItem>
          <GridItem className="bg-white">
            <MissionCard
              title="Menyediakan Program pengembangan diri"
              description="Untuk mendukung keterampilan pribadi maupun profesional tanpa memandang latar belakang"
            />
          </GridItem>
        </Grid>
      </VStack>
      <Wireframe text={"Di sini section our team"} />
    </Stack>
  );
};
export default AboutUsPage;
