import React from 'react';
import { useQuote } from '../context/QuoteContext';
import { Button } from '@/components/ui/button';
import { Trash2, CreditCard, CircleDollarSign, Paypal } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const MiniCart = () => {
  const { cart, summary, removeProduct } = useQuote();
  const depositAmount = summary.total * 0.25;
  
  // Group cart items by category
  const liftKits = cart.filter(item => item.category === 'lift-kit');
  const wheels = cart.filter(item => item.category === 'wheels');
  const tires = cart.filter(item => item.category === 'tires');
  const addOns = cart.filter(item => item.category === 'add-on');

  return (
    <div className="mini-cart sticky top-6">
      <h3 className="text-xl font-semibold mb-4 text-alpine-blue">Your Quote Summary</h3>
      
      {cart.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          <p>No items selected</p>
          <p className="text-sm mt-2">Select components to build your quote</p>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">Core Components</h4>
            {liftKits.length === 0 && (
              <p className="text-xs text-red-500 mb-2">No lift kit selected</p>
            )}
            {liftKits.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2 text-sm">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => removeProduct(item.id)} 
                    className="text-gray-400 hover:text-red-500"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <span className="truncate">{item.name}</span>
                </div>
                <span className="font-medium">${item.price.toFixed(2)}</span>
              </div>
            ))}
            
            {wheels.length === 0 && (
              <p className="text-xs text-red-500 mb-2">No wheels selected</p>
            )}
            {wheels.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2 text-sm">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => removeProduct(item.id)} 
                    className="text-gray-400 hover:text-red-500"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <span className="truncate">{item.name}</span>
                </div>
                <span className="font-medium">${item.price.toFixed(2)}</span>
              </div>
            ))}
            
            {tires.length === 0 && (
              <p className="text-xs text-red-500 mb-2">No tires selected</p>
            )}
            {tires.map(item => (
              <div key={item.id} className="flex justify-between items-center mb-2 text-sm">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => removeProduct(item.id)} 
                    className="text-gray-400 hover:text-red-500"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <span className="truncate">{item.name}</span>
                </div>
                <span className="font-medium">${item.price.toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          {addOns.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-sm mb-2">Add-Ons</h4>
              {addOns.map(item => (
                <div key={item.id} className="flex justify-between items-center mb-2 text-sm">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => removeProduct(item.id)} 
                      className="text-gray-400 hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <span className="truncate">{item.name}</span>
                  </div>
                  <span className="font-medium">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
          
          <Separator className="my-4" />
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal (Parts)</span>
              <span className="font-medium">${summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Labor</span>
              <span className="font-medium">${summary.labor.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shop Supplies</span>
              <span className="font-medium">${summary.fees.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Taxes</span>
              <span className="font-medium">${summary.tax.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-base">
              <span>Estimated Total</span>
              <span className="font-medium">${summary.total.toFixed(2)}</span>
            </div>
            
            <div className="mt-4 p-4 bg-alpine-cream rounded-lg">
              <div className="text-lg font-bold text-alpine-blue mb-1">Initial Deposit Required:</div>
              <div className="text-2xl font-bold text-alpine-green">${depositAmount.toFixed(2)}</div>
              <p className="text-xs text-gray-600 mt-1">25% of total build cost</p>
              
              <div className="mt-4 space-y-2">
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Pay Deposit with Card
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <CircleDollarSign className="h-4 w-4" />
                  Pay Deposit with ACH
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                  <Paypal className="h-4 w-4" />
                  Pay Deposit with PayPal
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-6 space-y-2">
            <Button className="w-full bg-alpine-orange hover:bg-alpine-orange/90 text-white">
              Submit Quote for Review
            </Button>
            <Button variant="outline" className="w-full">
              Save Quote
            </Button>
          </div>
          
          <div className="mt-4">
            <p className="text-xs text-muted-foreground">
              * Estimated labor based on standard installation times. Final costs confirmed upon vehicle inspection.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;
