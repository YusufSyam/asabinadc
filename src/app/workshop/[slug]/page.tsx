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
import { CWorkshopData } from "@/utils/const/starterConst";
import { notFound } from "next/navigation";
import { formatDateNormal } from "@/utils/function/datefunction";

type WorkshopDetailPageProps = {
  params: {
    slug: string; // Properti 'slug' harus sama dengan nama folder '[slug]'
  };
};

const WorkshopDetail = async ({ params }: WorkshopDetailPageProps) => {
  const { slug } = params;

  // 1. Cocokkan slug dari URL dengan data workshop menggunakan .find()
  const workshopData = CWorkshopData.find((ws) => ws.slug === slug);

  // 2. Jika data tidak ditemukan, tampilkan halaman 404 Not Found
  if (!workshopData) {
    notFound();
  }

  return (
    <VStack
      gapY={"12"}
      paddingX={"24"}
      paddingBottom={"24"}
      paddingTop={"12"}
      className="border-t-2 border-secondary"
    >
      <div className="w-1/2 text-center">
        <ColoredHeaderText text={workshopData?.workshopTitle} type="h2" />
      </div>
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
                  src={workshopData?.flyerImageSrc as string}
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
              <SmallText whiteSpace={"pre-line"}>{workshopData?.description}</SmallText>
            </Stack>
            <Grid templateColumns={"1fr 1fr"} marginBottom={2}>
              <GridItem>
                <WorkshopDetailInfoText
                  label="Lokasi"
                  value={workshopData?.location}
                  icon={<IconLocationOutlined size={44} color="#334155" />}
                />
              </GridItem>
              <GridItem>
                <Group gapY={0}>
                  <IconTimeOutlined size={42} color="#334155" />
                  <Stack gapY={0}>
                    <StrongText fontSize={"2xl"}>Waktu</StrongText>
                    <SmallText>
                      {formatDateNormal(workshopData?.date)}
                    </SmallText>
                    <SmallText color={"secondary-text"}>{workshopData?.time}</SmallText>
                  </Stack>
                </Group>
              </GridItem>
            </Grid>
            {workshopData?.isUpcoming && (
              <DetailButton
                colorVariant="orange"
                width={"fit-content"}
                paddingX={8}
                icon={<IconSentFilledRounded color="white" />}
                disabled={!workshopData?.isUpcoming}
              >
                Daftar Sekarang!
              </DetailButton>
            )}
          </Stack>
        </GridItem>
      </Grid>
      <VStack></VStack>
    </VStack>
  );
};
export default WorkshopDetail;
