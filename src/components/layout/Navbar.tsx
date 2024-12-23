import React from 'react';
import { Link } from 'react-router-dom';
import { Package, ShoppingCart, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { SearchInput } from '../ui/SearchInput';
import { useProductStore } from '@/store/useProductStore';

const Navbar = () => {
  const { setSearchQuery } = useProductStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-background-light border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Package className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Declutter</span>
          </Link>

          <div className="flex-1 max-w-xl mx-8">
            <SearchInput 
              placeholder="Search items..."
              onChange={handleSearch}
            />
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <ShoppingCart className="w-6 h-6 text-text-muted hover:text-primary" />
            </Link>
            <Link to="/profile">
              <User className="w-6 h-6 text-text-muted hover:text-primary" />
            </Link>
            <Button variant="primary" size="sm">
              Sell Item
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;