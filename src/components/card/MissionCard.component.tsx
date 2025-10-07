import { Text, VStack } from "@chakra-ui/react";
import React from "react";

export interface IMissionCard {
    title: string;
    description: string;
}

const MissionCard: React.FC<IMissionCard> = ({title, description}) => {
  return (
    <VStack gapY={6} className="border py-6 px-8 rounded-xl">
      <Text className="font-poppins-semibold text-primary-text text-center px-4">
        {title}
      </Text>
      <Text className="text-center">
        {description}
      </Text>
    </VStack>
  );
};
export default MissionCard;
