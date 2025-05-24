import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  AlertCircle, 
  Calendar, 
  CreditCard, 
  Download, 
  Home, 
  Sparkles,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  Shield,
  TrendingUp,
  User
} from "lucide-react"
import { PaymentHistory } from "@/components/dashboard/payment-history"
import { cn } from "@/lib/utils"

export default function TenantDashboard() {
  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-background to-emerald-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl" />
        
        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                <Home className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold gradient-text">Welcome Home, Sarah!</h1>
                <p className="text-muted-foreground text-lg">Everything you need to manage your rental experience.</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="btn-primary shadow-lg hover:shadow-xl">
              <CreditCard className="mr-2 h-5 w-5" />
              Pay Rent
            </Button>
            <Button variant="outline" className="btn-outline shadow-sm hover:shadow-md">
              <User className="mr-2 h-5 w-5" />
              Contact Landlord
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
          💳 Rent Payment Due Soon!
        </AlertTitle>
        <AlertDescription className="text-orange-700 dark:text-orange-200">
          Your monthly rent of <span className="font-semibold">$1,200.00</span> is due in 3 days (May 1, 2024). Autopay is enabled.
        </AlertDescription>
      </Alert>

      {/* Modern Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Current Rent</p>
                <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  $1,200.00
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Due on the 1st of each month
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Home className="h-7 w-7" />
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
                <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  May 1
                </h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 px-2 py-1 font-semibold">
                    3 days left
                  </Badge>
                </div>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Calendar className="h-7 w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-100/50 dark:from-purple-950/30 dark:to-violet-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Payment Method</p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  Visa •••• 4242
                </h3>
                <Button variant="link" className="h-auto p-0 text-sm font-medium text-primary hover:text-primary/80">
                  Update payment method
                </Button>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CreditCard className="h-7 w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Tabs */}
      <Tabs defaultValue="payments" className="space-y-6">
        <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md">
          <TabsTrigger 
            value="payments" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <TrendingUp className="mr-2 h-4 w-4" />
            Payments
          </TabsTrigger>
          <TabsTrigger 
            value="apartment"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <Home className="mr-2 h-4 w-4" />
            My Apartment
          </TabsTrigger>
          <TabsTrigger 
            value="documents"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <FileText className="mr-2 h-4 w-4" />
            Documents
          </TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                Payment History
              </CardTitle>
              <CardDescription>Track all your rental payments and receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentHistory />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apartment" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Home className="h-5 w-5" />
                </div>
                Apartment Details
              </CardTitle>
              <CardDescription>Information about your current residence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="glass-card p-6 rounded-2xl border border-border/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Sunset Apartments, Unit 3B</h3>
                    <p className="text-muted-foreground font-medium">123 Main Street, Anytown, ST 12345</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-border/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white">
                    <FileText className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Lease Information</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Start Date", value: "January 1, 2024" },
                    { label: "End Date", value: "December 31, 2024" },
                    { label: "Monthly Rent", value: "$1,200.00" },
                    { label: "Security Deposit", value: "$1,200.00" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-lg font-bold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                Documents
              </CardTitle>
              <CardDescription>Access your lease agreement and payment receipts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Shield className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">Lease Agreement</h3>
                        <p className="text-sm text-muted-foreground font-medium">Signed on January 1, 2024</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {["April 2024", "March 2024", "February 2024"].map((month, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">
                            Rent Receipt - {month}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium">
                            Generated on {month.split(' ')[0]} 1, 2024
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
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
