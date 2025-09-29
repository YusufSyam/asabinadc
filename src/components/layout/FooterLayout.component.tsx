import { Group, Stack } from "@chakra-ui/react";
import React from "react";
import StrongText from "../text/StrongText.component";
import SmallText from "../text/SmallText.component";
import Link from "next/link";
import ROUTES from "@/utils/const/routes";
import {
  IconGmailFilled,
  IconInstagramFilled,
  IconLinkedinFilled,
  IconWhatsappFilled,
} from "../icons/Icons.component";
import { WhatsappContacts, InstagramContacts, LinkedinContacts, GmailContacts } from "../Contacts.component";

export interface IFooterLayout {}

const FooterLayout: React.FC<IFooterLayout> = ({}) => {
  return (
    <Stack className="bg-burgundy px-24 !pt-8 !pb-2">
      <Group justify={"space-between"}>
        <Stack gap={4} className="self-start">
          <StrongText color={"white"} fontSize={"7xl"} className="-mt-4">
            ASABINA
          </StrongText>
          <StrongText
            color={"orange"}
            mt={"-10"}
            fontSize={"3xl"}
            className="font-poppins"
          >
            DEVELOPMENT CENTER
          </StrongText>
          <SmallText className="!text-white">
            Makassar, South Sulawesi, Indonesia
          </SmallText>
        </Stack>
        <Stack gapY={8}>
          <Stack>
            <SmallText
              fontSize={"lg"}
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
              fontSize={"lg"}
              color={"white"}
              className="font-poppins-semibold tracking-5"
            >
              MENU
            </SmallText>
            <Group gapX={8}>
              <Link href={ROUTES.WORKSHOP}>
                <SmallText
                  color={"white"}
                  fontSize={"lg"}
                  className="font-medium tracking-5 underline underline-offset-4 hover:text-orange duration-300 ease-in-out"
                >
                  WORKSHOP
                </SmallText>
              </Link>
              <Link href={ROUTES.SEKELAS}>
                <SmallText
                  color={"white"}
                  fontSize={"lg"}
                  className="font-medium tracking-5 underline underline-offset-4 hover:text-orange duration-300 ease-in-out"
                >
                  SEKELAS
                </SmallText>
              </Link>
              <Link href={ROUTES.GALLERY}>
                <SmallText
                  color={"white"}
                  fontSize={"lg"}
                  className="font-medium tracking-5 underline underline-offset-4 hover:text-orange duration-300 ease-in-out"
                >
                  GALERI
                </SmallText>
              </Link>
              <Link href={ROUTES.ABOUT}>
                <SmallText
                  color={"white"}
                  fontSize={"lg"}
                  className="font-medium tracking-5 underline underline-offset-4 hover:text-orange duration-300 ease-in-out"
                >
                  TENTANG KAMI
                </SmallText>
              </Link>
            </Group>
          </Stack>
        </Stack>
      </Group>
      <SmallText className="!text-white text-center border-t border-white py-4 mt-4">
        © 2025 Asabina Development Centre. All rights reserved.
      </SmallText>
    </Stack>
  );
};
export default FooterLayout;
