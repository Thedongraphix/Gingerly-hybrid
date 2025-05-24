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
import { Building2, PlusCircle, Home, Building, MapPin, Hash, DollarSign, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export function PropertyModal() {
  const [open, setOpen] = useState(false)
  const [propertyType, setPropertyType] = useState("apartment")

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="btn-primary shadow-lg hover:shadow-xl">
          <PlusCircle className="mr-2 h-5 w-5" />
          Add Property
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl glass-card border border-border/50">
        <DialogHeader className="p-8 pb-4 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold gradient-text">Add New Property</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Expand your rental portfolio with a new property
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 p-8 pt-4">
          <div className="space-y-4">
            <Label className="text-sm font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              Property Type
            </Label>
            <RadioGroup value={propertyType} onValueChange={setPropertyType} className="grid grid-cols-2 gap-4">
              <div className={cn(
                "relative flex items-center space-x-3 border-2 rounded-xl p-4 cursor-pointer transition-all duration-200",
                "hover:bg-primary/5 hover:border-primary/30 hover:shadow-sm",
                propertyType === "apartment" 
                  ? "bg-primary/10 border-primary/50 shadow-md" 
                  : "border-border/50 bg-background/50"
              )}>
                <RadioGroupItem value="apartment" id="apartment" className="text-primary" />
                <Label htmlFor="apartment" className="flex items-center cursor-pointer font-medium">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white mr-3">
                    <Building className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold">Apartment Building</div>
                    <div className="text-xs text-muted-foreground">Multi-unit residential</div>
                  </div>
                </Label>
              </div>
              <div className={cn(
                "relative flex items-center space-x-3 border-2 rounded-xl p-4 cursor-pointer transition-all duration-200",
                "hover:bg-primary/5 hover:border-primary/30 hover:shadow-sm",
                propertyType === "house" 
                  ? "bg-primary/10 border-primary/50 shadow-md" 
                  : "border-border/50 bg-background/50"
              )}>
                <RadioGroupItem value="house" id="house" className="text-primary" />
                <Label htmlFor="house" className="flex items-center cursor-pointer font-medium">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white mr-3">
                    <Home className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-semibold">Single House</div>
                    <div className="text-xs text-muted-foreground">Individual property</div>
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="property-name" className="text-sm font-semibold text-foreground">Property Name</Label>
            <Input 
              id="property-name" 
              placeholder="Sunset Apartments" 
              variant="modern"
              startIcon={<Building2 className="h-4 w-4" />}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address" className="text-sm font-semibold text-foreground">Street Address</Label>
            <Input 
              id="address" 
              placeholder="123 Main Street" 
              variant="modern"
              startIcon={<MapPin className="h-4 w-4" />}
            />
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city" className="text-sm font-semibold text-foreground">City</Label>
              <Input 
                id="city" 
                placeholder="Anytown" 
                variant="modern"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state" className="text-sm font-semibold text-foreground">State</Label>
              <Input 
                id="state" 
                placeholder="CA" 
                variant="modern"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zip" className="text-sm font-semibold text-foreground">ZIP Code</Label>
              <Input 
                id="zip" 
                placeholder="12345" 
                variant="modern"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="units" className="text-sm font-semibold text-foreground">Number of Units</Label>
              <Input 
                id="units" 
                type="number" 
                placeholder="12" 
                variant="modern"
                startIcon={<Hash className="h-4 w-4" />}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rent" className="text-sm font-semibold text-foreground">Average Rent</Label>
              <Input 
                id="rent" 
                placeholder="1,200" 
                variant="modern"
                startIcon={<DollarSign className="h-4 w-4" />}
              />
            </div>
          </div>
        </div>
        
        <DialogFooter className="p-8 pt-4 border-t border-border/20 bg-gradient-to-r from-background/50 to-muted/20">
          <div className="flex gap-3 w-full sm:w-auto">
            <Button 
              variant="outline" 
              onClick={() => setOpen(false)}
              className="btn-outline flex-1 sm:flex-none"
            >
              Cancel
            </Button>
            <Button 
              onClick={() => setOpen(false)}
              className="btn-primary flex-1 sm:flex-none shadow-lg hover:shadow-xl"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Property
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
