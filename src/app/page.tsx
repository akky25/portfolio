import { Flex } from "@radix-ui/themes";
import Hero from "@/components/hero";
import Home from "@/components/home";

export default function Main() {
  return (
    <main className="flex flex-col lg:flex-row">
      <Hero />
      <Flex className="grow " height="220rem" direction="column">
        <Home />
      </Flex>
    </main>
  );
}
