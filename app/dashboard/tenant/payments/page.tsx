import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  AlertCircle, 
  Calendar, 
  CreditCard, 
  Download, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Plus, 
  Sparkles,
  TrendingUp,
  Shield,
  Zap,
  Star
} from "lucide-react"
import { PaymentMethodForm } from "@/components/dashboard/payment-method-form"

export default function TenantPaymentsPage() {
  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
              <CreditCard className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Payments</h1>
              <p className="text-muted-foreground text-base md:text-lg">Manage your rent payments and payment methods with ease.</p>
            </div>
            <Button className="btn-primary shadow-lg hover:shadow-xl w-full sm:w-auto">
              <Sparkles className="mr-2 h-4 w-4" />
              Pay Now
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Alert */}
      <Alert className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50 dark:border-orange-800 dark:from-orange-950/30 dark:to-yellow-950/30">
        <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-600 text-white w-fit">
          <Clock className="h-4 w-4" />
        </div>
        <AlertTitle className="text-orange-900 dark:text-orange-100 font-semibold">
          💳 Next Payment Due Soon!
        </AlertTitle>
        <AlertDescription className="text-orange-700 dark:text-orange-200">
          Your monthly rent of <span className="font-semibold">$1,200.00</span> will be automatically charged on May 1, 2024 (in 3 days).
        </AlertDescription>
      </Alert>

      {/* Enhanced Statistics Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Current Rent</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  $1,200.00
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Due on the 1st of each month
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
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100/50 dark:from-blue-950/30 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Next Payment</p>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  May 1, 2024
                </h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 px-2 py-1 font-semibold text-xs">
                    3 days remaining
                  </Badge>
                </div>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Calendar className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden md:col-span-2 lg:col-span-1">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100/50 dark:from-purple-950/30 dark:to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Payment Method</p>
                <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  Visa •••• 4242
                </h3>
                <Button variant="link" className="h-auto p-0 text-sm font-medium text-primary hover:text-primary/80">
                  Update payment method
                </Button>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CreditCard className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Tabs */}
      <Tabs defaultValue="history" className="space-y-6">
        <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full md:w-auto">
          <TabsTrigger 
            value="history" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Payment </span>History
          </TabsTrigger>
          <TabsTrigger 
            value="upcoming"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Clock className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Upcoming </span>Payments
          </TabsTrigger>
          <TabsTrigger 
            value="methods"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Payment </span>Methods
          </TabsTrigger>
        </TabsList>

        <TabsContent value="history" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                Payment History
              </CardTitle>
              <CardDescription>View your past rent payments and download receipts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { date: "April 1, 2024", amount: "$1,200.00", status: "completed", method: "Visa •••• 4242" },
                { date: "March 1, 2024", amount: "$1,200.00", status: "completed", method: "Visa •••• 4242" },
                { date: "February 1, 2024", amount: "$1,200.00", status: "completed", method: "Visa •••• 4242" },
                { date: "January 1, 2024", amount: "$1,200.00", status: "completed", method: "Visa •••• 4242" },
                { date: "December 1, 2023", amount: "$1,200.00", status: "completed", method: "Visa •••• 4242" }
              ].map((payment, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{payment.date}</p>
                          <p className="text-sm text-muted-foreground font-medium">via {payment.method}</p>
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                  <Clock className="h-5 w-5" />
                </div>
                Upcoming Payments
              </CardTitle>
              <CardDescription>View your scheduled rent payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { date: "May 1, 2024", amount: "$1,200.00", status: "pending", method: "Visa •••• 4242", days: "3 days" },
                { date: "June 1, 2024", amount: "$1,200.00", status: "scheduled", method: "Visa •••• 4242", days: "34 days" },
                { date: "July 1, 2024", amount: "$1,200.00", status: "scheduled", method: "Visa •••• 4242", days: "64 days" }
              ].map((payment, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-blue-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${payment.status === 'pending' ? 'bg-gradient-to-r from-orange-500 to-yellow-600' : 'bg-gradient-to-r from-blue-500 to-cyan-600'} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {payment.status === 'pending' ? <Zap className="h-6 w-6" /> : <Calendar className="h-6 w-6" />}
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{payment.date}</p>
                        <p className="text-sm text-muted-foreground font-medium">via {payment.method}</p>
                        <p className="text-xs text-muted-foreground">in {payment.days}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  <CreditCard className="h-5 w-5" />
                </div>
                Payment Methods
              </CardTitle>
              <CardDescription>Manage your payment methods and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Existing Payment Methods */}
              <Card className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs font-bold">VISA</span>
                      </div>
                      <div>
                        <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground font-medium">Expires 04/2025</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-3 py-1 font-semibold w-fit">
                      <Star className="mr-1 h-3 w-3" />
                      Default
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border border-border/50 hover:border-purple-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-4 md:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-10 rounded-xl bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs font-bold">MPESA</span>
                      </div>
                      <div>
                        <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">Mpesa</p>
                        <p className="text-sm text-muted-foreground font-medium">+254 712 345 678</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="btn-outline hover:shadow-md w-fit">
                      <Shield className="mr-2 h-4 w-4" />
                      Make Default
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Add New Payment Method */}
              <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white">
                      <Plus className="h-4 w-4" />
                    </div>
                    Add New Payment Method
                  </CardTitle>
                  <CardDescription>Add a new card or payment method for rent payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <PaymentMethodForm />
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
