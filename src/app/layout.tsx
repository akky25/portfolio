import type { Metadata } from "next";
import "./main.css";
import { Container, Theme } from "@radix-ui/themes";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Ryohei Akita",
  description:
    "Ryohei Akita のポートフォリオサイトです。東京のSI企業でWeb開発者として勤務しています。フロントエンド開発、特にReactとTypeScriptが得意です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Theme
          appearance="dark"
          accentColor="yellow"
          grayColor="sage"
          panelBackground="translucent"
        >
          <div
            className="fixed -z-50 h-[75vh] w-screen lg:h-screen "
            style={{
              backgroundImage: 'url("/background.svg")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Container
            minWidth={{ md: "1000px", lg: "1200px" }}
            maxWidth={{ md: "1000px", lg: "1200px" }}
          >
            <Header />
            {children}
          </Container>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
