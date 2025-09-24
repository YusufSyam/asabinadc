import { Box, Group, Stack, Text } from "@chakra-ui/react";
import React from "react";
import dummyImage from "../../../public/assets/images/dummy-flyer.jpeg";
import Image from "next/image";
import StrongText from "@/components/text/StrongText.component";
import { ST } from "next/dist/shared/lib/utils";
import {
  IconLocationFilled,
  IconLocationOutlined,
  IconTimeOutlined,
  IconTimerFilled,
} from "@/components/icons/Icons.component";
import SmallText from "@/components/text/SmallText.component";
import Link from "next/link";
import ROUTES from "@/utils/const/routes";
import { IWorkshopData } from "@/utils/const/interfaces";
import { formatDateNormal } from "@/utils/function/datefunction";

export interface IWorkshopCard extends IWorkshopData {
  cardVariant?: "light-orange" | "orange";
}

const WorkshopCard: React.FC<IWorkshopCard> = ({
  cardVariant = "orange",
  slug,
  workshopTitle,
  speaker,
  location,
  date,
  time,
  flyerImageSrc,
}) => {
  return (
    <Link className="relative" href={`${ROUTES.WORKSHOP}/${slug}`}>
      <Stack
        className={`border-2 ${
          cardVariant == "orange" ? "border-orange" : "border-light-orange"
        }  p-4 pb-6 rounded-xl z-10 bg-white cursor-pointer hover:translate-x-2 hover:translate-y-2 duration-200 ease-in-out h-full`}
        gapY={4}
      >
        <Box
          position="relative"
          width="100%"
          height="320px"
          overflow="hidden"
          borderRadius="lg"
        >
          {/* 2. Komponen Image */}
          <Image
            src={flyerImageSrc as string}
            alt="card image"
            style={{
              objectFit: "cover", // Kunci agar gambar terpotong, bukan stretch
            }}
          />
        </Box>
        <Stack gapY={4} paddingX={1}>
          <Stack gapY={0}>
            <StrongText fontSize={"xl"}>{workshopTitle}</StrongText>
            <Text className="text-secondary-text text-md">
              {speaker?.map(
                (d: string, idx: number) =>
                  d + (idx >= speaker?.length - 1 ? "" : " | ")
              )}
            </Text>
          </Stack>
          <Stack gapY={1}>
            <Group>
              <IconLocationOutlined size={22} color="#334155" />
              <SmallText>{location}</SmallText>
            </Group>
            <Group>
              <IconTimeOutlined
                size={22}
                color="#334155"
                className="self-start"
              />
              <SmallText>{formatDateNormal(date)}, {time}</SmallText>
            </Group>
          </Stack>
        </Stack>
      </Stack>

      <div
        className={`w-full h-full absolute -right-2 -bottom-2 ${
          cardVariant == "orange"
            ? "bg-orange border border-orange"
            : "bg-light-orange border border-light-orange"
        } rounded-xl -z-20`}
      ></div>
    </Link>
  );
};
export default WorkshopCard;
