import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { FeatureSection } from "@/components/feature-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Gingerly</span>
            </Link>
            <MainNav />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="shadow-sm">Sign up</Button>
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6 max-w-3xl">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Simplify Rental Payments with Gingerly
                  </h1>
                  <p className="text-lg text-muted-foreground md:text-xl">
                    The modern platform that streamlines rent collection for landlords and makes payments effortless for
                    tenants.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/signup?type=landlord" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full px-8">
                      I'm a Landlord
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/signup?type=tenant" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full px-8">
                      I'm a Tenant
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full">
                  <Card className="border-2 border-primary/10 shadow-lg animate-fade hover:border-primary/20 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <span className="text-primary">For Landlords</span>
                      </CardTitle>
                      <CardDescription className="text-base">Streamline your rental business</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Automated rent collection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Payment tracking dashboard</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Tenant management tools</span>
                      </div>
                      <Link href="/landlord-features" className="inline-flex items-center pt-2 text-primary hover:underline">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="border-2 border-primary/10 shadow-lg animate-fade hover:border-primary/20 transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex items-center gap-2">
                        <span className="text-primary">For Tenants</span>
                      </CardTitle>
                      <CardDescription className="text-base">Hassle-free rent payments</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Multiple payment options</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Automatic payment reminders</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Digital payment receipts</span>
                      </div>
                      <Link href="/tenant-features" className="inline-flex items-center pt-2 text-primary hover:underline">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeatureSection />
        <section className="w-full py-12 md:py-24 bg-card">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Trusted by Property Managers Nationwide
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of landlords and tenants who are simplifying their rental experience with Gingerly.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  quote: "Gingerly has transformed how I manage my rental properties. The automated payments save me hours every month.",
                  author: "Michael T.",
                  role: "Property Manager"
                },
                {
                  quote: "As a tenant, I love how easy it is to pay rent and track my payment history. The reminders are especially helpful.",
                  author: "Sarah K.",
                  role: "Tenant"
                },
                {
                  quote: "The dashboard gives me a complete overview of all my properties at a glance. I can't imagine going back to manual tracking.",
                  author: "David L.",
                  role: "Landlord"
                }
              ].map((testimonial, i) => (
                <Card key={i} className="text-center p-6 shadow-md">
                  <CardContent className="pt-6">
                    <p className="italic mb-6">"{testimonial.quote}"</p>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to Simplify Your Rental Experience?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-primary-foreground/90">
              Join thousands of satisfied users and take the stress out of rental payments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 border-primary-foreground/30 hover:bg-primary-foreground/10">
                  Request a Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 bg-card">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Gingerly</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Simplifying rental payments for landlords and tenants since 2023.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-3">Product</h3>
                <ul className="space-y-2">
                  <li><Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
                  <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
                  <li><Link href="/integrations" className="text-sm text-muted-foreground hover:text-foreground">Integrations</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
                  <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
                  <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Subscribe to our newsletter</h3>
              <div className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="px-3 py-2 bg-background border rounded-md text-sm w-full" />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-t mt-8 pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Gingerly. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
