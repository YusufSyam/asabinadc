import React from "react";
import { Text, TextProps } from "@chakra-ui/react";
import { TTextColor } from "@/utils/const/types";

export interface IStrongText extends TextProps {
  color?: TTextColor | TextProps["color"];
}

const StrongText: React.FC<IStrongText> = ({
  children,
  color = "primary-text",
  className,
  ...rest
}) => {
  return (
    <Text
      color={color}
      fontSize={{
        md:"4xl",
        sm:"3xl",
        base:"2xl"
      }}
      className={`font-poppins-semibold tracking-5 ${className || ""}`}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default StrongText;
