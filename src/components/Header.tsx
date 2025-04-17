
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Header = () => {
  const handleBackToBuilder = () => {
    toast({
      title: "This would navigate back to the vehicle builder",
      description: "In a real application, this would take you back to the previous page.",
    });
  };

  return (
    <div className="w-full bg-alpine-cream py-6 header-mountains">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Button 
              variant="ghost" 
              className="flex items-center gap-1 text-alpine-green"
              onClick={handleBackToBuilder}
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Vehicle Builder
            </Button>
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-alpine-blue">Central Alps Off-Road</h1>
            <p className="text-sm md:text-base text-alpine-green">Custom Quote Builder</p>
          </div>
          
          <div className="flex gap-4">
            <Button variant="outline" className="hidden md:flex">
              Contact Us
            </Button>
            <Button className="hidden md:flex">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
