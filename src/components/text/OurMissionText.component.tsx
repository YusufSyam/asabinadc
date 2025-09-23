import React from "react";
import SmallText from "./SmallText.component";
import { Text } from "@chakra-ui/react";

export interface IOurMissionText {
  number?: string;
  title: string;
  description: string;
}

const OurMissionText: React.FC<IOurMissionText> = ({
  number,
  description,
  title,
}) => {
  return (
    <SmallText>
      {number && number + ". "}
      <Text as={"span"} className="font-bold">
        {title}
      </Text>{" "}
      {description}
    </SmallText>
  );
};
export default OurMissionText;
