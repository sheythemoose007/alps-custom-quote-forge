
import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail } from 'lucide-react';

const VehicleConfirmation = () => {
  const { vehicle } = useQuote();

  return (
    <Card className="border-alpine-blue border-2 mb-6">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-alpine-blue flex items-center justify-between">
          <div className="flex flex-col">
            <span>Your Custom Quote For:</span>
            <span className="text-base text-gray-600 mt-1">Michael McAndrew</span>
            <div className="flex flex-col text-sm text-gray-500 gap-1 mt-1">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>michael.mcandrew@email.com</span>
              </div>
            </div>
          </div>
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
