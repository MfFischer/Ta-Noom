import React from 'react';
import { MapPin, Users, Sprout, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/transitions/page-transition';
import { FeaturedGrower } from '@/components/discover/featured-grower';
import { LocationSelector } from '@/components/location/location-selector';

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

export const DiscoverPage = () => {
  const featuredGrowers = [
    {
      name: "Sarah's Urban Farm",
      image: "https://images.unsplash.com/photo-1595153838240-399a88e6a574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      location: "Brooklyn, NY",
      specialties: ["Organic Vegetables", "Microgreens", "Herbs"]
    },
    {
      name: "Green Thumb Gardens",
      image: "https://images.unsplash.com/photo-1592595896616-c37162298647?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      location: "Portland, OR",
      specialties: ["Heirloom Tomatoes", "Rare Herbs", "Edible Flowers"]
    },
    {
      name: "Rooftop Bounty",
      image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      location: "Chicago, IL",
      specialties: ["Container Gardens", "Urban Farming", "Seasonal Produce"]
    }
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
              Discover Local Growers
            </motion.h1>
            <LocationSelector />
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <MapPin className="w-8 h-8 text-moss-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Nearby Gardens</h2>
              <p className="text-gray-600">Connect with local growers and explore gardens in your neighborhood</p>
            </motion.div>
            
            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <Users className="w-8 h-8 text-moss-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Growing Communities</h2>
              <p className="text-gray-600">Join local gardening groups and participate in community events</p>
            </motion.div>
            
            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
              <Sprout className="w-8 h-8 text-moss-600 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Seasonal Produce</h2>
              <p className="text-gray-600">Discover what's growing in your area this season</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Featured Growers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredGrowers.map((grower, index) => (
                <FeaturedGrower key={index} {...grower} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};