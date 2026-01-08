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
    },
    {
      id: 2,
      tenant: "Michael Brown",
      amount: "$950.00",
      date: "May 1, 2024",
      status: "completed",
      method: "Mpesa",
      initials: "MB",
    },
    {
      id: 3,
      tenant: "Emily Davis",
      amount: "$1,050.00",
      date: "May 1, 2024",
      status: "completed",
      method: "Card",
      initials: "ED",
    },
    {
      id: 4,
      tenant: "David Wilson",
      amount: "$1,350.00",
      date: "May 2, 2024",
      status: "pending",
      method: "Card",
      initials: "DW",
    },
    {
      id: 5,
      tenant: "Lisa Thompson",
      amount: "$900.00",
      date: "April 30, 2024",
      status: "failed",
      method: "Mpesa",
      initials: "LT",
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
          <Card key={payment.id} className="border border-border rounded-xl hover:shadow-md transition-shadow duration-200">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Avatar className="h-10 w-10 sm:h-12 sm:w-12 border-2 border-border flex-shrink-0">
                    <AvatarFallback className="bg-navy-500 text-white font-semibold text-sm">
                      {payment.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base text-navy-600 truncate">
                      {payment.tenant}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {payment.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <p className="text-sm sm:text-base font-bold text-teal-600 whitespace-nowrap">
                    {payment.amount}
                  </p>
                  <Badge className={cn(
                    "flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 font-semibold text-xs border rounded-full",
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
