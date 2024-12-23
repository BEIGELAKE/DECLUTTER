import { create } from 'zustand';
import { Product } from '@/types';

interface ProductStore {
  products: Product[];
  filteredProducts: Product[];
  searchQuery: string;
  selectedCategory: string | null;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string | null) => void;
  filterProducts: () => void;
}

// Sample initial data
const initialProducts: Product[] = [
  {
    id: '1',
    title: 'Vintage Leather Jacket',
    description: 'Classic brown leather jacket in excellent condition',
    price: 129.99,
    category: 'Clothing',
    condition: 'good',
    images: ['https://images.unsplash.com/photo-1551028719-00167b16eac5'],
    sellerId: 'seller1',
    seller: {
      id: 'seller1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'seller',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      rating: 4.5,
      joinedDate: new Date('2024-01-15'),
    },
    status: 'approved',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01'),
  },
  {
    id: '2',
    title: 'MacBook Pro 2021',
    description: 'M1 Pro, 16GB RAM, 512GB SSD, Like new condition',
    price: 1499.99,
    category: 'Electronics',
    condition: 'like-new',
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8'],
    sellerId: 'seller2',
    seller: {
      id: 'seller2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'seller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 4.8,
      joinedDate: new Date('2024-02-01'),
    },
    status: 'approved',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },
  {
    id: '3',
    title: 'iPhone 13 Pro Max',
    description: '13 Pro Max, 16GB RAM, 512GB SSD, Like new condition',
    price: 969.99,
    category: 'Electronics',
    condition: 'like-new',
    images: ['./images/iphone.jpeg'],
    sellerId: 'seller3',
    seller: {
      id: 'seller3',
      name: 'Jane Mary',
      email: 'maryjane@example.com',
      role: 'seller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 4.8,
      joinedDate: new Date('2024-02-01'),
    },
    status: 'approved',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },
  {
    id: '4',
    title: 'AirPod Max',
    description:
      'Airpod Max, Bass Booster, Noise Cancellation, L + R Stereo, Like new condition',
    price: 499.99,
    category: 'Electronics',
    condition: 'like-new',
    images: ['./images/airpod.jpeg'],
    sellerId: 'seller4',
    seller: {
      id: 'seller4',
      name: 'Luke Shaw',
      email: 'maryjane@example.com',
      role: 'seller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 3.5,
      joinedDate: new Date('2024-02-01'),
    },
    status: 'approved',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },
  {
    id: '5',
    title: 'Luxury Bathub',
    description:
      'Airpod Max, Auto Soaping & Washing, Stainless, Golden Alloy, Like new condition',
    price: 2099.99,
    category: 'Furniture',
    condition: 'like-new',
    images: ['./images/cns6.jpg'],
    sellerId: 'seller5',
    seller: {
      id: 'seller5',
      name: 'Mc Rose',
      email: 'maryjane@example.com',
      role: 'seller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 4.7,
      joinedDate: new Date('2024-02-01'),
    },
    status: 'approved',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },
  {
    id: '6',
    title: 'Xiomi',
    description:
      'M4 Max, 6GB RAM, 256GB HDD, 6.5 Inches, Gorilla Glass, Type C + Wireless Charging, Like new condition',
    price: 1009.99,
    category: 'Eletronics',
    condition: 'like-new',
    images: ['./images/xiomi.jpeg'],
    sellerId: 'seller5',
    seller: {
      id: 'seller5',
      name: 'Marcel Stone',
      email: 'maryjane@example.com',
      role: 'seller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 3.9,
      joinedDate: new Date('2024-02-01'),
    },
    status: 'approved',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },
  {
    id: '7',
    title: 'Gadget Collection',
    description:
      'Airpod Max, 4GB RAM, 32GB HDD, 2.5 Inches, Type C Charging, Like new condition',
    price: 2099.99,
    category: 'Eletronics',
    condition: 'like-new',
    images: ['./images/airpodgad.jpeg'],
    sellerId: 'seller7',
    seller: {
      id: 'seller7',
      name: 'Manuel Spring',
      email: 'maryjane@example.com',
      role: 'seller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 4.2,
      joinedDate: new Date('2024-02-01'),
    },
    status: 'approved',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },
  {
    id: '8',
    title: 'Nokia',
    description:
      'Flip 4 Lite, 4GB RAM, 120GB HDD, 2.5 Inches, Tempered Glass, Type C Charging, Like new condition',
    price: 256.99,
    category: 'Eletronics',
    condition: 'like-new',
    images: ['./images/nokia1.jpeg', './images/nokia2.jpeg'],
    sellerId: 'seller8',
    seller: {
      id: 'seller8',
      name: 'Marcel Stone',
      email: 'maryjane@example.com',
      role: 'seller',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      rating: 5.0,
      joinedDate: new Date('2024-02-01'),
    },
    status: 'approved',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05'),
  },
];

export const useProductStore = create<ProductStore>((set, get) => ({
  products: initialProducts,
  filteredProducts: initialProducts,
  searchQuery: '',
  selectedCategory: null,

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
    get().filterProducts();
  },

  setSelectedCategory: (category: string | null) => {
    set({ selectedCategory: category });
    get().filterProducts();
  },

  filterProducts: () => {
    const { products, searchQuery, selectedCategory } = get();

    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    set({ filteredProducts: filtered });
  },
}));
