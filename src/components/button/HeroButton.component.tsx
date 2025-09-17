import React, { JSX } from "react";
import { Button, ButtonProps } from "@chakra-ui/react";

interface HeroButtonProps extends ButtonProps {
  icon?: JSX.Element;
}

const HeroButton: React.FC<HeroButtonProps> = ({ icon, children, className, ...rest }) => {
  return (
    <div className="relative flex grow">
      <Button
        variant={"solid"}
        className={`bg-orange grow rounded-lg text-white border-2 border-white hover:translate-x-1 hover:translate-y-1  ${className || ""}`}
        {...rest}
      >
        {icon && icon}
        {children}
      </Button>
      <div className="w-full h-full absolute -right-1 -bottom-1 bg-white border-2 border-white rounded-lg -z-20"></div>
    </div>
  );
};

export default HeroButton;
