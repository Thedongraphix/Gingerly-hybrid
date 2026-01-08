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
    },
    {
      id: 2,
      date: "April 1, 2024",
      amount: "$1,200.00",
      status: "completed",
      method: "Visa •••• 4242",
    },
    {
      id: 3,
      date: "March 1, 2024",
      amount: "$1,200.00",
      status: "completed",
      method: "Visa •••• 4242",
    },
    {
      id: 4,
      date: "February 1, 2024",
      amount: "$1,200.00",
      status: "completed",
      method: "Visa •••• 4242",
    },
    {
      id: 5,
      date: "January 1, 2024",
      amount: "$1,200.00",
      status: "completed",
      method: "Visa •••• 4242",
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
            className="border border-border rounded-xl hover:shadow-md transition-shadow duration-200"
          >
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy-500 text-white flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="space-y-1 min-w-0">
                    <p className="font-semibold text-sm sm:text-base text-navy-600 truncate">
                      {payment.date}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium truncate">
                      via {payment.method}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <div className="text-right">
                    <p className="text-sm sm:text-base font-bold text-teal-600 whitespace-nowrap">
                      {payment.amount}
                    </p>
                  </div>

                  <Badge className={cn(
                    "flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 font-semibold border text-xs rounded-full",
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
