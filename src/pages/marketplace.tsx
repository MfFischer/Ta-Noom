import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, SortAsc, MapPin } from 'lucide-react';
import { PageTransition } from '@/components/transitions/page-transition';
import { LocationSelector } from '@/components/location/location-selector';
import { useTranslation } from 'react-i18next';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export const MarketplacePage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('marketplace.categories.all') },
    { id: 'vegetables', name: t('marketplace.categories.vegetables') },
    { id: 'fruits', name: t('marketplace.categories.fruits') },
    { id: 'herbs', name: t('marketplace.categories.herbs') },
    { id: 'seeds', name: t('marketplace.categories.seeds') },
  ];

  const products = [
    {
      id: 1,
      name: t('marketplace.products.organicTomatoes'),
      price: '$4.99/lb',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'vegetables',
      location: '2.3 miles away',
      grower: "Sarah's Urban Farm",
      organic: true,
    },
    {
      id: 2,
      name: t('marketplace.products.freshHerbs'),
      price: '$3.99/bunch',
      image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'herbs',
      location: '1.5 miles away',
      grower: 'Green Thumb Gardens',
      organic: true,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-radial from-earth-50 via-moss-50 to-earth-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-bold text-earth-900"
            >
              {t('marketplace.title')}
            </motion.h1>
            <LocationSelector />
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-moss-500 text-white'
                    : 'bg-white text-earth-700 hover:bg-moss-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.organic && (
                    <div className="absolute top-4 right-4 bg-moss-500 text-white px-3 py-1 rounded-full text-sm">
                      {t('marketplace.organic')}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-moss-600 font-medium mb-4">{product.price}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{product.location}</span>
                  </div>
                  <p className="text-sm text-gray-600">{t('marketplace.grower')}: {product.grower}</p>
                  <button className="mt-4 w-full bg-earth-500 text-white py-2 rounded-lg hover:bg-earth-600 transition-colors">
                    {t('marketplace.contactGrower')}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};