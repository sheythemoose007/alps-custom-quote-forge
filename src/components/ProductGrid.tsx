
import React from 'react';
import { useQuote } from '../context/QuoteContext';
import ProductCarousel from './ProductCarousel';

const ProductGrid = () => {
  const { products, selectProduct } = useQuote();
  const { liftKits, wheels, tires } = products;

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-alpine-blue">
        Your Custom Build Foundation: Lift, Wheels & Tires
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-center text-alpine-green bg-alpine-cream rounded-t-lg py-2">
            Budget Friendly
          </h3>
          
          <div className="grid grid-rows-3 gap-4 flex-grow">
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Lift Kits</h4>
              <ProductCarousel 
                products={liftKits}
                tier="budget-friendly"
                onSelect={selectProduct}
              />
            </div>
            
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Wheels</h4>
              <ProductCarousel 
                products={wheels}
                tier="budget-friendly"
                onSelect={selectProduct}
              />
            </div>
            
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Tires</h4>
              <ProductCarousel 
                products={tires}
                tier="budget-friendly"
                onSelect={selectProduct}
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-center text-alpine-blue bg-alpine-lightgray rounded-t-lg py-2">
            Best Value
          </h3>
          
          <div className="grid grid-rows-3 gap-4 flex-grow">
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Lift Kits</h4>
              <ProductCarousel 
                products={liftKits}
                tier="best-value"
                onSelect={selectProduct}
              />
            </div>
            
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Wheels</h4>
              <ProductCarousel 
                products={wheels}
                tier="best-value"
                onSelect={selectProduct}
              />
            </div>
            
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Tires</h4>
              <ProductCarousel 
                products={tires}
                tier="best-value"
                onSelect={selectProduct}
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-4 text-center text-white bg-alpine-gray rounded-t-lg py-2">
            Premium Performance
          </h3>
          
          <div className="grid grid-rows-3 gap-4 flex-grow">
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Lift Kits</h4>
              <ProductCarousel 
                products={liftKits}
                tier="premium"
                onSelect={selectProduct}
              />
            </div>
            
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Wheels</h4>
              <ProductCarousel 
                products={wheels}
                tier="premium"
                onSelect={selectProduct}
              />
            </div>
            
            <div className="h-64">
              <h4 className="text-sm uppercase tracking-wider mb-2">Tires</h4>
              <ProductCarousel 
                products={tires}
                tier="premium"
                onSelect={selectProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
