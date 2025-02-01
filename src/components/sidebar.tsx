"use client";

import Link from "next/link";
import { BookOpen, Library, Settings, SquareLibrary } from "lucide-react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Sidebar() {
  const { setTheme } = useTheme();
  return (
    <div className="w-56 bg-card text-card-foreground h-full p-4 space-y-4 border-r">
      <div className="text-4xl font-extrabold tracking-tight lg:text-5xl my-6">
        Better Books
      </div>
      <nav className="space-y-2 text-md">
        <Link
          href="/"
          className="flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <BookOpen size={24} />
          <span>My Books</span>
        </Link>
        <Link
          href="/library"
          className="flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <Library size={24} />
          <span>Library</span>
        </Link>
        <Link
          href="/favorites"
          className="flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <SquareLibrary size={24} />
          <span>Collections</span>
        </Link>
        <Link
          href="/settings"
          className="flex items-center space-x-2 px-2 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <Settings size={24} />
          <span>Settings</span>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
}
