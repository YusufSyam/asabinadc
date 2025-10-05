import React, { JSX } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface HeroButtonProps extends ButtonProps {
  icon?: JSX.Element;
  colorVariant?: "orange" | "white";
}

const HeroButton: React.FC<HeroButtonProps> = ({
  colorVariant = "orange",
  icon,
  children,
  className,
  ...rest
}) => {
  return (
    <div className="relative flex">
      <Button
        paddingX={{ base: 4, md: 6 }}
        fontSize={{ md: "md", base: "sm" }}
        variant={"solid"}
        className={`${
          colorVariant == "orange"
            ? "bg-orange text-white border-white"
            : "bg-white text-primary-text border-orange"
        } grow rounded-lg border-2  hover:translate-x-[2px] hover:translate-y-[2px] lg:hover:translate-x-1 lg:hover:translate-y-1 ${
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
            : "bg-white border-white"
        }  border-2 rounded-lg -z-20`}
      ></div>
    </div>
  );
};

export default HeroButton;
