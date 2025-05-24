import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, XCircle, CreditCard, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

export function RecentPayments() {
  const payments = [
    {
      id: 1,
      tenant: "Sarah Johnson",
      amount: "$1,200.00",
      date: "May 1, 2024",
      status: "completed",
      method: "Card",
      initials: "SJ",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      tenant: "Michael Brown",
      amount: "$950.00",
      date: "May 1, 2024",
      status: "completed",
      method: "Mpesa",
      initials: "MB",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      tenant: "Emily Davis",
      amount: "$1,050.00",
      date: "May 1, 2024",
      status: "completed",
      method: "Card",
      initials: "ED",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      tenant: "David Wilson",
      amount: "$1,350.00",
      date: "May 2, 2024",
      status: "pending",
      method: "Card",
      initials: "DW",
      gradient: "from-orange-500 to-yellow-600",
    },
    {
      id: 5,
      tenant: "Lisa Thompson",
      amount: "$900.00",
      date: "April 30, 2024",
      status: "failed",
      method: "Mpesa",
      initials: "LT",
      gradient: "from-red-500 to-pink-600",
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
      case "failed":
        return {
          icon: XCircle,
          label: "Failed",
          className: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200",
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
              "hover:scale-[1.01] cursor-pointer"
            )}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                    <AvatarFallback className={cn(
                      "bg-gradient-to-r text-white font-semibold text-sm",
                      payment.gradient
                    )}>
                      {payment.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 p-1 bg-white rounded-full shadow-sm">
                    {payment.method === "Card" ? (
                      <CreditCard className="h-3 w-3 text-blue-600" />
                    ) : (
                      <Smartphone className="h-3 w-3 text-green-600" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1 space-y-1">
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {payment.tenant}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {payment.date} • {payment.method}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
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
