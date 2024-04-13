import { Box, Heading } from "@radix-ui/themes";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <Box className="border-b-4 border-[var(--accent-9)]" pb="1">
      <Heading as="h2" size="8">
        {title}
      </Heading>
    </Box>
  );
}
