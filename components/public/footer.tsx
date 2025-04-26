import Link from 'next/link';
import { Car, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export function PublicFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">RideWave</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Modern cab booking solution for seamless transportation management.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/partners" className="text-muted-foreground hover:text-primary transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/safety" className="text-muted-foreground hover:text-primary transition-colors">Safety</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
              <li><Link href="/licenses" className="text-muted-foreground hover:text-primary transition-colors">Licenses</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} RideWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}