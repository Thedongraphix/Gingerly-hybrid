import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowUpRight, Building2, DollarSign, Users } from "lucide-react"
import { PaymentStatusChart } from "@/components/dashboard/payment-status-chart"
import { RecentPayments } from "@/components/dashboard/recent-payments"

export default function LandlordDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Landlord Dashboard</h1>
          <p className="text-muted-foreground">Manage your properties, tenants, and payments.</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Building2 className="mr-2 h-4 w-4" />
            Add Property
          </Button>
          <Button variant="outline">
            <Users className="mr-2 h-4 w-4" />
            Add Tenant
          </Button>
        </div>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Welcome to your dashboard!</AlertTitle>
        <AlertDescription>Complete your property setup to start receiving payments from your tenants.</AlertDescription>
      </Alert>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Properties</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tenants</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,560</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,890</div>
            <p className="text-xs text-muted-foreground">5 tenants with pending payments</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="tenants">Tenants</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Payment Status</CardTitle>
                <CardDescription>Monthly rent collection status for May 2024</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <PaymentStatusChart />
              </CardContent>
            </Card>
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Latest payments from your tenants</CardDescription>
              </CardHeader>
              <CardContent>
                <RecentPayments />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="properties" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Properties</CardTitle>
              <CardDescription>Manage all your properties and units</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Sunset Apartments</h3>
                      <p className="text-sm text-muted-foreground">12 Units • 10 Occupied</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ArrowUpRight className="mr-2 h-4 w-4" />
                      View
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tenants" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Your Tenants</CardTitle>
              <CardDescription>Manage all your tenants and their payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div className="space-y-1">
                        <h3 className="font-medium">Jane Smith</h3>
                        <p className="text-sm text-muted-foreground">Sunset Apartments, Unit 3B</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-sm">Paid</span>
                    </div>
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
