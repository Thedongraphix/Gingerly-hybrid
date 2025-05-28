import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Wrench, 
  Clock, 
  CheckCircle, 
  FileText, 
  Plus, 
  Search, 
  AlertTriangle,
  Droplets,
  Zap,
  Thermometer,
  Building2,
  Sparkles,
  Phone,
  User,
  XCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  Eye,
  Users
} from "lucide-react"

export default function LandlordMaintenancePage() {
  // Sample maintenance requests data for landlord
  const maintenanceRequests = [
    {
      id: "#MT-001",
      title: "Kitchen Sink Leak - Unit 3B",
      type: "Plumbing",
      priority: "high",
      status: "in-progress",
      property: "Sunset Apartments",
      unit: "3B",
      tenant: "Sarah Johnson",
      date: "2024-05-01",
      assignedTo: "Mike Johnson",
      estimatedCost: "$150",
      description: "Water dripping from under the kitchen sink. Appears to be a pipe connection issue."
    },
    {
      id: "#MT-002", 
      title: "Bedroom Light Not Working - Unit 2A",
      type: "Electrical",
      priority: "medium",
      status: "pending",
      property: "Riverside Condos",
      unit: "2A",
      tenant: "Robert Taylor",
      date: "2024-04-30",
      assignedTo: "Pending Assignment",
      estimatedCost: "$75",
      description: "Main bedroom ceiling light stopped working suddenly. May need bulb replacement or electrical check."
    },
    {
      id: "#MT-003",
      title: "AC Unit Making Noise - Unit 1C",
      type: "HVAC",
      priority: "low",
      status: "scheduled",
      property: "Oakwood Residences",
      unit: "1C",
      tenant: "Emily Davis",
      date: "2024-04-28",
      assignedTo: "Sarah Davis",
      estimatedCost: "$200",
      description: "Air conditioning unit making unusual grinding noise when starting up."
    },
    {
      id: "#MT-004",
      title: "Bathroom Faucet Repair - Unit 4D",
      type: "Plumbing",
      priority: "medium",
      status: "completed",
      property: "Sunset Apartments",
      unit: "4D",
      tenant: "Michael Brown",
      date: "2024-04-25",
      assignedTo: "Mike Johnson",
      estimatedCost: "$120",
      completedDate: "2024-04-26",
      description: "Bathroom faucet needs cartridge replacement and cleaning."
    },
    {
      id: "#MT-005",
      title: "Living Room Outlet Replacement - Unit 3A",
      type: "Electrical",
      priority: "high",
      status: "completed",
      property: "Riverside Condos", 
      unit: "3A",
      tenant: "Lisa Chen",
      date: "2024-04-20",
      assignedTo: "Lisa Chen",
      estimatedCost: "$95",
      completedDate: "2024-04-22",
      description: "GFCI outlet needs replacement due to electrical fault."
    }
  ]

  const activeRequests = maintenanceRequests.filter(req => req.status !== 'completed')
  const completedRequests = maintenanceRequests.filter(req => req.status === 'completed')
  const pendingRequests = maintenanceRequests.filter(req => req.status === 'pending')

  // Sample technicians data
  const technicians = [
    { id: 1, name: "Mike Johnson", specialty: "Plumbing", phone: "(555) 123-4567", active: 2 },
    { id: 2, name: "Sarah Davis", specialty: "HVAC", phone: "(555) 234-5678", active: 1 },
    { id: 3, name: "Lisa Chen", specialty: "Electrical", phone: "(555) 345-6789", active: 0 },
    { id: 4, name: "David Wilson", specialty: "General", phone: "(555) 456-7890", active: 1 }
  ]

  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-background to-orange-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg">
              <Wrench className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Maintenance Management</h1>
              <p className="text-muted-foreground text-base md:text-lg">Track and manage maintenance requests across all properties.</p>
            </div>
            <Button className="btn-primary shadow-lg hover:shadow-xl w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Create Request
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-4">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100/50 dark:from-orange-950/30 dark:to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Active Requests</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {activeRequests.length}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Pending & in progress
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
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
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">High Priority</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {maintenanceRequests.filter(req => req.priority === 'high' && req.status !== 'completed').length}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Urgent repairs needed
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-red-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <AlertTriangle className="h-6 w-6 md:h-7 md:w-7" />
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
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Completed</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {completedRequests.length}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  This month
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CheckCircle className="h-6 w-6 md:h-7 md:w-7" />
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
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Active Technicians</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {technicians.filter(tech => tech.active > 0).length}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Currently working
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Users className="h-6 w-6 md:h-7 md:w-7" />
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
              placeholder="Search by request ID, property, unit, or tenant..." 
              className="input-modern pl-10"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] glass border border-border/50 rounded-xl">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] glass border border-border/50 rounded-xl">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="plumbing">Plumbing</SelectItem>
                <SelectItem value="electrical">Electrical</SelectItem>
                <SelectItem value="hvac">HVAC</SelectItem>
                <SelectItem value="general">General</SelectItem>
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
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Main Content - 3/4 width */}
        <div className="lg:col-span-3 space-y-6">
          {/* Enhanced Tabs */}
          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full md:w-auto">
              <TabsTrigger 
                value="active" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
              >
                <Clock className="mr-2 h-4 w-4" />
                Active ({activeRequests.length})
              </TabsTrigger>
              <TabsTrigger 
                value="completed"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
              >
                <CheckCircle className="mr-2 h-4 w-4" />
                Completed ({completedRequests.length})
              </TabsTrigger>
              <TabsTrigger 
                value="pending"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
              >
                <AlertTriangle className="mr-2 h-4 w-4" />
                Pending ({pendingRequests.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-6">
              <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 text-white">
                      <Clock className="h-5 w-5" />
                    </div>
                    Active Maintenance Requests
                  </CardTitle>
                  <CardDescription className="text-base">Requests currently being processed</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeRequests.map((request, i) => (
                    <Card key={request.id} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className={`w-12 h-12 rounded-2xl ${
                              request.status === 'in-progress'
                                ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
                                : request.status === 'scheduled'
                                  ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                                  : 'bg-gradient-to-r from-orange-500 to-yellow-600'
                            } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              {request.type === 'Plumbing' && <Droplets className="h-6 w-6" />}
                              {request.type === 'Electrical' && <Zap className="h-6 w-6" />}
                              {request.type === 'HVAC' && <Thermometer className="h-6 w-6" />}
                            </div>
                            <div className="space-y-2 flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{request.title}</p>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold">
                                    {request.id}
                                  </Badge>
                                  <Badge className={`px-2 py-1 text-xs font-semibold ${
                                    request.priority === 'high'
                                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200'
                                      : request.priority === 'medium' 
                                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200'
                                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200'
                                  }`}>
                                    {request.priority} priority
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                                <span>{request.type} • {request.date}</span>
                                <div className="flex items-center gap-1">
                                  <Building2 className="h-4 w-4" />
                                  <span>{request.property} • Unit {request.unit}</span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground">{request.description}</p>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-muted-foreground">Tenant:</span>
                                  <span className="font-medium text-foreground">{request.tenant}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Wrench className="h-4 w-4 text-muted-foreground" />
                                  <span className="text-muted-foreground">Assigned to:</span>
                                  <span className="font-medium text-foreground">{request.assignedTo}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                                  <span className="font-medium text-foreground">{request.estimatedCost}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <Badge className={`px-3 py-1 font-semibold ${
                              request.status === 'in-progress'
                                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200'
                                : request.status === 'scheduled'
                                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 border-purple-200'
                                  : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200'
                            }`}>
                              {request.status === 'in-progress' ? 'In Progress' : request.status === 'scheduled' ? 'Scheduled' : 'Pending'}
                            </Badge>
                            <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                              <Phone className="mr-2 h-4 w-4" />
                              <span className="hidden sm:inline">Contact</span>
                            </Button>
                            <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                              <ArrowRight className="mr-2 h-4 w-4" />
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

            <TabsContent value="completed" className="space-y-6">
              <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    Completed Maintenance
                  </CardTitle>
                  <CardDescription className="text-base">Successfully completed maintenance requests</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {completedRequests.map((request, i) => (
                    <Card key={request.id} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <CheckCircle className="h-6 w-6" />
                            </div>
                            <div className="space-y-2 flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{request.title}</p>
                                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold w-fit">
                                  {request.id}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                                <span>{request.type}</span>
                                <div className="flex items-center gap-1">
                                  <Building2 className="h-4 w-4" />
                                  <span>{request.property} • Unit {request.unit}</span>
                                </div>
                              </div>
                              <p className="text-sm text-muted-foreground">{request.description}</p>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                                <span className="text-muted-foreground">Requested: {request.date}</span>
                                <span className="text-muted-foreground">• Completed: {request.completedDate}</span>
                                <span className="text-muted-foreground">• Cost: {request.estimatedCost}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Completed by:</span>
                                <span className="font-medium text-foreground">{request.assignedTo}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 px-3 py-1 font-semibold">
                              Completed
                            </Badge>
                            <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                              <FileText className="mr-2 h-4 w-4" />
                              <span className="hidden sm:inline">Report</span>
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
                      <AlertTriangle className="h-5 w-5" />
                    </div>
                    Pending Assignment
                  </CardTitle>
                  <CardDescription className="text-base">Requests awaiting technician assignment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pendingRequests.map((request, i) => (
                    <Card key={request.id} className="glass-card border border-border/50 hover:border-orange-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex items-start gap-4 flex-1">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <AlertTriangle className="h-6 w-6" />
                            </div>
                            <div className="space-y-2 flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{request.title}</p>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 px-2 py-1 text-xs font-semibold">
                                    {request.id}
                                  </Badge>
                                  <Badge className={`px-2 py-1 text-xs font-semibold ${
                                    request.priority === 'high'
                                      ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border-red-200'
                                      : request.priority === 'medium' 
                                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200'
                                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200'
                                  }`}>
                                    {request.priority} priority
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                                <span>{request.type} • {request.date}</span>
                                <div className="flex items-center gap-1">
                                  <Building2 className="h-4 w-4" />
                                  <span>{request.property} • Unit {request.unit}</span>
                                </div>
                                <span>Est. {request.estimatedCost}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{request.description}</p>
                              <div className="flex items-center gap-2 text-sm">
                                <User className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Tenant:</span>
                                <span className="font-medium text-foreground">{request.tenant}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200 px-3 py-1 font-semibold">
                              Pending
                            </Badge>
                            <Button size="sm" className="btn-primary">
                              <Users className="mr-2 h-4 w-4" />
                              Assign
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

        {/* Sidebar - 1/4 width */}
        <div className="space-y-6">
          {/* Technicians List */}
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <Users className="h-5 w-5" />
                </div>
                Technicians
              </CardTitle>
              <CardDescription className="text-base">Available maintenance staff</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicians.map((tech, i) => (
                <Card key={tech.id} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm group-hover:text-primary transition-colors duration-200">{tech.name}</p>
                        <Badge className={`text-xs ${
                          tech.active > 0 
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200'
                        }`}>
                          {tech.active > 0 ? `${tech.active} active` : 'Available'}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{tech.specialty}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        <span>{tech.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button variant="outline" className="w-full btn-outline hover:shadow-md">
                <Plus className="mr-2 h-4 w-4" />
                Add Technician
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full btn-primary">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Maintenance
              </Button>
              <Button variant="outline" className="w-full btn-outline">
                <FileText className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
              <Button variant="outline" className="w-full btn-outline">
                <Eye className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 