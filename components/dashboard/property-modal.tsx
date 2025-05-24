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
import { Building2, PlusCircle, Home, Building } from "lucide-react"

export function PropertyModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] p-0 overflow-hidden rounded-xl">
        <DialogHeader className="p-6 pb-2 bg-gradient-to-r from-primary/5 to-primary/10">
          <DialogTitle className="text-xl">Add New Property</DialogTitle>
          <DialogDescription>Add a new property to your rental portfolio</DialogDescription>
        </DialogHeader>
        <div className="space-y-5 p-6">
          <div className="space-y-3">
            <Label className="text-sm font-medium">Property Type</Label>
            <RadioGroup defaultValue="apartment" className="flex gap-4">
              <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50 data-[state=checked]:bg-primary/5 data-[state=checked]:border-primary/30">
                <RadioGroupItem value="apartment" id="apartment" />
                <Label htmlFor="apartment" className="flex items-center cursor-pointer">
                  <Building className="h-4 w-4 mr-2 text-primary" />
                  Apartment Building
                </Label>
              </div>
              <div className="flex items-center space-x-2 border rounded-lg p-3 cursor-pointer hover:bg-muted/50 data-[state=checked]:bg-primary/5 data-[state=checked]:border-primary/30">
                <RadioGroupItem value="house" id="house" />
                <Label htmlFor="house" className="flex items-center cursor-pointer">
                  <Home className="h-4 w-4 mr-2 text-primary" />
                  House
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="property-name" className="text-sm font-medium">Property Name</Label>
            <Input 
              id="property-name" 
              placeholder="Sunset Apartments" 
              className="mt-1.5 focus-visible:ring-primary"
            />
          </div>
          
          <div>
            <Label htmlFor="address" className="text-sm font-medium">Address</Label>
            <Input 
              id="address" 
              placeholder="123 Main Street" 
              className="mt-1.5 focus-visible:ring-primary"
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="city" className="text-sm font-medium">City</Label>
              <Input 
                id="city" 
                placeholder="Anytown" 
                className="mt-1.5 focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="state" className="text-sm font-medium">State</Label>
              <Input 
                id="state" 
                placeholder="ST" 
                className="mt-1.5 focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="zip" className="text-sm font-medium">ZIP Code</Label>
              <Input 
                id="zip" 
                placeholder="12345" 
                className="mt-1.5 focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="units" className="text-sm font-medium">Number of Units</Label>
              <Input 
                id="units" 
                type="number" 
                placeholder="12" 
                className="mt-1.5 focus-visible:ring-primary"
              />
            </div>
            <div>
              <Label htmlFor="rent" className="text-sm font-medium">Average Rent</Label>
              <Input 
                id="rent" 
                placeholder="$1,200.00" 
                className="mt-1.5 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
        
        <DialogFooter className="p-4 bg-muted/20 border-t">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button 
            onClick={() => setOpen(false)}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            Add Property
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
