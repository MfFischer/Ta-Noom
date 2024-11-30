export interface Location {
  id: string;
  country: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

export interface LocationContextType {
  currentLocation: Location | null;
  setCurrentLocation: (location: Location) => void;
}