"use client";

import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

// Sample data for recent bookings
const recentBookings = [
  {
    id: "B-12345",
    customerName: "John Smith",
    customerAvatar: "/avatars/01.png",
    customerInitials: "JS",
    pickupLocation: "123 Main St, San Francisco",
    dropLocation: "456 Market St, San Francisco",
    date: "2023-08-15",
    time: "14:30",
    status: "Completed",
    amount: "$24.50",
    driver: "Michael Johnson",
    cabType: "Sedan",
  },
  {
    id: "B-12346",
    customerName: "Emily Davis",
    customerAvatar: "/avatars/02.png",
    customerInitials: "ED",
    pickupLocation: "789 Oak Ave, San Francisco",
    dropLocation: "101 Pine St, San Francisco",
    date: "2023-08-15",
    time: "15:45",
    status: "In Progress",
    amount: "$18.75",
    driver: "Sarah Williams",
    cabType: "Mini",
  },
  {
    id: "B-12347",
    customerName: "Robert Brown",
    customerAvatar: "/avatars/03.png",
    customerInitials: "RB",
    pickupLocation: "202 Elm St, San Francisco",
    dropLocation: "303 Cedar Ave, San Francisco",
    date: "2023-08-15",
    time: "16:20",
    status: "Scheduled",
    amount: "$32.00",
    driver: "Pending",
    cabType: "SUV",
  },
  {
    id: "B-12348",
    customerName: "Lisa Johnson",
    customerAvatar: "/avatars/04.png",
    customerInitials: "LJ",
    pickupLocation: "404 Birch St, San Francisco",
    dropLocation: "505 Maple Dr, San Francisco",
    date: "2023-08-15",
    time: "13:15",
    status: "Cancelled",
    amount: "$0.00",
    driver: "N/A",
    cabType: "Sedan",
  },
  {
    id: "B-12349",
    customerName: "David Wilson",
    customerAvatar: "/avatars/05.png",
    customerInitials: "DW",
    pickupLocation: "606 Walnut Ave, San Francisco",
    dropLocation: "707 Cherry Ln, San Francisco",
    date: "2023-08-15",
    time: "17:30",
    status: "Completed",
    amount: "$28.25",
    driver: "James Anderson",
    cabType: "Sedan",
  },
];

export function RecentBookings() {
  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Pickup Location</TableHead>
            <TableHead>Drop Location</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.id}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={booking.customerAvatar} />
                    <AvatarFallback>{booking.customerInitials}</AvatarFallback>
                  </Avatar>
                  <span>{booking.customerName}</span>
                </div>
              </TableCell>
              <TableCell className="max-w-[200px] truncate" title={booking.pickupLocation}>
                {booking.pickupLocation}
              </TableCell>
              <TableCell className="max-w-[200px] truncate" title={booking.dropLocation}>
                {booking.dropLocation}
              </TableCell>
              <TableCell>
                {booking.date} <br />
                <span className="text-xs text-muted-foreground">{booking.time}</span>
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    booking.status === "Completed"
                      ? "success"
                      : booking.status === "In Progress"
                      ? "default"
                      : booking.status === "Scheduled"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {booking.status}
                </Badge>
              </TableCell>
              <TableCell>{booking.amount}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon" title="View Details">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}