"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { UserPlus } from "lucide-react"

export function TenantOnboardingModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Tenant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add New Tenant</DialogTitle>
          <DialogDescription>Add a new tenant and send them an onboarding invitation.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="single" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="single">Single Tenant</TabsTrigger>
            <TabsTrigger value="bulk">Bulk Upload</TabsTrigger>
          </TabsList>
          <TabsContent value="single" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="property">Property</Label>
                <Input id="property" placeholder="Sunset Apartments" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unit Number</Label>
                <Input id="unit" placeholder="3B" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="rent">Monthly Rent</Label>
              <Input id="rent" placeholder="$1,200.00" />
            </div>
          </TabsContent>
          <TabsContent value="bulk" className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="csv">Upload CSV File</Label>
              <Input id="csv" type="file" />
              <p className="text-xs text-muted-foreground">
                Upload a CSV file with tenant details. Download our{" "}
                <a href="#" className="text-primary underline">
                  template
                </a>{" "}
                for the correct format.
              </p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any special instructions or notes for these tenants" />
            </div>
          </TabsContent>
        </Tabs>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Send Invitation</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
