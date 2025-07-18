import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/tokens.css";
import "@/app/tailwind.css";

export const metadata: Metadata = {
  title: "Registry Starter",
  description: "Starter to help build a Shadcn Registry using Tailwind v4",
  icons: [{ rel: "icon", url: "/favicon.svg", type: "image/svg+xml" }],
};

const RobotoSans = Roboto({
  subsets: ["latin"],
  variable: "--font-sans",
});

const RobotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const RobotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        RobotoSans.variable,
        RobotoMono.variable,
        RobotoSerif.variable,
        "bg-background text-foreground",
      )}
    >
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <body className="flex grow">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
