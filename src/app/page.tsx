import Image from "next/image";
import styles from "./page.module.css";
import {
  Blockquote,
  Button,
  Float,
  Grid,
  GridItem,
  Group,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import StrongText from "@/components/text/StrongText.component";
import logoPerusahaan from "../../public/assets/images/hero.png";
import SmallText from "@/components/text/SmallText.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import {
  IconGmailFilled,
  IconInstagramFilled,
  IconLibraryBookFilled,
  IconLinkedinFilled,
  IconListViewFilledRounded,
  IconReportOutlined,
  IconRightArrowRounded,
  IconSearchFilledRounded,
  IconWorkFilled,
} from "@/components/icons/Icons.component";
import HeroButton from "@/components/button/HeroButton.component";
import HomeHeroSection from "./HomeHero.section";

export default function Home() {
  return (
    <Stack gapY={"24"} paddingX={"24"} paddingY={"24"} className="">
      <HomeHeroSection />
      <VStack className=" w-full">
        <VStack gapY={8} className="w-full">
          <ColoredHeaderText text="Our Mission"></ColoredHeaderText>
          <Grid
            templateColumns="1fr 1fr 1fr"
            gapX={20}
            className="w-full  p-4"
          >
            {/* Kolom Pertama (2/3 dari lebar) */}
            <GridItem className="bg-white">
              <VStack gapY={6} className="border py-6 px-8 rounded-xl">
                <Text className="font-poppins-semibold text-primary-text text-center px-4">
                  Menyediakan Program pengembangan diri
                </Text>
                <SmallText className="text-center">
                  Untuk mendukung keterampilan pribadi maupun profesional tanpa
                  memandang latar belakang
                </SmallText>
              </VStack>
            </GridItem>
            <GridItem className="bg-white">
              <VStack>
                <StrongText>Tes</StrongText>
              </VStack>
            </GridItem>
            <GridItem className="bg-white">
              <VStack>
                <StrongText>Tes</StrongText>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>

        <VStack className="mt-48">
          <Group className="gap-4">
            <StrongText>INKLUSIF.</StrongText>
            <StrongText color="orange">INSPIRATIF.</StrongText>
          </Group>
          <StrongText color="magenta">KOLABORATIF.</StrongText>
          <SmallText className="mt-4 w-4/5 text-center">
            wadah pengembangan diri yang inklusif, inspiratif dan setara bagi
            semua kalangan untuk tumbuh dan mencapai potensi terbaik dalam
            kehidupan pribadi maupun profesional
          </SmallText>
        </VStack>
      </VStack>

      <VStack gapY={"4"}>
        <ColoredHeaderText text="Visi & Misi" />
        <SmallText className="text-center mx-24">
          Kami mempunyai <span className="font-bold">visi</span> menjadi wadah
          pengembangan diri yang inklusif, inspiratif dan setara bagi semua
          kalangan untuk tumbuh dan mencapai potensi terbaik dalam kehidupan
          pribadi maupun profesional. Asabina Development Centre memiliki{" "}
          <span className="font-bold">3 misi utama</span>
        </SmallText>
        <Group>
          <VStack></VStack>
        </Group>
      </VStack>
    </Stack>
  );
}
