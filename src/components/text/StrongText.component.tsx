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
      fontSize={"4xl"}
      className={`font-poppins-semibold tracking-5 ${className || ""}`}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default SmallText;
