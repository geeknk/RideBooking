import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, CreditCard, PiggyBank, Shield, MessageSquare, Car, Headphones } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Easy Booking",
      description: "Set pickup and drop locations manually, via GPS, or search"
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Scheduled Rides",
      description: "Book rides in advance for your convenience"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Multiple Payment Options",
      description: "Pay with cash, UPI, or digital wallet"
    },
    {
      icon: <PiggyBank className="h-10 w-10 text-primary" />,
      title: "Transparent Pricing",
      description: "See the complete fare breakdown before booking"
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Safety First",
      description: "Verified drivers and real-time ride tracking"
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "In-app Chat",
      description: "Easy communication with your driver"
    },
    {
      icon: <Car className="h-10 w-10 text-primary" />,
      title: "Multiple Car Options",
      description: "Choose from Mini, Sedan, SUV and more"
    },
    {
      icon: <Headphones className="h-10 w-10 text-primary" />,
      title: "24/7 Support",
      description: "Customer service available round the clock"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features Built for Convenience</h2>
          <p className="text-lg text-muted-foreground">
            Our platform offers a range of features designed to make your transportation experience smooth and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card transition-all duration-200 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}