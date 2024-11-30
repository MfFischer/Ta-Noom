import React from 'react';
import { Leaf, MapPin, Calendar, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Produce } from '@/types/produce';

type ProduceCardProps = Produce;

export const ProduceCard: React.FC<ProduceCardProps> = ({
  name,
  image,
  price,
  location,
  harvestDate,
  organic,
  grower,
  description
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {organic && (
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
            <Leaf className="w-3 h-3 mr-1" />
            Organic
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-green-600 font-medium mt-1">{price}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            Harvest: {harvestDate}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
            {grower.name} • {grower.rating}
          </div>
        </div>
        <div className="mt-4">
          <Button variant="primary" className="w-full">
            Contact Grower
          </Button>
        </div>
      </div>
    </div>
  );
};