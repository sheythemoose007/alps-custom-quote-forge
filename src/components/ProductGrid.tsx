
import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductGrid = () => {
  const { products, selectProduct } = useQuote();
  const { liftKits, wheels, tires } = products;

  const ProductSection = ({ title, items }: { title: string; items: any[] }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <Carousel>
        <CarouselContent>
          {items.map(item => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className={`${item.selected ? 'border-2 border-alpine-green' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-base">{item.name}</span>
                    <Badge variant="secondary" className={
                      item.tier === 'budget-friendly' ? 'bg-blue-100 text-blue-800' :
                      item.tier === 'best-value' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }>
                      {item.tier === 'budget-friendly' ? 'Budget' :
                       item.tier === 'best-value' ? 'Value' : 'Premium'}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-bold">${item.price}</span>
                  <Button
                    onClick={() => selectProduct(item)}
                    variant={item.selected ? "default" : "outline"}
                    className={item.selected ? "bg-alpine-green hover:bg-alpine-green/90" : ""}
                  >
                    {item.selected ? "Selected" : "Select"}
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-alpine-blue">
        Your Custom Build Foundation
      </h2>
      
      <div className="space-y-8">
        <ProductSection title="Lift Kits" items={liftKits} />
        <ProductSection title="Wheels" items={wheels} />
        <ProductSection title="Tires" items={tires} />
      </div>
    </div>
  );
};

export default ProductGrid;
