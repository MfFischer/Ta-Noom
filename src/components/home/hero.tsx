import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative bg-gradient-radial from-earth-50 via-moss-50 to-earth-100">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left"
          >
            <h1 className="text-4xl font-bold tracking-tight text-earth-900 sm:text-5xl md:text-6xl">
              Grow and share
              <span className="block text-moss-600">sustainable food</span>
            </h1>
            <p className="mt-3 text-base text-earth-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Join our community of local growers, share your harvest, and contribute to a sustainable food system. Connect with nearby gardeners and discover fresh, locally grown produce.
            </p>
            <motion.div 
              className="mt-8 sm:flex sm:justify-center lg:justify-start"
              whileHover={{ scale: 1.02 }}
            >
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-moss-500 to-earth-500 hover:from-moss-600 hover:to-earth-600">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:col-span-6 lg:mt-0"
          >
            <div className="aspect-w-5 aspect-h-3 overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Community garden"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};