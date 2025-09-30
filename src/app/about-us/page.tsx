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
  Box,
} from "@chakra-ui/react";
import React from "react";
import AboutUsOurTeam from "./AboutUsOurTeam.section";
import Image from "next/image";
import asabinaLogo from "../../../public/assets/images/logo2.png";

export interface IAboutUsPage {}

const AboutUsPage: React.FC<IAboutUsPage> = ({}) => {
  return (
    <Stack
      gapY={"36"}
      paddingX={"24"}
      paddingBottom={"24"}
      paddingTop={"16"}
      className="border-t-2 border-secondary"
    >
      <VStack marginX={24}>
        <ColoredHeaderText text="About Us" />
        <Grid templateColumns={"8fr 16fr"} marginTop={12}>
          <GridItem minWidth="0">
            <Box position="relative" width="100%" height="100%">
              <Image
                src={asabinaLogo}
                alt="card image"
                fill // <-- PERBAIKAN UTAMA
                style={{
                  objectFit: "contain",
                }}
              />
            </Box>
          </GridItem>
          <GridItem>
            <Stack gapY={4}>
              <SmallText className="text-justify">
                <strong>Asabina Development Center</strong> adalah komunitas
                non-profit yang berkomitmen menyediakan pendidikan, pelatihan
                keterampilan, dan pendampingan bagi masyarakat. Bersama, kita
                membangun masa depan yang lebih inklusif, inspiratif, dan
                berdaya saing.
              </SmallText>
              <SmallText className="text-justify">
                Asabina Development Center lahir dari semangat{" "}
                <strong>Asa</strong> (harapan) dan <strong>Bina</strong>{" "}
                (membangun). Kami percaya setiap individu memiliki potensi untuk
                berkembang dan mencapai masa depan yang lebih cerah. Melalui
                berbagai program pendidikan dan pelatihan, Asabina menjadi ruang
                inklusif untuk belajar, bertumbuh, dan saling menguatkan.
              </SmallText>
            </Stack>
          </GridItem>
        </Grid>
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
      <AboutUsOurTeam />
    </Stack>
  );
};
export default AboutUsPage;
