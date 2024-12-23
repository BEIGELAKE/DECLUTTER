import React from 'react';
import { Package } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-light border-t border-primary/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Package className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Declutter</span>
            </div>
            <p className="mt-4 text-text-muted">
              Your trusted marketplace for buying and selling pre-loved items.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-text-muted">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">How It Works</a></li>
              <li><a href="#" className="hover:text-primary">Safety Tips</a></li>
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-text-muted">
              <li><a href="#" className="hover:text-primary">Electronics</a></li>
              <li><a href="#" className="hover:text-primary">Furniture</a></li>
              <li><a href="#" className="hover:text-primary">Clothing</a></li>
              <li><a href="#" className="hover:text-primary">Books</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-text-muted">
              <li><a href="#" className="hover:text-primary">Facebook</a></li>
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
              <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-text-muted">
          <p>&copy; {new Date().getFullYear()} Declutter Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;