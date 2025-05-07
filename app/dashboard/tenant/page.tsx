import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, Calendar, CreditCard, Download, Home } from "lucide-react"
import { PaymentHistory } from "@/components/dashboard/payment-history"

export default function TenantDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tenant Dashboard</h1>
        <p className="text-muted-foreground">Manage your rent payments and apartment details.</p>
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
            <Home className="h-4 w-4 text-muted-foreground" />
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

      <Tabs defaultValue="payments" className="space-y-4">
        <TabsList>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="apartment">My Apartment</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="payments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>View your past rent payments</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentHistory />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="apartment" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Apartment Details</CardTitle>
              <CardDescription>Information about your current residence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <h3 className="font-semibold">Sunset Apartments, Unit 3B</h3>
                  <p className="text-sm text-muted-foreground">123 Main Street, Anytown, ST 12345</p>
                </div>
                <div className="grid gap-2">
                  <h3 className="font-semibold">Lease Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Start Date</p>
                      <p className="text-sm text-muted-foreground">January 1, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">End Date</p>
                      <p className="text-sm text-muted-foreground">December 31, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Monthly Rent</p>
                      <p className="text-sm text-muted-foreground">$1,200.00</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Security Deposit</p>
                      <p className="text-sm text-muted-foreground">$1,200.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Access your lease and payment receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <h3 className="font-medium">Lease Agreement</h3>
                    <p className="text-sm text-muted-foreground">Signed on January 1, 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Rent Receipt - April 2024</h3>
                      <p className="text-sm text-muted-foreground">Generated on April 1, 2024</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
