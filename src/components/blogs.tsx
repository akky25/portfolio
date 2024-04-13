import {
  AspectRatio,
  Badge,
  Box,
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

export default function Blogs() {
  return (
    <Flex
      gap="7"
      justify="center"
      align="center"
      direction="column"
      pt="9"
      px={{ initial: "2", sm: "5" }}
      asChild
    >
      <section>
        <Box className="border-b-4 border-[var(--accent-9)]" pb="1">
          <Heading as="h2" size="8">
            Blogs
          </Heading>
        </Box>
        <Grid
          columns="2"
          gapX={{ initial: "1", xs: "3" }}
          gapY={{ initial: "2", xs: "5" }}
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
          className="overflow-x-auto"
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
