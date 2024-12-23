export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  avatar: string;
  rating: number;
  joinedDate: Date;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'poor';
  images: string[];
  sellerId: string;
  seller: User;
  status: 'pending' | 'approved' | 'rejected' | 'sold';
  createdAt: Date;
  updatedAt: Date;
}