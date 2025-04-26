"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Users,
  UserCircle,
  CarFront,
  Store,
  CreditCard,
  Settings,
  LogOut,
  Map,
} from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  icon: React.ReactNode;
  submenu?: { title: string; href: string }[];
}

export function AdminSidebar() {
  const pathname = usePathname();

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Bookings",
      href: "/bookings",
      icon: <CarFront className="h-5 w-5" />,
      submenu: [
        { title: "All Bookings", href: "/bookings" },
        { title: "Active Rides", href: "/bookings/active" },
        { title: "Scheduled", href: "/bookings/scheduled" },
        { title: "Completed", href: "/bookings/completed" },
        { title: "Cancelled", href: "/bookings/cancelled" },
      ],
    },
    {
      title: "Vendors",
      href: "/vendors",
      icon: <Store className="h-5 w-5" />,
      submenu: [
        { title: "All Vendors", href: "/vendors" },
        { title: "Pending Approval", href: "/vendors/pending" },
        { title: "Active Vendors", href: "/vendors/active" },
      ],
    },
    {
      title: "Drivers",
      href: "/drivers",
      icon: <UserCircle className="h-5 w-5" />,
    },
    {
      title: "Customers",
      href: "/customers",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Vehicles",
      href: "/vehicles",
      icon: <Car className="h-5 w-5" />,
    },
    {
      title: "Payments",
      href: "/payments",
      icon: <CreditCard className="h-5 w-5" />,
      submenu: [
        { title: "Transactions", href: "/payments" },
        { title: "Vendor Payouts", href: "/payments/payouts" },
        { title: "Pricing Rules", href: "/payments/pricing" },
      ],
    },
    {
      title: "Service Areas",
      href: "/service-areas",
      icon: <Map className="h-5 w-5" />,
    },
    {
      title: "Settings",
      href: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="fixed inset-y-0 left-0 z-20 w-72 border-r bg-background">
      <div className="flex h-14 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
          <Car className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">RideWala</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 py-2 h-[calc(100vh-8.5rem)]">
        <nav className="grid gap-1 px-2">
          {sidebarItems.map((item) => (
            <div key={item.href}>
              <Link href={item.href} passHref>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={cn("w-full justify-start", {
                    "bg-secondary": pathname === item.href,
                  })}
                >
                  {item.icon}
                  <span className="ml-2">{item.title}</span>
                </Button>
              </Link>
              {item.submenu && (
                <div className="ml-4 mt-1 grid gap-1">
                  {item.submenu.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href} passHref>
                      <Button
                        variant={pathname === subItem.href ? "secondary" : "ghost"}
                        size="sm"
                        className={cn("w-full justify-start", {
                          "bg-secondary": pathname === subItem.href,
                        })}
                      >
                        <span>{subItem.title}</span>
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>
      <div className="border-t p-4">
        <Button variant="outline" size="sm" className="w-full justify-start">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
}