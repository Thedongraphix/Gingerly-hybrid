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
      <div className="rounded-2xl bg-card border border-border p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-center">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-3 rounded-xl bg-navy-500 text-white flex-shrink-0">
                <Home className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-navy-500 truncate">Welcome Home, Sarah!</h1>
                <p className="text-muted-foreground text-sm sm:text-base">Everything you need to manage your rental experience.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button className="bg-teal-500 hover:bg-teal-600 text-white">
              <CreditCard className="mr-2 h-5 w-5" />
              Pay Rent
            </Button>
            <Button variant="outline" className="border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white">
              <User className="mr-2 h-5 w-5" />
              Contact Agent
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Alert */}
      <Alert className="border-l-4 border-l-orange-500 bg-orange-50">
        <div className="p-2 rounded-lg bg-orange-500 text-white w-fit">
          <Clock className="h-4 w-4" />
        </div>
        <AlertTitle className="text-navy-600 font-semibold text-base sm:text-lg">
          Rent Payment Due Soon!
        </AlertTitle>
        <AlertDescription className="text-navy-500 text-sm sm:text-base">
          Your monthly rent of <span className="font-semibold text-orange-600">$1,200.00</span> is due in 3 days (May 1, 2024). Autopay is enabled.
        </AlertDescription>
      </Alert>

      {/* Modern Stats Cards */}
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="border border-border rounded-2xl hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex justify-between items-start gap-3">
              <div className="space-y-2 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">Current Rent</p>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-600">
                  $1,200.00
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Due on the 1st of each month
                </p>
              </div>

              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-navy-500 text-white flex items-center justify-center">
                  <Home className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border rounded-2xl hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex justify-between items-start gap-3">
              <div className="space-y-2 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">Next Payment</p>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-navy-600">
                  May 1
                </h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200 px-2 py-1 font-semibold text-xs">
                    3 days left
                  </Badge>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-teal-500 text-white flex items-center justify-center">
                  <Calendar className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border rounded-2xl hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex justify-between items-start gap-3">
              <div className="space-y-2 flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">Payment Method</p>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-navy-600">
                  Visa •••• 4242
                </h3>
                <Button variant="link" className="h-auto p-0 text-xs sm:text-sm font-medium text-teal-600 hover:text-teal-700">
                  Update payment method
                </Button>
              </div>

              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-navy-500 text-white flex items-center justify-center">
                  <CreditCard className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Tabs */}
      <Tabs defaultValue="payments" className="space-y-4 sm:space-y-6">
        <TabsList className="bg-muted p-1 rounded-xl w-full sm:w-auto grid grid-cols-3 sm:inline-grid sm:grid-flow-col gap-1">
          <TabsTrigger
            value="payments"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white rounded-lg font-medium text-xs sm:text-sm px-3 sm:px-4 text-navy-500"
          >
            <TrendingUp className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Payments</span>
            <span className="sm:hidden">Pay</span>
          </TabsTrigger>
          <TabsTrigger
            value="apartment"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white rounded-lg font-medium text-xs sm:text-sm px-3 sm:px-4 text-navy-500"
          >
            <Home className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">My Apartment</span>
            <span className="sm:hidden">Home</span>
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="data-[state=active]:bg-teal-500 data-[state=active]:text-white rounded-lg font-medium text-xs sm:text-sm px-3 sm:px-4 text-navy-500"
          >
            <FileText className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">Documents</span>
            <span className="sm:hidden">Docs</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="payments" className="space-y-6">
          <Card className="border border-border rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-navy-500 text-white">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <span className="text-navy-600">Payment History</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm">Track all your rental payments and receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <PaymentHistory />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="apartment" className="space-y-6">
          <Card className="border border-border rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-teal-500 text-white">
                  <Home className="h-5 w-5" />
                </div>
                <span className="text-navy-600">Apartment Details</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm">Information about your current residence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="p-4 sm:p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-navy-500 text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-navy-600 mb-2">Sunset Apartments, Unit 3B</h3>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium">123 Main Street, Anytown, ST 12345</p>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl border border-border bg-card">
                <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-teal-500 text-white flex items-center justify-center flex-shrink-0">
                    <FileText className="h-4 w-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-navy-600">Lease Information</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { label: "Start Date", value: "January 1, 2024" },
                    { label: "End Date", value: "December 31, 2024" },
                    { label: "Monthly Rent", value: "$1,200.00" },
                    { label: "Security Deposit", value: "$1,200.00" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <p className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="text-base sm:text-lg font-bold text-navy-600">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card className="border border-border rounded-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-navy-500 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="text-navy-600">Documents</span>
              </CardTitle>
              <CardDescription className="text-muted-foreground text-sm">Access your lease agreement and payment receipts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4">
              <Card className="border border-border rounded-xl hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-teal-500 text-white flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="space-y-1 min-w-0">
                        <h3 className="font-bold text-base sm:text-lg text-navy-600 truncate">Lease Agreement</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium">Signed on January 1, 2024</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white w-full sm:w-auto">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {["April 2024", "March 2024", "February 2024"].map((month, i) => (
                <Card key={i} className="border border-border rounded-xl hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-600 text-white flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <h3 className="font-bold text-base sm:text-lg text-navy-600 truncate">
                            Rent Receipt - {month}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                            Generated on {month.split(' ')[0]} 1, 2024
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white w-full sm:w-auto">
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
