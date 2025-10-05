import React, { JSX } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface DetailButtonProps extends ButtonProps {
  icon?: JSX.Element;
  colorVariant?: "orange" | "white";
}

const DetailButton: React.FC<DetailButtonProps> = ({
  colorVariant = "orange",
  icon,
  children,
  className,
  ...rest
}) => {
  return (
    <div className="relative flex">
      <Button
        variant={"solid"}
        fontSize={{ md: "md", base: "sm" }}
        className={`px-6 ${
          colorVariant == "orange"
            ? "bg-orange text-white border-primary-text"
            : "bg-white text-primary-text border-orange"
        } grow rounded-lg border-2  hover:translate-x-1 hover:translate-y-1  ${
          className || ""
        } disabled:!bg-secondary`}
        {...rest}
      >
        {icon && icon}
        {children}
      </Button>
      <div
        className={`w-full h-full absolute -right-[6px] -bottom-[6px] ${
          colorVariant == "white"
            ? "bg-orange border-orange"
            : "bg-primary-text border-primary-text"
        }  border-2 rounded-lg -z-20 `}
      ></div>
    </div>
  );
};

export default DetailButton;
