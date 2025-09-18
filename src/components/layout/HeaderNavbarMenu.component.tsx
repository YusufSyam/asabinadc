import Link from "next/link";
import React from "react";
import {
  Blockquote,
  Button,
  Float,
  Grid,
  GridItem,
  Group,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export interface IHeaderNavbarMenu {
  label: string;
  href?: string;
  pathname?: string;
}

const HeaderNavbarMenu: React.FC<IHeaderNavbarMenu> = ({
  label,
  href = "#",
  pathname = "",
}) => {
  const isActive = pathname == href;
  return (
    <Link href={href}>
      <Text
        className={`text-primary-text duration-300 ease-in-out transition-all ${
          isActive ? "font-semibold" : ""
        }`}
      >
        {label}
      </Text>
    </Link>
  );
};
export default HeaderNavbarMenu;
