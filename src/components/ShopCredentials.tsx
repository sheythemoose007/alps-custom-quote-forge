
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const ShopCredentials = () => {
  const benefits = [
    "Expert technicians with 15+ years of off-road experience",
    "Premium brands and parts with manufacturer warranties",
    "Local service and support after installation",
    "Guaranteed fitment or your money back"
  ];

  return (
    <Card className="mt-10 border-alpine-green border">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">Why Choose Central Alps Off-Road?</CardTitle>
        <CardDescription>The trusted name in quality off-road builds</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-alpine-green mt-0.5" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ShopCredentials;
