import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

import "@/app/tokens.css";
import "@/app/globals.css";

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const MontserratSerif = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
});

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        MontserratSerif.variable,
        "bg-background text-foreground",
      )}
    >
    <body>
    <SidebarProvider>
      <BrandHeader className="fixed left-0 top-0 z-50 w-full h-9" />

      <div className="flex pt-9 h-screen">
        <BrandSidebar />
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>

      <Toaster />
    </SidebarProvider>
  </body>
</html>

  );
}
