import { Slot, Card, Flex, Text, AspectRatio } from "@radix-ui/themes";
import React from "react";
import Marquee from "react-fast-marquee";
import { skillsIcons } from "@/constant/skillsIcon";
import { SECTIONS } from "@/constant";
import SectionHeading from "./section-heading";

export default function Skills() {
  return (
    <Flex gap="5" align="center" direction="column" height="30vh" asChild>
      <section id={SECTIONS.SKILLS}>
        <SectionHeading title="Skills" />
        <div className="w-full overflow-hidden px-0 py-8 lg:px-3">
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
      </section>
    </Flex>
  );
}
