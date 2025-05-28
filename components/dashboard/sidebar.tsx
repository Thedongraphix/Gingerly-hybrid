"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Building2,
  CreditCard,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Settings,
  Users,
  X,
  PieChart,
  CalendarDays,
  Bell,
  FileText,
  HelpCircle,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function DashboardSidebar() {
  const pathname = usePathname()
  const { isOpen, setIsOpen, isMobile } = useSidebar()

  // Determine if the current user is a landlord or tenant based on the URL
  const isLandlord = pathname.includes("/landlord")

  const landlordLinks = [
    { name: "Dashboard", href: "/dashboard/landlord", icon: LayoutDashboard },
    { name: "Properties", href: "/dashboard/landlord/properties", icon: Building2 },
    { name: "Tenants", href: "/dashboard/landlord/tenants", icon: Users },
    { name: "Payments", href: "/dashboard/landlord/payments", icon: CreditCard },
    { name: "Analytics", href: "/dashboard/landlord/analytics", icon: PieChart },
    { name: "Maintenance", href: "/dashboard/landlord/maintenance", icon: Bell },
    { name: "Calendar", href: "/dashboard/landlord/calendar", icon: CalendarDays },
    { name: "Messages", href: "/dashboard/landlord/messages", icon: MessageSquare, badge: 3 },
    { name: "Documents", href: "/dashboard/landlord/documents", icon: FileText },
    { name: "Help", href: "/dashboard/landlord/help", icon: HelpCircle },
    { name: "Settings", href: "/dashboard/landlord/settings", icon: Settings },
  ]

  const tenantLinks = [
    { name: "Dashboard", href: "/dashboard/tenant", icon: LayoutDashboard },
    { name: "My Home", href: "/dashboard/tenant/home", icon: Home },
    { name: "Payments", href: "/dashboard/tenant/payments", icon: CreditCard },
    { name: "Maintenance", href: "/dashboard/tenant/maintenance", icon: Bell },
    { name: "Calendar", href: "/dashboard/tenant/calendar", icon: CalendarDays },
    { name: "Messages", href: "/dashboard/tenant/messages", icon: MessageSquare, badge: 2 },
    { name: "Documents", href: "/dashboard/tenant/documents", icon: FileText },
    { name: "Help", href: "/dashboard/tenant/help", icon: HelpCircle },
    { name: "Settings", href: "/dashboard/tenant/settings", icon: Settings },
  ]

  const links = isLandlord ? landlordLinks : tenantLinks

  if (!isOpen && !isMobile) {
    return (
      <div className="hidden w-16 h-full flex-col border-r border-border/20 bg-white/95 backdrop-blur-sm md:flex shadow-lg">
        <div className="flex h-16 items-center justify-center border-b border-border/20">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(true)} 
            className="text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <nav className="flex flex-1 flex-col gap-2 p-3 pt-6 overflow-y-auto">
          {links.map((link) => (
            <Button 
              key={link.href} 
              variant="ghost" 
              size="icon" 
              asChild
              className={cn(
                "relative h-11 w-11 rounded-xl transition-all duration-200",
                pathname === link.href ? 
                  "bg-primary text-white shadow-md hover:bg-primary/90" : 
                  "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              <Link href={link.href}>
                <link.icon className="h-5 w-5" />
                {link.badge && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px] bg-gradient-to-r from-red-500 to-pink-500 text-white border-0">
                    {link.badge}
                  </Badge>
                )}
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex flex-col gap-2 border-t border-border/20 p-3 pb-6">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="h-11 w-11 rounded-xl text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
          >
            <Link href="/help">
              <HelpCircle className="h-5 w-5" />
              <span className="sr-only">Help & Support</span>
            </Link>
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="h-11 w-11 rounded-xl text-muted-foreground hover:bg-red-50 hover:text-red-500 transition-all duration-200"
          >
            <Link href="/logout">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  if (isMobile && !isOpen) {
    return null
  }

  return (
    <div className={cn(
      "fixed inset-0 z-50 md:relative md:z-0 shadow-xl md:h-full", 
      isMobile ? "w-full" : "w-72",
      "bg-white/95 backdrop-blur-xl border-r border-border/20"
    )}>
      <div className="flex h-16 items-center border-b border-border/20 px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-2 group-hover:scale-110 transition-transform duration-200">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl gradient-text">Gingerly</span>
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto md:hidden text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-200" 
          onClick={() => setIsOpen(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto hidden md:flex text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all duration-200" 
          onClick={() => setIsOpen(false)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      
      <div className="flex flex-1 flex-col h-[calc(100%-4rem)] overflow-hidden">
        <div className="px-6 py-6">
          <div className="glass-card p-4 rounded-2xl border border-border/20">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12 border-2 border-primary/30 shadow-md">
                <AvatarImage src="" />
                <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-semibold">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-foreground">John Doe</p>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium",
                    isLandlord ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"
                  )}>
                    {isLandlord ? "Landlord" : "Tenant"}
                  </div>
                  <Sparkles className="h-3 w-3 text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="px-4 space-y-1 flex-1 overflow-y-auto">
          <div className="mb-4 px-2">
            <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">Navigation</p>
          </div>
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className={cn(
                "w-full justify-start h-12 px-4 rounded-xl transition-all duration-200 mb-1 group",
                pathname === link.href ? 
                  "bg-primary text-white shadow-md hover:bg-primary/90 font-medium" : 
                  "text-muted-foreground hover:bg-primary/10 hover:text-primary hover:shadow-sm"
              )}
              asChild
            >
              <Link href={link.href} className="relative">
                <link.icon className={cn(
                  "mr-3 h-5 w-5 transition-all duration-200",
                  pathname === link.href ? "text-white" : "group-hover:scale-110"
                )} />
                <span className="font-medium">{link.name}</span>
                {link.badge && (
                  <Badge className="absolute right-2 ml-auto h-5 min-w-5 px-2 flex items-center justify-center text-[10px] bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-sm">
                    {link.badge}
                  </Badge>
                )}
              </Link>
            </Button>
          ))}
        </nav>
        
        <div className="border-t border-border/20 p-4 mt-4">
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start h-10 rounded-xl text-muted-foreground hover:bg-blue-50 hover:text-blue-600 transition-all duration-200" 
              asChild
            >
              <Link href="/help">
                <HelpCircle className="mr-3 h-4 w-4" />
                <span className="font-medium">Help & Support</span>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-start h-10 rounded-xl border-border/30 text-muted-foreground hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all duration-200" 
              asChild
            >
              <Link href="/logout">
                <LogOut className="mr-3 h-4 w-4" />
                <span className="font-medium">Log out</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
