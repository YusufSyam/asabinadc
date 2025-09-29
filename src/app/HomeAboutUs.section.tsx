import HeroButton from "@/components/button/HeroButton.component";
import { StickerSearch } from "@/components/icons/Stickers.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import ROUTES from "@/utils/const/routes";
import { Stack, VStack, Text, Group, Grid, GridItem, Link } from "@chakra-ui/react";
import { type } from "os";
import React from "react";

export interface IHomeAboutUsSection {}

const HomeAboutUsSection: React.FC<IHomeAboutUsSection> = ({}) => {
  return (
    <VStack gapY={10}>
      <Stack className="" gapY={0}>
        <Text className={`font-poppins-bold text-[48px] text-burgundy -ml-12`}>
          Get to Know
        </Text>
        <Text
          className={`font-poppins-bold text-[48px] text-orange text-end -mr-12 -mt-2`}
        >
          More About Us !
        </Text>
      </Stack>
      <Grid templateColumns={"5fr 7fr"} className="mx-24" gapX={8}>
        <GridItem className="flex justify-end">
          <StickerSearch size={360} className=" " />
        </GridItem>
        <GridItem>
          <Stack className="text-justify" gapY={4}>
            <Text>
              <Text
                as={"span"}
                color={"burgundy"}
                fontSize={"xl"}
                fontWeight={"semibold"}
              >
                ASABINA
              </Text>{" "}
              Development Center merupakan sebuah komunitas Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laborum, inventore mollitia
              in, ea ex dolorum praesentium hic ducimus possimus repellat
              reiciendis doloribus? Vitae architecto et maiores. Ullam, ratione
              voluptates. Animi.
            </Text>
            <Text>
              Development Center merupakan sebuah komunitas Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laborum, inventore mollitia
              in, ea ex dolorum praesentium hic ducimus possimus repellat
              reiciendis doloribus? Vitae architecto et maiores. Ullam, ratione
              voluptates. Animi.
            </Text>
            <Group gapX={4} marginTop={4}>
              <Link href={ROUTES?.ABOUT}>
                <HeroButton colorVariant="white">More About Us</HeroButton>
              </Link>
              <HeroButton colorVariant="white">Email Us!</HeroButton>
            </Group>
          </Stack>
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default HomeAboutUsSection;
