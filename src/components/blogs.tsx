import {
  AspectRatio,
  Badge,
  Card,
  Flex,
  Grid,
  Heading,
  Inset,
  Text,
  Link as RadixLink,
} from "@radix-ui/themes";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { ARTICLES } from "@/constant/zenn-article";
import { SECTIONS } from "@/constant";
import SectionHeading from "./section-heading";
import LinkTarget from "./link-target";

export default function Blogs() {
  return (
    <LinkTarget name={SECTIONS.BLOGS}>
      <Flex
        gap="7"
        justify="center"
        align="center"
        direction="column"
        px={{ initial: "2", sm: "5" }}
        asChild
      >
        <section id={SECTIONS.BLOGS}>
          <SectionHeading title="Blogs" />
          <Grid
            columns="2"
            gapX={{ initial: "2", xs: "3" }}
            gapY={{ initial: "3", xs: "5" }}
            rows="2"
            width="100%"
            align="stretch"
          >
            {ARTICLES.map((blog) => (
              <BlogCard {...blog} key={blog.title} />
            ))}
          </Grid>
          <Flex align="center" gap="2" asChild>
            <RadixLink
              href="https://zenn.dev/akky1991"
              size={{ initial: "3", xs: "6" }}
              color="gray"
              wrap="nowrap"
            >
              View More
              <ExternalLinkIcon style={{ width: "auto", height: "75%" }} />
            </RadixLink>
          </Flex>
        </section>
      </Flex>
    </LinkTarget>
  );
}

function BlogCard({
  title,
  date,
  tags,
  image,
  link,
}: {
  title: string;
  date: string;
  tags: string[];
  image: StaticImageData;
  link: string;
}) {
  return (
    <Card role="article">
      <Link href={link}>
        <Inset clip="padding-box" side="top" pb="current">
          <AspectRatio ratio={10 / 5}>
            <Image
              src={image}
              alt="記事の画像"
              className="block size-full bg-gray-500 object-cover"
              sizes="25vw"
            />
          </AspectRatio>
        </Inset>
        <Flex direction="column">
          <Text color="gray" size={{ initial: "1", xs: "2" }} asChild>
            <time>{date}</time>
          </Text>
          <Heading as="h3" size={{ initial: "2", xs: "4" }}>
            {title}
          </Heading>
        </Flex>
        <Flex
          pt="2"
          gap={{ initial: "1", xs: "2" }}
          // className="overflow-x-auto"
          wrap="wrap"
        >
          {tags.map((tag) => (
            <Badge
              key={tag}
              color="gray"
              size={{ initial: "1", xs: "2" }}
              variant="surface"
              radius="full"
            >
              {tag}
            </Badge>
          ))}
        </Flex>
      </Link>
    </Card>
  );
}
