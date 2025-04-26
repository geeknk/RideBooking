"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

export function RevenueChart() {
  // Sample data for the last 30 days
  const data = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (30 - i - 1));
    
    // Generate some random data with an upward trend
    const baseValue = 200 + i * 5;
    const revenue = baseValue + Math.random() * 100;
    
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      revenue: Math.round(revenue),
    };
  });

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))" 
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: 'hsl(var(--border))' }}
            tickFormatter={(value) => value.split(' ')[1]} // Only show the day number
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fontSize: 12 }}
            tickLine={false}
            axisLine={{ stroke: 'hsl(var(--border))' }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
            contentStyle={{ 
              borderRadius: '8px', 
              border: '1px solid hsl(var(--border))',
              backgroundColor: 'hsl(var(--background))'
            }} 
            formatter={(value: number) => [`$${value}`, 'Revenue']}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{ r: 2, stroke: 'hsl(var(--chart-1))', fill: 'hsl(var(--chart-1))' }}
            activeDot={{ r: 6, stroke: 'hsl(var(--chart-1))', fill: 'hsl(var(--background))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}