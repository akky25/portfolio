import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import { SECTIONS } from "@/constant";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex  h-28 w-full items-center justify-end py-4">
      <Flex
        asChild
        px="6"
        py="4"
        gap="6"
        align="center"
        justify="center"
        className=" rounded-full bg-[var(--color-panel)] backdrop-blur-[20px]"
      >
        <header>
          <nav>
            <ul className="m-0 flex list-none gap-6 p-0">
              {Object.values(SECTIONS).map((sectionItem) => (
                <li key={sectionItem}>
                  <Button size="4" variant="ghost" color="gray" asChild>
                    <Link
                      href={`#${sectionItem}`}
                      aria-label={`${sectionItem}セクションへ遷移`}
                    >
                      {sectionItem.toUpperCase()}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </Flex>
    </div>
  );
}
