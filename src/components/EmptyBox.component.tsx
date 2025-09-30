import { Box, BoxProps, Group, Stack } from "@chakra-ui/react";
import React from "react";
import { StickerEmpty } from "./icons/Stickers.component";
import SmallText from "./text/SmallText.component";
import StrongText from "./text/StrongText.component";

export interface IEmptyBox extends BoxProps {
  title?: string;
  message?: string;
}

const EmptyBox: React.FC<IEmptyBox> = ({
  title = "Tidak Ada Data",
  message = "Data yang anda cari kosong",
  className,
  ...rest
}) => {
  return (
    <Box width={"60%"} className="relative" {...rest}>
      <Group
        className={`border-2 border-light-secondary p-12 py-6 rounded-xl z-10 bg-light-secondary ${
          className || ""
        }`}
        gapX={8}
      >
        <StickerEmpty size={180} />
        <Stack>
          <StrongText fontSize={"2xl"}>{title}</StrongText>
          <SmallText className="text-justify">{message}</SmallText>
        </Stack>
      </Group>

      <div
        className={`w-full h-full absolute -right-2 -bottom-2 bg-secondary/50 border-secondary/50 rounded-xl -z-20`}
      ></div>
    </Box>
  );
};
export default EmptyBox;
