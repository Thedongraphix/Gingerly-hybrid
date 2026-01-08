import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  AlertCircle, 
  ArrowUpRight, 
  Building2, 
  DollarSign, 
  Users, 
  PlusCircle,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Clock,
  Home,
  MapPin
} from "lucide-react"
import { PaymentStatusChart } from "@/components/dashboard/payment-status-chart"
import { RecentPayments } from "@/components/dashboard/recent-payments"
import { PropertyStats } from "@/components/dashboard/property-stats"
import { cn } from "@/lib/utils"

export default function LandlordDashboard() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-0">
      {/* Modern Header */}
      <div className="rounded-2xl bg-card border border-border p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-center">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-xl bg-navy-500 text-white flex-shrink-0">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-navy-500 truncate">Welcome back, John!</h1>
                <p className="text-muted-foreground text-sm sm:text-base">Here's what's happening with your properties today.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              <PlusCircle className="mr-2 h-5 w-5" />
              Add Property
            </Button>
            <Button variant="outline" className="border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white">
              <Users className="mr-2 h-5 w-5" />
              Add Tenant
            </Button>
          </div>
        </div>
      </div>

      {/* Performance Alert */}
      <Alert className="border-l-4 border-l-teal-500 bg-teal-50">
        <div className="p-2 rounded-lg bg-teal-500 text-white w-fit">
          <TrendingUp className="h-4 w-4" />
        </div>
        <AlertTitle className="text-navy-600 font-semibold text-base sm:text-lg">
          Portfolio Growing Strong
        </AlertTitle>
        <AlertDescription className="text-navy-500 text-sm sm:text-base">
          Your properties have generated <span className="font-semibold text-teal-600">$24,560</span> this month. Complete your remaining setups to maximize earnings.
        </AlertDescription>
      </Alert>

      {/* Property Stats */}
      <PropertyStats />

      {/* Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6">
        <TabsList className="bg-muted p-1 rounded-xl w-full sm:w-auto grid grid-cols-3 sm:inline-grid sm:grid-flow-col gap-1">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white rounded-lg font-medium text-xs sm:text-sm px-3 sm:px-4 text-navy-500"
          >
            <TrendingUp className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Overview</span>
            <span className="sm:hidden">Stats</span>
          </TabsTrigger>
          <TabsTrigger
            value="properties"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white rounded-lg font-medium text-xs sm:text-sm px-3 sm:px-4 text-navy-500"
          >
            <Building2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Properties
          </TabsTrigger>
          <TabsTrigger
            value="tenants"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white rounded-lg font-medium text-xs sm:text-sm px-3 sm:px-4 text-navy-500"
          >
            <Users className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Tenants
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-7">
            <Card className="lg:col-span-4 border border-border rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-navy-500 text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <span className="text-navy-600">Payment Analytics</span>
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Monthly rent collection trends and status overview
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <PaymentStatusChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3 border border-border rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-teal-500 text-white">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <span className="text-navy-600">Recent Payments</span>
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  Latest transactions from your tenants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentPayments />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="properties" className="space-y-6">
          <Card className="border border-border rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-navy-500 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="text-navy-600">Your Properties</span>
              </CardTitle>
              <CardDescription>Manage all your properties and track their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  { name: "Sunset Apartments", units: 12, occupied: 10, address: "123 Main St" },
                  { name: "Ocean View Complex", units: 24, occupied: 22, address: "456 Ocean Dr" },
                  { name: "Downtown Lofts", units: 8, occupied: 8, address: "789 City Center" }
                ].map((property, i) => (
                  <Card key={i} className="border border-border rounded-xl hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-teal-500 text-white flex items-center justify-center flex-shrink-0">
                            <Home className="h-6 w-6" />
                          </div>
                          <div className="space-y-1 sm:space-y-2 min-w-0">
                            <h3 className="font-bold text-base sm:text-lg text-navy-600 truncate">
                              {property.name}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                {property.units} Units
                              </span>
                              <span className="flex items-center gap-1 truncate">
                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                <span className="truncate">{property.address}</span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0">
                          <Badge className={cn(
                            "px-3 py-1 font-semibold rounded-full text-xs",
                            property.occupied === property.units
                              ? "bg-green-100 text-green-700 border-green-200"
                              : "bg-orange-100 text-orange-700 border-orange-200"
                          )}>
                            {property.occupied}/{property.units} Occupied
                          </Badge>
                          <Button variant="ghost" size="sm" className="hover:bg-teal-100 hover:text-teal-600 rounded-lg">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tenants" className="space-y-6">
          <Card className="border border-border rounded-2xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-teal-500 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-navy-600">Your Tenants</span>
              </CardTitle>
              <CardDescription>Manage tenant relationships and payment status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  { name: "Jane Smith", unit: "Unit 3B", property: "Sunset Apartments", status: "paid" },
                  { name: "Mike Johnson", unit: "Unit 7A", property: "Ocean View Complex", status: "paid" },
                  { name: "Sarah Davis", unit: "Unit 2C", property: "Downtown Lofts", status: "pending" },
                  { name: "Robert Wilson", unit: "Unit 5B", property: "Sunset Apartments", status: "paid" }
                ].map((tenant, i) => (
                  <Card key={i} className="border border-border rounded-xl hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                          <Avatar className="h-12 w-12 border-2 border-border flex-shrink-0">
                            <AvatarFallback className="bg-navy-500 text-white font-semibold text-sm">
                              {tenant.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1 sm:space-y-2 min-w-0">
                            <h3 className="font-bold text-base sm:text-lg text-navy-600 truncate">
                              {tenant.name}
                            </h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                              <span className="truncate">{tenant.property}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{tenant.unit}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end gap-3 flex-shrink-0">
                          <Badge className={cn(
                            "flex items-center gap-1.5 px-3 py-1 font-semibold border rounded-full text-xs",
                            tenant.status === "paid"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : "bg-orange-100 text-orange-700 border-orange-200"
                          )}>
                            {tenant.status === "paid" ? (
                              <CheckCircle className="h-3 w-3" />
                            ) : (
                              <Clock className="h-3 w-3" />
                            )}
                            {tenant.status === "paid" ? "Paid" : "Pending"}
                          </Badge>
                          <Button variant="ghost" size="sm" className="hover:bg-teal-100 hover:text-teal-600 rounded-lg">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
