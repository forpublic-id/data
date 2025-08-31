import { getTranslations } from 'next-intl/server';
import { Hero } from '@/components/sections/Hero';
import { DataSources } from '@/components/sections/DataSources';
import { APIOverview } from '@/components/sections/APIOverview';
import { Statistics } from '@/components/sections/Statistics';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations('home');

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <Hero />

      {/* Statistics Overview */}
      <Statistics />

      {/* Data Sources */}
      <DataSources />

      {/* API Overview */}
      <APIOverview />
    </div>
  );
}