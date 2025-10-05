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
  description?: string;
  target?: string;
  goal?: string;
}

const OurProgramCard: React.FC<IOurProgramCard> = ({
  cardVariant = "orange",
  firstTitle,
  secondTitle,
  href,
  description,
  goal,
  target
}) => {
  return (
    <Link href={href}>
      <div className="relative w-full ">
        <Stack
          className={`border-2 ${
            cardVariant == "burgundy"
              ? "border-burgundy bg-sekelas-bg"
              : "border-orange bg-workshop-bg"
          } overflow-hidden h-[460px] w-full p-4 pb-6 md:pb-8 rounded-xl justify-end z-10 bg-cover cursor-pointer hover:translate-x-2 hover:translate-y-2 duration-200 ease-in-out`}
          gapY={4}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-t ${
              cardVariant == "burgundy"
                ? "from-burgundy via-burgundy opacity-80"
                : "from-orange via-light-orange opacity-80"
            }  to-transparent rounded-xl`}
          ></div>
          <Stack
            gapY={6}
            paddingX={1}
            className="self-end w-full justify-end z-10"
          >
            <Stack gapY={0}>
              <StrongText
                fontSize={"4xl"}
                color={cardVariant == "burgundy" ? "white" : "burgundy"}
                className="text-center"
              >
                {firstTitle}
              </StrongText>
              <StrongText
                fontSize={"3xl"}
                color={cardVariant == "burgundy" ? "orange" : "primary-text"}
                className="text-center -mt-4"
              >
                {secondTitle}
              </StrongText>
              <SmallText
                color={cardVariant == "burgundy" ? "white" : "primary-text"}
                fontSize={"sm"}
                className="text-center w-full md:w-4/5 self-center font-medium"
              >
                {description}
              </SmallText>
            </Stack>
            <Stack gapY={1} paddingX={{md:8,base:4}} className="">
              <Group>
                <IconRightArrowRounded
                  size={24}
                  color={cardVariant == "burgundy" ? "white" : "#331455"}
                />
                <SmallText
                  color={cardVariant == "burgundy" ? "white" : "primary-text"}
                  fontSize={"sm"}
                  className="font-semibold"
                >
                  Sasaran: {target}
                </SmallText>
              </Group>
              <Group>
                <IconLoginOutline
                  size={19}
                  color={cardVariant == "burgundy" ? "white" : "#331455"} className="self-start"
                />
                <SmallText
                  color={cardVariant == "burgundy" ? "white" : "primary-text"}
                  fontSize={"sm"}
                  className="font-semibold ml-1"
                >
                  Tujuan: {goal}
                </SmallText>
              </Group>
            </Stack>
          </Stack>
        </Stack>

        <div
          className={`w-full h-full absolute -right-2 -bottom-2 ${
            cardVariant == "burgundy"
              ? "bg-burgundy/75 border-burgundy"
              : "bg-orange/75 border-orange"
          } rounded-xl border-2 -z-20`}
        ></div>
      </div>
    </Link>
  );
};
export default OurProgramCard;
