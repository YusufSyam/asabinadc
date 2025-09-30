import HeroButton from "@/components/button/HeroButton.component";
import { StickerSearch } from "@/components/icons/Stickers.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import { CONTACTS_ACTION } from "@/utils/const/contacts";
import ROUTES from "@/utils/const/routes";
import {
  Stack,
  VStack,
  Text,
  Group,
  Grid,
  GridItem,
  Link,
} from "@chakra-ui/react";
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
              Development Center adalah komunitas non-profit yang berkomitmen
              menyediakan pendidikan, pelatihan keterampilan, dan pendampingan
              bagi masyarakat. Bersama, kita membangun masa depan yang lebih
              inklusif, inspiratif, dan berdaya saing.
            </Text>
            <Text>
              Kami percaya bahwa setiap individu memiliki potensi untuk tumbuh
              dan berkembang. Melalui program-program yang inklusif, inspiratif,
              dan kolaboratif, Asabina berkomitmen menjadi wadah bagi siapa saja
              yang ingin belajar, berbagi, serta bersama-sama menciptakan masa
              depan yang lebih cerah.
            </Text>
            <Group gapX={4} marginTop={4}>
              <Link href={ROUTES?.ABOUT}>
                <HeroButton colorVariant="white">More About Us</HeroButton>
              </Link>
              <Link href={CONTACTS_ACTION.EMAIL}>
                <HeroButton colorVariant="white">Email Us!</HeroButton>
              </Link>
            </Group>
          </Stack>
        </GridItem>
      </Grid>
    </VStack>
  );
};
export default HomeAboutUsSection;
