import { CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Download the App",
      description: "Get our mobile app on iOS or Android"
    },
    {
      number: "02",
      title: "Create an Account",
      description: "Sign up with your phone number and verify with OTP"
    },
    {
      number: "03",
      title: "Book Your Ride",
      description: "Enter pickup location, destination and choose cab type"
    },
    {
      number: "04",
      title: "Track and Enjoy",
      description: "Track your driver in real-time and enjoy your ride"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Booking a ride with RideWave is simple and straightforward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-background rounded-lg p-6 h-full shadow-sm border border-border relative z-10">
                <div className="text-4xl font-black text-primary/10 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-border z-0 -translate-y-1/2">
                  <CheckCircle className="absolute -right-3 -top-1.5 h-4 w-4 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 relative bg-card border border-border rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose RideWave?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Verified drivers with background checks</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Real-time ride tracking for safety</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>Multiple payment options</span>
                </li>
              </ul>
            </div>
            <div className="h-full">
              <img 
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Driver and passenger" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}