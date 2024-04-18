import {
  SiNextdotjs,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReactHex,
  SiTailwindcss,
  SiTailwindcssHex,
} from "@icons-pack/react-simple-icons";
import { StaticImageData } from "next/image";
import { WrapIcon } from "@/components/icon/wrapper";
import imageVidapp from "./assets/sub-projects/videoapp.png";
import imagePortfolio from "./assets/sub-projects/portfolio.png";

type Content = {
  title: string;
  description: string;
  url: string;
  image: StaticImageData;
  icons: { icon: JSX.Element; label: string }[];
};

export const SUB_PROJECTS: Record<string, Content> = {
  VID_APP: {
    title: "動画投稿アプリ",
    description: "T3スタックを使用したYouTubeクローンのデモ動動画アプリ",
    url: "https://github.com/akky25/videoapp",
    image: imageVidapp,
    icons: [
      {
        icon: <WrapIcon icon="devicon:typescript" />,
        label: "TypeScript",
      },
      {
        icon: <SiReact color={SiReactHex} />,
        label: "React",
      },
      {
        icon: <SiNextdotjs />,
        label: "Next.js",
      },
      {
        icon: <SiTailwindcss color={SiTailwindcssHex} />,
        label: "TailwindCSS",
      },
      {
        icon: <WrapIcon icon="devicon:trpc" />,
        label: "tRPC",
      },
      {
        icon: <SiPrisma />,
        label: "prisma",
      },
    ],
  },
  PORTFOLIO: {
    title: "ポートフォリオサイト",
    description: "App Routerを利用した当該サイト",
    url: "https://github.com/akky25/portfolio",
    image: imagePortfolio,
    icons: [
      {
        icon: <WrapIcon icon="devicon:typescript" />,
        label: "TypeScript",
      },
      {
        icon: <SiReact color={SiReactHex} />,
        label: "React",
      },
      {
        icon: <SiNextdotjs />,
        label: "Next.js",
      },
      {
        icon: <SiTailwindcss color={SiTailwindcssHex} />,
        label: "TailwindCSS",
      },
      {
        icon: <SiRadixui />,
        label: "RadixUI",
      },
    ],
  },
};
