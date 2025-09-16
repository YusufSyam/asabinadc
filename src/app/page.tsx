import Image from "next/image";
import styles from "./page.module.css";
import { Grid, GridItem, Group, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import StrongText from "@/components/text/StrongText.component";
import logoPerusahaan from "../../public/assets/images/hero.png";
import SmallText from "@/components/text/SmallText.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";

export default function Home() {
  return (
    <Stack gapY={"24"} paddingX={"24"} paddingY={"24"} className="">
      <VStack className=" w-full">
        <VStack className="relative">
          <div className="bg-burgundy opacity-95 rounded-xl border border-burgundy overflow-hidden">
            <Image
              src={logoPerusahaan}
              style={{ objectFit: "contain" }}
              alt="Hero"
              className="opacity-25"
            />
          </div>

          <Grid
            templateColumns="2fr 1fr" // Kunci utamanya ada di sini
            gap={6} // Memberi jarak antar kolom
            className="absolute bottom-8 bg-blue-300 w-full px-8"
          >
            {/* Kolom Pertama (2/3 dari lebar) */}
            <GridItem w="100%">
              <StrongText color={"white"} >ASABINA</StrongText>
            </GridItem>

            {/* Kolom Kedua (1/3 dari lebar) */}
            <GridItem w="100%">
              <Text fontWeight="bold">Kolom 2 (1fr)</Text>
              <Text>Lebar kolom ini adalah 1/3 dari total lebar grid.</Text>
            </GridItem>
          </Grid>

          
          <div className="w-full h-full absolute -right-2 -bottom-2 bg-orange/50 border border-orange rounded-xl -z-10"></div>
        </VStack>
        <VStack className="mt-48">
          <Group className="gap-4">
            <StrongText>INKLUSIF.</StrongText>
            <StrongText color="orange">INSPIRATIF.</StrongText>
          </Group>
          <StrongText color="magenta">KOLABORATIF.</StrongText>
          <SmallText className="mt-4 w-4/5 text-center">
            wadah pengembangan diri yang inklusif, inspiratif dan setara bagi
            semua kalangan untuk tumbuh dan mencapai potensi terbaik dalam
            kehidupan pribadi maupun profesional
          </SmallText>
        </VStack>
      </VStack>

      <VStack gapY={"4"}>
        <ColoredHeaderText text="Visi & Misi" />
        <SmallText className="text-center mx-24">
          Kami mempunyai <span className="font-bold">visi</span> menjadi wadah
          pengembangan diri yang inklusif, inspiratif dan setara bagi semua
          kalangan untuk tumbuh dan mencapai potensi terbaik dalam kehidupan
          pribadi maupun profesional. Asabina Development Centre memiliki{" "}
          <span className="font-bold">3 misi utama</span>
        </SmallText>
        <Group>
          <VStack></VStack>
        </Group>
      </VStack>
    </Stack>
  );
}
