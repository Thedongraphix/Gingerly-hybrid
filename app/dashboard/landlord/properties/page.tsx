import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Building2, Search, PlusCircle, Home, Building } from "lucide-react"
import { Input } from "@/components/ui/input"
import { PropertyModal } from "@/components/dashboard/property-modal" 

export default function PropertiesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
          <p className="text-base text-muted-foreground mt-1.5">Manage your rental properties and units</p>
        </div>
        <div className="flex gap-2">
          <PropertyModal />
        </div>
      </div>

      <div className="flex items-center gap-3 bg-muted/40 p-2 rounded-xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search properties..." 
            className="w-full pl-10 border-0 bg-transparent focus-visible:ring-1 focus-visible:ring-primary" 
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="p-1 bg-muted/60">
          <TabsTrigger value="all" className="rounded-md data-[state=active]:bg-background data-[state=active]:font-medium data-[state=active]:shadow-sm">
            <Building2 className="mr-2 h-4 w-4" />
            All Properties
          </TabsTrigger>
          <TabsTrigger value="apartments" className="rounded-md data-[state=active]:bg-background data-[state=active]:font-medium data-[state=active]:shadow-sm">
            <Building className="mr-2 h-4 w-4" />
            Apartments
          </TabsTrigger>
          <TabsTrigger value="houses" className="rounded-md data-[state=active]:bg-background data-[state=active]:font-medium data-[state=active]:shadow-sm">
            <Home className="mr-2 h-4 w-4" />
            Houses
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className="group flex items-center justify-between rounded-xl border p-5 bg-background transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-muted/70 text-primary">
                    {i % 2 === 0 ? 
                      <Building className="h-7 w-7" /> : 
                      <Home className="h-7 w-7" />
                    }
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-medium text-lg">
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
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-muted-foreground flex items-center">
                        <span className="font-medium text-foreground mr-1">{[12, 8, 16, 6, 10][i]}</span> Units
                      </p>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <span className="font-medium text-foreground mr-1">{[10, 7, 14, 5, 9][i]}</span> Occupied
                      </p>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                      <p className="text-sm text-muted-foreground">
                        {Math.round(([10, 7, 14, 5, 9][i] / [12, 8, 16, 6, 10][i]) * 100)}% occupancy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge 
                    variant={i % 2 === 0 ? "default" : "outline"}
                    className={i % 2 === 0 ? "bg-primary/10 text-primary hover:bg-primary/20 border-primary/10" : ""}
                  >
                    {i % 2 === 0 ? "Apartment" : "House"}
                  </Badge>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">View property</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="apartments" className="space-y-6">
          <div className="grid gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={i} 
                className="group flex items-center justify-between rounded-xl border p-5 bg-background transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-muted/70 text-primary">
                    <Building className="h-7 w-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-medium text-lg">{["Sunset Apartments", "Oakwood Residences", "Maple Court"][i]}</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-muted-foreground flex items-center">
                        <span className="font-medium text-foreground mr-1">{[12, 16, 10][i]}</span> Units
                      </p>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <span className="font-medium text-foreground mr-1">{[10, 14, 9][i]}</span> Occupied
                      </p>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                      <p className="text-sm text-muted-foreground">
                        {Math.round(([10, 14, 9][i] / [12, 16, 10][i]) * 100)}% occupancy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="default" className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/10">Apartment</Badge>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">View property</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="houses" className="space-y-6">
          <div className="grid gap-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div 
                key={i} 
                className="group flex items-center justify-between rounded-xl border p-5 bg-background transition-all hover:border-primary/40 hover:shadow-sm"
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-muted/70 text-primary">
                    <Home className="h-7 w-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-medium text-lg">{["Riverside Condos", "Pine View Homes"][i]}</h3>
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-muted-foreground flex items-center">
                        <span className="font-medium text-foreground mr-1">{[8, 6][i]}</span> Units
                      </p>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <span className="font-medium text-foreground mr-1">{[7, 5][i]}</span> Occupied
                      </p>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground"></div>
                      <p className="text-sm text-muted-foreground">
                        {Math.round(([7, 5][i] / [8, 6][i]) * 100)}% occupancy
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline">House</Badge>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">View property</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
