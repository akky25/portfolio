import { Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import { LINK_URL, SECTIONS } from "@/constant";
import InternalLink from "./internal-link";
import { X } from "./icon/x";
import { GitHub } from "./icon";

export default function Header() {
  return (
    <>
      <footer className="flex flex-col-reverse items-center gap-4 bg-white/10 py-4  md:justify-start xl:flex-row xl:gap-9 xl:pl-[50%]">
        <Flex
          gap="3"
          // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
          className="items-center justify-center xl:-ml-[10vw] xl:w-[20vw]"
        >
          <Text as="p" size={{ initial: "1", md: "2" }}>
            {`© ${new Date().getFullYear()} Ryohei Akita`}
          </Text>
          <Link href={LINK_URL.X} aria-label="x akky_52">
            <X className="h-4 " />
          </Link>
          <Link href={LINK_URL.GITHUB} aria-label="github akky25">
            <GitHub className="h-4 " />
          </Link>
        </Flex>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {Object.values(SECTIONS).map((sectionItem, index) => (
              <li key={sectionItem}>
                <InternalLink
                  to={sectionItem}
                  aria-label={`${sectionItem}セクションへ遷移`}
                  isTop={index === 0}
                >
                  <Text
                    className="cursor-pointer hover:underline hover:decoration-gray-500 hover:decoration-2"
                    size={{ initial: "2", xs: "3" }}
                  >
                    {sectionItem.toUpperCase()}
                  </Text>
                </InternalLink>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </>
  );
}
