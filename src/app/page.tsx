import { Flex } from "@radix-ui/themes";
import Hero from "@/components/hero";
import Home from "@/components/home";
import Skills from "@/components/skills";
import Blogs from "@/components/blogs";
import Experiences from "@/components/experiences";
import SubProjects from "@/components/sub-projects";

export default function Main() {
  return (
    <main className="flex flex-col lg:flex-row">
      <Hero />
      <Flex className="grow gap-40 lg:w-3/5" direction="column" pb="9">
        <Home />
        <Skills />
        <Experiences />
        <Blogs />
        <SubProjects />
      </Flex>
    </main>
  );
}
