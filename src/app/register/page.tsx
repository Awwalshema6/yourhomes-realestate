'use client';

import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="card">
          <h1 className="text-3xl font-bold text-primary dark:text-white mb-6">Register</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Registration coming soon...</p>
          <Link href="/" className="btn-primary block text-center">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
