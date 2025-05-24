import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Home, Users, CreditCard, ArrowUp, ArrowDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon: React.ElementType;
  subtitle?: string;
  gradient?: string;
  bgGradient?: string;
}

const StatCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon: Icon, 
  subtitle,
  gradient = "from-blue-500 to-purple-600",
  bgGradient = "from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30"
}: StatCardProps) => {
  return (
    <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
      <CardContent className="p-6 relative">
        {/* Background gradient overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          bgGradient
        )} />
        
        <div className="relative flex justify-between items-start">
          <div className="space-y-2 flex-1">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{title}</p>
            <div className="flex items-baseline space-x-3">
              <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                {value}
              </h3>
              {change && (
                <div className={cn(
                  "flex items-center text-xs font-semibold px-2 py-1 rounded-full transition-all duration-300",
                  changeType === 'positive' 
                    ? 'text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400' 
                    : changeType === 'negative' 
                    ? 'text-red-700 bg-red-100 dark:bg-red-900/30 dark:text-red-400' 
                    : 'text-muted-foreground bg-muted'
                )}>
                  {changeType === 'positive' ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : changeType === 'negative' ? (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  )}
                  {change}
                </div>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                {subtitle}
              </p>
            )}
          </div>
          
          {/* Enhanced icon with animated background */}
          <div className="relative ml-4">
            <div className={cn(
              "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-20 blur-xl transition-all duration-500",
              gradient,
              "group-hover:opacity-40 group-hover:blur-2xl"
            )} />
            <div className={cn(
              "relative w-14 h-14 rounded-2xl bg-gradient-to-r flex items-center justify-center text-white shadow-lg",
              gradient,
              "group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
            )}>
              <Icon className="h-7 w-7" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function PropertyStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard 
        title="Total Properties" 
        value="12" 
        change="+2 this month" 
        changeType="positive" 
        icon={Building2} 
        gradient="from-blue-500 to-blue-600"
        bgGradient="from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20"
      />
      <StatCard 
        title="Occupancy Rate" 
        value="92%" 
        change="+5.4%" 
        changeType="positive" 
        icon={Home}
        subtitle="54 of 59 units occupied"
        gradient="from-green-500 to-emerald-600" 
        bgGradient="from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20"
      />
      <StatCard 
        title="Total Tenants" 
        value="86" 
        change="+3 this month" 
        changeType="positive" 
        icon={Users}
        gradient="from-purple-500 to-violet-600"
        bgGradient="from-purple-50 to-violet-100/50 dark:from-purple-950/30 dark:to-violet-900/20"
      />
      <StatCard 
        title="Monthly Revenue" 
        value="$72,540" 
        change="-$1,200" 
        changeType="negative" 
        icon={CreditCard}
        subtitle="Average $1,230 per unit"
        gradient="from-orange-500 to-red-500"
        bgGradient="from-orange-50 to-red-100/50 dark:from-orange-950/30 dark:to-red-900/20"
      />
    </div>
  );
} 