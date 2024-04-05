import { Flex, Box } from "@radix-ui/themes";
import Image from "next/image";
import LogoImage from "./logo.webp";

export default function Hero() {
  return (
    <Flex
      className="sticky top-28 h-[400px] w-2/5  border-4 border-red-900"
      direction="column"
      justify="center"
      align="center"
    >
      <Box
        width="170px"
        className="flex aspect-square items-center justify-center rounded-full"
        overflow="hidden"
      >
        <Image
          src={LogoImage}
          alt="ロゴ"
          className="size-[240px] object-cover"
        />
      </Box>
    </Flex>
  );
}
