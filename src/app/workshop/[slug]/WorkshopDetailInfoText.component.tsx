import SmallText from "@/components/text/SmallText.component";
import StrongText from "@/components/text/StrongText.component";
import { Group, Stack } from "@chakra-ui/react";
import React, { JSX } from "react";

export interface IWorkshopDetailInfoText {
  label: string;
  value: string | JSX.Element;
  icon?: JSX.Element;
}

const WorkshopDetailInfoText: React.FC<IWorkshopDetailInfoText> = ({
  label,
  value,
  icon,
}) => {
  return (
    <Group gapY={0}>
      {icon && icon}
      <Stack gapY={0}>
        <StrongText fontSize={"2xl"}>{label}</StrongText>
        <SmallText>{value}</SmallText>
      </Stack>
    </Group>
  );
};
export default WorkshopDetailInfoText;
