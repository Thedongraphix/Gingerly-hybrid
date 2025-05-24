import Link from "next/link"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  return (
    <div className="container relative min-h-screen flex">
      {/* Left column: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col items-center space-y-2 text-center mb-8">
            <div className="rounded-full bg-primary/10 p-2 mb-1">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Gingerly</h1>
            <p className="text-base text-muted-foreground">Your property management solution</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold tracking-tight mb-1">Welcome back</h2>
              <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="h-10 focus-visible:ring-primary" 
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80 font-medium">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  className="h-10 focus-visible:ring-primary" 
                />
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" 
              asChild
            >
              <Link href="/dashboard/tenant">Sign In</Link>
            </Button>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or register</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-10" asChild>
                <Link href="/signup?type=tenant">As Tenant</Link>
              </Button>
              <Button variant="outline" className="h-10" asChild>
                <Link href="/signup?type=landlord">As Landlord</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right column: Image/Background */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-primary/5 via-primary/10 to-background">
        <div className="h-full flex items-center justify-center p-12">
          <div className="max-w-lg">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-primary/30 blur-sm" />
              <div className="relative rounded-lg bg-background/95 border border-primary/10 p-6 shadow-xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Modern Property Management</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Streamline your property management experience with Gingerly's intuitive platform.
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-medium">✓</div>
                    <span>Easily manage multiple properties in one place</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-medium">✓</div>
                    <span>Streamline rent collection and payment tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-medium">✓</div>
                    <span>Communicate directly with tenants and landlords</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-medium">✓</div>
                    <span>Access important documents and maintenance requests</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
