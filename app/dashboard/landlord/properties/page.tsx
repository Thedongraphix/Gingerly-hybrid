import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Building2, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PropertyModal } from "@/components/dashboard/property-modal"

export default function PropertiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Properties</h1>
          <p className="text-muted-foreground">Manage your properties and units.</p>
        </div>
        <div className="flex gap-2">
          <PropertyModal />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search properties..." className="w-full pl-8" />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Properties</TabsTrigger>
          <TabsTrigger value="apartments">Apartments</TabsTrigger>
          <TabsTrigger value="houses">Houses</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Properties</CardTitle>
              <CardDescription>Manage all your properties</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">
                          {
                            [
                              "Sunset Apartments",
                              "Riverside Condos",
                              "Oakwood Residences",
                              "Pine View Homes",
                              "Maple Court",
                            ][i]
                          }
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {[12, 8, 16, 6, 10][i]} Units • {[10, 7, 14, 5, 9][i]} Occupied
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant={i % 2 === 0 ? "default" : "outline"}>{i % 2 === 0 ? "Apartment" : "House"}</Badge>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View property</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="apartments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Apartments</CardTitle>
              <CardDescription>Manage your apartment buildings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">{["Sunset Apartments", "Oakwood Residences", "Maple Court"][i]}</h3>
                        <p className="text-sm text-muted-foreground">
                          {[12, 16, 10][i]} Units • {[10, 14, 9][i]} Occupied
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge>Apartment</Badge>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View property</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="houses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Houses</CardTitle>
              <CardDescription>Manage your individual houses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 2 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-muted">
                        <Building2 className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-medium">{["Riverside Condos", "Pine View Homes"][i]}</h3>
                        <p className="text-sm text-muted-foreground">
                          {[8, 6][i]} Units • {[7, 5][i]} Occupied
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">House</Badge>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View property</span>
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
