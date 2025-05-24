import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

export function PaymentHistory() {
  const payments = [
    {
      id: 1,
      date: "May 1, 2024",
      amount: "$1,200.00",
      status: "pending",
      method: "Visa •••• 4242",
      gradient: "from-orange-500 to-yellow-600",
    },
    {
      id: 2,
      date: "April 1, 2024",
      amount: "$1,200.00",
      status: "completed",
      method: "Visa •••• 4242",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      date: "March 1, 2024",
      amount: "$1,200.00",
      status: "completed",
      method: "Visa •••• 4242",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 4,
      date: "February 1, 2024",
      amount: "$1,200.00",
      status: "completed",
      method: "Visa •••• 4242",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 5,
      date: "January 1, 2024",
      amount: "$1,200.00",
      status: "completed",
      method: "Visa •••• 4242",
      gradient: "from-indigo-500 to-blue-600",
    },
  ]

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "completed":
        return {
          icon: CheckCircle,
          label: "Paid",
          className: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200",
        }
      case "pending":
        return {
          icon: Clock,
          label: "Pending",
          className: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200",
        }
      default:
        return {
          icon: Clock,
          label: "Unknown",
          className: "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200",
        }
    }
  }

  return (
    <div className="space-y-3">
      {payments.map((payment) => {
        const statusConfig = getStatusConfig(payment.status)
        const StatusIcon = statusConfig.icon
        
        return (
          <Card 
            key={payment.id} 
            className={cn(
              "glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group",
              "hover:scale-[1.01]"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-2xl bg-gradient-to-r flex items-center justify-center text-white shadow-lg",
                    "group-hover:scale-110 transition-transform duration-300",
                    payment.gradient
                  )}>
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {payment.date}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                      via {payment.method}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-lg font-bold text-foreground">
                      {payment.amount}
                    </p>
                  </div>
                  
                  <Badge className={cn(
                    "flex items-center gap-1.5 px-3 py-1 font-semibold border text-xs rounded-full",
                    statusConfig.className
                  )}>
                    <StatusIcon className="h-3 w-3" />
                    {statusConfig.label}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
