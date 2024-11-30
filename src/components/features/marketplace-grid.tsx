import React from 'react';
import { ProduceCard } from './produce-card';
import { SAMPLE_PRODUCE } from '@/data/sample-produce';

export const MarketplaceGrid = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Fresh & Local Produce</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_PRODUCE.map((produce) => (
            <ProduceCard key={produce.id} {...produce} />
          ))}
        </div>
      </div>
    </section>
  );
};