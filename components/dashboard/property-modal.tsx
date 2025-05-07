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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Building2 } from "lucide-react"

export function PropertyModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Building2 className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add New Property</DialogTitle>
          <DialogDescription>Add a new property to your portfolio.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Property Type</Label>
            <RadioGroup defaultValue="apartment">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="apartment" id="apartment" />
                <Label htmlFor="apartment">Apartment Building</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="house" id="house" />
                <Label htmlFor="house">House</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="space-y-2">
            <Label htmlFor="property-name">Property Name</Label>
            <Input id="property-name" placeholder="Sunset Apartments" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="123 Main Street" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="Anytown" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder="ST" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip">ZIP Code</Label>
              <Input id="zip" placeholder="12345" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units">Number of Units</Label>
              <Input id="units" type="number" placeholder="12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rent">Average Rent</Label>
              <Input id="rent" placeholder="$1,200.00" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Add Property</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
