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

export default function Home() {
  return (
    <Stack gapY={"24"} paddingX={"24"} paddingY={"24"} className="">
      <VStack className=" w-full">
        <VStack className="relative">
          <div className="bg-burgundy opacity-95 rounded-xl border border-burgundy overflow-hidden -z-10">
            <Image
              src={logoPerusahaan}
              style={{ objectFit: "contain" }}
              alt="Hero"
              className="opacity-15"
            />
          </div>

          <Grid
            templateColumns="7fr 5fr"
            gap={4}
            className="absolute bottom-8 w-full px-8 "
          >
            {/* Kolom Pertama (2/3 dari lebar) */}
            <GridItem w="100%">
              <Stack gap={4}>
                <StrongText color={"white"} fontSize={"7xl"}>
                  ASABINA
                </StrongText>
                <StrongText
                  color={"orange"}
                  mt={"-10"}
                  className="font-poppins"
                >
                  DEVELOPMENT CENTER
                </StrongText>
                <div className="relative bg-white/95 rounded-md pl-5 py-4 mr-10">
                  <Blockquote.Root
                    variant="plain"
                    colorPalette="white"
                    className="z-10"
                  >
                    <Float placement="top-start" offsetY="2">
                      <Blockquote.Icon color={"primary-text"} />
                    </Float>
                    <Blockquote.Content
                      // cite="Visi Asabina"
                      className="text-primary-text font-roboto-light italic text-[17px] text-justify"
                    >
                      Wadah pengembangan diri yang inklusif, inspiratif dan
                      setara bagi semua kalangan untuk tumbuh dan mencapai
                      potensi terbaik dalam kehidupan pribadi maupun profesional
                    </Blockquote.Content>
                  </Blockquote.Root>

                  <div className="w-full h-full absolute -right-2 -bottom-2 bg-primary-text/75 rounded-md -z-10"></div>
                </div>

                <Stack className="mr-8 mt-4">
                  <Group flexWrap={"wrap"} gapX={4}>
                    <HeroButton icon={<IconWorkFilled color="white" />}>
                      Explore Our Program
                    </HeroButton>
                    <HeroButton
                      icon={<IconSearchFilledRounded color="white" />}
                    >
                      About Us
                    </HeroButton>
                    <HeroButton
                      icon={<IconListViewFilledRounded color="white" />}
                    >
                      Gallery
                    </HeroButton>
                  </Group>
                </Stack>
              </Stack>
            </GridItem>

            {/* Kolom Kedua (1/3 dari lebar) */}
            <GridItem w="100%" className="self-end" minWidth="0">
              <Stack gapY={0}>
                <Group
                  className="relative self-end "
                  gapX={4}
                >
                  <Text className="text-white text-2xl font-poppins-semibold tracking-6">
                    Contact Us:
                  </Text>
                  <Group flexWrap={"wrap"} gapX={6} className="bg-white/25 rounded-lg px-4 py-2">
                    <IconInstagramFilled
                      color="white"
                      size={33}
                      className=""
                    />
                    <IconLinkedinFilled
                      color="white"
                      size={31}
                      className=""
                    />
                    <IconGmailFilled
                      color="white"
                      size={31}
                      className=""
                    />
                  </Group>
                </Group>
              </Stack>
            </GridItem>
          </Grid>

          <div className="w-full h-full absolute -right-2 -bottom-2 bg-orange/50 border border-orange rounded-xl -z-20"></div>
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
