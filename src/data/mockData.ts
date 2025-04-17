
import { Product, Vehicle } from '../types';

export const vehicle: Vehicle = {
  year: 2023,
  make: 'Toyota',
  model: 'Tacoma TRD Pro',
  imageUrl: '/placeholder.svg'
};

export const liftKits: Product[] = [
  {
    id: 'lift-budget-1',
    name: 'AlpineBasic 2" Leveling Kit',
    description: 'Includes front spacers and rear blocks',
    price: 299.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'lift-kit',
    selected: true
  },
  {
    id: 'lift-budget-2',
    name: 'MaxTrac 2.5" Leveling Kit',
    description: 'Front strut spacers and rear blocks',
    price: 349.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'lift-kit'
  },
  {
    id: 'lift-value-1',
    name: 'ReadyLift 3" SST Lift Kit',
    description: 'Includes shocks, springs and hardware',
    price: 799.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'lift-kit'
  },
  {
    id: 'lift-value-2',
    name: 'Rough Country 4" Lift Kit',
    description: 'Complete lift with N3 shocks',
    price: 899.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'lift-kit'
  },
  {
    id: 'lift-premium-1',
    name: 'King 3" Performance Kit',
    description: 'Premium remote reservoir shocks and coilovers',
    price: 2499.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'lift-kit'
  },
  {
    id: 'lift-premium-2',
    name: 'Icon 4.5" Elite Suspension',
    description: 'Full system with billet components and adjustable shocks',
    price: 3299.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'lift-kit'
  }
];

export const wheels: Product[] = [
  {
    id: 'wheels-budget-1',
    name: 'AlpineBasic Alloy 16"',
    description: 'Set of 4 aluminum wheels',
    price: 599.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'wheels'
  },
  {
    id: 'wheels-budget-2',
    name: 'Pro Comp Series 16" Steel',
    description: 'Durable steel construction, set of 4',
    price: 499.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'wheels'
  },
  {
    id: 'wheels-value-1',
    name: 'Method MR305 17"',
    description: 'Set of 4 reinforced alloy wheels',
    price: 999.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'wheels',
    selected: true
  },
  {
    id: 'wheels-value-2',
    name: 'Fuel Vector 17"',
    description: 'Set of 4 with satin black finish',
    price: 1099.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'wheels'
  },
  {
    id: 'wheels-premium-1',
    name: 'KMC XD 18" Forged',
    description: 'Premium forged aluminum, set of 4',
    price: 1899.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'wheels'
  },
  {
    id: 'wheels-premium-2',
    name: 'Method Race 105 Beadlock 17"',
    description: 'True beadlock wheels with replaceable rings, set of 4',
    price: 2299.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'wheels'
  }
];

export const tires: Product[] = [
  {
    id: 'tires-budget-1',
    name: 'AlpineGrip A/T 31"',
    description: 'Set of 4 all-terrain tires',
    price: 699.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'tires'
  },
  {
    id: 'tires-budget-2',
    name: 'Falken Wildpeak A/T3W 31"',
    description: 'All-terrain all-weather, set of 4',
    price: 799.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'tires'
  },
  {
    id: 'tires-value-1',
    name: 'BF Goodrich K02 33"',
    description: 'All-terrain radials, set of 4',
    price: 1199.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'tires'
  },
  {
    id: 'tires-value-2',
    name: 'Toyo Open Country A/T III 33"',
    description: 'All-terrain performance, set of 4',
    price: 1299.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'tires',
    selected: true
  },
  {
    id: 'tires-premium-1',
    name: 'Nitto Ridge Grappler 35"',
    description: 'Hybrid terrain premium tires, set of 4',
    price: 1699.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'tires'
  },
  {
    id: 'tires-premium-2',
    name: 'BF Goodrich Mud-Terrain KM3 35"',
    description: 'Extreme off-road capability, set of 4',
    price: 1899.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'tires'
  }
];

export const addOns: Product[] = [
  // Steps and Boards
  {
    id: 'steps-budget-1',
    name: 'Alpine Nerf Bars',
    description: 'Basic 3" round tube steps',
    price: 299.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'add-on',
    subCategory: 'steps-and-boards'
  },
  {
    id: 'steps-value-1',
    name: 'N-Fab Nerf Steps',
    description: 'Textured black with step pads',
    price: 499.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'add-on',
    subCategory: 'steps-and-boards'
  },
  {
    id: 'steps-premium-1',
    name: 'AMP Research PowerSteps',
    description: 'Electric deployable running boards',
    price: 1399.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'add-on',
    subCategory: 'steps-and-boards',
    selected: true
  },
  
  // Bumpers
  {
    id: 'bumper-budget-1',
    name: 'Basic Steel Front Bumper',
    description: 'Textured black steel construction',
    price: 599.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'add-on',
    subCategory: 'bumpers'
  },
  {
    id: 'bumper-value-1',
    name: 'Alpine Winch-Ready Bumper',
    description: 'With light mounts and D-ring tabs',
    price: 999.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'add-on',
    subCategory: 'bumpers'
  },
  {
    id: 'bumper-premium-1',
    name: 'ARB Summit Front Bumper',
    description: 'Full-width with integrated bull bar and winch mount',
    price: 1899.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'add-on',
    subCategory: 'bumpers'
  },
  
  // Bed Covers
  {
    id: 'bed-budget-1',
    name: 'Soft Roll-Up Tonneau',
    description: 'Weather-resistant vinyl cover',
    price: 299.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'add-on',
    subCategory: 'bed-covers'
  },
  {
    id: 'bed-value-1',
    name: 'Tri-Fold Hard Tonneau',
    description: 'Aluminum panels with vinyl coating',
    price: 699.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'add-on',
    subCategory: 'bed-covers'
  },
  {
    id: 'bed-premium-1',
    name: 'BakFlip MX4 Tonneau',
    description: 'Premium aluminum hard folding cover',
    price: 1099.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'add-on',
    subCategory: 'bed-covers'
  },
  
  // Lighting
  {
    id: 'light-budget-1',
    name: '20" LED Light Bar',
    description: 'Spot/flood combo beam',
    price: 149.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'add-on',
    subCategory: 'lighting'
  },
  {
    id: 'light-value-1',
    name: 'Alpine Rock Light Kit',
    description: '8 RGB rock lights with controller',
    price: 299.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'add-on',
    subCategory: 'lighting'
  },
  {
    id: 'light-premium-1',
    name: 'Baja Designs LP9 Pro',
    description: 'Premium driving/spot lights with harness',
    price: 799.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'add-on',
    subCategory: 'lighting'
  },
  
  // Suspension Repair
  {
    id: 'susp-budget-1',
    name: 'Differential Drop Kit',
    description: 'Reduces CV angle stress',
    price: 79.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'add-on',
    subCategory: 'suspension-repair'
  },
  {
    id: 'susp-value-1',
    name: 'SPC Upper Control Arms',
    description: 'Adjustable ball joint UCAs',
    price: 699.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'add-on',
    subCategory: 'suspension-repair'
  },
  {
    id: 'susp-premium-1',
    name: 'Total Chaos Long Travel Kit',
    description: 'Complete front end system',
    price: 2999.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'add-on',
    subCategory: 'suspension-repair'
  },
  
  // Audio
  {
    id: 'audio-budget-1',
    name: 'Alpine Speaker Upgrade',
    description: 'Front and rear speaker replacement',
    price: 299.99,
    image: '/placeholder.svg',
    tier: 'budget-friendly',
    category: 'add-on',
    subCategory: 'audio'
  },
  {
    id: 'audio-value-1',
    name: 'Head Unit with CarPlay',
    description: '7" touchscreen with Apple CarPlay/Android Auto',
    price: 599.99,
    image: '/placeholder.svg',
    tier: 'best-value',
    category: 'add-on',
    subCategory: 'audio'
  },
  {
    id: 'audio-premium-1',
    name: 'Complete Audio System',
    description: 'Head unit, amp, sub, and component speakers',
    price: 1499.99,
    image: '/placeholder.svg',
    tier: 'premium',
    category: 'add-on',
    subCategory: 'audio'
  }
];
