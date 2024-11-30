import React from 'react';
import { Calendar, MessageSquare, Users, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageTransition } from '@/components/transitions/page-transition';

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

export const CommunityPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-radial from-earth-50 via-moss-50 to-earth-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-8 text-earth-900"
          >
            Community
          </motion.h1>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
              <div className="bg-moss-500 p-4 text-white">
                <Calendar className="w-8 h-8 mb-2" />
                <h2 className="text-xl font-semibold">Upcoming Events</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-1">Spring Planting Workshop</h3>
                  <p className="text-sm text-gray-600">March 15, 2024 • 10:00 AM</p>
                  <p className="text-sm text-gray-600 mt-1">Learn essential techniques for spring planting</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-1">Community Seed Exchange</h3>
                  <p className="text-sm text-gray-600">March 20, 2024 • 2:00 PM</p>
                  <p className="text-sm text-gray-600 mt-1">Bring your seeds to share and exchange</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
              <div className="bg-earth-500 p-4 text-white">
                <MessageSquare className="w-8 h-8 mb-2" />
                <h2 className="text-xl font-semibold">Discussion Forums</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-1">Organic Growing Tips</h3>
                  <p className="text-sm text-gray-600">23 active discussions</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Heart className="w-4 h-4 mr-1 text-clay-500" />
                    <span>142 members following</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-medium mb-1">Natural Pest Control</h3>
                  <p className="text-sm text-gray-600">15 active discussions</p>
                  <div className="flex items-center mt-2 text-sm text-gray-500">
                    <Heart className="w-4 h-4 mr-1 text-clay-500" />
                    <span>98 members following</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
              <div className="bg-clay-500 p-4 text-white">
                <Users className="w-8 h-8 mb-2" />
                <h2 className="text-xl font-semibold">Local Groups</h2>
              </div>
              <div className="p-6 space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <h3 className="font-medium">Urban Farmers Collective</h3>
                    <Award className="w-4 h-4 ml-2 text-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600">156 members</p>
                  <p className="text-sm text-gray-600 mt-1">Weekly meetups and knowledge sharing</p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <h3 className="font-medium">Rooftop Gardeners Network</h3>
                    <Award className="w-4 h-4 ml-2 text-yellow-500" />
                  </div>
                  <p className="text-sm text-gray-600">89 members</p>
                  <p className="text-sm text-gray-600 mt-1">Specialized in urban container gardening</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};