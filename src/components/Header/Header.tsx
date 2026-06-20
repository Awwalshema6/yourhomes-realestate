'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Home, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Rent', href: '/rent' },
    { label: 'Buy', href: '/buy' },
    { label: 'Invest', href: '/invest' },
    { label: 'List Property', href: '/list-property' },
    { label: 'Agents', href: '/agents' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-primary shadow-md">
      <div className="container-premium flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Home className="w-8 h-8 text-secondary" />
          <span className="text-xl font-bold text-primary dark:text-secondary">YOURHOME</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-primary dark:text-white hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-dark hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Auth Buttons */}
          <div className="hidden sm:flex gap-2">
            <Link href="/login" className="btn-outline">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="lg:hidden bg-white dark:bg-primary border-t border-gray-200">
          <div className="container-premium py-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary dark:text-white hover:text-secondary py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4 border-t">
              <Link href="/login" className="btn-outline flex-1 text-center">
                Login
              </Link>
              <Link href="/register" className="btn-primary flex-1 text-center">
                Register
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
