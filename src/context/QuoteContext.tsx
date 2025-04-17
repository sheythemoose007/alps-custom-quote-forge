
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PricingSummary, Vehicle } from '../types';
import { liftKits, wheels, tires, addOns, vehicle as mockVehicle } from '../data/mockData';

interface QuoteContextType {
  vehicle: Vehicle;
  products: {
    liftKits: Product[];
    wheels: Product[];
    tires: Product[];
    addOns: Product[];
  };
  cart: CartItem[];
  summary: PricingSummary;
  selectProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

const LABOR_RATE = 125; // $125/hour
const SHOP_SUPPLIES_RATE = 0.08; // 8% of parts
const TAX_RATE = 0.0825; // 8.25% tax rate

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState({
    liftKits,
    wheels,
    tires,
    addOns,
  });
  
  const [cart, setCart] = useState<CartItem[]>([]);
  const [vehicle, setVehicle] = useState<Vehicle>(mockVehicle);
  const [summary, setSummary] = useState<PricingSummary>({
    subtotal: 0,
    labor: 0,
    fees: 0,
    tax: 0,
    total: 0
  });

  // Initialize cart with pre-selected products
  useEffect(() => {
    const initialCart: CartItem[] = [];
    
    // Add pre-selected lift kit
    const selectedLiftKit = products.liftKits.find(item => item.selected);
    if (selectedLiftKit) {
      initialCart.push({ ...selectedLiftKit, quantity: 1 });
    }
    
    // Add pre-selected wheels
    const selectedWheels = products.wheels.find(item => item.selected);
    if (selectedWheels) {
      initialCart.push({ ...selectedWheels, quantity: 1 });
    }
    
    // Add pre-selected tires
    const selectedTires = products.tires.find(item => item.selected);
    if (selectedTires) {
      initialCart.push({ ...selectedTires, quantity: 1 });
    }
    
    // Add pre-selected add-ons
    const selectedAddOns = products.addOns.filter(item => item.selected);
    selectedAddOns.forEach(addOn => {
      initialCart.push({ ...addOn, quantity: 1 });
    });
    
    setCart(initialCart);
  }, []);

  // Update pricing summary when cart changes
  useEffect(() => {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Estimate labor hours based on selections (simplified)
    let laborHours = 0;
    
    // Check for lift kit
    const hasLiftKit = cart.some(item => item.category === 'lift-kit');
    if (hasLiftKit) {
      laborHours += 6; // Base hours for lift kit
      
      // Check tire size for additional labor
      const tireItem = cart.find(item => item.category === 'tires');
      if (tireItem && tireItem.name.includes('35"')) {
        laborHours += 1; // Extra labor for larger tires
      }
    }
    
    // Check for wheels/tires
    if (cart.some(item => item.category === 'wheels' || item.category === 'tires')) {
      laborHours += hasLiftKit ? 1 : 2; // Less if already doing lift
    }
    
    // Check for bumpers
    if (cart.some(item => item.subCategory === 'bumpers')) {
      laborHours += 2;
    }
    
    // Add 1 hour for each remaining add-on category
    const addOnCategories = new Set(
      cart
        .filter(item => item.category === 'add-on' && item.subCategory !== 'bumpers')
        .map(item => item.subCategory)
    );
    laborHours += addOnCategories.size;
    
    const labor = laborHours * LABOR_RATE;
    const fees = subtotal * SHOP_SUPPLIES_RATE;
    const tax = subtotal * TAX_RATE;
    const total = subtotal + labor + fees + tax;
    
    setSummary({
      subtotal,
      labor,
      fees,
      tax,
      total
    });
  }, [cart]);

  const selectProduct = (product: Product) => {
    // Handle core components (lift kit, wheels, tires) - only one selection per category
    if (product.category === 'lift-kit' || product.category === 'wheels' || product.category === 'tires') {
      // Remove any existing product of the same category from cart
      const updatedCart = cart.filter(item => item.category !== product.category);
      
      // Add the new selection
      setCart([...updatedCart, { ...product, quantity: 1 }]);
      
      // Update the products state to reflect the selection
      const categoryKey = `${product.category}s` as keyof typeof products;
      setProducts(prev => ({
        ...prev,
        [categoryKey]: prev[categoryKey].map(item => 
          item.id === product.id 
            ? { ...item, selected: true } 
            : { ...item, selected: false }
        )
      }));
    } 
    // Handle add-ons - multiple can be selected
    else if (product.category === 'add-on') {
      // Check if product is already in cart
      const existingItemIndex = cart.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // If it exists, remove it (toggle off)
        const updatedCart = [...cart];
        updatedCart.splice(existingItemIndex, 1);
        setCart(updatedCart);
        
        // Update products state
        setProducts(prev => ({
          ...prev,
          addOns: prev.addOns.map(item => 
            item.id === product.id ? { ...item, selected: false } : item
          )
        }));
      } else {
        // If it doesn't exist, add it
        setCart([...cart, { ...product, quantity: 1 }]);
        
        // Update products state
        setProducts(prev => ({
          ...prev,
          addOns: prev.addOns.map(item => 
            item.id === product.id ? { ...item, selected: true } : item
          )
        }));
      }
    }
  };

  const removeProduct = (productId: string) => {
    // Find the product to remove
    const productToRemove = cart.find(item => item.id === productId);
    
    if (!productToRemove) return;
    
    // Remove from cart
    setCart(cart.filter(item => item.id !== productId));
    
    // Update products state
    if (productToRemove.category === 'lift-kit') {
      setProducts(prev => ({
        ...prev,
        liftKits: prev.liftKits.map(item => 
          item.id === productId ? { ...item, selected: false } : item
        )
      }));
    } else if (productToRemove.category === 'wheels') {
      setProducts(prev => ({
        ...prev,
        wheels: prev.wheels.map(item => 
          item.id === productId ? { ...item, selected: false } : item
        )
      }));
    } else if (productToRemove.category === 'tires') {
      setProducts(prev => ({
        ...prev,
        tires: prev.tires.map(item => 
          item.id === productId ? { ...item, selected: false } : item
        )
      }));
    } else if (productToRemove.category === 'add-on') {
      setProducts(prev => ({
        ...prev,
        addOns: prev.addOns.map(item => 
          item.id === productId ? { ...item, selected: false } : item
        )
      }));
    }
  };

  return (
    <QuoteContext.Provider value={{
      vehicle,
      products,
      cart,
      summary,
      selectProduct,
      removeProduct
    }}>
      {children}
    </QuoteContext.Provider>
  );
};
