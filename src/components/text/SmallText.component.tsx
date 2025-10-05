import React from "react";
import { Text, TextProps } from "@chakra-ui/react";
import { TTextColor } from "@/utils/const/types";

export interface ISmallText extends TextProps {
  color?: TTextColor | TextProps["color"];
}

const SmallText: React.FC<ISmallText> = ({
  children,
  color = "primary-text",
  className,
  ...rest
}) => {
  return (
    <Text
      color={color}
      className={`tracking-1 ${className || ""}`}
      fontSize={{ md: "md", base: "sm" }}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default SmallText;
