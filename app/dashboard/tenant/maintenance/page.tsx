import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  Bell, 
  Calendar, 
  CheckCircle, 
  Clock, 
  FileText, 
  Plus, 
  Search, 
  AlertTriangle,
  Wrench,
  Droplets,
  Zap,
  Thermometer,
  Home,
  Sparkles,
  Phone,
  User,
  XCircle,
  ArrowRight
} from "lucide-react"

export default function TenantMaintenancePage() {
  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-background to-red-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
              <Wrench className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Maintenance Requests</h1>
              <p className="text-muted-foreground text-base md:text-lg">Submit and track maintenance requests for your apartment.</p>
            </div>
            <Button className="btn-primary shadow-lg hover:shadow-xl w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              New Request
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Action Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden cursor-pointer">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100/50 dark:from-blue-950/30 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col items-center text-center space-y-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Droplets className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Plumbing</p>
                <p className="text-sm text-muted-foreground">Leaks, clogs, water pressure</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden cursor-pointer">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-100/50 dark:from-yellow-950/30 dark:to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col items-center text-center space-y-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Zap className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Electrical</p>
                <p className="text-sm text-muted-foreground">Outlets, lighting, power issues</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden cursor-pointer">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col items-center text-center space-y-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Thermometer className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">HVAC</p>
                <p className="text-sm text-muted-foreground">Heating, cooling, ventilation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden cursor-pointer">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100/50 dark:from-purple-950/30 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex flex-col items-center text-center space-y-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Home className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">General</p>
                <p className="text-sm text-muted-foreground">Appliances, doors, windows</p>
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
              placeholder="Search maintenance requests..." 
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
          </div>
        </div>
      </div>

      {/* Enhanced Tabs */}
      <Tabs defaultValue="active" className="space-y-6">
        <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full md:w-auto">
          <TabsTrigger 
            value="active" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Clock className="mr-2 h-4 w-4" />
            Active Requests
          </TabsTrigger>
          <TabsTrigger 
            value="completed"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            Completed
          </TabsTrigger>
          <TabsTrigger 
            value="new"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Plus className="mr-2 h-4 w-4" />
            New Request
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
              <CardDescription className="text-base">Current requests being processed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  id: "#MT-001",
                  title: "Kitchen Sink Leak",
                  type: "Plumbing",
                  status: "in-progress",
                  priority: "high",
                  date: "May 1, 2024",
                  description: "Water dripping from under the kitchen sink. Appears to be a pipe connection issue.",
                  assignedTo: "Mike Johnson"
                },
                {
                  id: "#MT-002", 
                  title: "Bedroom Light Not Working",
                  type: "Electrical",
                  status: "pending",
                  priority: "medium",
                  date: "April 30, 2024",
                  description: "Main bedroom ceiling light stopped working suddenly. May need bulb replacement or electrical check.",
                  assignedTo: "Pending Assignment"
                },
                {
                  id: "#MT-003",
                  title: "AC Unit Making Noise",
                  type: "HVAC",
                  status: "in-progress",
                  priority: "low",
                  date: "April 28, 2024", 
                  description: "Air conditioning unit making unusual grinding noise when starting up.",
                  assignedTo: "Sarah Davis"
                }
              ].map((request, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 rounded-2xl ${
                          request.status === 'in-progress'
                            ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
                            : 'bg-gradient-to-r from-orange-500 to-yellow-600'
                        } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {request.type === 'Plumbing' && <Droplets className="h-6 w-6" />}
                          {request.type === 'Electrical' && <Zap className="h-6 w-6" />}
                          {request.type === 'HVAC' && <Thermometer className="h-6 w-6" />}
                        </div>
                        <div className="space-y-2 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{request.title}</p>
                            <div className="flex items-center gap-2">
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
                          <p className="text-sm text-muted-foreground font-medium">{request.type} • {request.date}</p>
                          <p className="text-sm text-muted-foreground">{request.description}</p>
                          <div className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Assigned to:</span>
                            <span className="font-medium text-foreground">{request.assignedTo}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge className={`px-3 py-1 font-semibold ${
                          request.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200'
                            : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200'
                        }`}>
                          {request.status === 'in-progress' ? 'In Progress' : 'Pending'}
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
                Completed Requests
              </CardTitle>
              <CardDescription className="text-base">Successfully resolved maintenance issues</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  id: "#MT-004",
                  title: "Bathroom Faucet Repair",
                  type: "Plumbing",
                  date: "April 25, 2024",
                  completedDate: "April 26, 2024",
                  description: "Replaced worn faucet cartridge and cleaned mineral deposits.",
                  completedBy: "Mike Johnson"
                },
                {
                  id: "#MT-005",
                  title: "Living Room Outlet Replacement",
                  type: "Electrical", 
                  date: "April 20, 2024",
                  completedDate: "April 22, 2024",
                  description: "Replaced faulty GFCI outlet and tested electrical connection.",
                  completedBy: "Lisa Chen"
                }
              ].map((request, i) => (
                <Card key={i} className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
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
                          <p className="text-sm text-muted-foreground font-medium">{request.type}</p>
                          <p className="text-sm text-muted-foreground">{request.description}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                            <span className="text-muted-foreground">Requested: {request.date}</span>
                            <span className="text-muted-foreground">• Completed: {request.completedDate}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">Completed by:</span>
                            <span className="font-medium text-foreground">{request.completedBy}</span>
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

        <TabsContent value="new" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                  <Plus className="h-6 w-6" />
                </div>
              </div>
              <CardTitle className="text-2xl font-bold gradient-text text-center">Submit New Maintenance Request</CardTitle>
              <CardDescription className="text-base text-center">Describe your maintenance issue and we'll get it resolved quickly</CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Request Type</label>
                  <Select>
                    <SelectTrigger className="glass border border-border/50 rounded-xl">
                      <SelectValue placeholder="Select maintenance type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="plumbing">🚰 Plumbing</SelectItem>
                      <SelectItem value="electrical">⚡ Electrical</SelectItem>
                      <SelectItem value="hvac">🌡️ HVAC</SelectItem>
                      <SelectItem value="general">🏠 General Maintenance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Priority Level</label>
                  <Select>
                    <SelectTrigger className="glass border border-border/50 rounded-xl">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">🟢 Low Priority</SelectItem>
                      <SelectItem value="medium">🟡 Medium Priority</SelectItem>
                      <SelectItem value="high">🔴 High Priority</SelectItem>
                      <SelectItem value="emergency">🚨 Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Location</label>
                  <Input placeholder="e.g., Kitchen, Bathroom, Living Room" className="input-modern" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Issue Title</label>
                  <Input placeholder="Brief description of the issue" className="input-modern" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Detailed Description</label>
                  <Textarea 
                    placeholder="Please provide a detailed description of the maintenance issue, including when it started and any relevant details..."
                    className="input-modern min-h-[120px] resize-none"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-semibold text-foreground">Preferred Contact Method</label>
                  <Select>
                    <SelectTrigger className="glass border border-border/50 rounded-xl">
                      <SelectValue placeholder="How should we contact you?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">📞 Phone Call</SelectItem>
                      <SelectItem value="text">💬 Text Message</SelectItem>
                      <SelectItem value="email">📧 Email</SelectItem>
                      <SelectItem value="app">📱 In-App Message</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <Button className="btn-primary shadow-lg hover:shadow-xl px-8">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Submit Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
} 