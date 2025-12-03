import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import WhyUs from '@/components/WhyUs';
import CasesSection from '@/components/CasesSection';
import IndustriesSection from '@/components/IndustriesSection';
import TeamSection from '@/components/TeamSection';
import ContactCTA from '@/components/ContactCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <CasesSection />
      <IndustriesSection />
      <TeamSection />
      <ContactCTA />
    </main>
  );
}
