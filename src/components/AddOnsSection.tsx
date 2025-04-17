
import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';

const AddOnsSection = () => {
  const { products, selectProduct } = useQuote();
  const { addOns } = products;
  
  const categories = [
    { id: 'steps-and-boards', name: 'Steps & Boards' },
    { id: 'bumpers', name: 'Bumpers' },
    { id: 'bed-covers', name: 'Bed Covers' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'suspension-repair', name: 'Suspension Repair' },
    { id: 'audio', name: 'Audio' },
  ];
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-alpine-blue">Complete Your Build: Add-Ons & Accessories</h2>
      
      <Tabs defaultValue="steps-and-boards" className="w-full">
        <TabsList className="mb-6 grid grid-cols-3 md:grid-cols-6 h-auto">
          {categories.map(category => (
            <TabsTrigger 
              key={category.id} 
              value={category.id}
              className="py-3 text-sm"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map(category => (
          <TabsContent key={category.id} value={category.id} className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns
                .filter(addon => addon.subCategory === category.id)
                .map(addon => (
                  <Card 
                    key={addon.id} 
                    className={`overflow-hidden ${addon.selected ? 'border-2 border-alpine-blue' : ''}`}
                  >
                    <div className="h-48 bg-gray-100 flex items-center justify-center relative">
                      <img 
                        src={addon.image} 
                        alt={addon.name} 
                        className="max-h-full object-contain" 
                      />
                      {addon.tier === 'budget-friendly' && (
                        <Badge variant="secondary" className="absolute top-2 right-2 bg-blue-100 text-blue-800 hover:bg-blue-200">Budget</Badge>
                      )}
                      {addon.tier === 'best-value' && (
                        <Badge variant="secondary" className="absolute top-2 right-2 bg-green-100 text-green-800 hover:bg-green-200">Value</Badge>
                      )}
                      {addon.tier === 'premium' && (
                        <Badge variant="secondary" className="absolute top-2 right-2 bg-purple-100 text-purple-800 hover:bg-purple-200">Premium</Badge>
                      )}
                    </div>
                    <CardHeader className="py-3 px-4">
                      <CardTitle className="text-base font-medium">{addon.name}</CardTitle>
                      <CardDescription className="text-xs">{addon.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="py-3 px-4 flex items-center justify-between">
                      <span className="font-bold">${addon.price.toFixed(2)}</span>
                      <Button 
                        onClick={() => selectProduct(addon)}
                        variant={addon.selected ? "default" : "outline"}
                        size="sm"
                        className={addon.selected ? "bg-alpine-green hover:bg-alpine-green/90" : ""}
                      >
                        {addon.selected ? "Selected" : "Add to Quote"}
                        {!addon.selected && <ChevronRight className="ml-1 h-4 w-4" />}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AddOnsSection;
