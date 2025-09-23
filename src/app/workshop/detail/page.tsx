import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import {
  Box,
  Grid,
  GridItem,
  Group,
  Stack,
  VStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import dummyImage from "../../../../public/assets/images/dummy-flyer.jpeg";
import React from "react";
import StrongText from "@/components/text/StrongText.component";
import {
  IconLocationOutlined,
  IconSendOutline,
  IconSentFilledRounded,
  IconTimeOutlined,
} from "@/components/icons/Icons.component";
import SmallText from "@/components/text/SmallText.component";
import WorkshopDetailInfoText from "./WorkshopDetailInfoText.component";
import HeroButton from "@/components/button/HeroButton.component";
import DetailButton from "@/components/button/DetailButton.component";

export interface IWorkshopDetail {}

const WorkshopDetail: React.FC<IWorkshopDetail> = ({}) => {
  return (
    <VStack
      gapY={"12"}
      paddingX={"24"}
      paddingBottom={"24"}
      paddingTop={"12"}
      className="border-t-2 border-secondary"
    >
      <ColoredHeaderText text={"Test"} subTitle={"Asabina Workshop"} />
      <Grid templateColumns={"5fr 7fr"} className="" gapX={8} marginX={12}>
        <GridItem className="" padding={4}>
          <div className="relative">
            <Stack
              className={`border-2 border-orange p-4 pb-6 rounded-xl z-10 bg-white`}
              gapY={4}
            >
              <Box
                position="relative"
                width="100%"
                height="100%"
                overflow="hidden"
                borderRadius="lg"
              >
                {/* 2. Komponen Image */}
                <Image
                  src={dummyImage}
                  alt="card image"
                  style={{
                    objectFit: "cover", // Kunci agar gambar terpotong, bukan stretch
                  }}
                />
              </Box>
            </Stack>

            <div
              className={`w-full h-full absolute -right-2 -bottom-2 bg-orange border border-orange rounded-xl -z-20`}
            ></div>
          </div>
        </GridItem>
        <GridItem padding={2}>
          <Stack gapY={6}>
            <Stack>
              <StrongText>Deskripsi</StrongText>
              <SmallText>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis eius asperiores quis alias recusandae ex autem
                inventore nam placeat blanditiis ullam in, nesciunt unde
                molestias quaerat doloremque nobis dolor sapiente dolores
                temporibus ducimus velit magni. Dignissimos doloribus
                consequatur ad excepturi autem maiores exercitationem omnis
                rerum. Pariatur numquam dolorum harum culpa, nulla animi
                voluptatum nihil iusto, cum nam soluta itaque deserunt vel vero!
                Facilis aperiam sint ex officiis cumque, incidunt ea modi, porro
                beatae laudantium repellendus excepturi et hic exercitationem,
                veritatis tenetur provident dolorum ipsam assumenda ratione rem
                possimus illo. Incidunt doloribus modi soluta, eaque sapiente
                minima iusto aperiam quos totam?
              </SmallText>
            </Stack>
            <Grid templateColumns={"1fr 1fr"} marginBottom={2}>
              <GridItem>
                <WorkshopDetailInfoText
                  label="Lokasi"
                  value={"Arma Cafe"}
                  icon={<IconLocationOutlined size={44} color="#334155" />}
                />
              </GridItem>
              <GridItem>
                <WorkshopDetailInfoText
                  label="Waktu"
                  value={"Jam 65 subuh"}
                  icon={<IconTimeOutlined size={42} color="#334155" />}
                />
              </GridItem>
            </Grid>
            <DetailButton
              colorVariant="orange"
              width={"fit-content"}
              paddingX={8}
              icon={<IconSentFilledRounded color="white" />}
            >
              Daftar Sekarang!
            </DetailButton>
          </Stack>
        </GridItem>
      </Grid>
      <VStack>

      </VStack>
    </VStack>
  );
};
export default WorkshopDetail;
