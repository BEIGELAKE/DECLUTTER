import React from 'react';
import { ProductCard } from './ProductCard';
import { useProductStore } from '@/store/useProductStore';

export const ProductGrid: React.FC = () => {
  const { filteredProducts } = useProductStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};