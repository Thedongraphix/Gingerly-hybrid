"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Sparkles, 
  Shield, 
  Zap, 
  Users,
  Mail,
  Lock,
  User,
  Phone,
  CreditCard,
  MapPin,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { PasswordStrengthIndicator } from "@/components/password-strength-indicator"

export default function SignupPage() {
  const searchParams = useSearchParams()
  const userType = searchParams.get("type") || "tenant"
  const [step, setStep] = useState(1)
  const [tenantPassword, setTenantPassword] = useState("")
  const [landlordPassword, setLandlordPassword] = useState("")

  // Calculate progress percentage based on current step
  const totalSteps = 3
  const progressPercentage = (step / totalSteps) * 100

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjJmNmZmIiBzdG9wLW9wYWNpdHk9IjAuMDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmMmY2ZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 md:left-20 w-24 md:w-32 md:h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 md:right-20 w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      <div className="container flex min-h-screen flex-col items-center justify-center py-8 px-4 relative z-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-center space-y-8">
          {/* Enhanced Header */}
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 animate-pulse" />
                <div className="relative rounded-2xl bg-gradient-to-r from-primary to-accent p-3">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">Join Gingerly</h1>
              <p className="text-base md:text-lg text-muted-foreground mt-2">Create your account and start your property management journey</p>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-500" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <span>Quick Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-blue-500" />
                <span>Trusted by 10k+ Users</span>
              </div>
            </div>
          </div>

          {/* Enhanced Tabs */}
          <Tabs defaultValue={userType} className="w-full">
            <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full max-w-md mx-auto grid grid-cols-2">
              <TabsTrigger 
                value="tenant"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
              >
                <Home className="mr-2 h-4 w-4" />
                Tenant
              </TabsTrigger>
              <TabsTrigger 
                value="landlord"
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200"
              >
                <Building2 className="mr-2 h-4 w-4" />
                Landlord
              </TabsTrigger>
            </TabsList>

            {/* Enhanced Progress */}
            <div className="mt-8 mb-8 max-w-md mx-auto">
              <div className="glass-card border border-border/50 p-4 rounded-2xl bg-background/80 backdrop-blur-sm">
                <Progress value={progressPercentage} className="h-3 mb-3" />
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-foreground">
                    Step {step} of {totalSteps}
                  </span>
                  <span className="text-muted-foreground font-medium">
                    {step === 1
                      ? "Basic Info"
                      : step === 2
                        ? userType === "tenant"
                          ? "Payment Details"
                          : "Property Details"
                        : "Final Step"}
                  </span>
                </div>
              </div>
            </div>

            <TabsContent value="tenant">
              {step === 1 && (
                <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold gradient-text">Tenant Registration</CardTitle>
                    <CardDescription className="text-base">Create your tenant account to manage rent payments effortlessly</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name" className="text-sm font-semibold text-foreground">First Name</Label>
                          <div className="input-with-icon">
                            <User className="input-icon" />
                            <Input id="first-name" placeholder="John" className="input-modern" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</Label>
                          <div className="input-with-icon">
                            <Mail className="input-icon" />
                            <Input id="email" type="email" placeholder="john@example.com" className="input-modern" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="last-name" className="text-sm font-semibold text-foreground">Last Name</Label>
                          <div className="input-with-icon">
                            <User className="input-icon" />
                            <Input id="last-name" placeholder="Doe" className="input-modern" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</Label>
                          <div className="input-with-icon">
                            <Phone className="input-icon" />
                            <Input id="phone" placeholder="+1 (555) 000-0000" className="input-modern" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="tenant-password" className="text-sm font-semibold text-foreground">Password</Label>
                        <div className="input-with-icon">
                          <Lock className="input-icon" />
                          <Input
                            id="tenant-password"
                            type="password"
                            placeholder="Create a strong password"
                            value={tenantPassword}
                            onChange={(e) => setTenantPassword(e.target.value)}
                            className="input-modern"
                          />
                        </div>
                        <PasswordStrengthIndicator password={tenantPassword} />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end p-6 md:p-8">
                    <Button onClick={() => setStep(2)} className="btn-primary shadow-lg hover:shadow-xl">
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}
              {step === 2 && (
                <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                        <CreditCard className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold gradient-text">Payment Details</CardTitle>
                    <CardDescription className="text-base">Set up your preferred payment method for rent payments</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4 md:col-span-2">
                        <Label className="text-sm font-semibold text-foreground">Payment Method</Label>
                        <RadioGroup defaultValue="card" className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                          <div className="glass-card border border-border/50 p-4 rounded-xl hover:border-primary/30 transition-all duration-200">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="card" id="card" />
                              <Label htmlFor="card" className="font-medium cursor-pointer">Credit/Debit Card</Label>
                            </div>
                          </div>
                          <div className="glass-card border border-border/50 p-4 rounded-xl hover:border-primary/30 transition-all duration-200">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="mpesa" id="mpesa" />
                              <Label htmlFor="mpesa" className="font-medium cursor-pointer">Mpesa</Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="card-number" className="text-sm font-semibold text-foreground">Card Number</Label>
                        <div className="input-with-icon">
                          <CreditCard className="input-icon" />
                          <Input id="card-number" placeholder="4242 4242 4242 4242" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiry" className="text-sm font-semibold text-foreground">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="input-modern" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc" className="text-sm font-semibold text-foreground">CVC</Label>
                        <Input id="cvc" placeholder="123" className="input-modern" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 md:p-8">
                    <Button variant="outline" onClick={() => setStep(1)} className="btn-outline">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="btn-primary shadow-lg hover:shadow-xl">
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}
              {step === 3 && (
                <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg">
                        <Home className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold gradient-text">Apartment Details</CardTitle>
                    <CardDescription className="text-base">Confirm your apartment information and lease details</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="apartment" className="text-sm font-semibold text-foreground">Apartment Name</Label>
                        <div className="input-with-icon">
                          <Building2 className="input-icon" />
                          <Input id="apartment" placeholder="Sunset Apartments" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="unit" className="text-sm font-semibold text-foreground">Unit Number</Label>
                        <div className="input-with-icon">
                          <Home className="input-icon" />
                          <Input id="unit" placeholder="3B" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="rent" className="text-sm font-semibold text-foreground">Monthly Rent</Label>
                        <Input id="rent" placeholder="$1,200.00" disabled className="input-modern bg-muted/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="billing-date" className="text-sm font-semibold text-foreground">Billing Date</Label>
                        <Input id="billing-date" placeholder="1st of each month" disabled className="input-modern bg-muted/50" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 md:p-8">
                    <Button variant="outline" onClick={() => setStep(2)} className="btn-outline">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button asChild className="btn-primary shadow-lg hover:shadow-xl">
                      <Link href="/dashboard/tenant">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Complete Registration
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="landlord">
              {step === 1 && (
                <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg">
                        <Building2 className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold gradient-text">Landlord Registration</CardTitle>
                    <CardDescription className="text-base">Create your landlord account to manage properties and tenants</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="business-name" className="text-sm font-semibold text-foreground">Business Name</Label>
                        <div className="input-with-icon">
                          <Building2 className="input-icon" />
                          <Input id="business-name" placeholder="Sunset Properties LLC" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</Label>
                        <div className="input-with-icon">
                          <User className="input-icon" />
                          <Input id="name" placeholder="John Doe" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</Label>
                        <div className="input-with-icon">
                          <Mail className="input-icon" />
                          <Input id="email" type="email" placeholder="john@example.com" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number</Label>
                        <div className="input-with-icon">
                          <Phone className="input-icon" />
                          <Input id="phone" placeholder="+1 (555) 000-0000" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="landlord-password" className="text-sm font-semibold text-foreground">Password</Label>
                        <div className="input-with-icon">
                          <Lock className="input-icon" />
                          <Input
                            id="landlord-password"
                            type="password"
                            placeholder="Create a strong password"
                            value={landlordPassword}
                            onChange={(e) => setLandlordPassword(e.target.value)}
                            className="input-modern"
                          />
                        </div>
                        <PasswordStrengthIndicator password={landlordPassword} />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end p-6 md:p-8">
                    <Button onClick={() => setStep(2)} className="btn-primary shadow-lg hover:shadow-xl">
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}
              {step === 2 && (
                <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold gradient-text">Property Details</CardTitle>
                    <CardDescription className="text-base">Add information about your property and location</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="property-name" className="text-sm font-semibold text-foreground">Property Name</Label>
                        <div className="input-with-icon">
                          <Building2 className="input-icon" />
                          <Input id="property-name" placeholder="Sunset Apartments" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="units" className="text-sm font-semibold text-foreground">Number of Units</Label>
                        <Input id="units" type="number" placeholder="12" className="input-modern" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address" className="text-sm font-semibold text-foreground">Property Address</Label>
                        <div className="input-with-icon">
                          <MapPin className="input-icon" />
                          <Input id="address" placeholder="123 Main Street" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-semibold text-foreground">City</Label>
                        <Input id="city" placeholder="Anytown" className="input-modern" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state" className="text-sm font-semibold text-foreground">State</Label>
                        <Input id="state" placeholder="ST" className="input-modern" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="zip" className="text-sm font-semibold text-foreground">ZIP Code</Label>
                        <Input id="zip" placeholder="12345" className="input-modern" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 md:p-8">
                    <Button variant="outline" onClick={() => setStep(1)} className="btn-outline">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button onClick={() => setStep(3)} className="btn-primary shadow-lg hover:shadow-xl">
                      Continue
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}
              {step === 3 && (
                <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                        <CreditCard className="h-6 w-6" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold gradient-text">Banking Information</CardTitle>
                    <CardDescription className="text-base">Add your bank account details for receiving rent deposits</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="bank-name" className="text-sm font-semibold text-foreground">Bank Name</Label>
                        <Input id="bank-name" placeholder="Example Bank" className="input-modern" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="account-name" className="text-sm font-semibold text-foreground">Account Holder Name</Label>
                        <div className="input-with-icon">
                          <User className="input-icon" />
                          <Input id="account-name" placeholder="John Doe or Business Name" className="input-modern" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="account-number" className="text-sm font-semibold text-foreground">Account Number</Label>
                        <Input id="account-number" placeholder="000000000" className="input-modern" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="routing-number" className="text-sm font-semibold text-foreground">Routing Number</Label>
                        <Input id="routing-number" placeholder="000000000" className="input-modern" />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-6 md:p-8">
                    <Button variant="outline" onClick={() => setStep(2)} className="btn-outline">
                      <ChevronLeft className="mr-2 h-4 w-4" />
                      Back
                    </Button>
                    <Button asChild className="btn-primary shadow-lg hover:shadow-xl">
                      <Link href="/dashboard/landlord">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Complete Registration
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </TabsContent>
          </Tabs>

          {/* Enhanced Footer */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:text-primary/80 transition-colors underline underline-offset-4">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
