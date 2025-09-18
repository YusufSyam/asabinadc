import HeroButton from "@/components/button/HeroButton.component";
import {
  IconGmailFilled,
  IconInstagramFilled,
  IconLinkedinFilled,
  IconListViewFilledRounded,
  IconPersonFilled,
  IconSearchFilledRounded,
  IconWorkFilled,
} from "@/components/icons/Icons.component";
import StrongText from "@/components/text/StrongText.component";
import {
  Blockquote,
  Float,
  Grid,
  GridItem,
  Group,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import heroBgImage from "../../public/assets/images/hero.png";
import iconAsabina from "../../public/assets/images/logo1.png";

export interface IHomeHeroSection {}

const HomeHeroSection: React.FC<IHomeHeroSection> = ({}) => {
  return (
    <VStack className="relative">
      <div className="bg-burgundy opacity-95 rounded-xl border border-burgundy overflow-hidden -z-10">
        <Image
          src={heroBgImage}
          style={{ objectFit: "contain" }}
          alt="Hero"
          className="opacity-15"
        />
      </div>

      <Grid
        templateColumns="2fr 1fr"
        gap={0}
        className="absolute bottom-8 w-full px-8 "
      >
        {/* Kolom Pertama (2/3 dari lebar) */}
        <GridItem w="100%">
          <Stack gap={4}>
            <Group>
              <div className=" self-end">
                <Image
                  src={iconAsabina}
                  style={{ objectFit: "contain" }}
                  alt="icon asabina"
                  width={180}
                />
              </div>
              <Stack gap={4}>
                <StrongText color={"white"} fontSize={"7xl"}>
                  ASABINA
                </StrongText>
                <StrongText color={"white"} mt={"-10"} className="font-poppins">
                  DEVELOPMENT CENTER
                </StrongText>
              </Stack>
            </Group>
            <div className="relative rounded-md px-8 py-4 mr-10">
              <Blockquote.Root
                variant="plain"
                colorPalette="white"
                className="z-10"
              >
                <Float placement="top-start" offsetY="2">
                  <Blockquote.Icon color={"white"} />
                </Float>
                <Blockquote.Content
                  // cite="Visi Asabina"
                  className="text-white font-roboto italic text-[17px] text-justify "
                >
                  Wadah pengembangan diri yang{" "}
                  <span className="text-light-orange">inklusif</span>,{" "}
                  <span className="text-light-orange">inspiratif</span> dan{" "}
                  <span className="text-light-orange">setara</span> bagi semua
                  kalangan untuk tumbuh dan mencapai potensi terbaik dalam
                  kehidupan pribadi maupun profesional
                </Blockquote.Content>
              </Blockquote.Root>
            </div>

            <Group
              flexWrap={"wrap"}
              className="mr-8 mt-4 mb-2 ml-8 !justify-between "
            >
              <HeroButton icon={<IconWorkFilled color="white" />}>
                Explore Our Program
              </HeroButton>
              <Group gapX={6} gapY={4}>
                <HeroButton
                  colorVariant="orange"
                  icon={<IconSearchFilledRounded color="white" />}
                >
                  About Us
                </HeroButton>
                <HeroButton
                  colorVariant="orange"
                  icon={<IconPersonFilled color="white" className="p-[1px]" />}
                >
                  Our Team
                </HeroButton>
                <HeroButton
                  colorVariant="orange"
                  icon={<IconListViewFilledRounded color="white" />}
                >
                  Gallery
                </HeroButton>
              </Group>
            </Group>
          </Stack>
        </GridItem>

        {/* Kolom Kedua (1/3 dari lebar) */}
        <GridItem w="100%" className="self-end" minWidth="0">
          <Stack gapY={0}>
            <VStack className="relative self-end " gapX={4}>
              <Text className="text-white text-2xl font-roboto-semibold tracking-6">
                Contact Us
              </Text>
              <Group
                flexWrap={"wrap"}
                gapX={6}
                className="bg-light-orange/50 rounded-full px-6 py-2"
              >
                <IconInstagramFilled color="white" size={33} className="" />
                <IconLinkedinFilled color="white" size={31} className="" />
                <IconGmailFilled color="white" size={31} className="" />
                <IconGmailFilled color="white" size={31} className="" />
              </Group>
            </VStack>
          </Stack>
        </GridItem>
      </Grid>

      <div className="w-full h-full absolute -right-4 -bottom-4 bg-orange/75 border border-orange/75 rounded-xl -z-20"></div>
    </VStack>
  );
};
export default HomeHeroSection;
