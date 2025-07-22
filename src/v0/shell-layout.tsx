"use client";

import { Roboto, Roboto_Mono, Roboto_Serif } from "next/font/google";
import React, { useState, type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { Toaster } from "@/components/ui/sonner";
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

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <html
      lang="en"
      className={cn(
        RobotoSans.variable,
        RobotoMono.variable,
        RobotoSerif.variable,
        "bg-background text-foreground"
      )}
    >
      <body>
        <BrandHeader
          className="fixed left-0 top-0 z-50 w-full h-9"
          onToggleSidebar={() => setIsCollapsed((prev) => !prev)}
        />
        <div className="flex pt-9 h-screen">
          <BrandSidebar
            className={cn(
              isCollapsed ? "w-[44px]" : "w-[180px]",
              "shrink-0 transition-all"
            )}
          />
          <main className="flex-1 overflow-auto p-4">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
