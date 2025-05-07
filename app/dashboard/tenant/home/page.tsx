import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Calendar, Download, Home, MessageSquare, Wrench } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function TenantHomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Home</h1>
        <p className="text-muted-foreground">Manage your apartment details and maintenance requests.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Property</CardTitle>
            <Home className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">Sunset Apartments</div>
            <p className="text-sm text-muted-foreground">Unit 3B</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lease Period</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">Jan 1 - Dec 31, 2024</div>
            <p className="text-sm text-muted-foreground">8 months remaining</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Maintenance</CardTitle>
            <Wrench className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold">1 Active Request</div>
            <p className="text-sm text-muted-foreground">Last updated 2 days ago</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="details" className="space-y-4">
        <TabsList>
          <TabsTrigger value="details">Apartment Details</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Apartment Information</CardTitle>
              <CardDescription>Details about your current residence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-sm">Sunset Apartments, Unit 3B</p>
                  <p className="text-sm">123 Main Street, Anytown, ST 12345</p>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <h3 className="font-semibold">Apartment Details</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div>
                      <p className="text-sm font-medium">Bedrooms</p>
                      <p className="text-sm text-muted-foreground">2</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Bathrooms</p>
                      <p className="text-sm text-muted-foreground">1</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Square Feet</p>
                      <p className="text-sm text-muted-foreground">850</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Floor</p>
                      <p className="text-sm text-muted-foreground">3</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <h3 className="font-semibold">Lease Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Start Date</p>
                      <p className="text-sm text-muted-foreground">January 1, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">End Date</p>
                      <p className="text-sm text-muted-foreground">December 31, 2024</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Monthly Rent</p>
                      <p className="text-sm text-muted-foreground">$1,200.00</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Security Deposit</p>
                      <p className="text-sm text-muted-foreground">$1,200.00</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <h3 className="font-semibold">Property Management</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium">Property Manager</p>
                      <p className="text-sm text-muted-foreground">John Doe</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Contact</p>
                      <p className="text-sm text-muted-foreground">manager@example.com</p>
                      <p className="text-sm text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="maintenance" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Maintenance Requests</CardTitle>
                <CardDescription>Submit and track maintenance issues</CardDescription>
              </div>
              <Button>New Request</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Maintenance Visit Scheduled</AlertTitle>
                  <AlertDescription>
                    A plumber will visit your apartment tomorrow between 10am-12pm to fix the kitchen sink leak.
                  </AlertDescription>
                </Alert>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Kitchen Sink Leak</h3>
                          <Badge>Active</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Reported on May 1, 2024</p>
                        <p className="text-sm">Leak under the kitchen sink causing water damage.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Bathroom Fan Replacement</h3>
                          <Badge variant="outline">Completed</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Reported on April 15, 2024</p>
                        <p className="text-sm">Bathroom exhaust fan not working properly.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">Living Room Light Fixture</h3>
                          <Badge variant="outline">Completed</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Reported on March 10, 2024</p>
                        <p className="text-sm">Light fixture in living room not working.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <MessageSquare className="mr-2 h-4 w-4" />
                          Message
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="documents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>Access your lease and payment receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <h3 className="font-medium">Lease Agreement</h3>
                    <p className="text-sm text-muted-foreground">Signed on January 1, 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium">Rent Receipt - {["April", "March", "February"][i - 1]} 2024</h3>
                      <p className="text-sm text-muted-foreground">
                        Generated on {["April", "March", "February"][i - 1]} 1, 2024
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <h3 className="font-medium">Move-In Inspection Report</h3>
                    <p className="text-sm text-muted-foreground">Completed on January 1, 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <h3 className="font-medium">Building Rules & Regulations</h3>
                    <p className="text-sm text-muted-foreground">Last updated December 15, 2023</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="amenities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Building Amenities</CardTitle>
              <CardDescription>Facilities available in your building</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Swimming Pool</h3>
                    <p className="text-sm text-muted-foreground">Open 8am - 10pm daily</p>
                    <p className="mt-2 text-sm">Located on the ground floor. Access with your key fob.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Fitness Center</h3>
                    <p className="text-sm text-muted-foreground">Open 24/7</p>
                    <p className="mt-2 text-sm">Located on the ground floor. Access with your key fob.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Rooftop Terrace</h3>
                    <p className="text-sm text-muted-foreground">Open 9am - 9pm daily</p>
                    <p className="mt-2 text-sm">Located on the 10th floor. Access with your key fob.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Laundry Room</h3>
                    <p className="text-sm text-muted-foreground">Open 24/7</p>
                    <p className="mt-2 text-sm">Located on each floor. Card payment required.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Package Room</h3>
                    <p className="text-sm text-muted-foreground">Accessible 24/7</p>
                    <p className="mt-2 text-sm">
                      Located in the lobby. You will receive a notification when a package arrives.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium">Parking Garage</h3>
                    <p className="text-sm text-muted-foreground">Accessible 24/7</p>
                    <p className="mt-2 text-sm">Located underground. Access with your parking pass.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
