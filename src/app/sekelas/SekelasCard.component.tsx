import {
  IconExclamationMarkOutlined,
  IconLocationOutlined,
  IconTimeOutlined,
  IconWorkOutlined
} from "@/components/icons/Icons.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { ISekelasData } from "@/utils/const/interfaces";
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
import React from "react";

export interface ISekelasCard extends ISekelasData {
  oprec?: boolean;
}

const SekelasCard: React.FC<ISekelasCard> = ({
  oprec = false,
  date,
  sekelasName,
  location,
  flyerImageSrc,
  isUpcoming,
  meetingCount,
  agenda,
  slug,
}) => {
  return (
    <div className="relative h-full">
      <Grid
        // Kunci utamanya ada di sini
        templateColumns={"1fr 1fr"}
        gap={4} // Jarak antar item
        className="border-2 h-full border-burgundy p-4 pb-6 rounded-xl z-10 bg-white cursor-default hover:translate-x-2 hover:translate-y-2 duration-200 ease-in-out"
        gapY={4}
      >
        <GridItem minWidth="0">
          <Box
            position="relative"
            width="100%"
            height="100%"
            overflow="hidden"
            borderRadius="lg"
          >
            <Image
              src={flyerImageSrc as string}
              alt="card image"
              fill // <-- PERBAIKAN UTAMA
              style={{
                objectFit: "cover",
              }}
              // Menambahkan sizes adalah praktik terbaik untuk performa dengan 'fill'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>
        </GridItem>
        <GridItem minWidth="0">
          <Stack gapY={4} paddingX={1}>
            <Stack gapY={0}>
              <StrongText fontSize={"xl"}>{sekelasName}</StrongText>
              <Text className="text-burgundy font-semibold text-md">
                Pertemuan ke-{meetingCount}
              </Text>
            </Stack>
            <Stack gapY={2}>
              <Grid templateColumns={"3fr 21fr"}>
                <GridItem minWidth={0}>
                  <IconLocationOutlined size={22} color="#334155" className="mx-auto self-start  mt-[4px]" />
                </GridItem>
                <GridItem minWidth={0}>
                  <Stack gapY={0}>
                    <SmallText>Lokasi</SmallText>
                    <SmallText className="!text-secondary-text !text-md">
                      {location}
                    </SmallText>
                  </Stack>
                </GridItem>
              </Grid>
              <Grid templateColumns={"3fr 21fr"} flexWrap={"nowrap"}>
                <GridItem minWidth={0}>
                  <IconTimeOutlined
                    size={21}
                    color="#334155"
                    className="self-start mx-auto mt-[3px]"
                  />
                </GridItem>
                <GridItem minWidth={0}>
                  <Stack gapY={0}>
                    <SmallText>Jadwal Kelas</SmallText>
                    <Stack gapY={0}>
                      <SmallText className="!text-secondary-text !text-md">
                        {formatDateNormal(date)}
                      </SmallText>
                    </Stack>
                  </Stack>
                </GridItem>
              </Grid>
              <Grid templateColumns={"3fr 21fr"} flexWrap={"nowrap"}>
                <GridItem minWidth={0}>
                  <IconWorkOutlined
                    size={20}
                    color="#334155"
                    className="self-start mx-auto mt-[3px]"
                  />
                </GridItem>
                <GridItem minWidth={0}>
                  <Stack gapY={0}>
                    <SmallText>Agenda</SmallText>
                    <SmallText className="!text-secondary-text !text-md">
                      {agenda}
                    </SmallText>
                  </Stack>
                </GridItem>
              </Grid>
            </Stack>
            {oprec && (
              <Group className="mt-2 px-4 py-2 rounded-full bg-magenta ">
                <IconExclamationMarkOutlined
                  color="white"
                  className="p-[1px] rounded-full border-2 border-white mx-auto"
                />
                <Text className="text-white text-center text-md ">
                  Open recruitment for volunteers!
                </Text>
              </Group>
            )}
          </Stack>
        </GridItem>
      </Grid>

      <div className="w-full h-full absolute -right-2 -bottom-2 bg-burgundy border border-burgundy rounded-xl -z-20"></div>
    </div>
  );
};
export default SekelasCard;
