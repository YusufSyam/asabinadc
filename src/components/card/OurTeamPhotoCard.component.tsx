import { Stack, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import DummyImage from "../../../public/assets/images/dummy-profile.JPG";
import StrongText from "../text/StrongText.component";
import SmallText from "../text/SmallText.component";
import { ITeamProfile } from "@/utils/const/interfaces";

export interface IOurTeamPhotoCard extends ITeamProfile {
  
}

const OurTeamPhotoCard: React.FC<IOurTeamPhotoCard> = ({
  imageSrc,
  name,
  position,
  cardVariant="burgundy",
}) => {
  return (
    <VStack
      borderColor={cardVariant}
      className="bg-white p-4 border rounded-xl relative"
    >
      <Image
        src={imageSrc==null? DummyImage : imageSrc}
        alt="Pemandangan gunung"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto", borderRadius: "16px" }}
      />
      <VStack gapY={0}>
        <StrongText fontSize={"2xl"}>{name}</StrongText>
        <SmallText fontSize={"lg"} color={"secondary-text"}>
          {" "}
          {position}
        </SmallText>
      </VStack>
      <Stack
        backgroundColor={cardVariant}
        borderColor={cardVariant}
        className={`w-full h-full absolute -right-2 -bottom-2 
             rounded-xl border-2 -z-20`}
      ></Stack>
    </VStack>
  );
};
export default OurTeamPhotoCard;
