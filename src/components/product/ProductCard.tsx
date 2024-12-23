import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatPrice } from '@/lib/utils';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card variant="hover" className="h-full">
        <CardContent className="p-0">
          <div className="aspect-square relative overflow-hidden rounded-t-lg">
            <img
              src={product.images[0]}
              alt={product.title}
              className="object-cover w-full h-full"
            />
            <Badge
              className="absolute top-2 right-2"
              variant={product.condition === 'new' ? 'success' : 'default'}
            >
              {product.condition}
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 line-clamp-1">
              {product.title}
            </h3>
            <p className="text-text-muted text-sm mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-primary text-xl font-bold">
              {formatPrice(product.price)}
            </p>
          </div>
        </CardContent>
        <CardFooter className="border-t border-primary/20">
          <div className="flex items-center space-x-2">
            <img
              src={product.seller.avatar}
              alt={product.seller.name}
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-text-muted">{product.seller.name}</span>
            <div className="flex items-center ml-auto">
              <Star className="w-4 h-4 text-primary fill-current" />
              <span className="text-sm ml-1">{product.seller.rating}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};