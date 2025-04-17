
import { Button } from "@/components/ui/button";

interface TierSelectorProps {
  selectedTier: string;
  onTierSelect: (tier: string) => void;
}

const TierSelector = ({ selectedTier, onTierSelect }: TierSelectorProps) => {
  return (
    <div className="flex gap-4 mb-6">
      <Button
        variant={selectedTier === 'budget-friendly' ? 'default' : 'outline'}
        onClick={() => onTierSelect('budget-friendly')}
        className="flex-1"
      >
        Budget Friendly
      </Button>
      <Button
        variant={selectedTier === 'best-value' ? 'default' : 'outline'}
        onClick={() => onTierSelect('best-value')}
        className="flex-1"
      >
        Best Value
      </Button>
      <Button
        variant={selectedTier === 'premium' ? 'default' : 'outline'}
        onClick={() => onTierSelect('premium')}
        className="flex-1"
      >
        Premium Performance
      </Button>
    </div>
  );
};

export default TierSelector;
