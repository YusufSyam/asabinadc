import DetailButton from "@/components/button/DetailButton.component";
import {
  IconLocationOutlined,
  IconRadarFilledRounded,
  IconSentFilledRounded,
  IconTimeOutlined,
} from "@/components/icons/Icons.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";
import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { CWorkshopData } from "@/utils/const/starterConst";
import { formatDateNormal } from "@/utils/function/datefunction";
import { Box, Grid, GridItem, Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { notFound } from "next/navigation";
import WorkshopDetailGallery from "./WorkshopDetailGallery.section";
import WorkshopDetailInfoText from "./WorkshopDetailInfoText.component";

export default async function WorkshopDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // 👈 HARUS di-await

  const workshopData = CWorkshopData.find((ws) => ws.slug === slug);
  if (!workshopData) {
    notFound();
  }

  return (
    <VStack
      gapY={"12"}
      paddingX={{ base: "8", md: "12", lg: "12", xl: "24" }}
      paddingBottom={"24"}
      paddingTop={"12"}
      className="border-t-2 border-secondary"
    >
      <Box
        width={{
          lg: "1/2",
          sm: "90%",
          base: "100%",
        }}
        className="text-center"
      >
        <ColoredHeaderText
          text={workshopData?.workshopTitle}
          type="h2"
          textAlign="center"
        />
      </Box>
      <Grid
        templateColumns={{
          lg: "5fr 7fr",
          base: "1fr",
        }}
        className=""
        gapX={8}
        gapY={6}
        marginX={{
          lg: "12",
          md: "10",
          sm: "6",
          base: "4",
        }}
        marginBottom={24}
      >
        <GridItem className="flex justify-center h-fit" padding={4}>
          <div className="relative">
            <Stack
              className={`border-2 border-orange p-4 pb-6 rounded-xl z-10 bg-white w-fit`}
              gapY={4}
            >
              <Box
                position="relative"
                width="100%"
                maxWidth={"500px"}
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

            <Box
              className={`w-full max-w-[522px] h-full absolute -bottom-2 bg-orange border border-orange rounded-xl -z-20`}
              left={{
                lg: "2",
                md: "6",
                sm: "2",
                base: "2",
              }}
            ></Box>
          </div>
        </GridItem>
        <GridItem padding={2}>
          <Stack gapY={6}>
            <Stack>
              <StrongText
                textAlign={{
                  lg: "start",
                  base: "center",
                }}
              >
                Deskripsi
              </StrongText>
              <SmallText whiteSpace={"pre-line"}>
                {workshopData?.description}
              </SmallText>
            </Stack>
            <Stack marginBottom={2} gapY={8}>
              <WorkshopDetailInfoText
                label="Lokasi"
                value={workshopData?.locationDetail}
                icon={
                  <IconLocationOutlined
                    size={48}
                    color="#334155"
                    className="hidden sm:block"
                  />
                }
              />

              <WorkshopDetailInfoText
                label="Waktu"
                value={`${formatDateNormal(workshopData?.date)}, ${
                  workshopData?.time
                }`}
                icon={
                  <IconTimeOutlined
                    size={44}
                    color="#334155"
                    className="hidden sm:block"
                  />
                }
              />
              <WorkshopDetailInfoText
                label="Speaker"
                value={`${workshopData?.speaker?.map(
                  (d: string, idx: number) =>
                    d + (idx >= workshopData?.speaker?.length - 1 ? "" : " ")
                )}`}
                icon={
                  <IconRadarFilledRounded
                    size={44}
                    color="#334155"
                    className="hidden sm:block"
                  />
                }
              />
            </Stack>
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
      <VStack>
        {workshopData?.galleryPhotos && (
          <WorkshopDetailGallery gallery={workshopData?.galleryPhotos} />
        )}
      </VStack>
    </VStack>
  );
}
