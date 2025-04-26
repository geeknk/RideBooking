"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Car, Users, UserCheck, DollarSign } from "lucide-react";

export function DashboardStats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$14,325",
      description: "↗ 12% from last month",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
      trend: "up",
    },
    {
      title: "Active Rides",
      value: "34",
      description: "↗ 8% from last month",
      icon: <Car className="h-4 w-4 text-muted-foreground" />,
      trend: "up",
    },
    {
      title: "New Customers",
      value: "235",
      description: "↘ 5% from last month",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      trend: "down",
    },
    {
      title: "Active Drivers",
      value: "89",
      description: "↗ 18% from last month",
      icon: <UserCheck className="h-4 w-4 text-muted-foreground" />,
      trend: "up",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <Card key={i}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {stat.title}
            </CardTitle>
            <div className="h-4 w-4 text-muted-foreground">{stat.icon}</div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground flex items-center pt-1">
              {stat.trend === "up" ? (
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
              )}
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}