
import { CreditCard, DollarSign, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FinancingSection = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-alpine-blue">Flexible Financing Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-alpine-green" />
              Initial Deposit Options
            </CardTitle>
            <CardDescription>Pay your 25% deposit with flexible payment solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-20 text-sm font-medium">Klarna</div>
                <span className="text-sm text-gray-600">Split your deposit into 4 interest-free payments</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-20 text-sm font-medium">Afterpay</div>
                <span className="text-sm text-gray-600">4 bi-weekly payments with zero interest</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-alpine-green" />
              Build Financing
            </CardTitle>
            <CardDescription>Finance the remaining 75% of your build</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <div className="font-medium mb-1">Snap Finance</div>
                <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                  <li>No payments for 100 days</li>
                  <li>Low $40 initial payment</li>
                  <li>Quick approval process</li>
                </ul>
              </li>
              <li>
                <div className="font-medium mb-1">Acima</div>
                <ul className="list-disc list-inside text-sm text-gray-600 ml-2">
                  <li>Flexible payment schedules</li>
                  <li>Early payoff options</li>
                  <li>Same-day approval available</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-alpine-lightgray p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="h-5 w-5 text-alpine-green" />
          <h3 className="text-lg font-medium">Build Now, Pay Later</h3>
        </div>
        <p className="text-gray-600">
          Get your dream build started with just 25% down. Take advantage of our 100-day no-payment period 
          on the remaining balance through our financing partners. Contact us to discuss which option works best for you.
        </p>
      </div>
    </div>
  );
};

export default FinancingSection;
