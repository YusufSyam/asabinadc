import { Group, HStack, Text } from "@chakra-ui/react";
import React from "react";
import iconAsabina from "../../../public/assets/images/logo1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ROUTES from "@/utils/const/routes";
import HeaderNavbarMenu from "./HeaderNavbarMenu.component";
import {
  IconBookFilled,
  IconGalleryFilled,
  IconSearchFilledRounded,
  IconWorkFilled,
} from "../icons/Icons.component";
import Link from "next/link";

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({}) => {
  //   const pathname = usePathname();
  return (
    <header>
      <HStack className="px-24 py-6 !justify-between w-full">
        <Link href={ROUTES.HOME}>
          <Group>
            <div className="">
              <Image
                src={iconAsabina}
                style={{ objectFit: "contain" }}
                alt="icon asabina"
                width={54}
              />
            </div>
            <Text className="text-burgundy font-poppins-semibold text-3xl">
              ASABINA
            </Text>
          </Group>
        </Link>
        <Group className="gap-4">
          <HeaderNavbarMenu
            colorVariant="white"
            icon={<IconWorkFilled color="orange" />}
            pathname={""}
            href={ROUTES.WORKSHOP}
          >
            Workshop
          </HeaderNavbarMenu>
          <HeaderNavbarMenu
            colorVariant="white"
            icon={<IconBookFilled color="orange" />}
            pathname={""}
            href={ROUTES.SEKELAS}
          >
            SEKELAS Asabina
          </HeaderNavbarMenu>
          <HeaderNavbarMenu
            colorVariant="white"
            icon={<IconGalleryFilled color="orange" />}
            pathname={""}
            href={ROUTES.GALLERY}
          >
            Galeri
          </HeaderNavbarMenu>
          <HeaderNavbarMenu
            icon={<IconSearchFilledRounded color="white" />}
            pathname={""}
            href={ROUTES.ABOUT}
          >
            Tentang Kami
          </HeaderNavbarMenu>
        </Group>
      </HStack>
    </header>
  );
};
export default HeaderLayout;
