"use client";

import { useState, useEffect } from "react";
import { Bell, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";

export function AdminHeader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="hidden md:flex md:flex-1">
        <form className="relative flex-1 md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 md:w-[300px] lg:w-[300px]"
          />
        </form>
      </div>

      <div className="flex flex-1 items-center justify-between md:justify-end gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="relative h-8 w-8"
          asChild
        >
          <div>
            <Bell className="h-4 w-4" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />
            <span className="sr-only">Notifications</span>
          </div>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="relative h-8 w-8"
          asChild
        >
          <div>
            <MessageSquare className="h-4 w-4" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />
            <span className="sr-only">Messages</span>
          </div>
        </Button>

        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative h-8 w-8 rounded-full"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Admin" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}