import Link from "next/link";
import React, { JSX } from "react";
import {
  Blockquote,
  Button,
  ButtonProps,
  Float,
  Grid,
  GridItem,
  Group,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconWorkFilled } from "../icons/Icons.component";

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
          className={`px-6 ${
            colorVariant == "orange"
              ? "bg-orange text-white border-primary-text"
              : "bg-white text-primary-text border-orange"
          } grow rounded-lg border-2  hover:translate-x-1 hover:translate-y-1  ${
            className || ""
          }`}
          {...rest}
        >
          {icon && icon}
          {children}
        </Button>
        <div
          className={`w-full h-full absolute -right-1 -bottom-1 ${
            colorVariant == "white"
              ? "bg-orange border-orange"
              : "bg-primary-text border-primary-text"
          }  border-2 rounded-lg -z-20`}
        ></div>
      </div>
    </Link>
  );
};
export default HeaderNavbarMenu;
