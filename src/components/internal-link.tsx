"use client";

import { Link } from "react-scroll";

export default function InternalLink({
  to,
  children,
  isTop,
}: {
  to: string;
  children: React.ReactNode;
  isTop?: boolean;
}) {
  return (
    <Link
      to={to}
      aria-label={`${to}セクションへ遷移`}
      smooth={true}
      duration={700}
      offset={isTop ? -1000 : -150}
      href={`#${to}`}
    >
      {children}
    </Link>
  );
}
