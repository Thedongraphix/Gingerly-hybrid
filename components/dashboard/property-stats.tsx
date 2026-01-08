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
  gradient = "primary",
  bgGradient = ""
}: StatCardProps) => {
  const iconBgClass = gradient === "navy"
    ? "bg-navy-500 text-white"
    : gradient === "teal"
    ? "bg-teal-500 text-white"
    : gradient === "success"
    ? "bg-green-600 text-white"
    : "bg-orange-600 text-white";

  return (
    <Card className="border border-border rounded-2xl hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4 sm:p-6">
        <div className="flex justify-between items-start gap-3">
          <div className="space-y-2 flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{title}</p>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-600">
                {value}
              </h3>
              {change && (
                <div className={cn(
                  "flex items-center text-xs font-semibold px-2 py-1 rounded-full w-fit",
                  changeType === 'positive'
                    ? 'text-green-700 bg-green-100'
                    : changeType === 'negative'
                    ? 'text-red-700 bg-red-100'
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
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {subtitle}
              </p>
            )}
          </div>

          {/* Icon */}
          <div className="flex-shrink-0">
            <div className={cn(
              "w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center",
              iconBgClass
            )}>
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export function PropertyStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <StatCard
        title="Total Properties"
        value="12"
        change="+2 this month"
        changeType="positive"
        icon={Building2}
        gradient="navy"
      />
      <StatCard
        title="Occupancy Rate"
        value="92%"
        change="+5.4%"
        changeType="positive"
        icon={Home}
        subtitle="54 of 59 units occupied"
        gradient="success"
      />
      <StatCard
        title="Total Tenants"
        value="86"
        change="+3 this month"
        changeType="positive"
        icon={Users}
        gradient="navy"
      />
      <StatCard
        title="Monthly Revenue"
        value="$72,540"
        change="-$1,200"
        changeType="negative"
        icon={CreditCard}
        subtitle="Average $1,230 per unit"
        gradient="teal"
      />
    </div>
  );
} 