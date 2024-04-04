import { Box, Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="mt-16  relative flex">
      <div className="border-4 border-red-900 sticky top-16  w-1/3 h-[400px]"></div>
      <Flex
        className="border-4 border-blue-800 w-1/3 flex-grow"
        height="120rem"
      ></Flex>
    </main>
  );
}
