import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import UtilitiesSection from '@/components/UtilitiesSection';

const SkillCards = dynamic(() => import('@/components/SkillCards'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f5f5] pb-12">
      <Hero />
      <CategoryGrid />
      <UtilitiesSection />
    </main>
  );
}
