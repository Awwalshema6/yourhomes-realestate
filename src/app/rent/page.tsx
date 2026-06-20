'use client';

import React from 'react';
import Link from 'next/link';

export default function RentPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container-premium py-16">
        <h1 className="text-4xl font-bold text-primary dark:text-white mb-4">Properties For Rent</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Coming soon...</p>
        <Link href="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
