import { Box, Button } from "@radix-ui/themes";
import Link from "next/link";
import { SECTIONS } from "@/constant";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex justify-center py-4 lg:justify-end">
      <Box
        asChild
        px="6"
        py="4"
        className="rounded-full bg-[var(--color-panel)] backdrop-blur-[20px]"
      >
        <header>
          <nav>
            <ul className="m-0 flex w-[80vw] justify-between p-0 md:w-[30rem]">
              {Object.values(SECTIONS).map((sectionItem) => (
                <Button
                  size={{ initial: "1", xs: "2", sm: "4" }}
                  variant="ghost"
                  color="gray"
                  asChild
                  key={sectionItem}
                >
                  <li>
                    <Link
                      href={`#${sectionItem}`}
                      aria-label={`${sectionItem}セクションへ遷移`}
                    >
                      {sectionItem.toUpperCase()}
                    </Link>
                  </li>
                </Button>
              ))}
            </ul>
          </nav>
        </header>
      </Box>
    </div>
  );
}
