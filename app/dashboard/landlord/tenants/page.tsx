import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Plus, Search } from "lucide-react"
import { TenantOnboardingModal } from "@/components/dashboard/tenant-onboarding-modal"

export default function TenantsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tenants</h1>
          <p className="text-muted-foreground">Manage your tenants and their payment status.</p>
        </div>
        <div className="flex gap-2">
          <TenantOnboardingModal />
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Import Tenants
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search tenants..." className="w-full pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tenants</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="overdue">Overdue</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Tenants</CardTitle>
              <CardDescription>Manage all your tenants across all properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {["Sarah Johnson", "Michael Brown", "Emily Davis", "David Wilson", "Lisa Thompson"][i % 5]}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Sunset Apartments, Unit {["1A", "2B", "3C", "4D", "5E"][i % 5]}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={i % 3 === 0 ? "default" : i % 3 === 1 ? "outline" : "destructive"}>
                        {i % 3 === 0 ? "Paid" : i % 3 === 1 ? "Pending" : "Overdue"}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View tenant</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Tenants</CardTitle>
              <CardDescription>Tenants with active leases and up-to-date payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {
                            [
                              "Sarah Johnson",
                              "Michael Brown",
                              "Emily Davis",
                              "David Wilson",
                              "Lisa Thompson",
                              "John Smith",
                            ][i]
                          }
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Sunset Apartments, Unit {["1A", "2B", "3C", "4D", "5E", "6F"][i]}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge>Paid</Badge>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View tenant</span>
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
              <CardDescription>Tenants with upcoming or pending payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div className="space-y-1">
                        <h3 className="font-medium">{["Robert Taylor", "Amanda Clark", "Kevin Lewis"][i]}</h3>
                        <p className="text-sm text-muted-foreground">Sunset Apartments, Unit {["7G", "8H", "9I"][i]}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">Pending</Badge>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View tenant</span>
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
              <CardDescription>Tenants with overdue payments requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted" />
                      <div className="space-y-1">
                        <h3 className="font-medium">{["Jennifer Adams", "Thomas Wilson"][i]}</h3>
                        <p className="text-sm text-muted-foreground">Sunset Apartments, Unit {["10J", "11K"][i]}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="destructive">Overdue</Badge>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View tenant</span>
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
