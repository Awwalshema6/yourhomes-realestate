'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Trending, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-dark to-primary flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-premium relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">
              🏠 Nigeria's #1 Real Estate Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Find Your <span className="gradient-text">Dream Home</span> in Nigeria
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Buy, Rent, Invest, and List Properties with Confidence. Verified Properties. Trusted Agents.
            Secure Transactions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/rent" className="btn-secondary flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Rent Property
            </Link>
            <Link href="/buy" className="btn-accent flex items-center justify-center gap-2">
              <Trending className="w-5 h-5" />
              Buy Property
            </Link>
            <Link href="/invest" className="btn-outline text-white border-white hover:bg-white hover:text-primary flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Invest With Us
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto pt-12 border-t border-gray-700"
          >
            {[
              { number: '50K+', label: 'Properties' },
              { number: '100K+', label: 'Users' },
              { number: '500+', label: 'Agents' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
