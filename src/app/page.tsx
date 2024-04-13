import { Flex } from "@radix-ui/themes";
import Hero from "@/components/hero";
import Home from "@/components/home";
import Skills from "@/components/skills";
import Blogs from "@/components/blogs";
import Experiences from "@/components/experiences";

export default function Main() {
  return (
    <main className="flex flex-col lg:flex-row">
      <Hero />
      <Flex className="grow gap-40 lg:w-3/5" height="320rem" direction="column">
        <Home />
        <Skills />
        <Experiences />
        <Blogs />
      </Flex>
    </main>
  );
}
