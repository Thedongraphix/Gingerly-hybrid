import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  ArrowUpRight, 
  Plus, 
  Search, 
  Users, 
  DollarSign, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  Filter,
  Download,
  Building2,
  Calendar,
  Star,
  MessageSquare,
  Eye,
  UserPlus,
  Sparkles
} from "lucide-react"
import { TenantOnboardingModal } from "@/components/dashboard/tenant-onboarding-modal"

export default function TenantsPage() {
  // Sample tenant data
  const tenantStats = {
    totalTenants: 42,
    activeTenants: 38,
    pendingPayments: 5,
    overduePayments: 2,
    avgRent: "$1,150",
    renewalRate: 87
  }

  const allTenants = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "(555) 123-4567",
      property: "Sunset Apartments",
      unit: "3B",
      rent: 1200,
      status: "paid",
      leaseEnd: "2024-12-31",
      moveIn: "2023-01-15",
      rating: 4.8,
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Brown",
      email: "michael.brown@email.com", 
      phone: "(555) 234-5678",
      property: "Riverside Condos",
      unit: "2A",
      rent: 1350,
      status: "pending",
      leaseEnd: "2025-03-31",
      moveIn: "2023-04-01",
      rating: 4.6,
      avatar: "MB"
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      phone: "(555) 345-6789",
      property: "Oakwood Residences",
      unit: "1C",
      rent: 980,
      status: "paid",
      leaseEnd: "2024-08-31",
      moveIn: "2022-09-01",
      rating: 4.9,
      avatar: "ED"
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@email.com",
      phone: "(555) 456-7890",
      property: "Downtown Lofts",
      unit: "5A",
      rent: 1650,
      status: "overdue",
      leaseEnd: "2024-11-30",
      moveIn: "2023-12-01",
      rating: 4.2,
      avatar: "DW"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "lisa.thompson@email.com",
      phone: "(555) 567-8901",
      property: "Sunset Apartments",
      unit: "4D",
      rent: 1100,
      status: "paid",
      leaseEnd: "2025-01-31",
      moveIn: "2024-02-01",
      rating: 4.7,
      avatar: "LT"
    },
    {
      id: 6,
      name: "Robert Taylor",
      email: "robert.taylor@email.com",
      phone: "(555) 678-9012",
      property: "Riverside Condos",
      unit: "3C",
      rent: 1400,
      status: "pending",
      leaseEnd: "2024-10-31",
      moveIn: "2023-11-01",
      rating: 4.5,
      avatar: "RT"
    },
    {
      id: 7,
      name: "Amanda Clark",
      email: "amanda.clark@email.com",
      phone: "(555) 789-0123",
      property: "Oakwood Residences",
      unit: "2B",
      rent: 1050,
      status: "overdue",
      leaseEnd: "2024-09-30",
      moveIn: "2022-10-01",
      rating: 4.1,
      avatar: "AC"
    },
    {
      id: 8,
      name: "Kevin Lewis",
      email: "kevin.lewis@email.com",
      phone: "(555) 890-1234",
      property: "Downtown Lofts",
      unit: "1A",
      rent: 1550,
      status: "paid",
      leaseEnd: "2025-02-28",
      moveIn: "2024-03-01",
      rating: 4.8,
      avatar: "KL"
    }
  ]

  const activeTenants = allTenants.filter(tenant => tenant.status === 'paid')
  const pendingTenants = allTenants.filter(tenant => tenant.status === 'pending')
  const overdueTenants = allTenants.filter(tenant => tenant.status === 'overdue')

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Modern Header - Mobile Optimized */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl glass-card border border-border/50 p-4 md:p-6 lg:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10" />
        <div className="absolute top-4 right-4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col gap-4 mb-4 md:mb-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg shrink-0">
                <Users className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text">Tenant Management</h1>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg">Manage your tenants, payments, and property assignments.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <TenantOnboardingModal />
              <Button variant="outline" className="btn-outline w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                Import Tenants
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards - Mobile Grid */}
      <div className="grid gap-3 md:gap-4 lg:gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Total Tenants</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">{tenantStats.totalTenants}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">{tenantStats.activeTenants}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-orange-600">{tenantStats.pendingPayments}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <AlertTriangle className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Overdue</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">{tenantStats.overduePayments}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <DollarSign className="h-6 w-6 md:h-8 md:w-8 text-purple-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Avg Rent</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-purple-600">{tenantStats.avgRent}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Star className="h-6 w-6 md:h-8 md:w-8 text-yellow-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Renewal Rate</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">{tenantStats.renewalRate}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter - Mobile Optimized */}
      <div className="glass-card border border-border/50 p-4 md:p-6 rounded-2xl bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <div className="relative flex-1">
            <Search className="input-icon" />
            <Input 
              type="search" 
              placeholder="Search tenants by name, email, or property..." 
              className="input-modern pl-10"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] glass border border-border/50 rounded-xl">
                <SelectValue placeholder="Filter by property" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="sunset">Sunset Apartments</SelectItem>
                <SelectItem value="riverside">Riverside Condos</SelectItem>
                <SelectItem value="oakwood">Oakwood Residences</SelectItem>
                <SelectItem value="downtown">Downtown Lofts</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[160px] glass border border-border/50 rounded-xl">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="btn-outline w-full sm:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Tabs - Mobile Optimized */}
      <Tabs defaultValue="all" className="space-y-4 md:space-y-6">
        <div className="overflow-x-auto">
          <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full min-w-fit">
            <TabsTrigger 
              value="all" 
              className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 text-xs md:text-sm whitespace-nowrap px-3 md:px-4"
            >
              <Users className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              All Tenants
            </TabsTrigger>
            <TabsTrigger 
              value="active"
              className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 text-xs md:text-sm whitespace-nowrap px-3 md:px-4"
            >
              <CheckCircle className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              Active
            </TabsTrigger>
            <TabsTrigger 
              value="pending"
              className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 text-xs md:text-sm whitespace-nowrap px-3 md:px-4"
            >
              <Clock className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              Pending
            </TabsTrigger>
            <TabsTrigger 
              value="overdue"
              className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 text-xs md:text-sm whitespace-nowrap px-3 md:px-4"
            >
              <AlertTriangle className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
              Overdue
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                  <Users className="h-5 w-5" />
                </div>
                All Tenants
              </CardTitle>
              <CardDescription className="text-base">Complete list of all tenants across your properties</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {allTenants.map((tenant) => (
                <Card key={tenant.id} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-14 w-14 border-2 border-primary/30 shadow-md">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-semibold text-lg">{tenant.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{tenant.name}</p>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold">
                                {tenant.property}
                              </Badge>
                              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 px-2 py-1 text-xs font-semibold">
                                Unit {tenant.unit}
                              </Badge>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Mail className="h-4 w-4" />
                              <span>{tenant.email}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <span>{tenant.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-medium">${tenant.rent}/month</span>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Move-in: {new Date(tenant.moveIn).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Lease ends: {new Date(tenant.leaseEnd).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>Rating: {tenant.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className={`px-3 py-1 font-semibold ${
                          tenant.status === 'paid'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200'
                            : tenant.status === 'pending'
                              ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200'
                              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200'
                        }`}>
                          {tenant.status === 'paid' ? 'Paid' : tenant.status === 'pending' ? 'Pending' : 'Overdue'}
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Message</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <CheckCircle className="h-5 w-5" />
                </div>
                Active Tenants
              </CardTitle>
              <CardDescription className="text-base">Tenants with active leases and up-to-date payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {activeTenants.map((tenant) => (
                <Card key={tenant.id} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-14 w-14 border-2 border-green-500/30 shadow-md">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-lg">{tenant.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{tenant.name}</p>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold">
                                {tenant.property}
                              </Badge>
                              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 px-2 py-1 text-xs font-semibold">
                                Unit {tenant.unit}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-medium">${tenant.rent}/month</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>Rating: {tenant.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-3 py-1 font-semibold">
                          Paid
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View Details</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-600 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                Pending Payments
              </CardTitle>
              <CardDescription className="text-base">Tenants with upcoming or pending payments requiring follow-up</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingTenants.map((tenant) => (
                <Card key={tenant.id} className="glass-card border border-border/50 hover:border-orange-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-14 w-14 border-2 border-orange-500/30 shadow-md">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-orange-500 to-yellow-600 text-white font-semibold text-lg">{tenant.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{tenant.name}</p>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold">
                                {tenant.property}
                              </Badge>
                              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 px-2 py-1 text-xs font-semibold">
                                Unit {tenant.unit}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-medium">${tenant.rent}/month</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              <span>{tenant.phone}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 px-3 py-1 font-semibold">
                          Pending
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Send Reminder</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="overdue" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-red-500 to-pink-600 text-white">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                Overdue Payments
              </CardTitle>
              <CardDescription className="text-base">Tenants with overdue payments requiring immediate attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {overdueTenants.map((tenant) => (
                <Card key={tenant.id} className="glass-card border border-border/50 hover:border-red-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <Avatar className="h-14 w-14 border-2 border-red-500/30 shadow-md">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold text-lg">{tenant.avatar}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{tenant.name}</p>
                            <div className="flex items-center gap-2">
                              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold">
                                {tenant.property}
                              </Badge>
                              <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 px-2 py-1 text-xs font-semibold">
                                Unit {tenant.unit}
                              </Badge>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              <span className="font-medium text-red-600">${tenant.rent}/month overdue</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Phone className="h-4 w-4" />
                              <span>{tenant.phone}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4 text-red-500" />
                            <span className="text-sm text-red-600 font-medium">Immediate action required</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 px-3 py-1 font-semibold">
                          Overdue
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md border-red-200 text-red-600 hover:bg-red-50">
                          <Phone className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Call Now</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
