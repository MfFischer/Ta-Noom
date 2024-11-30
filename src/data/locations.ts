import { Location } from '@/types/location';

export const COUNTRIES = [
  { value: 'us', label: 'United States' },
  { value: 'ca', label: 'Canada' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'au', label: 'Australia' },
  { value: 'nz', label: 'New Zealand' },
  { value: 'sg', label: 'Singapore' },
  { value: 'jp', label: 'Japan' },
  { value: 'kr', label: 'South Korea' },
  { value: 'in', label: 'India' },
  { value: 'ae', label: 'United Arab Emirates' }
];

export const CITIES: Record<string, Array<{ value: string, label: string, state: string }>> = {
  us: [
    { value: 'nyc', label: 'New York City', state: 'New York' },
    { value: 'la', label: 'Los Angeles', state: 'California' },
    { value: 'chi', label: 'Chicago', state: 'Illinois' },
    { value: 'hou', label: 'Houston', state: 'Texas' },
    { value: 'phx', label: 'Phoenix', state: 'Arizona' }
  ],
  ca: [
    { value: 'tor', label: 'Toronto', state: 'Ontario' },
    { value: 'van', label: 'Vancouver', state: 'British Columbia' },
    { value: 'mtl', label: 'Montreal', state: 'Quebec' },
    { value: 'cal', label: 'Calgary', state: 'Alberta' },
    { value: 'ott', label: 'Ottawa', state: 'Ontario' }
  ],
  uk: [
    { value: 'lon', label: 'London', state: 'England' },
    { value: 'man', label: 'Manchester', state: 'England' },
    { value: 'bir', label: 'Birmingham', state: 'England' },
    { value: 'gla', label: 'Glasgow', state: 'Scotland' },
    { value: 'liv', label: 'Liverpool', state: 'England' }
  ]
};