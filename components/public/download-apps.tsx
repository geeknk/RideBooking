"use client";

import { Button } from "@/components/ui/button";
import { motion } from "@/lib/motion-wrapper";
import { ArrowRight, Apple, Monitor, Smartphone, Car } from "lucide-react";

export function DownloadApps() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Download Our Apps</h2>
          <p className="text-lg text-muted-foreground">
            Get the full experience with our dedicated mobile apps for customers, drivers, and vendors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Customer App */}
          <motion.div 
            className="relative overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
            <div className="p-6 relative z-10">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer App</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Book and track rides</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Multiple payment options</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Rate drivers and trips</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>View ride history</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Apple className="h-4 w-4" />
                  <span>App Store</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.26 19.13v-14.26l11.09 7.13-11.09 7.13z"></path>
                    <path d="M5.26 4.87c-1.74 0-3.26 0.5-3.26 1.8v10.67c0 1.3 1.52 1.8 3.26 1.8s3.26-0.5 3.26-1.8v-10.67c0-1.3-1.52-1.8-3.26-1.8z"></path>
                    <path d="M18.74 19.13c1.74 0 3.26-0.5 3.26-1.8v-10.67c0-1.3-1.52-1.8-3.26-1.8s-3.26 0.5-3.26 1.8v10.67c0 1.3 1.52 1.8 3.26 1.8z"></path>
                  </svg>
                  <span>Play Store</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Driver App */}
          <motion.div 
            className="relative overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
            <div className="p-6 relative z-10">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Driver App</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Receive ride requests</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Navigation assistance</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Earnings tracking</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Daily summary reports</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Apple className="h-4 w-4" />
                  <span>App Store</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.26 19.13v-14.26l11.09 7.13-11.09 7.13z"></path>
                    <path d="M5.26 4.87c-1.74 0-3.26 0.5-3.26 1.8v10.67c0 1.3 1.52 1.8 3.26 1.8s3.26-0.5 3.26-1.8v-10.67c0-1.3-1.52-1.8-3.26-1.8z"></path>
                    <path d="M18.74 19.13c1.74 0 3.26-0.5 3.26-1.8v-10.67c0-1.3-1.52-1.8-3.26-1.8s-3.26 0.5-3.26 1.8v10.67c0 1.3 1.52 1.8 3.26 1.8z"></path>
                  </svg>
                  <span>Play Store</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Vendor App */}
          <motion.div 
            className="relative overflow-hidden rounded-lg border border-border bg-card shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
            <div className="p-6 relative z-10">
              <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <Monitor className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Vendor Web Portal</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Manage fleet of vehicles</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Assign drivers to requests</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>View earnings & reports</span>
                </li>
                <li className="flex items-center text-sm">
                  <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                  <span>Manage business settings</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <span>Web Portal</span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}