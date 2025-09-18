import {
  Box,
  Button,
  Grid,
  GridItem,
  Group,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import dummyImage from "../../../public/assets/images/dummy-flyer.jpeg";
import Image from "next/image";
import StrongText from "@/components/text/StrongText.component";
import { ST } from "next/dist/shared/lib/utils";
import {
  IconExclamationMarkOutlined,
  IconLocationFilled,
  IconLocationOutlined,
  IconRightArrowTailedOutlinedRounded,
  IconTimeOutlined,
  IconTimerFilled,
} from "@/components/icons/Icons.component";
import SmallText from "@/components/text/SmallText.component";

export interface ISekelasCard {
  oprec?: boolean;
}

const SekelasCard: React.FC<ISekelasCard> = ({ oprec = false }) => {
  return (
    <div className="relative h-full">
      <Grid
        // Kunci utamanya ada di sini
        templateColumns={"1fr 1fr"}
        gap={4} // Jarak antar item
        className="border-2 h-full border-burgundy p-4 pb-6 rounded-xl z-10 bg-white cursor-pointer hover:translate-x-2 hover:translate-y-2 duration-200 ease-in-out"
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
              src={dummyImage}
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
              <StrongText fontSize={"xl"}>Kelas Je'ne Ci'nong</StrongText>
              {/* <Text className="text-secondary-text text-md">
                Shafwan Zhalifunnas | Azasi Ma’Arif
              </Text> */}
            </Stack>
            <Stack gapY={1}>
              <Group>
                <IconLocationOutlined size={22} color="#334155" />
                <SmallText>Jene Tallasa, Jln. Uang Panai</SmallText>
              </Group>
              <Group flexWrap={"nowrap"}>
                <IconTimeOutlined
                  size={22}
                  color="#334155"
                  className="self-start"
                />
                <Stack gapY={1}>
                  <SmallText>Jadwal Kelas (?)</SmallText>
                  <Stack gapY={0}>
                    <SmallText className="!text-secondary-text !text-md">
                      Senin, 14.00 - 17.00 WITA
                    </SmallText>
                    <SmallText className="!text-secondary-text !text-md">
                      Rabu, 14.00 - 17.00 WITA
                    </SmallText>
                    <SmallText className="!text-secondary-text !text-md">
                      Jumat, 20.00 - 22.00 WITA
                    </SmallText>
                  </Stack>
                </Stack>
              </Group>
            </Stack>
            {oprec && (
              <Group className="mt-2 px-4 py-2 rounded-full bg-magenta ">
                <IconExclamationMarkOutlined color="white" className="p-[1px] rounded-full border-2 border-white" />
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
