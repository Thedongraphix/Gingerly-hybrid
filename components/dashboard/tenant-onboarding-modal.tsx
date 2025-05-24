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
import { UserPlus, Users, Upload, Mail, Phone, Home, DollarSign, FileText, Sparkles } from "lucide-react"

export function TenantOnboardingModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="btn-primary shadow-lg hover:shadow-xl">
          <UserPlus className="mr-2 h-5 w-5" />
          Add Tenant
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl glass-card border border-border/50">
        <DialogHeader className="p-8 pb-4 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10" />
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <UserPlus className="h-5 w-5" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold gradient-text">Add New Tenant</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Onboard a new tenant to your property portfolio
                </DialogDescription>
              </div>
            </div>
          </div>
        </DialogHeader>
        
        <div className="px-8 pb-4">
          <Tabs defaultValue="single" className="w-full">
            <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full">
              <TabsTrigger 
                value="single" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1"
              >
                <Users className="mr-2 h-4 w-4" />
                Single Tenant
              </TabsTrigger>
              <TabsTrigger 
                value="bulk"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1"
              >
                <Upload className="mr-2 h-4 w-4" />
                Bulk Upload
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="single" className="space-y-6 pt-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-sm font-semibold text-foreground">First Name</Label>
                  <Input 
                    id="first-name" 
                    placeholder="John" 
                    variant="modern"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-sm font-semibold text-foreground">Last Name</Label>
                  <Input 
                    id="last-name" 
                    placeholder="Doe" 
                    variant="modern"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  variant="modern"
                  startIcon={<Mail className="h-4 w-4" />}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</Label>
                <Input 
                  id="phone" 
                  placeholder="+1 (555) 000-0000" 
                  variant="modern"
                  startIcon={<Phone className="h-4 w-4" />}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="property" className="text-sm font-semibold text-foreground">Property</Label>
                  <Input 
                    id="property" 
                    placeholder="Sunset Apartments" 
                    variant="modern"
                    startIcon={<Home className="h-4 w-4" />}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit" className="text-sm font-semibold text-foreground">Unit Number</Label>
                  <Input 
                    id="unit" 
                    placeholder="3B" 
                    variant="modern"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="rent" className="text-sm font-semibold text-foreground">Monthly Rent</Label>
                <Input 
                  id="rent" 
                  placeholder="1,200" 
                  variant="modern"
                  startIcon={<DollarSign className="h-4 w-4" />}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="bulk" className="space-y-6 pt-6">
              <div className="glass-card p-6 rounded-2xl border border-border/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                    <Upload className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Bulk Tenant Upload</h3>
                    <p className="text-sm text-muted-foreground">Upload multiple tenants at once</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="csv" className="text-sm font-semibold text-foreground">Upload CSV File</Label>
                    <Input 
                      id="csv" 
                      type="file" 
                      variant="modern"
                      startIcon={<FileText className="h-4 w-4" />}
                    />
                    <p className="text-xs text-muted-foreground bg-blue-50 dark:bg-blue-950/30 p-2 rounded-lg">
                      💡 Upload a CSV file with tenant details. Download our{" "}
                      <a href="#" className="text-primary underline font-medium">
                        template file
                      </a>{" "}
                      for the correct format.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm font-semibold text-foreground">Additional Notes</Label>
                    <Textarea 
                      id="notes" 
                      placeholder="Any special instructions or notes for these tenants" 
                      className="input-modern min-h-20"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
              <Sparkles className="mr-2 h-4 w-4" />
              Send Invitation
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
