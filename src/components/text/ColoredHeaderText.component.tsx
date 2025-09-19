import { Stack, Text } from "@chakra-ui/react";
import React, { JSX } from "react";
interface IColoredHeaderText {
  text: string;
  splitStart?: number;
  subTitle?: string | JSX.Element;
}

const ColoredHeaderText: React.FC<IColoredHeaderText> = ({
  text,
  splitStart,
  subTitle,
}) => {
  const words = text.split(" ");
  const splitIndex =
    splitStart !== undefined ? splitStart : Math.floor(words.length / 2);

  const firstPart = words.slice(0, splitIndex).join(" ");
  const secondPart = words.slice(splitIndex).join(" ");

  return (
    <Stack className="" gapY={0}>
      <Text className="font-poppins-bold text-[54px]">
        <Text as="span" color="burgundy">
          {firstPart}
        </Text>{" "}
        <Text as="span" color="orange">
          {secondPart}
        </Text>
      </Text>
      {subTitle && <Text className="text-secondary-text">{subTitle}</Text>}
    </Stack>
  );
};

export default ColoredHeaderText;
