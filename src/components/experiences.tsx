import {
  Text,
  Box,
  Card,
  Flex,
  Badge,
  Separator,
  ScrollArea,
} from "@radix-ui/themes";
import Image from "next/image";
import { SECTIONS } from "@/constant";
import NttDataLogo from "./assets/ntt-data-1.svg";
import SectionHeading from "./section-heading";
import LinkTarget from "./link-target";

const DOT_LEFT_POSITION = {
  initial: "2%",
  xs: "1%",
  sm: "4%",
  md: "5%",
};

const SEPARATOR_LEFT_POSITION = {
  initial: `calc(${DOT_LEFT_POSITION.initial} + 3.5px)`,
  xs: `calc(${DOT_LEFT_POSITION.xs} + 3.5px)`,
  sm: `calc(${DOT_LEFT_POSITION.sm} + 3.5px)`,
  md: `calc(${DOT_LEFT_POSITION.md} + 3.5px)`,
};

const EXPERIENCES: React.ComponentProps<typeof ExperienceCard>[] = [
  {
    title: "大手携帯キャリア会社 toC向けWebアプリの開発",
    date: "2023/7 - 現在",
    description:
      "大手携帯キャリア会社、芸能事務所合同運営のファンコミュニティサービス開発にフロントエンド領域のテックリードとして参画",
    tags: ["Next.js", "TypeScript", "Radix UI", "スクラム開発"],
  },
  {
    title: "大手携帯キャリア会社 toB向けWebアプリの開発",
    date: "2022/5 - 2023/6",
    description:
      "通信会社オペレーター向け業務用アプリケーションのSPAアプリ開発にDevチームメンバーとして参画",
    tags: ["React", "TypeScript", "スクラム開発"],
  },
  {
    title: "大手携帯キャリア会社 料金プラン申し込み用Webアプリ開発",
    date: "2021/4 - 2022/4",
    description:
      "通信会社の新料金プランの申し込み、機種変更等を提供するSPAアプリの開発にDevチームメンバーとして参画",
    tags: ["React", "TypeScript", "スクラム開発"],
  },
  {
    title: "大手電力会社 toC向けWebアプリの開発",
    date: "2019/12 - 2021/3",
    description:
      "顧客向け電気使用料提供Webアプリの開発に参画。アプリケーション刷新のためフロントエンド領域の移行作業、及びREST APIの開発を担当",
    tags: ["VanillaJS", "CSS", "Spring Boot", "Java", "ウォーターフォール開発"],
  },
  {
    title: "大手通信会社 業務用バッチシステムの開発",
    date: "2016/4 - 2019/11",
    description:
      "大手通信会社 顧客データ管理・送信システム開発のSE業務に参画。C言語によるバッチ処理の設計、実装、テストを担当",
    tags: ["C言語", "ウォーターフォール開発"],
  },
];

export default function Experiences() {
  return (
    <LinkTarget name={SECTIONS.EXPERIENCES}>
      <Flex
        align="center"
        direction="column"
        asChild
        px={{ initial: "4", sm: "7", md: "4" }}
      >
        <section id={SECTIONS.EXPERIENCES}>
          {/* <section> */}
          <SectionHeading title="Experiences" />
          <Flex
            width="100%"
            direction="column"
            align="stretch"
            pt="7"
            pb={{ initial: "7", xs: "5" }}
            // gap="4"
            position="relative"
          >
            <Box
              position="absolute"
              top="4%"
              bottom="0"
              width="1px"
              left={SEPARATOR_LEFT_POSITION}
            >
              <Separator
                size="4"
                orientation="vertical"
                // mt="5"
                style={{
                  background: "var(--yellow-9)",
                }}
              />
            </Box>
            <ScrollArea
              type="always"
              scrollbars="vertical"
              style={{ height: "40vh" }}
            >
              <Flex direction="column" gap="4">
                {EXPERIENCES.map((experience) => (
                  <ExperienceCard {...experience} key={experience.title} />
                ))}
              </Flex>
            </ScrollArea>
          </Flex>
          <Box
            className="self-stretch"
            pl={{ initial: "0", sm: "2" }}
            pt="2"
            pb="6"
            position="relative"
            asChild
          >
            <article>
              <Image src={NttDataLogo} alt="NTTDATAロゴ画像" height="25" />
              <Flex
                gap={{ initial: "0", xs: "2" }}
                align={{ initial: "start", xs: "center" }}
                direction={{ initial: "column", xs: "row" }}
              >
                <Text weight="bold" size={{ initial: "4", xs: "4" }}>
                  株式会社 NTTデータ・ビジネス・システムズ
                </Text>
                <Text size={{ initial: "1", xs: "2" }} color="gray">
                  2016年 入社
                </Text>
              </Flex>
              <Box
                position="absolute"
                top={{ initial: "75%", xs: "70%" }}
                bottom="0"
                width="1px"
                left={SEPARATOR_LEFT_POSITION}
              >
                <Separator
                  size="4"
                  orientation="vertical"
                  style={{
                    background: "var(--yellow-9)",
                  }}
                />
              </Box>
            </article>
          </Box>
          <Box
            className="self-stretch"
            pl={{ initial: "0", sm: "2" }}
            pt="2"
            pb="7"
            position="relative"
            asChild
          >
            <article>
              <Flex
                gap={{ initial: "0", xs: "2" }}
                align={{ initial: "start", xs: "center" }}
                direction={{ initial: "column", xs: "row" }}
              >
                <Text weight="bold" size={{ initial: "4", xs: "4" }}>
                  日本大学大学院 理工学研究科 物理学専攻
                </Text>
                <Text size={{ initial: "1", xs: "2" }} color="gray">
                  2016年 修了
                </Text>
              </Flex>
              <Box
                position="absolute"
                top={{ initial: "65%", xs: "55%" }}
                bottom="0"
                width="1px"
                left={SEPARATOR_LEFT_POSITION}
              >
                <Separator
                  size="4"
                  orientation="vertical"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--yellow-9) 50%, transparent)",
                  }}
                />
              </Box>
            </article>
          </Box>
        </section>
      </Flex>
    </LinkTarget>
  );
}

function ExperienceCard({
  date,
  title,
  description,
  tags,
}: {
  date: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <Box
      pl={{ initial: "5", sm: "9" }}
      pr={{ initial: "4", sm: "6" }}
      position="relative"
    >
      <GreenDot />
      <Card asChild>
        <article>
          <Flex gap="2" direction="column">
            <Text color="gray" size="1">
              <time>{date}</time>
            </Text>
            <Box>
              <Text as="p" size="4">
                {title}
              </Text>
              <Text as="p" color="gray" size="2">
                {description}
              </Text>
            </Box>
            <Flex gap="2" wrap="wrap">
              {tags.map((tag) => (
                <Badge
                  size="1"
                  variant="soft"
                  color="cyan"
                  radius="full"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </Flex>
          </Flex>
        </article>
      </Card>
    </Box>
  );
}

function GreenDot() {
  return (
    <Box
      width="8px"
      height="8px"
      position="absolute"
      left={DOT_LEFT_POSITION}
      top="50%"
      style={{
        backgroundColor: "var(--accent-9)",
        borderRadius: "100%",
      }}
    />
  );
}
