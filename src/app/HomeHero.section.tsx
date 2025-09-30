import HeroButton from "@/components/button/HeroButton.component";
import {
  GmailContacts,
  InstagramContacts,
  LinkedinContacts,
  WhatsappContacts,
} from "@/components/Contacts.component";
import {
  IconLeaderboardOutlinedRounded,
  IconSearchFilledRounded,
  IconWorkOutlined
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
import heroBgImage from "../../public/assets/images/hero-bnw.png";
import iconAsabina from "../../public/assets/images/logo1.png";

export interface IHomeHeroSection {
  onScrollTo2: () => void;
  onScrollTo3: () => void;
  onScrollTo4: () => void;
}

const HomeHeroSection: React.FC<IHomeHeroSection> = ({
  onScrollTo2,
  onScrollTo3,
  onScrollTo4,
}) => {
  return (
    <VStack className="relative">
      <div className="bg-burgundy opacity-95 rounded-xl border border-burgundy overflow-hidden -z-10">
        <Image
          src={heroBgImage}
          style={{ objectFit: "contain" }}
          alt="Hero"
          className="opacity-25"
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
            <div className="relative rounded-md px-8 py-4">
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
                  className="text-white font-roboto tracking-5 text-[16px] text-justify "
                >
                  Wadah pengembangan diri yang{" "}
                  <span className="text-light-orange">inklusif</span>,{" "}
                  <span className="text-light-orange">inspiratif</span> dan{" "}
                  <span className="text-light-orange">setara</span> bagi semua
                  kalangan untuk tumbuh dan mencapai potensi terbaik dalam
                  kehidupan pribadi maupun profesional.
                </Blockquote.Content>
              </Blockquote.Root>
            </div>

            <Group
              flexWrap={"wrap"}
              className="mr-8 mt-4 mb-2 ml-8 !justify-between "
            >
              <HeroButton
                icon={<IconWorkOutlined color="white" />}
                onClick={onScrollTo3}
              >
                Explore Our Program
              </HeroButton>
              <Group gapX={6} gapY={4}>
                <HeroButton
                  colorVariant="orange"
                  icon={<IconSearchFilledRounded color="white" />}
                  onClick={onScrollTo4}
                >
                  Get to Know More
                </HeroButton>
                <HeroButton
                  colorVariant="orange"
                  icon={<IconLeaderboardOutlinedRounded color="white" />}
                  onClick={onScrollTo2}
                >
                  Our Impact
                </HeroButton>
                {/* <HeroButton
                  colorVariant="orange"
                  icon={<IconGalleryOutlined color="white" />}
                >
                  Gallery
                </HeroButton> */}
              </Group>
            </Group>
          </Stack>
        </GridItem>

        {/* Kolom Kedua (1/3 dari lebar) */}
        <GridItem w="100%" className="self-end" minWidth="0">
          <Stack gapY={0}>
            <VStack className="relative self-end " gapX={4}>
              <Text className="text-white text-2xl font-roboto tracking-6">
                GET IN TOUCH
              </Text>
              <Group
                flexWrap={"wrap"}
                gapX={6}
                className="bg-light-orange/50 rounded-full px-6 py-2"
              >
                <WhatsappContacts />
                <InstagramContacts />
                <LinkedinContacts />
                <GmailContacts />
              </Group>
            </VStack>
          </Stack>
        </GridItem>
      </Grid>

      <div className="w-full h-full absolute -right-2 -bottom-2 bg-orange/75 border border-orange/75 rounded-xl -z-20"></div>
    </VStack>
  );
};
export default HomeHeroSection;
