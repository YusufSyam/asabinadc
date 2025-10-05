"use client";

import { Box, Stack } from "@chakra-ui/react";
import React, { JSX, useEffect, useState } from "react";
import HeroButton from "../button/HeroButton.component";
import { IconCloseOutline, IconMenuOutlined } from "../icons/Icons.component";
import { usePathname } from "next/navigation";

export interface IHeaderMobileNavbar {
  menus: JSX.Element;
}

const HeaderMobileNavbar: React.FC<IHeaderMobileNavbar> = ({ menus }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathname]);
  return (
    <Box display={{ base: "block", md: "none" }} className="relative">
      <HeroButton
        colorVariant="white"
        zIndex={10}
        onClick={() => {
          setIsMenuOpened(!isMenuOpened);
        }}
      >
        {isMenuOpened ? (
          <IconCloseOutline size={30} color={"orange"} className=" -mr-[1px]" />
        ) : (
          <IconMenuOutlined size={36} color={"orange"} />
        )}
      </HeroButton>
      {isMenuOpened && (
        <div className="absolute right-0 top-12 z-40">
          <div className="relative z-30">
            <Stack
              gapY={4}
              className="bg-white border-orange border-2 rounded-lg py-4 px-6"
            >
              {menus}
            </Stack>

            <div
              className={`w-full h-full absolute -right-[2px] -bottom-[2px] lg:-right-1 lg:-bottom-1 bg-orange border-orange border lg:border-2 rounded-lg -z-20`}
            ></div>
          </div>
        </div>
      )}
    </Box>
  );
};
export default HeaderMobileNavbar;
