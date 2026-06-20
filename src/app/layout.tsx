'use client';

import React from 'react';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YOURHOME - Modern Premium Real Estate Platform',
  description: 'Buy, Rent, Invest in Properties across Nigeria. Verified Properties. Trusted Agents. Secure Transactions.',
  keywords: 'real estate, properties, rent, buy, invest, Nigeria, Lagos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-primary text-primary dark:text-white transition-colors`}>
        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
