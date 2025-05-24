import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle, Star, Users, TrendingUp, Shield, Sparkles, Zap } from "lucide-react"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { FeatureSection } from "@/components/feature-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 glass backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="rounded-xl bg-gradient-primary p-2 group-hover:scale-110 transition-transform duration-200">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Gingerly</span>
            </Link>
            <MainNav />
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="btn-primary shadow-lg">Sign up</Button>
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZjJmNmZmIiBzdG9wLW9wYWNpdHk9IjAuMDUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmMmY2ZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-20" />
          
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-8 max-w-3xl">
                <div className="flex items-center gap-2 w-fit">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-medium">Trusted by 10k+ users</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    <span className="gradient-text">Simplify Rental</span>
                    <br />
                    <span className="text-foreground">Payments with</span>
                    <br />
                    <span className="gradient-text">Gingerly</span>
                  </h1>
                  <p className="text-xl text-muted-foreground md:text-2xl leading-relaxed">
                    The modern platform that streamlines rent collection for landlords and makes payments effortless for tenants.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/signup?type=landlord" className="w-full sm:w-auto">
                    <Button size="lg" className="btn-primary w-full px-8 py-4 text-lg shadow-lg hover:shadow-xl">
                      <Users className="mr-2 h-5 w-5" />
                      I'm a Landlord
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/signup?type=tenant" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="btn-outline w-full px-8 py-4 text-lg">
                      <Building2 className="mr-2 h-5 w-5" />
                      I'm a Tenant
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Bank-level security</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span>Lightning fast setup</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="h-4 w-4 text-blue-500" />
                    <span>99.9% uptime</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 gap-6 w-full max-w-md">
                  <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                          <Users className="h-5 w-5" />
                        </div>
                        <span className="gradient-text group-hover:text-primary transition-colors">For Landlords</span>
                      </CardTitle>
                      <CardDescription className="text-base">Streamline your rental business</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-2">
                      {[
                        "Automated rent collection",
                        "Payment tracking dashboard", 
                        "Tenant management tools"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      <Link href="/landlord-features" className="inline-flex items-center pt-2 text-primary hover:text-primary/80 transition-colors font-medium">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-500 group">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                          <Building2 className="h-5 w-5" />
                        </div>
                        <span className="gradient-text group-hover:text-primary transition-colors">For Tenants</span>
                      </CardTitle>
                      <CardDescription className="text-base">Hassle-free rent payments</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-2">
                      {[
                        "Multiple payment options",
                        "Automatic payment reminders",
                        "Digital payment receipts"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                      <Link href="/tenant-features" className="inline-flex items-center pt-2 text-primary hover:text-primary/80 transition-colors font-medium">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        </section>

        <FeatureSection />

        <section className="w-full py-16 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5" />
          
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text">
                Trusted by Property Managers
                <br />
                Nationwide
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of landlords and tenants who are simplifying their rental experience with Gingerly.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  quote: "Gingerly has transformed how I manage my rental properties. The automated payments save me hours every month.",
                  author: "Michael T.",
                  role: "Property Manager",
                  rating: 5,
                  gradient: "from-blue-500 to-purple-600"
                },
                {
                  quote: "As a tenant, I love how easy it is to pay rent and track my payment history. The reminders are especially helpful.",
                  author: "Sarah K.",
                  role: "Tenant",
                  rating: 5,
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  quote: "The dashboard gives me a complete overview of all my properties at a glance. I can't imagine going back to manual tracking.",
                  author: "David L.",
                  role: "Landlord",
                  rating: 5,
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((testimonial, i) => (
                <Card key={i} className="glass-card border border-border/50 p-8 hover:border-primary/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group">
                  <CardContent className="pt-0">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star key={index} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <p className="italic mb-6 text-lg leading-relaxed group-hover:text-foreground transition-colors">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
          
          <div className="container px-4 md:px-6 mx-auto text-center relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                Ready to Simplify Your
                <br />
                Rental Experience?
              </h2>
              <p className="text-xl max-w-2xl mx-auto mb-10 text-white/90 leading-relaxed">
                Join thousands of satisfied users and take the stress out of rental payments. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/signup">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 py-4 text-lg bg-white text-primary hover:bg-white/90 shadow-xl">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Get Started for Free
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-12 glass">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="rounded-xl bg-gradient-primary p-2">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">Gingerly</span>
              </Link>
              <p className="text-muted-foreground max-w-md">
                Simplifying rental payments for landlords and tenants with modern technology and exceptional user experience.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/features" className="block hover:text-primary transition-colors">Features</Link>
                <Link href="/pricing" className="block hover:text-primary transition-colors">Pricing</Link>
                <Link href="/security" className="block hover:text-primary transition-colors">Security</Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/help" className="block hover:text-primary transition-colors">Help Center</Link>
                <Link href="/contact" className="block hover:text-primary transition-colors">Contact</Link>
                <Link href="/status" className="block hover:text-primary transition-colors">Status</Link>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Gingerly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
