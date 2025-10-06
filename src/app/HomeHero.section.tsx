import HeroButton from "@/components/button/HeroButton.component";
import {
  GmailContacts,
  LinkedinContacts,
  WhatsappContacts,
} from "@/components/Contacts.component";
import {
  IconChartOutlined,
  IconSearchFilledRounded,
  IconWorkOutlined,
} from "@/components/icons/Icons.component";
import StrongText from "@/components/text/StrongText.component";
import {
  Blockquote,
  Flex,
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
      {/* <div className="bg-burgundy opacity-95 rounded-xl border border-burgundy overflow-hidden -z-10">
        <Image
          src={heroBgImage}
          style={{ objectFit: "contain" }}
          alt="Hero"
          className="opacity-25"
        />
      </div> */}
      <div className="relative">
        <div className="bg-burgundy opacity-75 rounded-xl border border-burgundy overflow-hidden h-full w-full absolute"></div>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "29fr 11fr",
            lg: "15fr 5fr",
            xl: "2fr 1fr",
          }}
          gap={{ md: 0, base: 2 }}
          paddingTop={{ base: "8", sm: "20", md: "32", lg: "44" }}
          paddingBottom={{ base: "4", sm: "4", md: "6", lg: "6" }}
          paddingX={{ base: "4", sm: "4", md: "6", lg: "8" }}
          className="overflow-hidden bg-hero-bg bg-cover rounded-xl"
        >
          {/* Kolom Pertama (2/3 dari lebar) */}
          <GridItem w="100%" className="">
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
                <Stack>
                  <StrongText
                    color={"white"}
                    fontSize={{
                      base: "xl",
                      xl: "7xl",
                      lg: "6xl",
                      md: "4xl",
                      sm: "6xl",
                    }}
                  >
                    ASABINA
                  </StrongText>
                  <StrongText
                    color={"white"}
                    mt={{ base: -4, sm: -4, lg: -6 }}
                    className="font-poppins"
                    lineHeight={1}
                    fontSize={{ base: "xl", lg: "4xl", md: "4xl" }}
                  >
                    DEVELOPMENT CENTER
                  </StrongText>
                </Stack>
              </Group>
              <div className="relative rounded-md px-2 md:px-4 lg:px-8 py-4">
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
                    className="text-white font-roboto tracking-5 text-md lg:text-[16px] text-justify "
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
                gapY={4}
                className="mr-8 mt-0 md:mt-4 mb-2 ml-8 !justify-between "
              >
                <HeroButton
                  icon={<IconWorkOutlined color="white" />}
                  onClick={onScrollTo3}
                >
                  Explore Our Program
                </HeroButton>
                <Group gapX={{ lg: 6, base: 4 }} gapY={4} 
                flexWrap={"wrap"}>
                  <HeroButton
                    colorVariant="orange"
                    icon={<IconChartOutlined color="white" />}
                    onClick={onScrollTo2}
                  >
                    Our Impact
                  </HeroButton>
                  <HeroButton
                    colorVariant="orange"
                    icon={<IconSearchFilledRounded color="white" />}
                    onClick={onScrollTo4}
                  >
                    Get to Know More
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
          <GridItem className="self-end " minWidth="0">
            <Stack gapY={0}>
              <Flex
                className="relative self-start pl-8 md:self-end flex-row md:flex-col"
                gapX={4}
              >
                <Text className="text-white text-xl font-roboto tracking-6 text-center self-center hidden sm:block">
                  GET IN TOUCH
                </Text>
                <Group
                  flexWrap={"no-wrap"}
                  gapX={{ lg: 6, base: 4 }}
                  className="bg-light-orange/50 rounded-full px-6 py-2"
                >
                  <WhatsappContacts />
                  {/* <HeroButton colorVariant="white">
                    <IconWhatsappFilled color="orange" />
                  </HeroButton>
                  <HeroButton colorVariant="white">
                    <IconInstagramFilled color="orange" />
                  </HeroButton>
                  <HeroButton colorVariant="white">
                    <IconGmailFilled  color="orange" />
                  </HeroButton> */}
                  {/* <InstagramContacts /> */}
                  <LinkedinContacts />
                  <GmailContacts />
                </Group>
              </Flex>
            </Stack>
          </GridItem>
        </Grid>
      </div>

      <div className="w-full h-full absolute -right-2 -bottom-2 bg-orange/75 border border-orange/75 rounded-xl -z-20"></div>
    </VStack>
  );
};
export default HomeHeroSection;
