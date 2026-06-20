'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Lock, Home, BarChart3, Globe } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Properties',
      description: 'Every property undergoes rigorous verification before listing.',
    },
    {
      icon: Lock,
      title: 'Ownership Verification',
      description: 'Confirmed ownership through official documents and inspections.',
    },
    {
      icon: Users,
      title: 'Trusted Agents',
      description: 'Licensed and verified real estate professionals ready to assist.',
    },
    {
      icon: Lock,
      title: 'Secure Transactions',
      description: 'Safe and encrypted payment processing with buyer protection.',
    },
    {
      icon: Home,
      title: 'Property Management',
      description: 'Complete tools to manage your rentals and listings.',
    },
    {
      icon: Globe,
      title: 'Nationwide Coverage',
      description: 'Properties available across all 36 states of Nigeria.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-white dark:bg-dark">
      <div className="container-premium">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
            Why Choose <span className="text-secondary">YOURHOME</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            We're committed to making real estate transactions transparent, secure, and hassle-free.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card hover:shadow-premium hover:border-secondary border border-transparent"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
