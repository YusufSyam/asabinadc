import ROUTES from "@/utils/const/routes";
import { Flex, Group, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
  GmailContacts,
  InstagramContacts,
  LinkedinContacts,
  WhatsappContacts,
} from "../Contacts.component";
import SmallText from "../text/SmallText.component";
import StrongText from "../text/StrongText.component";

const FooterLayout = () => {
  return (
    <Stack
      paddingX={{ base: "6", sm:"8", md: "12", lg: "24" }}
      className="bg-burgundy !pt-8 !pb-2"
    >
      <Flex
        justify={"space-between"}
        flexDir={{
          md: "row",
          base: "column",
        }}
        gapY={8}
      >
        <Stack gap={4} className="self-start w-full md:w-fit">
          <StrongText
            color={"white"}
            fontSize={{
              base: "4xl",
              xl: "7xl",
              lg: "6xl",
              md: "4xl",
              sm: "6xl",
            }}
            className="-mt-4"
            textAlign={{
              md: "start",
              base: "center",
            }}
          >
            ASABINA
          </StrongText>
          <StrongText
            color={"orange"}
            mt={{ lg: "-10", md: "-6", sm: "-8", base: "-4" }}
            lineHeight={{ base: 1, lg: 1.5 }}
            fontSize={{ base: "xl", lg: "3xl", md: "2xl" }}
            className="font-poppins"
            textAlign={{
              md: "start",
              base: "center",
            }}
          >
            DEVELOPMENT CENTER
          </StrongText>
          <SmallText
            className="!text-white"
            mt={{ base: -2, sm: 0 }}
            textAlign={{
              md: "start",
              base: "center",
            }}
          >
            Makassar, South Sulawesi, Indonesia
          </SmallText>
        </Stack>
        <Stack gapY={8}>
          <Stack>
            <SmallText
              fontSize={{ lg: "lg", base: "md" }}
              color={"white"}
              className="font-poppins-semibold tracking-5"
            >
              GET IN TOUCH
            </SmallText>
            <Group gapX={6}>
              <WhatsappContacts />
              <InstagramContacts />
              <LinkedinContacts />
              <GmailContacts />
            </Group>
          </Stack>
          <Stack>
            <SmallText
              fontSize={{ lg: "lg", base: "md" }}
              color={"white"}
              className="font-poppins-semibold tracking-5"
            >
              MENU
            </SmallText>
            <Group
              gapX={{ lg: 8, md: 4, base: 6 }}
              flexWrap={{ base: "wrap", md: "nowrap" }}
            >
              <Link href={ROUTES.WORKSHOP}>
                <SmallText
                  color={"white"}
                  fontSize={{ lg: "lg", base: "md" }}
                  className="font-medium tracking-5 underline underline-offset-4 hover:text-orange duration-300 ease-in-out"
                >
                  WORKSHOP
                </SmallText>
              </Link>
              <Link href={ROUTES.SEKELAS}>
                <SmallText
                  color={"white"}
                  fontSize={{ lg: "lg", base: "md" }}
                  className="font-medium tracking-5 underline underline-offset-4 hover:text-orange duration-300 ease-in-out"
                >
                  SEKELAS
                </SmallText>
              </Link>
              <Link href={ROUTES.GALLERY}>
                <SmallText
                  color={"white"}
                  fontSize={{ lg: "lg", base: "md" }}
                  className="font-medium tracking-5 underline underline-offset-4 hover:text-orange duration-300 ease-in-out"
                >
                  GALERI
                </SmallText>
              </Link>
              <Link href={ROUTES.ABOUT}>
                <SmallText
                  color={"white"}
                  fontSize={{ lg: "lg", base: "md" }}
                  className="font-medium tracking-5 underline underline-offset-4 hover:text-orange duration-300 ease-in-out text-center"
                >
                  TENTANG KAMI
                </SmallText>
              </Link>
            </Group>
          </Stack>
        </Stack>
      </Flex>
      <SmallText className="!text-white text-center border-t border-white py-4 mt-4">
        © 2025 Asabina Development Centre. All rights reserved.
      </SmallText>
    </Stack>
  );
};
export default FooterLayout;
