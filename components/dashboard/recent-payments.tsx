import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

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

  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <div key={payment.id} className="flex items-center gap-4">
          <Avatar className="h-9 w-9">
            <AvatarFallback>{payment.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{payment.tenant}</p>
            <p className="text-xs text-muted-foreground">
              {payment.date} via {payment.method}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">{payment.amount}</p>
            <Badge
              variant={
                payment.status === "completed" ? "default" : payment.status === "pending" ? "outline" : "destructive"
              }
            >
              {payment.status === "completed" ? "Paid" : payment.status === "pending" ? "Pending" : "Failed"}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  )
}
