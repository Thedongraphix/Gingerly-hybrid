import Link from "next/link"
import { Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  return (
    <div className="container flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Building2 className="h-10 w-10" />
          <h1 className="text-2xl font-semibold tracking-tight">Gingerly</h1>
          <p className="text-sm text-muted-foreground">Sign in to your account</p>
        </div>

        <Card>
          <CardHeader className="pb-4">
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-muted-foreground hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full" asChild>
              <Link href="/dashboard/tenant">Sign In</Link>
            </Button>
            <Separator />
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <Button variant="outline" className="w-full" asChild>
                <Link href="/signup?type=tenant">Register as Tenant</Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/signup?type=landlord">Register as Landlord</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
