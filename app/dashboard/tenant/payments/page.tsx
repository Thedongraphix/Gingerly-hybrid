import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Calendar, CreditCard, Download } from "lucide-react"
import { PaymentMethodForm } from "@/components/dashboard/payment-method-form"

export default function TenantPaymentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Payments</h1>
        <p className="text-muted-foreground">Manage your rent payments and payment methods.</p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Your next rent payment is due in 3 days</AlertTitle>
        <AlertDescription>
          Your monthly rent of $1,200.00 will be automatically charged on May 1, 2024.
        </AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Rent</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,200.00</div>
            <p className="text-xs text-muted-foreground">Due on the 1st of each month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">May 1, 2024</div>
            <p className="text-xs text-muted-foreground">3 days remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Payment Method</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Visa •••• 4242</div>
            <p className="text-xs text-muted-foreground">
              <Button variant="link" className="h-auto p-0 text-xs">
                Update payment method
              </Button>
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="history" className="space-y-4">
        <TabsList>
          <TabsTrigger value="history">Payment History</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming Payments</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your past rent payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "April 1, 2024",
                    amount: "$1,200.00",
                    status: "completed",
                    method: "Visa •••• 4242",
                  },
                  {
                    date: "March 1, 2024",
                    amount: "$1,200.00",
                    status: "completed",
                    method: "Visa •••• 4242",
                  },
                  {
                    date: "February 1, 2024",
                    amount: "$1,200.00",
                    status: "completed",
                    method: "Visa •••• 4242",
                  },
                  {
                    date: "January 1, 2024",
                    amount: "$1,200.00",
                    status: "completed",
                    method: "Visa •••• 4242",
                  },
                  {
                    date: "December 1, 2023",
                    amount: "$1,200.00",
                    status: "completed",
                    method: "Visa •••• 4242",
                  },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <p className="font-medium">{payment.date}</p>
                      <p className="text-sm text-muted-foreground">via {payment.method}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{payment.amount}</p>
                      <Badge
                        variant={
                          payment.status === "completed"
                            ? "default"
                            : payment.status === "pending"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {payment.status === "completed" ? "Paid" : payment.status === "pending" ? "Pending" : "Failed"}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download receipt</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Payments</CardTitle>
              <CardDescription>View your scheduled rent payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "May 1, 2024",
                    amount: "$1,200.00",
                    status: "pending",
                    method: "Visa •••• 4242",
                  },
                  {
                    date: "June 1, 2024",
                    amount: "$1,200.00",
                    status: "scheduled",
                    method: "Visa •••• 4242",
                  },
                  {
                    date: "July 1, 2024",
                    amount: "$1,200.00",
                    status: "scheduled",
                    method: "Visa •••• 4242",
                  },
                ].map((payment, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <p className="font-medium">{payment.date}</p>
                      <p className="text-sm text-muted-foreground">via {payment.method}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{payment.amount}</p>
                      <Badge
                        variant={
                          payment.status === "pending"
                            ? "outline"
                            : payment.status === "scheduled"
                              ? "secondary"
                              : "default"
                        }
                      >
                        {payment.status === "pending"
                          ? "Pending"
                          : payment.status === "scheduled"
                            ? "Scheduled"
                            : "Paid"}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Manage your payment methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-16 rounded bg-muted p-2">
                      <div className="text-xs font-semibold">VISA</div>
                    </div>
                    <div>
                      <p className="font-medium">Visa ending in 4242</p>
                      <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                    </div>
                  </div>
                  <Badge>Default</Badge>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-16 rounded bg-muted p-2">
                      <div className="text-xs font-semibold">MPESA</div>
                    </div>
                    <div>
                      <p className="font-medium">Mpesa</p>
                      <p className="text-sm text-muted-foreground">+254 712 345 678</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Make Default
                  </Button>
                </div>
              </div>
              <PaymentMethodForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
