import React, { useState } from 'react';
import { useQuote } from '../context/QuoteContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import TierSelector from './TierSelector';

const ProductGrid = () => {
  const { products, selectProduct } = useQuote();
  const { liftKits, wheels, tires } = products;
  const [selectedTier, setSelectedTier] = useState('best-value');

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-alpine-blue">
        Your Custom Build Foundation
      </h2>
      
      <TierSelector selectedTier={selectedTier} onTierSelect={setSelectedTier} />
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Lift Kits</h3>
          <Carousel>
            <CarouselContent>
              {liftKits
                .filter(item => selectedTier === 'all' || item.tier === selectedTier)
                .map(item => (
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
              {wheels
                .filter(item => selectedTier === 'all' || item.tier === selectedTier)
                .map(item => (
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
              {tires
                .filter(item => selectedTier === 'all' || item.tier === selectedTier)
                .map(item => (
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
