import { Group, HStack, Text } from "@chakra-ui/react";
import React from "react";
import iconAsabina from "../../../public/assets/images/logo1.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ROUTES from "@/utils/const/routes";
import HeaderNavbarMenu from "./HeaderNavbarMenu.component";

export interface IHeaderLayout {}

const HeaderLayout: React.FC<IHeaderLayout> = ({}) => {
//   const pathname = usePathname();
  return (
    <header>
      <HStack className="px-24 py-6 !justify-between w-full">
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
        <Group className="gap-8">
          <HeaderNavbarMenu
            pathname={""}
            label="Beranda"
            href={ROUTES.HOME}
          />
          <HeaderNavbarMenu
            pathname={""}
            label="Program"
            href={ROUTES.PROGRAM}
          />
          <HeaderNavbarMenu
            pathname={""}
            label="Galeri Asabina"
            href={ROUTES.GALLERY}
          />
          <HeaderNavbarMenu
            pathname={""}
            label="Tentang Kami"
            href={ROUTES.ABOUT}
          />
        </Group>
      </HStack>
    </header>
  );
};
export default HeaderLayout;
