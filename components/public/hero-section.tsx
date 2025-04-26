"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Car, ShieldCheck, Clock, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const benefits = [
    { icon: <Car className="h-5 w-5" />, text: "Professional drivers" },
    { icon: <ShieldCheck className="h-5 w-5" />, text: "Safe and secure" },
    { icon: <Clock className="h-5 w-5" />, text: "On-time pickups" },
    { icon: <DollarSign className="h-5 w-5" />, text: "Transparent pricing" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (benefits.length));
    }, 3000);
    return () => clearInterval(interval);
  }, [benefits.length]);

  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-slate-900">
      <div className="container px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your <span className="text-primary">Reliable</span> Ride <br />
              Just a Tap Away
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Experience seamless transportation with our modern cab booking platform.
              Book, track, and enjoy your rides with ease.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/auth/register">Book a Ride</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/join-driver">Become a Driver</Link>
              </Button>
            </div>

            <div className="pt-6">
              <div className="flex items-center space-x-2 text-sm">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-1 transition-opacity duration-500 ${
                      index === currentIndex ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    {benefit.icon}
                    <span>{benefit.text}</span>
                    {index < benefits.length - 1 && <span className="mx-1">•</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-1">
              <div className="overflow-hidden rounded-lg bg-background shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7791138/pexels-photo-7791138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Cab booking app"
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Book Your Ride</h3>
                    <p className="text-sm text-muted-foreground">
                      Choose from our range of cabs for any occasion
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="block text-xs font-medium">Economy</span>
                    </div>
                    <div className="text-center p-3 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="block text-xs font-medium">Sedan</span>
                    </div>
                    <div className="text-center p-3 rounded-md bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer">
                      <span className="block text-xs font-medium">SUV</span>
                    </div>
                  </div>
                  <Button className="w-full">Search Now</Button>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-lg bg-gradient-to-br from-blue-200 to-blue-300 dark:from-blue-800 dark:to-blue-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
}