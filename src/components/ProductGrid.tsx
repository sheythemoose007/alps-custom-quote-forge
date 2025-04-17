
import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

const ProductGrid = () => {
  const { products, selectProduct } = useQuote();
  const { liftKits, wheels, tires } = products;

  const getTierBadge = (price: number, category: string) => {
    let tier;
    switch (category) {
      case 'lift-kit':
        tier = price < 1500 ? 'budget-friendly' : price < 2500 ? 'best-value' : 'premium';
        break;
      case 'wheels':
        tier = price < 200 ? 'budget-friendly' : price < 350 ? 'best-value' : 'premium';
        break;
      case 'tires':
        tier = price < 250 ? 'budget-friendly' : price < 400 ? 'best-value' : 'premium';
        break;
      default:
        tier = 'best-value';
    }
    
    const variants = {
      'budget-friendly': 'bg-blue-100 text-blue-800',
      'best-value': 'bg-green-100 text-green-800',
      'premium': 'bg-purple-100 text-purple-800'
    };
    
    return (
      <span className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${variants[tier]}`}>
        {tier === 'budget-friendly' ? 'Budget' : tier === 'best-value' ? 'Best Value' : 'Premium'}
      </span>
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-alpine-blue">
        Your Custom Build Foundation
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Lift Kits</h3>
          <Carousel>
            <CarouselContent>
              {liftKits.slice(0, 3).map(item => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`relative aspect-square overflow-hidden rounded-lg ${
                      item.selected ? 'ring-2 ring-alpine-green' : ''
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {getTierBadge(item.price, item.category)}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end text-white">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm opacity-90 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">${item.price}</span>
                        <button
                          onClick={() => selectProduct(item)}
                          className={`px-4 py-1 rounded ${
                            item.selected
                              ? 'bg-alpine-green text-white'
                              : 'bg-white text-black'
                          }`}
                        >
                          {item.selected ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Wheels</h3>
          <Carousel>
            <CarouselContent>
              {wheels.slice(0, 7).map(item => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`relative aspect-square overflow-hidden rounded-lg ${
                      item.selected ? 'ring-2 ring-alpine-green' : ''
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {getTierBadge(item.price, item.category)}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end text-white">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm opacity-90 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">${item.price}</span>
                        <button
                          onClick={() => selectProduct(item)}
                          className={`px-4 py-1 rounded ${
                            item.selected
                              ? 'bg-alpine-green text-white'
                              : 'bg-white text-black'
                          }`}
                        >
                          {item.selected ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Tires</h3>
          <Carousel>
            <CarouselContent>
              {tires.slice(0, 5).map(item => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`relative aspect-square overflow-hidden rounded-lg ${
                      item.selected ? 'ring-2 ring-alpine-green' : ''
                    }`}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {getTierBadge(item.price, item.category)}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 flex flex-col justify-end text-white">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm opacity-90 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold">${item.price}</span>
                        <button
                          onClick={() => selectProduct(item)}
                          className={`px-4 py-1 rounded ${
                            item.selected
                              ? 'bg-alpine-green text-white'
                              : 'bg-white text-black'
                          }`}
                        >
                          {item.selected ? 'Selected' : 'Select'}
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
