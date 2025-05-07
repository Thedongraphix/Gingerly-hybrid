import { Badge } from "@/components/ui/badge"

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

  return (
    <div className="space-y-4">
      {payments.map((payment) => (
        <div key={payment.id} className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-1">
            <p className="font-medium">{payment.date}</p>
            <p className="text-sm text-muted-foreground">via {payment.method}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-medium">{payment.amount}</p>
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
