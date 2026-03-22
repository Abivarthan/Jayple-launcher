"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { cn } from "@/lib/utils";
import { Logo } from './Branding';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Discover', href: '/#how-it-works' },
    { name: 'Features', href: '/#features' },
    { name: 'Vendors', href: '/#vendors' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "glass-morphism py-3 shadow-premium" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/#vendors" 
            className="text-sm font-medium text-slate hover:text-primary transition-colors"
          >
            Become a Vendor
          </Link>
          <a 
            href="/apps/jayple-customer.apk" 
            download 
            className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all active:scale-95 shadow-lg"
          >
            Download App
          </a>
        </div>


        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-charcoal"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-mercury" />
            <a 
              href="/apps/jayple-customer.apk" 
              download
              className="bg-charcoal text-white px-6 py-3 rounded-xl text-center font-semibold"
            >
              Download App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-mercury pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="mb-6 block">
            <Logo />
          </Link>
          <p className="text-slate text-sm leading-relaxed mb-6">
            Connecting you with the world’s most talented beauty and wellness professionals. Elevate your self-care routine with Jayple.
          </p>
          <div className="flex space-x-4">
            <Instagram className="text-slate hover:text-charcoal cursor-pointer" size={20} />
            <Twitter className="text-slate hover:text-charcoal cursor-pointer" size={20} />
            <MessageCircle className="text-slate hover:text-charcoal cursor-pointer" size={20} />
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-charcoal mb-6">Product</h4>
          <ul className="space-y-4 text-sm text-slate">
            <li><Link href="/#how-it-works" className="hover:text-primary">Discovery</Link></li>
            <li><Link href="/#how-it-works" className="hover:text-primary">Instant Booking</Link></li>
            <li><Link href="/#features" className="hover:text-primary">Verified Vendors</Link></li>
            <li><Link href="/#features" className="hover:text-primary">Gift Cards</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-charcoal mb-6">Partners</h4>
          <ul className="space-y-4 text-sm text-slate">
            <li><Link href="/#vendors" className="hover:text-primary">Become a Vendor</Link></li>
            <li><Link href="/#vendors" className="hover:text-primary">Merchant Portal</Link></li>
            <li><Link href="/#how-it-works" className="hover:text-primary">Success Stories</Link></li>
            <li><Link href="/#features" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 md:block md:space-y-12">
          <div>
            <h4 className="font-semibold text-charcoal mb-6">Customer Legal</h4>
            <ul className="space-y-4 text-sm text-slate">
              <li><Link href="/customer/privacy-policy" className="hover:text-charcoal">Privacy Policy</Link></li>
              <li><Link href="/customer/terms" className="hover:text-charcoal">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-charcoal mb-6">Vendor Legal</h4>
            <ul className="space-y-4 text-sm text-slate">
              <li><Link href="/vendor/privacy-policy" className="hover:text-charcoal">Privacy Policy</Link></li>
              <li><Link href="/vendor/terms" className="hover:text-charcoal">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-mercury flex flex-col md:flex-row justify-between items-center text-xs text-slate space-y-4 md:space-y-0">
        <p>© 2026 Jayple Technologies. All rights reserved.</p>
        <div className="flex space-x-6">
          <span>Designed with care in London.</span>
        </div>
      </div>
    </footer>
  );
}
