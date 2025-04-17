
export type ProductTier = 'budget-friendly' | 'best-value' | 'premium';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tier: ProductTier;
  category: 'lift-kit' | 'wheels' | 'tires' | 'add-on';
  subCategory?: 'steps-and-boards' | 'bumpers' | 'bed-covers' | 'lighting' | 'suspension-repair' | 'audio';
  selected?: boolean;
}

export interface Vehicle {
  year: number;
  make: string;
  model: string;
  imageUrl: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface PricingSummary {
  subtotal: number;
  labor: number;
  fees: number;
  tax: number;
  total: number;
}
