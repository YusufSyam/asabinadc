import OurProgramCard from "@/components/card/OurProgramCard.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import ROUTES from "@/utils/const/routes";
import { Grid, GridItem, VStack } from "@chakra-ui/react";
import React from "react";

export interface IHomeOurProgramSection {
  refForScroll: React.RefObject<HTMLDivElement | null>;
}

const HomeOurProgramSection: React.FC<IHomeOurProgramSection> = ({
  refForScroll,
}) => {
  return (
    <VStack gapY={12} ref={refForScroll}>
      <VStack>
        <ColoredHeaderText text="Our Program" type="h2" />
        <SmallText className="w-full md:w-2/3 text-center !text-secondary-text">
          ASABINA Development Center memiliki 2 program utama, yaitu ASABINA
          Workshop dan SEKELAS ASABINA.
        </SmallText>
      </VStack>
      <Grid
        templateColumns={{lg:"1fr 1fr", base:"1fr"}}
        gap={{xl:12, lg:6, md:6, base:6}}
        paddingX={{ xl:24, lg: 10, md: 16, sm: 4, base: 0 }}
        className="w-full"
      >
        <GridItem minWidth="0">
          <OurProgramCard
            href={ROUTES.WORKSHOP}
            secondTitle="ASABINA"
            firstTitle="Workshop"
            description="Program pelatihan berbagai keterampilan praktis, mulai dari pelatihan teknis hingga soft skills yang sangat diperlukan di dunia kerja"
            target="Lulusan Baru dan Pencari Kerja"
            goal="Membekali peserta dengan strategi pencarian kerja"
          />
        </GridItem>
        <GridItem minWidth="0">
          <OurProgramCard
            href={ROUTES.SEKELAS}
            cardVariant="burgundy"
            firstTitle="SEKELAS"
            secondTitle="ASABINA"
            description="Memberikan akses pendidikan dasar (calistung, matematika, bahasa Inggris) kepada anak-anak di daerah kurang terjangkau"
            goal="Membantu meningkatkan kemampuan literasi, numerasi"
            target="Anak-anak usia sekolah dasar di daerah dengan akses pendidikan terbatas"
          />
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default HomeOurProgramSection;
