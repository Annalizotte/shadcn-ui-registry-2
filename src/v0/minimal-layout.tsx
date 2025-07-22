import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";
import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/tokens.css";
import "@/app/globals.css";

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
      <body>
        <main className="mt-16 flex w-full justify-center">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
