import {
  IconLocationOutlined,
  IconTimeOutlined,
} from "@/components/icons/Icons.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { IWorkshopData } from "@/utils/const/interfaces";
import ROUTES from "@/utils/const/routes";
import { formatDateNormal } from "@/utils/function/datefunction";
import {
  Box,
  Grid,
  GridItem,
  Group,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "11fr 13fr",
          md: "1fr",
        }}
        className={`border-2 ${
          cardVariant == "orange" ? "border-orange" : "border-light-orange"
        }  p-4 pb-6 rounded-xl z-10 bg-white cursor-pointer hover:translate-x-2 hover:translate-y-2 duration-200 ease-in-out h-full`}
        gapY={4}
        gapX={4}
      >
        <GridItem
          maxHeight={{
            base: "none",
            sm: 240,
            md: "none",
          }}
          overflow={"Hidden"}
        >
          <Box
            position="relative"
            width="100%"
            height="320px"
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              src={flyerImageSrc as string}
              alt="card image"
              style={{
                objectFit: "cover",
              }}

            />
          </Box>
        </GridItem>
        <GridItem>
          <Stack gapY={4} paddingX={1} paddingTop={{ base: 2, md: 0 }}>
            <Stack gapY={0}>
              <StrongText
                fontSize={{
                  md: "xl",
                  sm: "lg",
                  base: "md",
                }}
              >
                {workshopTitle}
              </StrongText>
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
                <SmallText>
                  {formatDateNormal(date)}, {time}
                </SmallText>
              </Group>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>

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
