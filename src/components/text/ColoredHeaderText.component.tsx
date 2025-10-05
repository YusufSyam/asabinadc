import { Stack, Text } from "@chakra-ui/react";
import React, { JSX } from "react";
interface IColoredHeaderText {
  text: string;
  splitStart?: number;
  subTitle?: string | JSX.Element;
  type?: "h1" | "h2";
  textAlign?:"start" | "center"
}

const ColoredHeaderText: React.FC<IColoredHeaderText> = ({
  text,
  splitStart,
  subTitle,
  type = "h1",
  textAlign="start"
}) => {
  const words = text.split(" ");
  const splitIndex =
    splitStart !== undefined ? splitStart : Math.floor(words.length / 2);

  const firstPart = words.slice(0, splitIndex).join(" ");
  const secondPart = words.slice(splitIndex).join(" ");

  return (
    <Stack className="" gapY={{ md: 2, base: 0 }}>
      <Text
        className={`font-poppins-bold `}
        fontSize={{
          base: "36px",
          sm: "40px",
          md: type == "h1" ? "54px" : "48px",
        }}
        textAlign={textAlign}
      >
        <Text as="span" color="burgundy">
          {firstPart}
        </Text>{" "}
        <Text as="span" color="orange">
          {secondPart}
        </Text>
      </Text>
      {subTitle && (
        <Text
          fontSize={{ md: "md", base: "sm" }}
          marginTop={{ md: -2, base: "-2px" }}
          className="text-secondary-text"
        >
          {subTitle}
        </Text>
      )}
    </Stack>
  );
};

export default ColoredHeaderText;
