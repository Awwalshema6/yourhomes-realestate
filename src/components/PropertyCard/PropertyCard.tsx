'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin, Bed, Bath, Share2 } from 'lucide-react';
import { Property } from '@/types';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <div className="card overflow-hidden">
      {/* Image Container */}
      <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
        <Image
          src={property.images[0] || '/placeholder.png'}
          alt={property.title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="bg-white rounded-full p-2 hover:bg-secondary hover:text-white transition-colors"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
          </button>
          <button className="bg-white rounded-full p-2 hover:bg-secondary hover:text-white transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
          {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
        </div>
      </div>

      {/* Content */}
      <div>
        {/* Price */}
        <div className="mb-3">
          <p className="text-2xl font-bold text-primary dark:text-secondary">
            ₦{property.price.toLocaleString()}
            {property.listingType === 'rent' && <span className="text-sm text-gray-500">/{property.rentalPeriod}</span>}
          </p>
        </div>

        {/* Title */}
        <Link href={`/property/${property.id}`}>
          <h3 className="text-lg font-bold text-primary dark:text-white mb-2 hover:text-secondary cursor-pointer">
            {property.title}
          </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <MapPin className="w-4 h-4" />
          <p className="text-sm">
            {property.city}, {property.state}
          </p>
        </div>

        {/* Features */}
        <div className="flex gap-6 mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <Bed className="w-4 h-4 text-secondary" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4 text-secondary" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
        </div>

        {/* Agent */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-secondary rounded-full" />
            <div>
              <p className="text-sm font-semibold text-primary dark:text-white">{property.agent.name}</p>
              <p className="text-xs text-gray-500">Agent</p>
            </div>
          </div>
          <Link href={`/property/${property.id}`} className="btn-secondary text-sm py-2 px-4">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
