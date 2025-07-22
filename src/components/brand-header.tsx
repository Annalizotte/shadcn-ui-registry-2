"use client";

import { HelpCircle, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSidebar } from "@/components/ui/sidebar";

import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export function BrandHeader({ className }: { className?: string }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <header className={cn("fixed z-50 w-full bg-sidebar", className)}>
      <div className="flex h-9 items-center justify-between px-2">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="size-6"
            onClick={toggleSidebar}
          >
            {isCollapsed ? (
              <Menu className="size-5" />
            ) : (
              <X className="size-5" />
            )}
          </Button>

          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="size-6">
            <Search className="size-5" />
          </Button>
          <Button variant="ghost" size="icon" className="size-6">
            <HelpCircle className="size-5"/>
          </Button>
          <Button variant="ghost" size="icon" className="size-6">
            <X className="size-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
