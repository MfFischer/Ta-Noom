import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import Select from 'react-select';
import { useLocation } from '@/contexts/LocationContext';
import { COUNTRIES, CITIES } from '@/data/locations';
import { motion } from 'framer-motion';

export const LocationSelector = () => {
  const { currentLocation, setCurrentLocation } = useLocation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [cities, setCities] = useState<Array<{ value: string, label: string, state: string }>>([]);

  useEffect(() => {
    if (selectedCountry && CITIES[selectedCountry]) {
      setCities(CITIES[selectedCountry]);
    } else {
      setCities([]);
    }
  }, [selectedCountry]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-4 rounded-lg shadow-sm"
    >
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-moss-600" />
          <Select
            className="w-48"
            options={COUNTRIES}
            placeholder="Select country"
            onChange={(option) => {
              if (option) {
                setSelectedCountry(option.value);
                setCurrentLocation(null);
              }
            }}
          />
        </div>
        
        {selectedCountry && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Select
              className="w-48"
              options={cities}
              placeholder="Select city"
              onChange={(option) => {
                if (option) {
                  const city = cities.find(c => c.value === option.value);
                  if (city) {
                    setCurrentLocation({
                      id: `${selectedCountry}-${option.value}`,
                      country: COUNTRIES.find(c => c.value === selectedCountry)?.label || '',
                      city: city.label,
                      state: city.state,
                      latitude: 0, // Would be populated with real coordinates
                      longitude: 0
                    });
                  }
                }
              }}
            />
          </motion.div>
        )}
      </div>
      
      {currentLocation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-moss-600"
        >
          Currently showing results for {currentLocation.city}, {currentLocation.state}, {currentLocation.country}
        </motion.div>
      )}
    </motion.div>
  );
};