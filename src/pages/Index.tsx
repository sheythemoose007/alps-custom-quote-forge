
import React from 'react';
import { QuoteProvider } from '../context/QuoteContext';
import Header from '../components/Header';
import VehicleConfirmation from '../components/VehicleConfirmation';
import ProductGrid from '../components/ProductGrid';
import AddOnsSection from '../components/AddOnsSection';
import MiniCart from '../components/MiniCart';
import ShopCredentials from '../components/ShopCredentials';
import ReviewSection from '../components/ReviewSection';
import FinancingSection from '../components/FinancingSection';
import FAQSection from '../components/FAQSection';

const Index = () => {
  return (
    <QuoteProvider>
      <div className="flex flex-col min-h-screen alpine-bg-pattern">
        <Header />
        
        <main className="container mx-auto px-4 py-8 flex-grow">
          <VehicleConfirmation />
          
          <ProductGrid />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1 lg:col-span-2">
              <AddOnsSection />
              <ShopCredentials />
              <ReviewSection />
              <FinancingSection />
              <FAQSection />
            </div>
            
            <div className="col-span-1">
              <MiniCart />
            </div>
          </div>
        </main>
        
        <footer className="bg-alpine-blue text-white py-6 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm">© 2025 Central Alps Off-Road. All rights reserved.</p>
            <p className="text-xs mt-1">Prices and availability subject to change. Labor estimates are approximate.</p>
          </div>
        </footer>
      </div>
    </QuoteProvider>
  );
};

export default Index;
