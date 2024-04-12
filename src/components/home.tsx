import {
  AspectRatio,
  Box,
  Card,
  Flex,
  Grid,
  Inset,
  Spinner,
  Text,
} from "@radix-ui/themes";
import { SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { LINK_URL } from "@/constant";
import { fetchGitHubContributions } from "@/utils";
import { GitHub, Z, Zenn } from "./icon";
import MapImage from "./assets/map.png";

export default function Home() {
  const CardProps = [
    {
      Icon: Z,
      title: "Twitter",
      handle: "@akky_52",
      url: LINK_URL.Z,
    },
    {
      Icon: Zenn,
      title: "Zenn",
      handle: "@akky1991",
      url: LINK_URL.ZENN,
    },
  ];
  return (
    <Flex
      asChild
      height="70vh"
      direction="column"
      align="center"
      justify="center"
      gap="4"
    >
      <section>
        <Flex gap="3">
          {CardProps.map((props) => (
            <SnsLinkCard key={props.title} {...props} />
          ))}
          <MapCard />
        </Flex>
        <GitHubCard />
      </section>
    </Flex>
  );
}

function SnsLinkCard({
  Icon,
  title,
  handle,
  url,
}: {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  handle: string;
  url: string;
}) {
  // const Icon = PrimeTwitter;
  return (
    <Link href={url}>
      <Card>
        <Flex
          align="center"
          direction="column"
          width="8rem"
          className="aspect-square"
          gap="3"
        >
          <Icon
            height="4rem"
            className="aspect-square text-[var(--accent-9)]"
          />
          <Flex direction="column" justify="center" align="center">
            <Text color="yellow" size="5">
              {title}
            </Text>
            <Text color="gray">{handle}</Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
}

function MapCard() {
  return (
    <Link href="https://maps.app.goo.gl/inXZp78JGNEFJUki8">
      <Card>
        <Inset>
          <Box
            width="148px"
            className=" aspect-square"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={MapImage}
              alt="ロゴ"
              className="scale-150 brightness-75"
            />
            <Box
              position="absolute"
              style={{
                top: "80%",
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
              className="rounded-md bg-gray-100/30 px-2"
            >
              <Text className="whitespace-nowrap text-black">
                Saitama, Japan
              </Text>
            </Box>
          </Box>
        </Inset>
      </Card>
    </Link>
  );
}

const DAYS = 7 * 12;

async function GitHubCard() {
  const gitHubContributions = await fetchGitHubContributions(
    "akky25",
    DAYS - 1,
  );

  return (
    <Link href={LINK_URL.GITHUB}>
      <Card>
        <Flex>
          <Flex
            align="center"
            direction="column"
            width="8rem"
            className="aspect-square"
            gap="3"
            justify="center"
          >
            <GitHub
              height="4rem"
              className="aspect-square text-[var(--accent-9)]"
            />
            <Flex direction="column" justify="center" align="center">
              <Text color="yellow" size="5">
                GitHub
              </Text>
              <Text color="gray">akky25</Text>
            </Flex>
          </Flex>
          <Box position="relative">
            {gitHubContributions.length !== 0 && (
              <Flex gap="6" pl="4">
                {getPastThreeMonths().map((month) => (
                  <Text key={month} color="gray" size="1">
                    {month}
                  </Text>
                ))}
              </Flex>
            )}
            <Grid
              flow="column"
              rows="repeat(7, 1fr)"
              gap="1"
              columns="12"
              width="12rem"
              p="4"
              pt="1"
            >
              {gitHubContributions.length === 0 ? (
                <Spinner className="absolute left-[40%] top-[40%]" />
              ) : (
                gitHubContributions.map((items, i) => (
                  <AspectRatio
                    key={i}
                    className={colorByNumber(items.contributionCount)}
                  />
                ))
              )}
            </Grid>
          </Box>
        </Flex>
      </Card>
    </Link>
  );
}

function getPastThreeMonths() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const now = new Date();
  const currentMonth = now.getMonth(); // 0から11までの値
  const pastThreeMonths = [];

  for (let i = 0; i < 3; i++) {
    pastThreeMonths.unshift(months[(currentMonth + 12 - i) % 12]); // 月を逆順で追加
  }

  return pastThreeMonths;
}

function colorByNumber(contributions: number) {
  return clsx(
    "rounded-sm",
    contributions <= 0 && `bg-[var(--gray-6)]`,
    contributions >= 1 && contributions < 3 && `bg-[var(--accent-6)]`,
    contributions >= 3 && contributions < 5 && `bg-[#976d0a]`,
    contributions >= 5 && contributions < 7 && `bg-[#d29614]`,
    contributions >= 7 && `bg-[#f8b71f]`,
  );
}
