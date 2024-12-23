import React from 'react';
import { useProductStore } from '@/store/useProductStore';
import { Button } from '@/components/ui/Button';

const categories = [
  'All',
  'Electronics',
  'Clothing',
  'Furniture',
  'Books',
  'Sports',
  'Home & Garden',
];

export const CategoryFilter: React.FC = () => {
  const { selectedCategory, setSelectedCategory } = useProductStore();

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'primary' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory(category === 'All' ? null : category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};