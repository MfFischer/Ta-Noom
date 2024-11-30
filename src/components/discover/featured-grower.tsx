import React from 'react';
import { Star, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeaturedGrowerProps {
  name: string;
  image: string;
  rating: number;
  location: string;
  specialties: string[];
}

export const FeaturedGrower: React.FC<FeaturedGrowerProps> = ({
  name,
  image,
  rating,
  location,
  specialties
}) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-2">
          <Award className="w-5 h-5 text-moss-600" />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-earth-100 text-earth-800 rounded-full text-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};