import { Box, Group, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import dummyImage from "../../../public/assets/images/workshop-card.jpg";
import Image from "next/image";
import StrongText from "@/components/text/StrongText.component";
import { ST } from "next/dist/shared/lib/utils";
import {
  IconChangeCircleOutlined,
  IconExpandOutlinedRounded,
  IconLocationFilled,
  IconLocationOutlined,
  IconLoginOutline,
  IconPrecisionManufacturingFilledRounded,
  IconRightArrowNoTail,
  IconRightArrowRounded,
  IconTimeOutlined,
  IconTimerFilled,
} from "@/components/icons/Icons.component";
import SmallText from "@/components/text/SmallText.component";
import Link from "next/link";

export interface IOurProgramCard {
  cardVariant?: "burgundy" | "orange";
  firstTitle: string;
  secondTitle: string;
  href: string;
}

const OurProgramCard: React.FC<IOurProgramCard> = ({
  cardVariant = "orange",
  firstTitle,
  secondTitle,
  href,
}) => {
  return (
    <Link href={href}>
      <div className="relative w-full ">
        <Stack
          className={`border-2 ${
            cardVariant == "burgundy"
              ? "border-burgundy bg-sekelas-bg"
              : "border-orange bg-workshop-bg"
          } overflow-hidden h-96 w-full p-4 pb-8 rounded-xl justify-end z-10 bg-cover cursor-pointer hover:translate-x-2 hover:translate-y-2 duration-200 ease-in-out`}
          gapY={4}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              cardVariant == "burgundy"
                ? "from-burgundy via-burgundy opacity-80"
                : "from-orange via-orange opacity-85"
            }  to-transparent rounded-xl`}
          ></div>
          <Stack
            gapY={6}
            paddingX={1}
            className="self-end w-full justify-end z-10"
          >
            <Stack gapY={0}>
              <StrongText
                fontSize={"3xl"}
                color={"white"}
                className="text-center"
              >
                {firstTitle}
              </StrongText>
              <StrongText
                fontSize={"3xl"}
                color={cardVariant == "burgundy" ? "orange" : "burgundy"}
                className="text-center -mt-4"
              >
                {secondTitle}
              </StrongText>
              <SmallText
                color={cardVariant == "burgundy" ? "white" : "primary-text"}
                fontSize={"sm"}
                className="text-center w-3/4 self-center"
              >
                Program pengembangan diri Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Quia, officiis!
              </SmallText>
            </Stack>
            <Stack gapY={1} paddingX={4}>
              <Group>
                <IconRightArrowRounded
                  size={24}
                  color={cardVariant == "burgundy" ? "white" : "#334155"}
                />
                <SmallText
                  color={cardVariant == "burgundy" ? "white" : "primary-text"}
                  fontSize={"sm"}
                  className="text-center font-semibold"
                >
                  Sasaran: Lulusan Baru dan Pencari Kerja
                </SmallText>
              </Group>
              <Group>
                <IconLoginOutline
                  size={19}
                  color={cardVariant == "burgundy" ? "white" : "#334155"}
                />
                <SmallText
                  color={cardVariant == "burgundy" ? "white" : "primary-text"}
                  fontSize={"sm"}
                  className="text-center font-semibold"
                >
                  Tujuan: Membekali peserta dengan strategi pencarian kerja
                </SmallText>
              </Group>
            </Stack>
          </Stack>
        </Stack>

        <div
          className={`w-full h-full absolute -right-2 -bottom-2 ${
            cardVariant == "burgundy"
              ? "bg-burgundy/95 border-burgundy"
              : "bg-orange/95 border-orange"
          } rounded-xl border-2 -z-20`}
        ></div>
      </div>
    </Link>
  );
};
export default OurProgramCard;
