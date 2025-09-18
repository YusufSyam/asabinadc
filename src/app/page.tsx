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
import MissionCard from "@/components/card/MissionCard.component";

export default function Home() {
  return (
    <Stack gapY={"24"} paddingX={"24"} paddingBottom={"24"} className="">
      <HomeHeroSection />
      <VStack className=" w-full">
        

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
