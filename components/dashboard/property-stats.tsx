import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Users, CreditCard, ArrowUp, ArrowDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  subtitle?: string;
}

const StatCard = ({ title, value, change, changeType = 'neutral', icon: Icon, subtitle }: StatCardProps) => {
  return (
    <Card className="overflow-hidden border rounded-xl hover:shadow-sm transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-1.5">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
              {change && (
                <div className={`flex items-center text-xs font-medium ${
                  changeType === 'positive' ? 'text-green-500' : 
                  changeType === 'negative' ? 'text-red-500' : 
                  'text-muted-foreground'
                }`}>
                  {changeType === 'positive' ? <ArrowUp className="h-3 w-3 mr-0.5" /> : 
                   changeType === 'negative' ? <ArrowDown className="h-3 w-3 mr-0.5" /> : null}
                  {change}
                </div>
              )}
            </div>
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="rounded-full p-2.5 bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function PropertyStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatCard 
        title="Total Properties" 
        value="12" 
        change="+2 from last month" 
        changeType="positive" 
        icon={Building2} 
      />
      <StatCard 
        title="Occupancy Rate" 
        value="92%" 
        change="+5.4%" 
        changeType="positive" 
        icon={Home}
        subtitle="54 of 59 units occupied" 
      />
      <StatCard 
        title="Total Tenants" 
        value="86" 
        change="+3 from last month" 
        changeType="positive" 
        icon={Users} 
      />
      <StatCard 
        title="Monthly Revenue" 
        value="$72,540" 
        change="-$1,200 from last month" 
        changeType="negative" 
        icon={CreditCard}
        subtitle="Average $1,230 per unit" 
      />
    </div>
  );
} 