// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  avatar?: string;
  role: 'user' | 'agent' | 'admin';
  verificationStatus: 'pending' | 'verified' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
}

// Property Types
export type PropertyType = 'house' | 'apartment' | 'duplex' | 'bungalow' | 'land' | 'commercial';
export type PropertyStatus = 'available' | 'sold' | 'rented' | 'archived';
export type ListingType = 'sale' | 'rent';

export interface Property {
  id: string;
  title: string;
  description: string;
  type: PropertyType;
  listingType: ListingType;
  price: number;
  rentalPrice?: number;
  rentalPeriod?: 'daily' | 'weekly' | 'monthly' | 'yearly';
  address: string;
  state: string;
  city: string;
  area: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  bedrooms: number;
  bathrooms: number;
  squareFeet?: number;
  amenities: string[];
  images: string[];
  virtualTourUrl?: string;
  owner: User;
  agent: User;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  inspectionStatus: 'pending' | 'scheduled' | 'completed';
  status: PropertyStatus;
  createdAt: Date;
  updatedAt: Date;
}

// Investment Types
export type InvestmentType = 'residential' | 'commercial' | 'land_banking' | 'joint_venture';

export interface Investment {
  id: string;
  type: InvestmentType;
  title: string;
  description: string;
  minimumInvestment: number;
  expectedReturn: number;
  duration: string;
  images: string[];
  properties?: Property[];
  createdAt: Date;
  updatedAt: Date;
}

// Agent Types
export interface Agent extends User {
  agentId: string;
  licenseNumber: string;
  yearsExperience: number;
  properties: Property[];
  rating: number;
  reviews: Review[];
  assignedLeads: Lead[];
}

// Lead Types
export interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interestedIn: PropertyType[];
  budgetMin: number;
  budgetMax: number;
  preferredLocation: string[];
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  assignedAgent?: Agent;
  createdAt: Date;
  updatedAt: Date;
}

// Review Types
export interface Review {
  id: string;
  rating: number;
  comment: string;
  author: User;
  property?: Property;
  agent?: Agent;
  createdAt: Date;
  updatedAt: Date;
}

// Notification Types
export type NotificationType = 'new_lead' | 'property_inquiry' | 'inspection_assignment' | 'property_verification' | 'payment' | 'system';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  recipient: User;
  read: boolean;
  data?: Record<string, any>;
  createdAt: Date;
}

// Payment Types
export interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  paymentMethod: 'paystack' | 'flutterwave';
  reference: string;
  user: User;
  property?: Property;
  createdAt: Date;
  updatedAt: Date;
}
