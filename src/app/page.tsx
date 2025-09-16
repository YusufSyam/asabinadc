import Image from "next/image";
import styles from "./page.module.css";
import { Group, Stack, Text, VStack } from "@chakra-ui/react";
import StrongText from "@/components/text/StrongText.component";
import logoPerusahaan from "../../public/assets/images/hero.png";
import SmallText from "@/components/text/SmallText.component";
import ColoredHeaderText from "@/components/text/ColoredHeaderText.component";

export default function Home() {
  return (
    <Stack gapY={"24"} paddingX={"36"} paddingBottom={"96"} className="">
      <VStack className=" w-full">
        <div className="bg-white">
          <Image
            src={logoPerusahaan}
            style={{ objectFit: "contain" }}
            alt="Hero"
          />
        </div>
        <VStack className="-mt-24">
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
          Kami mempunyai <span className="font-bold">visi</span> menjadi wadah pengembangan diri yang inklusif,
          inspiratif dan setara bagi semua kalangan untuk tumbuh dan mencapai
          potensi terbaik dalam kehidupan pribadi maupun profesional. Asabina
          Development Centre memiliki <span className="font-bold">3 misi utama</span>
        </SmallText>
      </VStack>
    </Stack>
  );
}
