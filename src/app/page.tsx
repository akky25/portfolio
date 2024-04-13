import { Flex } from "@radix-ui/themes";
import Hero from "@/components/hero";
import Home from "@/components/home";
import Skills from "@/components/skills";

export default function Main() {
  return (
    <main className="flex flex-col lg:flex-row">
      <Hero />
      <Flex className="grow lg:w-3/5" height="220rem" direction="column">
        <Home />
        <Skills />
      </Flex>
    </main>
  );
}
