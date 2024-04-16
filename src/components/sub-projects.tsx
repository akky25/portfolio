import { Box, Card, Flex, Heading, Inset, Slot, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { SECTIONS } from "@/constant";
import { SUB_PROJECTS } from "@/constant/sub-projects";
import LinkTarget from "./link-target";
import SectionHeading from "./section-heading";

export default function SubProjects() {
  return (
    <LinkTarget name={SECTIONS.BLOGS}>
      <Flex gap="7" align="center" direction="column" asChild>
        <section>
          <SectionHeading title="Sub Projects" />
          <Flex direction="column" className="self-stretch" gap="3" px="5">
            {Object.values(SUB_PROJECTS).map((project) => {
              return (
                <Link href={project.url} key={project.title}>
                  <Card>
                    <Flex
                      align={{ initial: "start", xs: "center" }}
                      gap="5"
                      direction={{ initial: "column", xs: "row" }}
                    >
                      <Inset
                        className="self-stretch sm:relative sm:flex-[2.5]"
                        side={{ initial: "top", xs: "left" }}
                      >
                        <Image
                          src={project.image}
                          alt="記事の画像"
                          className="size-full bg-gray-500 object-cover"
                          sizes="(max-width: 520px) 100vw, (max-width: 1200px) 20vw, 200px"
                        />
                      </Inset>
                      <Flex gap="2" direction="column" className="flex-[7.5]">
                        <Box>
                          <Heading as="h3" size="4">
                            {project.title}
                          </Heading>
                          <Text as="p" color="gray" size="3" wrap="wrap">
                            {project.description}
                          </Text>
                        </Box>
                        <Flex gap="4" wrap="wrap" align="center">
                          {project.icons.map((icon) => (
                            <Flex
                              key={icon.label}
                              direction="column"
                              justify="between"
                              align="center"
                            >
                              <Slot className="size-5">{icon.icon}</Slot>
                            </Flex>
                          ))}
                        </Flex>
                      </Flex>
                    </Flex>
                  </Card>
                </Link>
              );
            })}
          </Flex>
        </section>
      </Flex>
    </LinkTarget>
  );
}
