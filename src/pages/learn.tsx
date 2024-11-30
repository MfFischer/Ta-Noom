import React from 'react';
import { Book, Video, Award, ArrowRight, Star } from 'lucide-react';
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

export const LearnPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-radial from-earth-50 via-moss-50 to-earth-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold mb-8 text-earth-900"
          >
            Learn & Grow
          </motion.h1>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-moss-500 to-moss-600 p-4 text-white">
                <Book className="w-8 h-8 mb-2" />
                <h2 className="text-xl font-semibold">Growing Guides</h2>
              </div>
              <div className="p-6 space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="border-b pb-4 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-1">Urban Farming Fundamentals</h3>
                      <p className="text-sm text-gray-600">Comprehensive guide for beginners</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-moss-500" />
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">(128 reviews)</span>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="border-b pb-4 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-1">Seasonal Planting Calendar</h3>
                      <p className="text-sm text-gray-600">Month-by-month growing guide</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-moss-500" />
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">(95 reviews)</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-earth-500 to-earth-600 p-4 text-white">
                <Video className="w-8 h-8 mb-2" />
                <h2 className="text-xl font-semibold">Video Tutorials</h2>
              </div>
              <div className="p-6 space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="border-b pb-4 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-1">Composting Masterclass</h3>
                      <p className="text-sm text-gray-600">Learn composting from scratch</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-earth-500" />
                  </div>
                  <p className="text-sm text-moss-600 mt-2">20 min video • Beginner friendly</p>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="border-b pb-4 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-1">Natural Pest Control</h3>
                      <p className="text-sm text-gray-600">Organic solutions for common pests</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-earth-500" />
                  </div>
                  <p className="text-sm text-moss-600 mt-2">15 min video • Intermediate</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={item} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-clay-500 to-clay-600 p-4 text-white">
                <Award className="w-8 h-8 mb-2" />
                <h2 className="text-xl font-semibold">Certifications</h2>
              </div>
              <div className="p-6 space-y-4">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="border-b pb-4 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-1">Organic Growing Certificate</h3>
                      <p className="text-sm text-gray-600">Professional certification program</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-clay-500" />
                  </div>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="px-2 py-1 bg-moss-100 text-moss-700 rounded-full text-xs">4 weeks</span>
                    <span className="px-2 py-1 bg-earth-100 text-earth-700 rounded-full text-xs">Self-paced</span>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="border-b pb-4 cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium mb-1">Urban Farming Basics</h3>
                      <p className="text-sm text-gray-600">Foundational certification course</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-clay-500" />
                  </div>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="px-2 py-1 bg-moss-100 text-moss-700 rounded-full text-xs">2 weeks</span>
                    <span className="px-2 py-1 bg-earth-100 text-earth-700 rounded-full text-xs">Beginner</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};