import React, { type ReactNode } from "react";

import { BrandHeader } from "@/components/brand-header";
import { BrandSidebar } from "@/components/brand-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function ShellLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <BrandHeader className="fixed left-0 top-0 z-50 w-full h-9" />
      <div className="flex pt-9 h-screen">
        <BrandSidebar className="w-48 shrink-0" />
        <main className="flex-1 overflow-auto p-4">
          {children}
        </main>
      </div>
      <Toaster />
    </SidebarProvider>
  );
}