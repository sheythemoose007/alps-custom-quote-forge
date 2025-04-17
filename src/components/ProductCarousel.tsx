
import React, { useState } from 'react';
import { Product } from '../types';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCarouselProps {
  products: Product[];
  tier: string;
  onSelect: (product: Product) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, tier, onSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredProducts = products.filter(product => product.tier === tier);

  if (filteredProducts.length === 0) {
    return <div className="p-4 text-center text-muted-foreground">No products available in this tier</div>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
  };

  const currentProduct = filteredProducts[currentIndex];
  
  let badgeColor = '';
  switch(tier) {
    case 'budget-friendly':
      badgeColor = 'bg-blue-100 text-blue-800';
      break;
    case 'best-value':
      badgeColor = 'bg-green-100 text-green-800';
      break;
    case 'premium':
      badgeColor = 'bg-purple-100 text-purple-800';
      break;
  }

  return (
    <div className="carousel-container h-full flex flex-col">
      <div className="relative flex-grow">
        <div className={cn(
          "product-card h-full flex flex-col",
          currentProduct.selected ? "selected" : ""
        )}>
          <div className="p-2 h-36 flex items-center justify-center bg-gray-50 relative">
            <span className={`budget-tag absolute top-2 right-2 ${badgeColor}`}>
              {tier === 'budget-friendly' ? 'Budget' : tier === 'best-value' ? 'Value' : 'Premium'}
            </span>
            <img 
              src={currentProduct.image} 
              alt={currentProduct.name} 
              className="max-h-full object-contain" 
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-medium text-sm">{currentProduct.name}</h3>
            <p className="text-xs text-gray-600 mt-1 mb-2">{currentProduct.description}</p>
            <div className="mt-auto flex items-center justify-between">
              <span className="font-semibold">${currentProduct.price.toFixed(2)}</span>
              <Button 
                size="sm" 
                onClick={() => onSelect(currentProduct)}
                variant={currentProduct.selected ? "default" : "outline"}
              >
                {currentProduct.selected ? "Selected" : "Select"}
              </Button>
            </div>
          </div>
        </div>
        
        {filteredProducts.length > 1 && (
          <>
            <button 
              onClick={prevSlide} 
              className="carousel-control carousel-control-prev"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={nextSlide} 
              className="carousel-control carousel-control-next"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
      
      {filteredProducts.length > 1 && (
        <div className="flex justify-center mt-2">
          {filteredProducts.map((_, i) => (
            <span 
              key={i} 
              className={`inline-block w-2 h-2 rounded-full mx-1 ${i === currentIndex ? 'bg-gray-600' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCarousel;
