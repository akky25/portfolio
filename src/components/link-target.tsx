"use client";

import { Element } from "react-scroll";
export default function LinkTarget({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return <Element name={name}>{children}</Element>;
}
