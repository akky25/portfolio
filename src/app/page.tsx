import { Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex">
      <div className="sticky top-28 h-[400px] w-1/3  border-4 border-red-900"></div>
      <Flex
        className="w-1/3 grow border-4 border-blue-800"
        height="120rem"
      ></Flex>
    </main>
  );
}
