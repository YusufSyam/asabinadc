import { Text } from "@chakra-ui/react";
import React from "react";
interface IColoredHeaderText {
  text: string;
  splitStart?: number;
}

const ColoredHeaderText: React.FC<IColoredHeaderText> = ({
  text,
  splitStart,
}) => {
  const words = text.split(" ");
  const splitIndex =
    splitStart !== undefined ? splitStart : Math.floor(words.length / 2);

  const firstPart = words.slice(0, splitIndex).join(" ");
  const secondPart = words.slice(splitIndex).join(" ");

  return (
    <Text className="font-poppins-bold text-[54px]">
      <Text as="span" color="burgundy">
        {firstPart}
      </Text>{" "}
      <Text as="span" color="orange">
        {secondPart}
      </Text>
    </Text>
  );
};

export default ColoredHeaderText;
