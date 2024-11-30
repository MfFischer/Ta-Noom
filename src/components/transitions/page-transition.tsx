import React from 'react';
import { motion } from 'framer-motion';
import { Sprout } from 'lucide-react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 1, y: 0 }}
        animate={{ scale: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed inset-0 flex items-center justify-center pointer-events-none"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Sprout className="w-16 h-16 text-moss-600" />
        </motion.div>
      </motion.div>
      {children}
    </motion.div>
  );
};