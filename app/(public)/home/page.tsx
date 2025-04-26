import { HeroSection } from '@/components/public/hero-section';
import { FeaturesSection } from '@/components/public/features-section';
import { HowItWorks } from '@/components/public/how-it-works';
import { DownloadApps } from '@/components/public/download-apps';
import { ContactSection } from '@/components/public/contact-section';

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <DownloadApps />
      <ContactSection />
    </div>
  );
}