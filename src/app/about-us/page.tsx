import {
  StickerMission,
  StickerValues,
  StickerVision,
} from "@/components/icons/Stickers.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import OurMissionText from "@/components/text/OurMissionText.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { Box, Grid, GridItem, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import asabinaLogo from "../../../public/assets/images/logo2.png";
import AboutUsOurTeam from "./AboutUsOurTeam.section";

const AboutUsPage = () => {
  return (
    <Stack
      gapY={{ lg: 36, md: 32, sm: 28, base: 24 }}
      paddingX={{ base: "6", sm:"8", md: "12", lg: "24" }}
      paddingBottom={"24"}
      paddingTop={"16"}
      className="border-t-2 border-secondary"
    >
      <VStack marginX={{ base: "0", md: "12", lg: "0", xl: "24" }}>
        <ColoredHeaderText text="About Us" />
        <Grid
          templateColumns={{ xl: "8fr 16fr", lg: "11fr 13fr", base: "1fr" }}
          marginTop={{ md: 12, base: 4 }}
          gapY={8}
          gapX={4}
        >
          <GridItem className="h-56 lg:h-full">
            <Box position="relative" width="100%" height="100%">
              <Image
                src={asabinaLogo}
                alt="card image"
                fill
                style={{
                  objectFit: "contain",
                }}
              />
              <Text color={"white"}>.</Text>
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
      <VStack gapY={{ lg: 24, base: 16 }} className="w-full ">
        <ColoredHeaderText
          text="Vision, Mission & Values"
          splitStart={3}
          type="h2"
          textAlign="center"
        />
        <Stack gapY={20} className="">
          <Grid
            templateColumns={{ md: "5fr 19fr", base: "1fr" }}
            marginX={{ xl: 44, lg: 32, md: 20, sm: 4, base: 0 }}
            gapX={12}
          >
            <GridItem className="w-full flex">
              <StickerVision size={160} className="mx-auto self-center" />
            </GridItem>
            <GridItem width={"fit-content"}>
              <Stack>
                <StrongText
                  fontSize={"3xl"}
                  textAlign={{ md: "start", base: "center" }}
                >
                  Our Vision
                </StrongText>
                <SmallText textAlign={{ md: "start", base: "center" }}>
                  Visi kami adalah untuk menjadi wadah pengembangan diri yang
                  inklusif, inspiratif dan setara bagi semua kalangan untuk
                  tumbuh dan mencapai potensi terbaik dalam kehidupan pribadi
                  maupun profesional.
                </SmallText>
              </Stack>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ md: "5fr 19fr", base: "1fr" }}
            marginX={{ xl: 44, lg: 32, md: 20, sm: 4, base: 0 }}
            gapX={12}
          >
            <GridItem className="w-full flex">
              <StickerMission size={136} className="mx-auto self-center" />
            </GridItem>
            <GridItem>
              <Stack>
                <StrongText
                  fontSize={"3xl"}
                  className=""
                  textAlign={{ md: "start", base: "center" }}
                >
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
          <Grid
            templateColumns={{ md: "5fr 19fr", base: "1fr" }}
            marginX={{ xl: 44, lg: 32, md: 20, sm: 4, base: 0 }}
            gapX={12}
          >
            <GridItem className="w-full flex">
              <StickerValues size={160} className="mx-auto self-center" />
            </GridItem>
            <GridItem>
              <Stack>
                <StrongText
                  fontSize={"3xl"}
                  textAlign={{ md: "start", base: "center" }}
                >
                  Our Values
                </StrongText>
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
