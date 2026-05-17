import React from 'react';
import PartnerRegistrationHero from '@/components/PartnerRegistrationHero';
import PartnerBenefits from '@/components/PartnerBenefits';
import PartnerRegistrationForm from '@/components/PartnerRegistrationForm';
import PartnerMarketReality from '@/components/PartnerMarketReality';
import PartnerRegistrationPricing from '@/components/PartnerRegistrationPricing';
import PartnerRegistrationStats from '@/components/PartnerRegistrationStats';
import PartnerRegistrationCTA from '@/components/PartnerRegistrationCTA';

export default function DangKyDoiTacPage() {
  return (
    <main className="min-h-screen bg-white">
      <PartnerRegistrationHero />
      <PartnerBenefits />
      <PartnerMarketReality />
      <PartnerRegistrationForm />
      <PartnerRegistrationPricing />
      <PartnerRegistrationStats />
      <PartnerRegistrationCTA />
    </main>
  );
}
