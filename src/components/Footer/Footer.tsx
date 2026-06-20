'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-secondary text-xl font-bold mb-4">YOURHOME</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding dream properties across Nigeria.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 hover:text-secondary cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-secondary cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-secondary cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-secondary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-secondary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-secondary">Home</Link></li>
              <li><Link href="/rent" className="hover:text-secondary">Rent</Link></li>
              <li><Link href="/buy" className="hover:text-secondary">Buy</Link></li>
              <li><Link href="/invest" className="hover:text-secondary">Invest</Link></li>
            </ul>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-secondary font-semibold mb-4">Properties</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/rent" className="hover:text-secondary">For Rent</Link></li>
              <li><Link href="/buy" className="hover:text-secondary">For Sale</Link></li>
              <li><Link href="/invest" className="hover:text-secondary">Investments</Link></li>
              <li><Link href="/list-property" className="hover:text-secondary">List Property</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-secondary font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-2">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Lagos, Nigeria</span>
              </li>
              <li className="flex gap-2">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>+234 (0) 700 0000 000</span>
              </li>
              <li className="flex gap-2">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>support@yourhome.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
            <p>&copy; 2026 YOURHOME. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-secondary">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-secondary">Terms & Conditions</Link>
              <Link href="/sitemap" className="hover:text-secondary">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
