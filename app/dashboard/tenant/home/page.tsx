import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { 
  AlertCircle, 
  Calendar, 
  Download, 
  Home, 
  MessageSquare, 
  Wrench, 
  MapPin, 
  FileText, 
  Shield, 
  Phone, 
  Mail, 
  CheckCircle, 
  Clock, 
  User, 
  Sparkles,
  Star,
  Zap
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function TenantHomePage() {
  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
              <Home className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold gradient-text">My Home</h1>
              <p className="text-muted-foreground text-lg">Manage your apartment details and maintenance requests with ease.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Statistics Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100/50 dark:from-blue-950/30 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Property</p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  Sunset Apartments
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Unit 3B
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Home className="h-7 w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Lease Period</p>
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  Jan 1 - Dec 31, 2024
                </h3>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-2 py-1 font-semibold">
                    8 months remaining
                  </Badge>
                </div>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Calendar className="h-7 w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100/50 dark:from-orange-950/30 dark:to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Maintenance</p>
                <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  1 Active Request
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Last updated 2 days ago
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Wrench className="h-7 w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Tabs */}
      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md">
          <TabsTrigger 
            value="details" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <Home className="mr-2 h-4 w-4" />
            Apartment Details
          </TabsTrigger>
          <TabsTrigger 
            value="maintenance"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <Wrench className="mr-2 h-4 w-4" />
            Maintenance
          </TabsTrigger>
          <TabsTrigger 
            value="documents"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <FileText className="mr-2 h-4 w-4" />
            Documents
          </TabsTrigger>
          <TabsTrigger 
            value="amenities"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
          >
            <Star className="mr-2 h-4 w-4" />
            Amenities
          </TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Home className="h-5 w-5" />
                </div>
                Apartment Information
              </CardTitle>
              <CardDescription>Comprehensive details about your current residence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Address Section */}
              <div className="glass-card p-6 rounded-2xl border border-border/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">Address</h3>
                    <p className="text-lg font-semibold text-foreground">Sunset Apartments, Unit 3B</p>
                    <p className="text-muted-foreground font-medium">123 Main Street, Anytown, ST 12345</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Apartment Details */}
              <div className="glass-card p-6 rounded-2xl border border-border/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white">
                    <Home className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Apartment Details</h3>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                  {[
                    { label: "Bedrooms", value: "2", icon: "🛏️" },
                    { label: "Bathrooms", value: "1", icon: "🚿" },
                    { label: "Square Feet", value: "850", icon: "📐" },
                    { label: "Floor", value: "3rd", icon: "🏢" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{item.icon}</span>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Lease Information */}
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

              <Separator className="my-6" />

              {/* Property Management */}
              <div className="glass-card p-6 rounded-2xl border border-border/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white">
                    <User className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Property Management</h3>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Property Manager</p>
                    <p className="text-lg font-bold text-foreground">John Doe</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Contact Information</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">manager@example.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">(555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white">
                    <Wrench className="h-5 w-5" />
                  </div>
                  Maintenance Requests
                </CardTitle>
                <CardDescription>Submit and track maintenance issues with ease</CardDescription>
              </div>
              <Button className="btn-primary shadow-lg hover:shadow-xl">
                <Sparkles className="mr-2 h-4 w-4" />
                New Request
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Active Alert */}
              <Alert className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50 dark:border-blue-800 dark:from-blue-950/30 dark:to-cyan-950/30">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white w-fit">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <AlertTitle className="text-blue-900 dark:text-blue-100 font-semibold">
                  🔧 Maintenance Visit Scheduled
                </AlertTitle>
                <AlertDescription className="text-blue-700 dark:text-blue-200">
                  A plumber will visit your apartment tomorrow between 10am-12pm to fix the kitchen sink leak.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                {/* Active Request */}
                <Card className="glass-card border border-border/50 hover:border-orange-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Wrench className="h-6 w-6" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">Kitchen Sink Leak</h3>
                            <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 px-3 py-1 font-semibold">
                              Active
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">Reported on May 1, 2024</p>
                          <p className="text-sm text-foreground">Leak under the kitchen sink causing water damage.</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Completed Requests */}
                {[
                  { title: "Bathroom Fan Replacement", date: "April 15, 2024", description: "Bathroom exhaust fan not working properly." },
                  { title: "Living Room Light Fixture", date: "March 10, 2024", description: "Light fixture in living room not working." }
                ].map((request, i) => (
                  <Card key={i} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle className="h-6 w-6" />
                          </div>
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3 flex-wrap">
                              <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{request.title}</h3>
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 font-semibold">
                                Completed
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground font-medium">Reported on {request.date}</p>
                            <p className="text-sm text-foreground">{request.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
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
              {/* Lease Agreement */}
              <Card className="glass-card border border-border/50 hover:border-blue-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
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

              {/* Payment Receipts */}
              {["April 2024", "March 2024", "February 2024"].map((month, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
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

              {/* Additional Documents */}
              <Card className="glass-card border border-border/50 hover:border-orange-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Home className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">Move-In Inspection Report</h3>
                        <p className="text-sm text-muted-foreground font-medium">Completed on January 1, 2024</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border border-border/50 hover:border-purple-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-200">Building Rules & Regulations</h3>
                        <p className="text-sm text-muted-foreground font-medium">Last updated December 15, 2023</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="amenities" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
                  <Star className="h-5 w-5" />
                </div>
                Building Amenities
              </CardTitle>
              <CardDescription>Premium facilities available in your building</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Swimming Pool",
                    hours: "Open 8am - 10pm daily",
                    description: "Located on the ground floor. Access with your key fob.",
                    icon: "🏊‍♂️",
                    gradient: "from-blue-500 to-cyan-600"
                  },
                  {
                    title: "Fitness Center",
                    hours: "Open 24/7",
                    description: "State-of-the-art equipment. Access with your key fob.",
                    icon: "🏋️‍♀️",
                    gradient: "from-green-500 to-emerald-600"
                  },
                  {
                    title: "Rooftop Terrace",
                    hours: "Open 6am - 11pm daily",
                    description: "Beautiful city views. Perfect for relaxation and events.",
                    icon: "🌆",
                    gradient: "from-purple-500 to-pink-600"
                  },
                  {
                    title: "Community Lounge",
                    hours: "Open 24/7",
                    description: "Work space and social area. High-speed WiFi available.",
                    icon: "🛋️",
                    gradient: "from-orange-500 to-red-600"
                  },
                  {
                    title: "Laundry Facility",
                    hours: "Open 6am - 11pm daily",
                    description: "Modern washers and dryers. Located on the ground floor.",
                    icon: "🧺",
                    gradient: "from-teal-500 to-blue-600"
                  },
                  {
                    title: "Bike Storage",
                    hours: "Access 24/7",
                    description: "Secure storage for your bicycle. Located in the basement.",
                    icon: "🚲",
                    gradient: "from-indigo-500 to-purple-600"
                  }
                ].map((amenity, index) => (
                  <Card key={index} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${amenity.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <span className="text-2xl">{amenity.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                            {amenity.title}
                          </h3>
                          <p className="text-sm text-muted-foreground font-medium mb-2">{amenity.hours}</p>
                          <p className="text-sm text-foreground">{amenity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Amenity Booking Section */}
              <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white shadow-lg">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">Book Amenities</h3>
                        <p className="text-sm text-muted-foreground">Reserve common spaces for private events</p>
                      </div>
                    </div>
                    <Button className="btn-primary shadow-lg hover:shadow-xl">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Make Reservation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
