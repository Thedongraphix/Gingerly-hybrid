import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  ArrowUpRight, 
  Calendar, 
  CreditCard, 
  Download, 
  Search, 
  DollarSign, 
  TrendingUp,
  AlertTriangle,
  Clock,
  Sparkles,
  CheckCircle,
  XCircle,
  Bell,
  FileText,
  Filter,
  Users
} from "lucide-react"

export default function LandlordPaymentsPage() {
  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-blue-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-600 text-white shadow-lg">
              <CreditCard className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Payments Dashboard</h1>
              <p className="text-muted-foreground text-base md:text-lg">Manage and track all tenant payment activities with ease.</p>
            </div>
            <Button className="btn-primary shadow-lg hover:shadow-xl w-full sm:w-auto">
              <FileText className="mr-2 h-4 w-4" />
              Download Report
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Statistics Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Total Collected</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  $24,560.00
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  +12.5% from last month
                </p>
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
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-100/50 dark:from-orange-950/30 dark:to-yellow-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Pending Payments</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  $4,890.00
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300 flex items-center gap-1">
                  <Users className="h-3 w-3 text-orange-500" />
                  5 tenants pending
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Clock className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-100/50 dark:from-red-950/30 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Overdue Payments</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  $2,450.00
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300 flex items-center gap-1">
                  <AlertTriangle className="h-3 w-3 text-red-500" />
                  2 tenants overdue
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <XCircle className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-100/50 dark:from-blue-950/30 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Collection Rate</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  92%
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300 flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-blue-500" />
                  +2% from last month
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CheckCircle className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Search and Filter Section */}
      <div className="glass-card border border-border/50 p-6 rounded-2xl bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="input-icon" />
            <Input 
              type="search" 
              placeholder="Search payments by tenant name or property..." 
              className="input-modern pl-10"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[200px] glass border border-border/50 rounded-xl">
                <SelectValue placeholder="Filter by property" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="sunset">Sunset Apartments</SelectItem>
                <SelectItem value="riverside">Riverside Condos</SelectItem>
                <SelectItem value="oakwood">Oakwood Residences</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] glass border border-border/50 rounded-xl">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="overdue">Overdue</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Enhanced Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full md:w-auto">
          <TabsTrigger 
            value="all" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Filter className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">All </span>Payments
          </TabsTrigger>
          <TabsTrigger 
            value="recent"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Clock className="mr-2 h-4 w-4" />
            Recent
          </TabsTrigger>
          <TabsTrigger 
            value="pending"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Bell className="mr-2 h-4 w-4" />
            Pending
          </TabsTrigger>
          <TabsTrigger 
            value="overdue"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <AlertTriangle className="mr-2 h-4 w-4" />
            Overdue
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Filter className="h-5 w-5" />
                </div>
                All Payments
              </CardTitle>
              <CardDescription className="text-base">Complete overview of all tenant payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  tenant: "Sarah Johnson",
                  property: "Sunset Apartments, Unit 3B",
                  date: "May 1, 2024",
                  amount: "$1,200.00",
                  status: "pending",
                },
                {
                  tenant: "Michael Brown",
                  property: "Riverside Condos, Unit 2A",
                  date: "April 30, 2024",
                  amount: "$950.00",
                  status: "completed",
                },
                {
                  tenant: "Emily Davis",
                  property: "Oakwood Residences, Unit 5C",
                  date: "April 29, 2024",
                  amount: "$1,050.00",
                  status: "completed",
                },
                {
                  tenant: "David Wilson",
                  property: "Sunset Apartments, Unit 1D",
                  date: "April 28, 2024",
                  amount: "$1,350.00",
                  status: "overdue",
                },
                {
                  tenant: "Lisa Thompson",
                  property: "Riverside Condos, Unit 4B",
                  date: "April 27, 2024",
                  amount: "$900.00",
                  status: "completed",
                },
                {
                  tenant: "Robert Taylor",
                  property: "Oakwood Residences, Unit 2D",
                  date: "April 26, 2024",
                  amount: "$1,150.00",
                  status: "completed",
                },
                {
                  tenant: "Jennifer Adams",
                  property: "Sunset Apartments, Unit 6A",
                  date: "April 25, 2024",
                  amount: "$1,250.00",
                  status: "overdue",
                },
              ].map((payment, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-2xl ${
                          payment.status === 'completed' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                            : payment.status === 'pending'
                              ? 'bg-gradient-to-r from-orange-500 to-yellow-600'
                              : 'bg-gradient-to-r from-red-500 to-pink-600'
                        } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {payment.status === 'completed' && <CheckCircle className="h-6 w-6" />}
                          {payment.status === 'pending' && <Clock className="h-6 w-6" />}
                          {payment.status === 'overdue' && <XCircle className="h-6 w-6" />}
                        </div>
                        <div className="space-y-1 flex-1">
                          <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{payment.tenant}</p>
                          <p className="text-sm text-muted-foreground font-medium">{payment.property}</p>
                          <p className="text-xs text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="font-bold text-xl text-foreground">{payment.amount}</p>
                        <Badge className={`px-3 py-1 font-semibold ${
                          payment.status === 'completed' 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200' 
                            : payment.status === 'pending'
                              ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200'
                              : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200'
                        }`}>
                          {payment.status === "completed" ? "Paid" : payment.status === "pending" ? "Pending" : "Overdue"}
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Download className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Receipt</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <ArrowUpRight className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Details</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recent" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                Recent Payments
              </CardTitle>
              <CardDescription className="text-base">Latest payment activities from your tenants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  tenant: "Michael Brown",
                  property: "Riverside Condos, Unit 2A",
                  date: "April 30, 2024",
                  amount: "$950.00",
                  status: "completed",
                },
                {
                  tenant: "Emily Davis",
                  property: "Oakwood Residences, Unit 5C",
                  date: "April 29, 2024",
                  amount: "$1,050.00",
                  status: "completed",
                },
                {
                  tenant: "Lisa Thompson",
                  property: "Riverside Condos, Unit 4B",
                  date: "April 27, 2024",
                  amount: "$900.00",
                  status: "completed",
                },
                {
                  tenant: "Robert Taylor",
                  property: "Oakwood Residences, Unit 2D",
                  date: "April 26, 2024",
                  amount: "$1,150.00",
                  status: "completed",
                },
              ].map((payment, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{payment.tenant}</p>
                          <p className="text-sm text-muted-foreground font-medium">{payment.property}</p>
                          <p className="text-xs text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="font-bold text-xl text-foreground">{payment.amount}</p>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-3 py-1 font-semibold">
                          Paid
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Download className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Receipt</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <ArrowUpRight className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Details</span>
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
                  <Bell className="h-5 w-5" />
                </div>
                Pending Payments
              </CardTitle>
              <CardDescription className="text-base">Payments awaiting completion from tenants</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  tenant: "Sarah Johnson",
                  property: "Sunset Apartments, Unit 3B",
                  date: "May 1, 2024",
                  amount: "$1,200.00",
                  status: "pending",
                },
                {
                  tenant: "Amanda Clark",
                  property: "Oakwood Residences, Unit 3A",
                  date: "May 1, 2024",
                  amount: "$1,100.00",
                  status: "pending",
                },
                {
                  tenant: "Kevin Lewis",
                  property: "Riverside Condos, Unit 1C",
                  date: "May 1, 2024",
                  amount: "$975.00",
                  status: "pending",
                },
              ].map((payment, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-orange-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{payment.tenant}</p>
                          <p className="text-sm text-muted-foreground font-medium">{payment.property}</p>
                          <p className="text-xs text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="font-bold text-xl text-foreground">{payment.amount}</p>
                        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 px-3 py-1 font-semibold">
                          Pending
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Bell className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Remind</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <ArrowUpRight className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Details</span>
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
              <CardDescription className="text-base">Payments that require immediate attention</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  tenant: "David Wilson",
                  property: "Sunset Apartments, Unit 1D",
                  date: "April 28, 2024",
                  amount: "$1,350.00",
                  status: "overdue",
                  daysLate: 3,
                },
                {
                  tenant: "Jennifer Adams",
                  property: "Sunset Apartments, Unit 6A",
                  date: "April 25, 2024",
                  amount: "$1,250.00",
                  status: "overdue",
                  daysLate: 6,
                },
              ].map((payment, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-red-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <XCircle className="h-6 w-6" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{payment.tenant}</p>
                          <p className="text-sm text-muted-foreground font-medium">{payment.property}</p>
                          <p className="text-xs text-muted-foreground">{payment.date}</p>
                          <p className="text-xs text-red-600 font-semibold">{payment.daysLate} days late</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <p className="font-bold text-xl text-foreground">{payment.amount}</p>
                        <Badge className="bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200 px-3 py-1 font-semibold">
                          Overdue
                        </Badge>
                        <Button className="btn-primary shadow-lg hover:shadow-xl">
                          <Bell className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Send Reminder</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <ArrowUpRight className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Details</span>
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
