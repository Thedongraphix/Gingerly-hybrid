import Link from "next/link"
import { Building2, Mail, Lock, Sparkles, Shield, Zap, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMmY2ZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Left column: Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="mx-auto w-full max-w-md">
          {/* Logo section with enhanced design */}
          <div className="flex flex-col items-center space-y-4 text-center mb-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-lg opacity-30 animate-pulse" />
              <div className="relative rounded-2xl bg-gradient-to-r from-primary to-accent p-3">
                <Building2 className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight gradient-text">Gingerly</h1>
              <p className="text-base text-muted-foreground mt-1">Your modern property management solution</p>
            </div>
          </div>

          {/* Form section with glassmorphism */}
          <div className="glass-card p-8 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-2">Welcome back</h2>
              <p className="text-muted-foreground">Sign in to your account to continue your journey</p>
            </div>
            
            <div className="space-y-6">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-sm font-semibold text-foreground">Password</Label>
                  <Link href="/forgot-password" className="text-xs text-primary hover:text-primary/80 font-medium transition-colors">
                    Forgot password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password"
                  variant="modern"
                  startIcon={<Lock className="h-4 w-4" />}
                />
              </div>
            </div>

            <Button 
              className="w-full btn-primary text-base py-3 shadow-lg hover:shadow-xl"
              size="lg"
              asChild
            >
              <Link href="/dashboard/tenant">
                <Sparkles className="mr-2 h-4 w-4" />
                Sign In
              </Link>
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full bg-border/50" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-4 text-muted-foreground font-medium">Or create account</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="btn-outline" asChild>
                <Link href="/signup?type=tenant">
                  <Users className="mr-1 h-4 w-4" />
                  Tenant
                </Link>
              </Button>
              <Button variant="outline" className="btn-outline" asChild>
                <Link href="/signup?type=landlord">
                  <Building2 className="mr-1 h-4 w-4" />
                  Landlord
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right column: Enhanced feature showcase */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-12 relative">
        <div className="max-w-lg w-full">
          {/* Hero content */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Next-gen Platform</span>
            </div>
            <h3 className="text-3xl font-bold tracking-tight mb-4 gradient-text">
              Modern Property Management
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience the future of property management with our intuitive, powerful platform designed for modern landlords and tenants.
            </p>
          </div>

          {/* Feature cards */}
          <div className="space-y-4">
            {[
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description: "Your data is protected with enterprise-level encryption and security protocols.",
                gradient: "from-green-500 to-emerald-600"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Built for speed with optimized performance and instant real-time updates.",
                gradient: "from-yellow-500 to-orange-600"
              },
              {
                icon: Users,
                title: "User-Friendly",
                description: "Intuitive design that makes property management effortless for everyone.",
                gradient: "from-blue-500 to-purple-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-card p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-xl bg-gradient-to-r ${feature.gradient} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6">
            {[
              { value: "10k+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
