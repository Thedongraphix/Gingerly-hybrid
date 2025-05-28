import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Building2, 
  Users, 
  Calendar,
  Target,
  PieChart,
  LineChart,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download,
  Sparkles,
  Clock,
  Star,
  AlertTriangle,
  CheckCircle,
  Eye,
  Home,
  CreditCard,
  Percent
} from "lucide-react"

export default function LandlordAnalyticsPage() {
  // Sample analytics data
  const overviewStats = {
    totalRevenue: "$48,250",
    revenueChange: +12.5,
    totalProperties: 15,
    propertiesChange: +2,
    totalTenants: 42,
    tenantsChange: +5,
    occupancyRate: 94.7,
    occupancyChange: +3.2,
    avgRent: "$1,150",
    rentChange: +8.3,
    maintenanceCosts: "$3,420",
    maintenanceChange: -15.2
  }

  const propertyPerformance = [
    {
      id: 1,
      name: "Sunset Apartments",
      units: 12,
      occupied: 11,
      revenue: "$13,200",
      yield: 8.2,
      satisfaction: 4.6,
      maintenanceRequests: 3
    },
    {
      id: 2,
      name: "Riverside Condos", 
      units: 8,
      occupied: 8,
      revenue: "$11,600",
      yield: 9.1,
      satisfaction: 4.8,
      maintenanceRequests: 1
    },
    {
      id: 3,
      name: "Oakwood Residences",
      units: 16,
      occupied: 14,
      revenue: "$16,800",
      yield: 7.9,
      satisfaction: 4.4,
      maintenanceRequests: 5
    },
    {
      id: 4,
      name: "Downtown Lofts",
      units: 6,
      occupied: 6,
      revenue: "$9,600",
      yield: 8.7,
      satisfaction: 4.7,
      maintenanceRequests: 2
    }
  ]

  const monthlyTrends = [
    { month: "Jan", revenue: 42000, expenses: 18000, occupancy: 92 },
    { month: "Feb", revenue: 44500, expenses: 19200, occupancy: 94 },
    { month: "Mar", revenue: 46200, expenses: 17800, occupancy: 96 },
    { month: "Apr", revenue: 48250, expenses: 20100, occupancy: 95 },
  ]

  const tenantInsights = {
    avgTenancy: "18 months",
    renewalRate: 87,
    newTenants: 8,
    movingOut: 3,
    avgPaymentTime: "2.3 days",
    latePayments: 5
  }

  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
              <BarChart3 className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Analytics Dashboard</h1>
              <p className="text-muted-foreground text-base md:text-lg">Track performance, revenue, and insights across your property portfolio.</p>
            </div>
            <div className="flex items-center gap-3">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] glass border border-border/50 rounded-xl">
                  <SelectValue placeholder="Time Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Time</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
              <Button className="btn-primary shadow-lg hover:shadow-xl">
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Overview */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Total Revenue</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {overviewStats.totalRevenue}
                </h3>
                <div className="flex items-center gap-2">
                  {overviewStats.revenueChange > 0 ? (
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="text-sm font-medium">+{overviewStats.revenueChange}%</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-600">
                      <ArrowDownRight className="h-4 w-4" />
                      <span className="text-sm font-medium">{overviewStats.revenueChange}%</span>
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <DollarSign className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100/50 dark:from-blue-950/30 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Occupancy Rate</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {overviewStats.occupancyRate}%
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-sm font-medium">+{overviewStats.occupancyChange}%</span>
                  </div>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Percent className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100/50 dark:from-purple-950/30 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Average Rent</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {overviewStats.avgRent}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-green-600">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="text-sm font-medium">+{overviewStats.rentChange}%</span>
                  </div>
                  <span className="text-sm text-muted-foreground">vs last year</span>
                </div>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Home className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Additional Metrics */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Properties</p>
                <p className="text-2xl font-bold text-foreground">{overviewStats.totalProperties}</p>
                <div className="flex items-center gap-1 text-green-600 mt-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+{overviewStats.propertiesChange} this quarter</span>
                </div>
              </div>
              <Building2 className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Tenants</p>
                <p className="text-2xl font-bold text-foreground">{overviewStats.totalTenants}</p>
                <div className="flex items-center gap-1 text-green-600 mt-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm">+{overviewStats.tenantsChange} this month</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Maintenance Costs</p>
                <p className="text-2xl font-bold text-foreground">{overviewStats.maintenanceCosts}</p>
                <div className="flex items-center gap-1 text-green-600 mt-1">
                  <TrendingDown className="h-4 w-4" />
                  <span className="text-sm">{overviewStats.maintenanceChange}% vs last month</span>
                </div>
              </div>
              <Activity className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Tabs */}
      <Tabs defaultValue="performance" className="space-y-6">
        <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full md:w-auto">
          <TabsTrigger 
            value="performance" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Target className="mr-2 h-4 w-4" />
            Property Performance
          </TabsTrigger>
          <TabsTrigger 
            value="financial"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <LineChart className="mr-2 h-4 w-4" />
            Financial Trends
          </TabsTrigger>
          <TabsTrigger 
            value="tenants"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Users className="mr-2 h-4 w-4" />
            Tenant Insights
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Target className="h-5 w-5" />
                </div>
                Property Performance Analysis
              </CardTitle>
              <CardDescription className="text-base">Detailed performance metrics for each property in your portfolio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {propertyPerformance.map((property, i) => (
                <Card key={property.id} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Building2 className="h-6 w-6" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{property.name}</p>
                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold w-fit">
                              {property.occupied}/{property.units} occupied
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Monthly Revenue</p>
                              <p className="font-bold text-green-600">{property.revenue}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Yield</p>
                              <p className="font-bold text-blue-600">{property.yield}%</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Satisfaction</p>
                              <div className="flex items-center gap-1">
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                <p className="font-bold">{property.satisfaction}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Maintenance</p>
                              <p className="font-bold text-orange-600">{property.maintenanceRequests} pending</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Occupancy Rate</span>
                              <span className="font-medium">{Math.round((property.occupied / property.units) * 100)}%</span>
                            </div>
                            <Progress value={(property.occupied / property.units) * 100} className="h-2" />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View Details</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <BarChart3 className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Analytics</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <LineChart className="h-5 w-5" />
                </div>
                Financial Performance Trends
              </CardTitle>
              <CardDescription className="text-base">Revenue, expenses, and profitability trends over time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Mock Chart Area */}
              <div className="glass-card border border-border/50 p-6 rounded-2xl bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20">
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center space-y-2">
                    <LineChart className="h-16 w-16 mx-auto opacity-50" />
                    <p className="text-lg font-semibold">Financial Trends Chart</p>
                    <p>Interactive chart showing revenue vs expenses over time</p>
                  </div>
                </div>
              </div>

              {/* Monthly Breakdown */}
              <div className="grid gap-4">
                <h3 className="text-lg font-semibold">Monthly Breakdown</h3>
                {monthlyTrends.map((month, i) => (
                  <Card key={month.month} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                            {month.month}
                          </div>
                          <div className="grid grid-cols-3 gap-6">
                            <div>
                              <p className="text-sm text-muted-foreground">Revenue</p>
                              <p className="font-bold text-green-600">${month.revenue.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Expenses</p>
                              <p className="font-bold text-red-600">${month.expenses.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Profit</p>
                              <p className="font-bold text-blue-600">${(month.revenue - month.expenses).toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Occupancy</p>
                          <p className="font-bold text-lg">{month.occupancy}%</p>
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
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  <Users className="h-5 w-5" />
                </div>
                Tenant Analytics & Insights
              </CardTitle>
              <CardDescription className="text-base">Understanding tenant behavior and satisfaction patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="glass-card border border-border/50 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-10 w-10 mx-auto mb-3 text-blue-500" />
                    <p className="text-sm text-muted-foreground">Average Tenancy</p>
                    <p className="text-2xl font-bold text-foreground">{tenantInsights.avgTenancy}</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border border-border/50 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-10 w-10 mx-auto mb-3 text-green-500" />
                    <p className="text-sm text-muted-foreground">Renewal Rate</p>
                    <p className="text-2xl font-bold text-foreground">{tenantInsights.renewalRate}%</p>
                  </CardContent>
                </Card>

                <Card className="glass-card border border-border/50 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <CreditCard className="h-10 w-10 mx-auto mb-3 text-purple-500" />
                    <p className="text-sm text-muted-foreground">Avg Payment Time</p>
                    <p className="text-2xl font-bold text-foreground">{tenantInsights.avgPaymentTime}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">New Tenants</h4>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">This Month</Badge>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">{tenantInsights.newTenants}</p>
                      <p className="text-sm text-muted-foreground">New move-ins</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border border-border/50 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">Late Payments</h4>
                      <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">Attention</Badge>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-orange-600">{tenantInsights.latePayments}</p>
                      <p className="text-sm text-muted-foreground">Accounts overdue</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 