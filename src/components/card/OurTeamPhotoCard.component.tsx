import { ITeamProfile } from "@/utils/const/interfaces";
import { Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import SmallText from "../text/SmallText.component";
import StrongText from "../text/StrongText.component";

const OurTeamPhotoCard: React.FC<ITeamProfile> = ({
  imageSrc,
  name,
  position,
  cardVariant = "burgundy",
}) => {
  return (
    <VStack
      borderColor={"primary-text"}
      className="bg-white p-4 border-2 rounded-xl relative h-full"
    >
      <Image
        src={(imageSrc) as string}
        alt="Team Profile"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
      />
      <VStack gapY={1} marginTop={1}>
        <StrongText
          fontSize={{ lg: "2xl", base: "xl" }}
          textAlign={"center"}
          lineHeight={1.25}
        >
          {name}
        </StrongText>
        <SmallText
          fontSize={{ lg: "lg", base: "md" }}
          color={"secondary-text"}
          textAlign={"center"}
          lineHeight={1.25}
        >
          {" "}
          {position}
        </SmallText>
      </VStack>
      <Stack
        backgroundColor={cardVariant}
        borderColor={"primary-text"}
        className={`w-full h-full absolute -right-2 -bottom-2 
             rounded-xl border-2 -z-20`}
      ></Stack>
    </VStack>
  );
};
export default OurTeamPhotoCard;
