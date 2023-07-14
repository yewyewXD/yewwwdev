import "./globals.scss";
import { DM_Sans } from "next/font/google";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import Script from "next/script";
import { Metadata } from "next";

const DMSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yewww.dev"),
  title: "yewww.dev",
  description: "Welcome to the portfolio website of KangWei Yew!",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <AppHeader />
        {children}
        <AppFooter />

        <Script
          src="//code.tidio.co/8idttcw6wqxjy9liqinkjtmhgiupkqvr.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
