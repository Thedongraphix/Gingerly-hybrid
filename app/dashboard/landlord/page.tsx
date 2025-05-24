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
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
        
        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-primary to-accent text-white shadow-lg">
                <Building2 className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Welcome back, John!</h1>
                <p className="text-muted-foreground text-lg">Here's what's happening with your properties today.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="btn-primary shadow-lg hover:shadow-xl">
              <PlusCircle className="mr-2 h-5 w-5" />
              Add Property
            </Button>
            <Button variant="outline" className="btn-outline shadow-sm hover:shadow-md">
              <Users className="mr-2 h-5 w-5" />
              Add Tenant
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Alert */}
      <Alert className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 dark:border-blue-800 dark:from-blue-950/30 dark:to-cyan-950/30">
        <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white w-fit">
          <Sparkles className="h-4 w-4" />
        </div>
        <AlertTitle className="text-blue-900 dark:text-blue-100 font-semibold">
          🎉 Portfolio Growing Strong!
        </AlertTitle>
        <AlertDescription className="text-blue-700 dark:text-blue-200">
          Your properties have generated <span className="font-semibold">$24,560</span> this month. Complete your remaining setups to maximize earnings.
        </AlertDescription>
      </Alert>

      {/* Property Stats */}
      <PropertyStats />

      {/* Enhanced Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md">
          <TabsTrigger 
            value="overview" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="properties"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <Building2 className="mr-2 h-4 w-4" />
            Properties
          </TabsTrigger>
          <TabsTrigger 
            value="tenants"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <Users className="mr-2 h-4 w-4" />
            Tenants
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  Payment Analytics
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Monthly rent collection trends and status overview
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <PaymentStatusChart />
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-3 glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  Recent Payments
                </CardTitle>
                <CardDescription className="text-muted-foreground">
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
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                Your Properties
              </CardTitle>
              <CardDescription>Manage all your properties and track their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  { name: "Sunset Apartments", units: 12, occupied: 10, address: "123 Main St", gradient: "from-blue-500 to-purple-600" },
                  { name: "Ocean View Complex", units: 24, occupied: 22, address: "456 Ocean Dr", gradient: "from-green-500 to-emerald-600" },
                  { name: "Downtown Lofts", units: 8, occupied: 8, address: "789 City Center", gradient: "from-orange-500 to-red-600" }
                ].map((property, i) => (
                  <Card key={i} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-12 h-12 rounded-2xl bg-gradient-to-r flex items-center justify-center text-white shadow-lg",
                            "group-hover:scale-110 transition-transform duration-300",
                            property.gradient
                          )}>
                            <Home className="h-6 w-6" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">
                              {property.name}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Users className="h-4 w-4" />
                                {property.units} Units
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {property.address}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className="flex items-center gap-2">
                              <Badge className={cn(
                                "px-3 py-1 font-semibold",
                                property.occupied === property.units 
                                  ? "bg-green-100 text-green-700 border-green-200" 
                                  : "bg-orange-100 text-orange-700 border-orange-200"
                              )}>
                                {property.occupied}/{property.units} Occupied
                              </Badge>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary rounded-xl">
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
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  <Users className="h-5 w-5" />
                </div>
                Your Tenants
              </CardTitle>
              <CardDescription>Manage tenant relationships and payment status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {[
                  { name: "Jane Smith", unit: "Unit 3B", property: "Sunset Apartments", status: "paid", gradient: "from-green-500 to-emerald-600" },
                  { name: "Mike Johnson", unit: "Unit 7A", property: "Ocean View Complex", status: "paid", gradient: "from-blue-500 to-cyan-600" },
                  { name: "Sarah Davis", unit: "Unit 2C", property: "Downtown Lofts", status: "pending", gradient: "from-orange-500 to-yellow-600" },
                  { name: "Robert Wilson", unit: "Unit 5B", property: "Sunset Apartments", status: "paid", gradient: "from-purple-500 to-pink-600" }
                ].map((tenant, i) => (
                  <Card key={i} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                            <AvatarFallback className={cn(
                              "bg-gradient-to-r text-white font-semibold",
                              tenant.gradient
                            )}>
                              {tenant.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-2">
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">
                              {tenant.name}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{tenant.property}</span>
                              <span>•</span>
                              <span>{tenant.unit}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge className={cn(
                            "flex items-center gap-1.5 px-3 py-1 font-semibold border rounded-full",
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
                          <Button variant="ghost" size="sm" className="hover:bg-primary/10 hover:text-primary rounded-xl">
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
