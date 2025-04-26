"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export function BookingOverview() {
  // Sample data
  const data = [
    { name: "Sedan", value: 42, color: "hsl(var(--chart-1))" },
    { name: "SUV", value: 28, color: "hsl(var(--chart-2))" },
    { name: "Mini", value: 18, color: "hsl(var(--chart-3))" },
    { name: "Premium", value: 8, color: "hsl(var(--chart-4))" },
    { name: "Other", value: 4, color: "hsl(var(--chart-5))" },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value: number) => [`${value}%`, 'Percentage']}
            contentStyle={{ 
              borderRadius: '8px', 
              border: '1px solid hsl(var(--border))',
              backgroundColor: 'hsl(var(--background))'
            }}
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center" 
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}