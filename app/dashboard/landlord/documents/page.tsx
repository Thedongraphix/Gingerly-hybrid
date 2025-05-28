import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  FileText, 
  Download, 
  Eye, 
  Search, 
  Filter, 
  Calendar,
  CreditCard,
  Building2,
  Users,
  Shield,
  Sparkles,
  Plus,
  Clock,
  CheckCircle,
  FileCheck,
  PaperclipIcon,
  Share,
  BarChart3,
  Upload,
  Archive
} from "lucide-react"

export default function LandlordDocumentsPage() {
  // Sample documents data for landlord
  const documents = [
    {
      id: 1,
      title: "Master Lease Agreement - Sunset Apartments",
      type: "lease",
      category: "Legal",
      date: "2024-01-15",
      size: "3.2 MB",
      status: "active",
      property: "Sunset Apartments",
      description: "Standard lease template for all units"
    },
    {
      id: 2,
      title: "Monthly Financial Report - April 2024",
      type: "financial",
      category: "Finance",
      date: "2024-04-30",
      size: "890 KB",
      status: "completed",
      description: "Comprehensive revenue and expense report"
    },
    {
      id: 3,
      title: "Property Insurance Policy",
      type: "insurance",
      category: "Legal",
      date: "2024-01-20",
      size: "2.1 MB",
      status: "active",
      property: "All Properties",
      description: "Comprehensive property coverage policy"
    },
    {
      id: 4,
      title: "Tenant Application - Sarah Johnson",
      type: "tenant",
      category: "Tenant Records",
      date: "2024-01-10",
      size: "450 KB",
      status: "approved",
      property: "Sunset Apartments",
      unit: "3B",
      description: "Complete tenant application and background check"
    },
    {
      id: 5,
      title: "Property Inspection Report - Unit 3B",
      type: "inspection",
      category: "Property",
      date: "2024-04-25",
      size: "1.8 MB",
      status: "completed",
      property: "Sunset Apartments",
      unit: "3B",
      description: "Quarterly property condition assessment"
    },
    {
      id: 6,
      title: "Tax Documents - 2023 Year End",
      type: "tax",
      category: "Finance",
      date: "2024-01-31",
      size: "1.2 MB",
      status: "completed",
      description: "Annual tax filing documents and receipts"
    },
    {
      id: 7,
      title: "Maintenance Contracts - HVAC Service",
      type: "contract",
      category: "Property",
      date: "2024-03-15",
      size: "680 KB",
      status: "active",
      description: "Annual maintenance service agreements"
    },
    {
      id: 8,
      title: "Property Marketing Materials",
      type: "marketing",
      category: "Marketing",
      date: "2024-04-20",
      size: "5.4 MB",
      status: "active",
      property: "Riverside Condos",
      description: "Professional photos and property descriptions"
    }
  ]

  const recentDocuments = documents.slice(0, 4)
  const legalDocs = documents.filter(doc => doc.category === 'Legal')
  const financialDocs = documents.filter(doc => doc.category === 'Finance')
  const tenantDocs = documents.filter(doc => doc.category === 'Tenant Records')
  const propertyDocs = documents.filter(doc => doc.category === 'Property' || doc.category === 'Marketing')

  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-purple-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg">
              <FileText className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Property Documents</h1>
              <p className="text-muted-foreground text-base md:text-lg">Manage leases, financial reports, tenant records, and legal documents.</p>
            </div>
            <Button className="btn-primary shadow-lg hover:shadow-xl w-full sm:w-auto">
              <Upload className="mr-2 h-4 w-4" />
              Upload Document
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-4">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100/50 dark:from-blue-950/30 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Total Documents</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {documents.length}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  All categories
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <FileText className="h-6 w-6 md:h-7 md:w-7" />
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
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Active Leases</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {documents.filter(doc => doc.type === 'lease' && doc.status === 'active').length + 12}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Current agreements
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Users className="h-6 w-6 md:h-7 md:w-7" />
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
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Financial Reports</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {financialDocs.length}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Monthly & annual
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <BarChart3 className="h-6 w-6 md:h-7 md:w-7" />
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
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Legal Documents</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {legalDocs.length}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Contracts & policies
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Shield className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="glass-card border border-border/50 p-6 rounded-2xl bg-background/80 backdrop-blur-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="input-icon" />
            <Input 
              type="search" 
              placeholder="Search documents by name, property, or tenant..." 
              className="input-modern pl-10"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] glass border border-border/50 rounded-xl">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="tenant">Tenant Records</SelectItem>
                <SelectItem value="property">Property</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] glass border border-border/50 rounded-xl">
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
              <SelectTrigger className="w-full sm:w-[160px] glass border border-border/50 rounded-xl">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
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
            <FileText className="mr-2 h-4 w-4" />
            All Documents
          </TabsTrigger>
          <TabsTrigger 
            value="legal"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Shield className="mr-2 h-4 w-4" />
            Legal
          </TabsTrigger>
          <TabsTrigger 
            value="financial"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Financial
          </TabsTrigger>
          <TabsTrigger 
            value="tenants"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Users className="mr-2 h-4 w-4" />
            Tenants
          </TabsTrigger>
          <TabsTrigger 
            value="property"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Building2 className="mr-2 h-4 w-4" />
            Property
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                All Property Documents
              </CardTitle>
              <CardDescription className="text-base">Complete collection of property management documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {documents.map((doc, i) => (
                <Card key={doc.id} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-2xl ${
                          doc.type === 'lease' 
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
                            : doc.type === 'financial'
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                              : doc.type === 'tenant'
                                ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                                : doc.type === 'insurance'
                                  ? 'bg-gradient-to-r from-orange-500 to-red-600'
                                  : doc.type === 'inspection'
                                    ? 'bg-gradient-to-r from-yellow-500 to-orange-600'
                                    : doc.type === 'tax'
                                      ? 'bg-gradient-to-r from-red-500 to-pink-600'
                                      : doc.type === 'contract'
                                        ? 'bg-gradient-to-r from-gray-500 to-gray-600'
                                        : 'bg-gradient-to-r from-teal-500 to-cyan-600'
                        } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {doc.type === 'lease' && <Users className="h-6 w-6" />}
                          {doc.type === 'financial' && <BarChart3 className="h-6 w-6" />}
                          {doc.type === 'tenant' && <Users className="h-6 w-6" />}
                          {doc.type === 'insurance' && <Shield className="h-6 w-6" />}
                          {doc.type === 'inspection' && <Eye className="h-6 w-6" />}
                          {doc.type === 'tax' && <CreditCard className="h-6 w-6" />}
                          {doc.type === 'contract' && <FileText className="h-6 w-6" />}
                          {doc.type === 'marketing' && <Sparkles className="h-6 w-6" />}
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{doc.title}</p>
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold">
                                {doc.category}
                              </Badge>
                              <Badge className={`px-2 py-1 text-xs font-semibold ${
                                doc.status === 'active'
                                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200'
                                  : doc.status === 'approved'
                                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200'
                                    : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200'
                              }`}>
                                {doc.status}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">{new Date(doc.date).toLocaleDateString()} • {doc.size}</p>
                          {doc.property && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Building2 className="h-4 w-4" />
                              <span>{doc.property} {doc.unit && `• Unit ${doc.unit}`}</span>
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Download className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Download</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Share className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Share</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legal" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  <Shield className="h-5 w-5" />
                </div>
                Legal Documents
              </CardTitle>
              <CardDescription className="text-base">Leases, contracts, insurance policies, and legal agreements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {legalDocs.map((doc, i) => (
                <Card key={doc.id} className="glass-card border border-border/50 hover:border-purple-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-2xl ${
                          doc.type === 'lease'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
                            : 'bg-gradient-to-r from-orange-500 to-red-600'
                        } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {doc.type === 'lease' ? <Users className="h-6 w-6" /> : <Shield className="h-6 w-6" />}
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{doc.title}</p>
                            <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 px-2 py-1 text-xs font-semibold w-fit">
                              {doc.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">{new Date(doc.date).toLocaleDateString()} • {doc.size}</p>
                          {doc.property && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Building2 className="h-4 w-4" />
                              <span>{doc.property}</span>
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-3 py-1 font-semibold">
                          Active
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Download className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Download</span>
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
                  <BarChart3 className="h-5 w-5" />
                </div>
                Financial Documents
              </CardTitle>
              <CardDescription className="text-base">Monthly reports, tax documents, and financial statements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {financialDocs.map((doc, i) => (
                <Card key={doc.id} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-2xl ${
                          doc.type === 'financial'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                            : 'bg-gradient-to-r from-red-500 to-pink-600'
                        } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {doc.type === 'financial' ? <BarChart3 className="h-6 w-6" /> : <CreditCard className="h-6 w-6" />}
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{doc.title}</p>
                            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-2 py-1 text-xs font-semibold w-fit">
                              {doc.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">{new Date(doc.date).toLocaleDateString()} • {doc.size}</p>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-3 py-1 font-semibold">
                          Completed
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Download className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Download</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                Tenant Records
              </CardTitle>
              <CardDescription className="text-base">Applications, background checks, and tenant documentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {tenantDocs.map((doc, i) => (
                <Card key={doc.id} className="glass-card border border-border/50 hover:border-purple-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Users className="h-6 w-6" />
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{doc.title}</p>
                            <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200 px-2 py-1 text-xs font-semibold w-fit">
                              {doc.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">{new Date(doc.date).toLocaleDateString()} • {doc.size}</p>
                          {doc.property && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Building2 className="h-4 w-4" />
                              <span>{doc.property} {doc.unit && `• Unit ${doc.unit}`}</span>
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-3 py-1 font-semibold">
                          Approved
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Archive className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Archive</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="property" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                Property Documents
              </CardTitle>
              <CardDescription className="text-base">Inspections, maintenance contracts, and marketing materials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {propertyDocs.map((doc, i) => (
                <Card key={doc.id} className="glass-card border border-border/50 hover:border-blue-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-2xl ${
                          doc.type === 'inspection'
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-600'
                            : doc.type === 'contract'
                              ? 'bg-gradient-to-r from-gray-500 to-gray-600'
                              : 'bg-gradient-to-r from-teal-500 to-cyan-600'
                        } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {doc.type === 'inspection' && <Eye className="h-6 w-6" />}
                          {doc.type === 'contract' && <FileText className="h-6 w-6" />}
                          {doc.type === 'marketing' && <Sparkles className="h-6 w-6" />}
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{doc.title}</p>
                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold w-fit">
                              {doc.category}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium">{new Date(doc.date).toLocaleDateString()} • {doc.size}</p>
                          {doc.property && (
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Building2 className="h-4 w-4" />
                              <span>{doc.property} {doc.unit && `• Unit ${doc.unit}`}</span>
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className={`px-3 py-1 font-semibold ${
                          doc.status === 'active'
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200'
                        }`}>
                          {doc.status === 'active' ? 'Active' : 'Completed'}
                        </Badge>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Eye className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">View</span>
                        </Button>
                        <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                          <Download className="mr-2 h-4 w-4" />
                          <span className="hidden sm:inline">Download</span>
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