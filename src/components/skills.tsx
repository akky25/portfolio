import {
  Slot,
  Box,
  Card,
  Flex,
  Heading,
  Text,
  AspectRatio,
} from "@radix-ui/themes";
import React from "react";
import Marquee from "react-fast-marquee";
import { skillsIcons } from "@/constant/skillsIcon";

export default function Skills() {
  return (
    <Flex gap="5" justify="center" align="center" direction="column">
      <Box className="border-b-4 border-[var(--accent-9)]" pb="1" px="1">
        <Heading as="h2" size="8">
          Skills
        </Heading>
      </Box>
      <div className="w-full overflow-hidden px-3 py-8">
        <span className="sr-only">セクションタイトル</span>
        <Marquee play={true}>
          {skillsIcons.map((icon) => (
            <Card key={icon.label} mx="2" className="w-20 sm:w-28">
              <Flex
                asChild
                direction="column"
                gap="2"
                justify="center"
                align="center"
              >
                <AspectRatio ratio={1}>
                  <Slot className="size-12" color={icon.color}>
                    {icon.icon}
                  </Slot>
                  <Text size={{ initial: "1", xs: "2" }} wrap="nowrap">
                    {icon.label}
                  </Text>
                </AspectRatio>
              </Flex>
            </Card>
          ))}
        </Marquee>
      </div>
    </Flex>
  );
}
