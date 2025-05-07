import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowUpRight, Calendar, CreditCard, Download, Search } from "lucide-react"

export default function LandlordPaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Payments</h1>
          <p className="text-muted-foreground">Manage and track tenant payments.</p>
        </div>
        <div className="flex gap-2">
          <Button>Download Report</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,560.00</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,890.00</div>
            <p className="text-xs text-muted-foreground">5 tenants with pending payments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,450.00</div>
            <p className="text-xs text-muted-foreground">2 tenants with overdue payments</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Collection Rate</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search payments..." className="w-full pl-8" />
        </div>
        <div className="flex gap-2">
          <div className="w-[180px]">
            <Select defaultValue="all">
              <SelectTrigger>
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
          <div className="w-[180px]">
            <Select defaultValue="all">
              <SelectTrigger>
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

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Payments</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Payments</CardTitle>
              <CardDescription>View all tenant payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-2 rounded-lg border p-4 sm:flex-row sm:items-center"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{payment.tenant}</p>
                      <p className="text-sm text-muted-foreground">{payment.property}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">{payment.date}</p>
                      <p className="font-medium">{payment.amount}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          payment.status === "completed"
                            ? "default"
                            : payment.status === "pending"
                              ? "outline"
                              : "destructive"
                        }
                      >
                        {payment.status === "completed" ? "Paid" : payment.status === "pending" ? "Pending" : "Overdue"}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download receipt</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Payments</CardTitle>
              <CardDescription>View recent tenant payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-2 rounded-lg border p-4 sm:flex-row sm:items-center"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{payment.tenant}</p>
                      <p className="text-sm text-muted-foreground">{payment.property}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">{payment.date}</p>
                      <p className="font-medium">{payment.amount}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Paid</Badge>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                        <span className="sr-only">Download receipt</span>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Payments</CardTitle>
              <CardDescription>View pending tenant payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-2 rounded-lg border p-4 sm:flex-row sm:items-center"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{payment.tenant}</p>
                      <p className="text-sm text-muted-foreground">{payment.property}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">{payment.date}</p>
                      <p className="font-medium">{payment.amount}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Pending</Badge>
                      <Button variant="ghost" size="icon">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="overdue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Overdue Payments</CardTitle>
              <CardDescription>View overdue tenant payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
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
                  <div
                    key={i}
                    className="flex flex-col justify-between gap-2 rounded-lg border p-4 sm:flex-row sm:items-center"
                  >
                    <div className="space-y-1">
                      <p className="font-medium">{payment.tenant}</p>
                      <p className="text-sm text-muted-foreground">{payment.property}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">{payment.date}</p>
                      <p className="font-medium">{payment.amount}</p>
                      <p className="text-xs text-destructive">{payment.daysLate} days late</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">Overdue</Badge>
                      <Button variant="outline" size="sm">
                        Send Reminder
                      </Button>
                      <Button variant="ghost" size="icon">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
