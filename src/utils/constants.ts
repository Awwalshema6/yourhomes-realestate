// Nigeria States
export const NIGERIAN_STATES = [
  'Lagos',
  'Abuja',
  'Ibadan',
  'Port Harcourt',
  'Enugu',
  'Kano',
  'Katsina',
  'Kaduna',
  'Ogun',
  'Osun',
  'Oyo',
  'Ondo',
  'Ekiti',
  'Edo',
  'Delta',
  'Rivers',
  'Bayelsa',
  'Akwa Ibom',
  'Cross River',
  'Calabar',
  'Abia',
  'Imo',
  'Enugu',
  'Ebonyi',
  'Anambra',
  'Plateau',
  'Taraba',
  'Adamawa',
  'Gombe',
  'Yombe',
  'Borno',
  'Zamfara',
  'Kebbi',
  'Niger',
  'Benue',
  'Kwara',
  'Kogi',
];

// Color Palette
export const COLORS = {
  primary: '#0F172A',    // Deep Navy Blue
  secondary: '#D4AF37',  // Gold
  accent: '#10B981',     // Emerald Green
  white: '#FFFFFF',
  dark: '#1F2937',
  light: '#F3F4F6',
};

// Property Types
export const PROPERTY_TYPES = [
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'duplex', label: 'Duplex' },
  { value: 'bungalow', label: 'Bungalow' },
  { value: 'land', label: 'Land' },
  { value: 'commercial', label: 'Commercial Property' },
];

// Bedroom Options
export const BEDROOM_OPTIONS = [
  { value: 1, label: '1 Bedroom' },
  { value: 2, label: '2 Bedrooms' },
  { value: 3, label: '3 Bedrooms' },
  { value: 4, label: '4 Bedrooms' },
  { value: 5, label: '5+ Bedrooms' },
];

// Investment Types
export const INVESTMENT_TYPES = [
  { value: 'residential', label: 'Residential Investment' },
  { value: 'commercial', label: 'Commercial Investment' },
  { value: 'land_banking', label: 'Land Banking' },
  { value: 'joint_venture', label: 'Joint Ventures' },
];

// Amenities
export const AMENITIES = [
  'Swimming Pool',
  'Gym',
  'Security',
  'Parking',
  'Garden',
  'Balcony',
  'Air Conditioning',
  'Water Supply',
  'Generator',
  'Internet',
  'Furnished',
  'Kitchen',
  'Laundry',
  'Library',
  'Playground',
];

// API Endpoints
export const API_ENDPOINTS = {
  // Properties
  PROPERTIES: '/api/properties',
  PROPERTY_DETAIL: '/api/properties/:id',
  PROPERTY_SEARCH: '/api/properties/search',
  PROPERTY_UPLOAD: '/api/properties/upload',
  PROPERTY_APPROVE: '/api/properties/:id/approve',
  PROPERTY_REJECT: '/api/properties/:id/reject',

  // Users
  USERS: '/api/users',
  USER_PROFILE: '/api/users/profile',
  USER_UPDATE: '/api/users/:id',

  // Agents
  AGENTS: '/api/agents',
  AGENT_LEADS: '/api/agents/:id/leads',

  // Investments
  INVESTMENTS: '/api/investments',
  INVESTMENT_DETAIL: '/api/investments/:id',

  // Leads
  LEADS: '/api/leads',
  LEAD_CREATE: '/api/leads/create',

  // Notifications
  NOTIFICATIONS: '/api/notifications',
  NOTIFICATION_MARK_READ: '/api/notifications/:id/read',

  // Payments
  PAYMENTS: '/api/payments',
  PAYMENT_VERIFY: '/api/payments/verify',

  // Auth
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  LOGOUT: '/api/auth/logout',
};
