"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Building2, ChevronLeft, ChevronRight, Home } from "lucide-react"
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
    <div className="container flex min-h-screen flex-col items-center justify-center py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your details to get started with Gingerly</p>
        </div>

        <Tabs defaultValue={userType} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="tenant">
              <Home className="mr-2 h-4 w-4" />
              Tenant
            </TabsTrigger>
            <TabsTrigger value="landlord">
              <Building2 className="mr-2 h-4 w-4" />
              Landlord
            </TabsTrigger>
          </TabsList>

          <div className="mt-6 mb-8 max-w-md mx-auto">
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>
                Step {step} of {totalSteps}
              </span>
              <span>
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

          <TabsContent value="tenant">
            {step === 1 && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>Tenant Registration</CardTitle>
                  <CardDescription>Create your tenant account to manage rent payments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="tenant-password">Password</Label>
                      <Input
                        id="tenant-password"
                        type="password"
                        value={tenantPassword}
                        onChange={(e) => setTenantPassword(e.target.value)}
                      />
                      <PasswordStrengthIndicator password={tenantPassword} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => setStep(2)}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            {step === 2 && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>Payment Details</CardTitle>
                  <CardDescription>Set up your preferred payment method</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4 md:col-span-2">
                      <Label>Payment Method</Label>
                      <RadioGroup defaultValue="card" className="flex flex-row space-x-4">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card">Credit/Debit Card</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="mpesa" id="mpesa" />
                          <Label htmlFor="mpesa">Mpesa</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="4242 4242 4242 4242" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            {step === 3 && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>Apartment Details</CardTitle>
                  <CardDescription>Confirm your apartment information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="apartment">Apartment Name</Label>
                      <Input id="apartment" placeholder="Sunset Apartments" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="unit">Unit Number</Label>
                      <Input id="unit" placeholder="3B" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rent">Monthly Rent</Label>
                      <Input id="rent" placeholder="$1,200.00" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="billing-date">Billing Date</Label>
                      <Input id="billing-date" placeholder="1st of each month" disabled />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button asChild>
                    <Link href="/dashboard/tenant">Complete Registration</Link>
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>
          <TabsContent value="landlord">
            {step === 1 && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>Landlord Registration</CardTitle>
                  <CardDescription>Create your landlord account to manage properties</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input id="business-name" placeholder="Sunset Properties LLC" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="landlord-password">Password</Label>
                      <Input
                        id="landlord-password"
                        type="password"
                        value={landlordPassword}
                        onChange={(e) => setLandlordPassword(e.target.value)}
                      />
                      <PasswordStrengthIndicator password={landlordPassword} />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => setStep(2)}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            {step === 2 && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>Property Details</CardTitle>
                  <CardDescription>Add information about your property</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="property-name">Property Name</Label>
                      <Input id="property-name" placeholder="Sunset Apartments" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="units">Number of Units</Label>
                      <Input id="units" type="number" placeholder="12" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Property Address</Label>
                      <Input id="address" placeholder="123 Main Street" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="Anytown" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" placeholder="ST" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="12345" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)}>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            {step === 3 && (
              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle>Banking Information</CardTitle>
                  <CardDescription>Add your bank account for rent deposits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bank-name">Bank Name</Label>
                      <Input id="bank-name" placeholder="Example Bank" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account-name">Account Holder Name</Label>
                      <Input id="account-name" placeholder="John Doe or Business Name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="account-number">Account Number</Label>
                      <Input id="account-number" placeholder="000000000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="routing-number">Routing Number</Label>
                      <Input id="routing-number" placeholder="000000000" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button asChild>
                    <Link href="/dashboard/landlord">Complete Registration</Link>
                  </Button>
                </CardFooter>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/login" className="underline underline-offset-4 hover:text-primary">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
