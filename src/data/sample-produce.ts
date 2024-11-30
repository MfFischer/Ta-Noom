import { Produce } from '../types/produce';

export const SAMPLE_PRODUCE: Produce[] = [
  {
    id: '1',
    name: 'Organic Tomatoes',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: '$4.99/lb',
    location: 'Urban Farm, 2.3 miles',
    harvestDate: 'Fresh today',
    organic: true,
    category: 'Vegetables',
    description: 'Vine-ripened, locally grown organic tomatoes. Perfect for salads and cooking.',
    grower: {
      id: 'g1',
      name: 'Sarah\'s Urban Farm',
      rating: 4.8
    }
  },
  {
    id: '2',
    name: 'Fresh Lettuce',
    image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: '$2.99/head',
    location: 'Community Garden, 1.5 miles',
    harvestDate: 'Yesterday',
    organic: true,
    category: 'Vegetables',
    description: 'Crisp and fresh hydroponic lettuce. Grown without pesticides.',
    grower: {
      id: 'g2',
      name: 'Community Greens',
      rating: 4.9
    }
  },
  {
    id: '3',
    name: 'Bell Peppers',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    price: '$3.49/lb',
    location: 'Rooftop Garden, 0.8 miles',
    harvestDate: '2 days ago',
    organic: false,
    category: 'Vegetables',
    description: 'Sweet and crunchy bell peppers in various colors.',
    grower: {
      id: 'g3',
      name: 'Rooftop Bounty',
      rating: 4.7
    }
  }
];