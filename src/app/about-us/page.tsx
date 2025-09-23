import MissionCard from "@/components/card/MissionCard.component";
import OurTeamPhotoCard from "@/components/card/OurTeamPhotoCard.component";
import {
  StickerMission,
  StickerValues,
  StickerVision,
} from "@/components/icons/Stickers.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import OurMissionText from "@/components/text/OurMissionText.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import Wireframe from "@/components/Wireframe.component";
import {
  Stack,
  VStack,
  Grid,
  GridItem,
  Blockquote,
  Float,
  Group,
  Text,
} from "@chakra-ui/react";
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
      <VStack gapY={24} className="w-full">
        <ColoredHeaderText
          text=" Vision, Mission & Values"
          splitStart={3}
          type="h2"
        />
        <Stack gapY={20}>
          <Grid templateColumns={"5fr 19fr"} marginX={44} gapX={12}>
            <GridItem className="w-full flex">
              <StickerVision size={160} className="mx-auto self-center" />
            </GridItem>
            <GridItem>
              <Stack>
                <StrongText fontSize={"3xl"}>Our Vision</StrongText>
                <SmallText>
                  Visi kami adalah untuk menjadi wadah pengembangan diri yang
                  inklusif, inspiratif dan setara bagi semua kalangan untuk
                  tumbuh dan mencapai potensi terbaik dalam kehidupan pribadi
                  maupun profesional.
                </SmallText>
              </Stack>
            </GridItem>
          </Grid>
          <Grid templateColumns={"5fr 19fr"} marginX={44} gapX={12}>
            <GridItem className="w-full flex">
              <StickerMission size={136} className="mx-auto self-center" />
            </GridItem>
            <GridItem>
              <Stack>
                <StrongText fontSize={"3xl"} className="">
                  Our Mission
                </StrongText>
                <Stack>
                  <OurMissionText
                    number="1"
                    title="Menyediakan Program pengembangan diri"
                    description="Untuk mendukung keterampilan pribadi maupun profesional tanpa memandang latar belakang"
                  />
                  <OurMissionText
                    number="2"
                    title="Menciptakan ruang yang inklusif dan aman"
                    description="Untuk berbagi pengalaman, pengetahuan, dan mendukung satu sama lain dalam perjalanan pengembangan diri."
                  />
                  <OurMissionText
                    number="3"
                    title="Membangun kolaborasi"
                    description="Dengan berbagai pihak mencakup pemerintah, sektor swasta, maupun lembaga pendidikan."
                  />
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
          <Grid templateColumns={"5fr 19fr"} marginX={44} gapX={12}>
            <GridItem className="w-full flex">
              <StickerValues size={160} className="mx-auto self-center" />
            </GridItem>
            <GridItem>
              <Stack>
                <StrongText fontSize={"3xl"}>Our Values</StrongText>
                <Stack gapY={4}>
                  <SmallText>
                    <Text
                      as={"span"}
                      className="font-semibold"
                      color={"burgundy"}
                      fontSize={"xl"}
                    >
                      INKLUSIF
                    </Text>{" "}
                    , Menyediakan akses yang setara bagi semua individu tanpa
                    diskriminasi
                  </SmallText>
                  <SmallText>
                    <Text
                      as={"span"}
                      className="font-semibold"
                      color={"orange"}
                      fontSize={"xl"}
                    >
                      INSPIRATIF
                    </Text>{" "}
                    , Menghadirkan program, kegiatan, dan sumber daya yang mampu
                    memotivasi individu
                  </SmallText>
                  <SmallText>
                    <Text
                      as={"span"}
                      className="font-semibold"
                      color={"magenta"}
                      fontSize={"xl"}
                    >
                      KOLABORATIF
                    </Text>{" "}
                    , Menyediakan akses yang setara bagi semua individu tanpa
                    diskriminasi
                  </SmallText>
                </Stack>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </VStack>
      <VStack>
        <ColoredHeaderText text="Meet Our Team" type="h2" />
        <Grid templateColumns="repeat(3, 1fr)" gapX={24} gapY={12}>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
          <GridItem>
            <OurTeamPhotoCard />
          </GridItem>
        </Grid>
      </VStack>
      <Wireframe text={"Di sini section our team"} />
    </Stack>
  );
};
export default AboutUsPage;
