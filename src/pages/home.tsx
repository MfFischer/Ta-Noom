import React from 'react';
import { Hero } from '@/components/home/hero';
import { MarketplaceGrid } from '@/components/features/marketplace-grid';
import { LocationSelector } from '@/components/location/location-selector';

export const HomePage = () => {
  return (
    <main>
      <Hero />
      <LocationSelector />
      <MarketplaceGrid />
    </main>
  );
};