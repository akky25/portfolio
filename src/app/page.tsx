import { Flex } from "@radix-ui/themes";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="flex">
      <Hero />
      <Flex
        className="grow border-4 border-blue-800"
        height="220rem"
        direction="column"
        justify="center"
      >
        <section id="blogs">aaa</section>
      </Flex>
    </main>
  );
}
