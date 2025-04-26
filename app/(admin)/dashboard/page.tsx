import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardStats } from "@/components/admin/dashboard-stats";
import { BookingOverview } from "@/components/admin/booking-overview";
import { RecentBookings } from "@/components/admin/recent-bookings";
import { RevenueChart } from "@/components/admin/revenue-chart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your cab booking system</p>
      </div>

      <DashboardStats />

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-7">
        <Card className="lg:col-span-5">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
            <CardDescription>
              Daily revenue for the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
        
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Booking Overview</CardTitle>
            <CardDescription>
              Distribution of booking types
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BookingOverview />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Bookings</CardTitle>
          <CardDescription>
            Latest bookings across all platforms
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RecentBookings />
        </CardContent>
      </Card>
    </div>
  );
}