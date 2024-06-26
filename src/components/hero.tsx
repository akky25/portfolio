import { Text, Flex, Box, Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Montserrat_Subrayada, Montserrat } from "next/font/google";
import LogoImage from "./assets/logo.webp";

const montserratSubrayada = Montserrat_Subrayada({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <Flex
      className="top-28 lg:sticky lg:h-[70vh] lg:w-2/5"
      direction="column"
      justify="center"
      align="center"
      gap="4"
      pt={{ initial: "9", md: "0" }}
      asChild
    >
      <section>
        {/* Logo */}
        <Box
          width={{ initial: "140px", md: "170px" }}
          className="aspect-square rounded-full"
          overflow="hidden"
        >
          <Image src={LogoImage} alt="ロゴ" className="scale-150" />
        </Box>

        {/* Title */}
        <Flex direction="column" justify="center" align="center">
          <Heading as="h1" size="8" className={montserratSubrayada.className}>
            Ryohei Akita
          </Heading>
          <Text as="p" color="gray" size="4">
            Frontend Developer
          </Text>
        </Flex>

        {/* Description */}
        <Flex
          gap="2"
          direction="column"
          className="lg:self-stretch"
          px={{ initial: "4", lg: "0" }}
          pt={{ initial: "8", lg: "0" }}
          maxWidth={{ initial: "auto", xs: "30rem", md: "auto" }}
        >
          <Heading as="h2" size="5" className={montserrat.className}>
            About Me
          </Heading>
          <Flex
            direction="column"
            gap="1"
            className="border-l-2 border-[var(--accent-9)]"
            px="2"
          >
            <Text as="p" size="2" className="tracking-widest">
              東京のSI企業でWeb開発者として勤務しています。フロントエンド開発、特にReactとTypeScriptが得意です。
            </Text>
            <Text as="p" size="2">
              新しいことへの挑戦、学習を楽しみながら技術の進化に適応していくと共に、使いやすいUIを目指しWebを通じたより良いプロダクト創りに貢献し続けたいと考えています。興味をもって頂けたら幸いです。
            </Text>
          </Flex>
        </Flex>
      </section>
    </Flex>
  );
}
