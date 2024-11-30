export interface Produce {
  id: string;
  name: string;
  image: string;
  price: string;
  location: string;
  harvestDate: string;
  organic: boolean;
  description?: string;
  category: string;
  grower: {
    id: string;
    name: string;
    rating: number;
  };
}