import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MessageCircle, Shield } from 'lucide-react';
import { useProductStore } from '@/store/useProductStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatPrice, formatDate } from '@/lib/utils';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const { products } = useProductStore();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="aspect-square rounded-md overflow-hidden cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${product.title} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center space-x-4">
              <Badge variant={product.condition === 'new' ? 'success' : 'default'}>
                {product.condition}
              </Badge>
              <span className="text-2xl font-bold text-primary">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>

          <div className="border-t border-primary/20 pt-4">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-text-muted">{product.description}</p>
          </div>

          <div className="border-t border-primary/20 pt-4">
            <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
            <div className="flex items-center space-x-4">
              <img
                src={product.seller.avatar}
                alt={product.seller.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{product.seller.name}</p>
                <div className="flex items-center text-text-muted">
                  <Star className="w-4 h-4 text-primary fill-current" />
                  <span className="ml-1">{product.seller.rating}</span>
                  <span className="mx-2">•</span>
                  <span>Member since {formatDate(product.seller.joinedDate)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button className="flex-1">
              Buy Now
            </Button>
            <Button variant="outline" className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Seller
            </Button>
          </div>

          <div className="bg-background-light p-4 rounded-lg mt-6">
            <div className="flex items-center text-text-muted">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              <span>Buyer Protection - Get full refund if item is not as described</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;