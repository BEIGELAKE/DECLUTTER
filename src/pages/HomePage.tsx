import React from 'react';
import { ProductGrid } from '@/components/product/ProductGrid';
import { CategoryFilter } from '@/components/product/CategoryFilter';
import { useProductStore } from '@/store/useProductStore';

const HomePage: React.FC = () => {
  const { filteredProducts } = useProductStore();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Find Your Next Treasure</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          Browse through our curated collection of pre-loved items and discover amazing deals
          from trusted sellers in your community.
        </p>
      </div>

      <CategoryFilter />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-text-muted">No items found matching your criteria</p>
        </div>
      ) : (
        <ProductGrid />
      )}
    </div>
  );
}

export default HomePage;