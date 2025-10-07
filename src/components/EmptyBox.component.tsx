import { Box, BoxProps, Grid, GridItem, Stack } from "@chakra-ui/react";
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
    <Box
      width={{ base: "full", sm: "70%", md: "full", xl: "60%", lg: "80%" }}
      className="relative"
      {...rest}
    >
      <Grid
        paddingX={{ base: 6, md: 12 }}
        paddingY={{ base: 6, sm: 10, md: 12 }}
        className={`border-2 border-light-secondary rounded-xl z-10 bg-light-secondary ${
          className || ""
        }`}
        templateColumns={{
          md: "1fr 5fr",
          base: "1fr",
        }}
        gapX={10}
        gapY={4}
      >
        <GridItem minWidth={0}>
          <StickerEmpty size={100} className="hidden md:block mx-auto" />
          <StickerEmpty size={120} className="block md:hidden mx-auto" />
        </GridItem>
        <GridItem minWidth={0}>
          <Stack>
            <StrongText
              fontSize={{
                md: "2xl",
                base: "xl",
              }}
            >
              {title}
            </StrongText>
            <SmallText className="text-justify">{message}</SmallText>
          </Stack>
        </GridItem>
      </Grid>

      <div
        className={`w-full h-full absolute -right-2 -bottom-2 bg-secondary/50 border-secondary/50 rounded-xl -z-20`}
      ></div>
    </Box>
  );
};
export default EmptyBox;
