
import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VehicleConfirmation = () => {
  const { vehicle } = useQuote();

  return (
    <Card className="border-alpine-blue border-2 mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-alpine-blue flex items-center justify-between">
          <span>Your Custom Quote For:</span>
          <span className="text-alpine-green font-bold">{vehicle.year} {vehicle.make} {vehicle.model}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between pt-0">
        <p className="text-sm text-muted-foreground">
          We've pre-selected components based on your initial choices. Feel free to adjust your build below.
        </p>
        <div className="w-24 h-16 bg-gray-100 flex items-center justify-center rounded">
          <img 
            src={vehicle.imageUrl} 
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} 
            className="max-w-full max-h-full object-contain" 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleConfirmation;
