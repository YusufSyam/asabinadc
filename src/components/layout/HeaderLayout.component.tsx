import ROUTES from "@/utils/const/routes";
import { Group, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import iconAsabina from "../../../public/assets/images/logo1.png";
import {
  IconBookFilled,
  IconGalleryFilled,
  IconSearchFilledRounded,
  IconWorkFilled,
} from "../icons/Icons.component";
import HeaderMobileNavbar from "./HeaderMobileNavbar.component";
import HeaderNavbarMenu from "./HeaderNavbarMenu.component";

const HeaderLayout = () => {
  const menus = (
    <>
      <HeaderNavbarMenu
        colorVariant="white"
        icon={<IconWorkFilled color="orange" />}
        href={ROUTES.WORKSHOP}
      >
        Workshop
      </HeaderNavbarMenu>
      <HeaderNavbarMenu
        colorVariant="white"
        icon={<IconBookFilled color="orange" />}
        href={ROUTES.SEKELAS}
      >
        SEKELAS
      </HeaderNavbarMenu>
      <HeaderNavbarMenu
        colorVariant="white"
        icon={<IconGalleryFilled color="orange" />}
        href={ROUTES.GALLERY}
      >
        Galeri
      </HeaderNavbarMenu>
      <HeaderNavbarMenu
        icon={<IconSearchFilledRounded color="white" />}
        href={ROUTES.ABOUT}
      >
        <div className="block md:hidden lg:block">Tentang Kami</div>
      </HeaderNavbarMenu>
    </>
  );
  return (
    <header>
      <HStack
        paddingX={{ base: "4", sm: "8", md: "12", lg: "24" }}
        className="!justify-between w-full"
        paddingBottom={{ base: 4, sm: 6 }}
        paddingTop={{ base: 5, sm: 6 }}
      >
        <Link href={ROUTES.HOME}>
          <Group gapX={{ base: "1", sm: "2" }} className="align-middle">
            <div className="">
              <Image
                src={iconAsabina}
                style={{ objectFit: "contain" }}
                alt="icon asabina"
                width={54}
                className="hidden sm:block"
              />
              <Image
                src={iconAsabina}
                style={{ objectFit: "contain" }}
                alt="icon asabina"
                width={46}
                className="block sm:hidden"
              />
            </div>
            <Text className="text-burgundy font-poppins-semibold text-2xl sm:text-3xl">
              ASABINA
            </Text>
          </Group>
        </Link>
        <Group className="gap-4" display={{ base: "none", md: "flex" }}>
          {menus}
        </Group>
        <HeaderMobileNavbar menus={menus} />
      </HStack>
    </header>
  );
};
export default HeaderLayout;
