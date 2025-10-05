import { Button, ButtonProps } from "@chakra-ui/react";
import Link from "next/link";
import React, { JSX } from "react";

export interface IHeaderNavbarMenu extends ButtonProps {
  href?: string;
  pathname?: string;
  colorVariant?: "orange" | "white";
  icon?: JSX.Element;
}

const HeaderNavbarMenu: React.FC<IHeaderNavbarMenu> = ({
  href = "#",
  pathname = "",
  colorVariant = "orange",
  icon,
  children,
  className,
  ...rest
}) => {
  const isActive = pathname == href;
  return (
    <Link href={href}>
      <div className="relative flex">
        <Button
          variant={"solid"}
          paddingX={{ base: 4, md: 4, lg: 6 }}
          className={`${
            colorVariant == "orange"
              ? "bg-orange text-white border-primary-text"
              : "bg-white text-primary-text border-orange"
          } rounded-lg border-2 md:grow-0 grow hover:translate-x-[2px] hover:translate-y-[2px] lg:hover:translate-x-1 lg:hover:translate-y-1 z-20 ${
            className || ""
          }`}
          {...rest}
        >
          {icon && icon}
          {children}
        </Button>
        <div
          className={`w-full h-full absolute -right-[2px] -bottom-[2px] lg:-right-1 lg:-bottom-1 ${
            colorVariant == "white"
              ? "bg-orange border-orange"
              : "bg-primary-text border-primary-text"
          }  border lg:border-2 rounded-lg z-10`}
        ></div>
      </div>
    </Link>
  );
};
export default HeaderNavbarMenu;
