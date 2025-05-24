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
  HelpCircle
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
    { name: "Calendar", href: "/dashboard/landlord/calendar", icon: CalendarDays },
    { name: "Messages", href: "/dashboard/landlord/messages", icon: MessageSquare, badge: 3 },
    { name: "Documents", href: "/dashboard/landlord/documents", icon: FileText },
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
    { name: "Settings", href: "/dashboard/tenant/settings", icon: Settings },
  ]

  const links = isLandlord ? landlordLinks : tenantLinks

  if (!isOpen && !isMobile) {
    return (
      <div className="hidden w-16 flex-col border-r bg-sidebar md:flex shadow-sm">
        <div className="flex h-16 items-center justify-center border-b border-sidebar-border">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-sidebar-foreground hover:bg-sidebar-accent/30">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <nav className="flex flex-1 flex-col gap-3 p-3 pt-6">
          {links.map((link) => (
            <Button 
              key={link.href} 
              variant="ghost" 
              size="icon" 
              asChild
              className={cn(
                "relative text-sidebar-foreground h-11 w-11",
                pathname === link.href ? 
                  "bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" : 
                  "hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
              )}
            >
              <Link href={link.href}>
                <link.icon className="h-5 w-5" />
                {link.badge && (
                  <Badge className="absolute -top-0.5 -right-0.5 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-primary text-primary-foreground">
                    {link.badge}
                  </Badge>
                )}
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex flex-col gap-3 border-t border-sidebar-border p-3 pb-6">
          <ThemeToggle variant="sidebar" />
          <Button 
            variant="ghost" 
            size="icon" 
            asChild 
            className="h-11 w-11 text-sidebar-foreground hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
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
            className="h-11 w-11 text-sidebar-foreground hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
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
    <div className={cn("fixed inset-0 z-50 bg-sidebar md:relative md:z-0 shadow-lg", isMobile ? "w-full" : "w-72")}>
      <div className="flex h-16 items-center border-b border-sidebar-border px-6">
        <Link href="/" className="flex items-center gap-2 text-sidebar-foreground">
          <Building2 className="h-6 w-6" />
          <span className="font-bold text-lg">Gingerly</span>
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto md:hidden text-sidebar-foreground hover:bg-sidebar-accent/30" 
          onClick={() => setIsOpen(false)}
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          className="ml-auto hidden md:flex text-sidebar-foreground hover:bg-sidebar-accent/30" 
          onClick={() => setIsOpen(false)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      
      <div className="flex flex-1 flex-col">
        <div className="px-5 py-6">
          <div className="flex items-center gap-3 mb-6">
            <Avatar className="h-10 w-10 border-2 border-primary/20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-sidebar-accent text-sidebar-accent-foreground">JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-sidebar-foreground">John Doe</p>
              <p className="text-xs text-sidebar-foreground/70">{isLandlord ? "Landlord" : "Tenant"}</p>
            </div>
          </div>
        </div>
        
        <nav className="px-3 space-y-1.5">
          <div className="mb-2 px-2">
            <p className="text-xs uppercase tracking-wider text-sidebar-foreground/50 font-medium mb-1">Menu</p>
          </div>
          {links.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              className={cn(
                "w-full justify-start h-11 px-3 text-sidebar-foreground mb-1 overflow-visible",
                pathname === link.href ? 
                  "bg-sidebar-accent text-sidebar-accent-foreground font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" : 
                  "hover:bg-sidebar-accent/30 hover:text-sidebar-foreground"
              )}
              asChild
            >
              <Link href={link.href} className="relative">
                <link.icon className="mr-3 h-[18px] w-[18px]" />
                {link.name}
                {link.badge && (
                  <Badge className="absolute right-0 ml-auto h-5 min-w-5 px-1 flex items-center justify-center text-[10px] bg-primary text-primary-foreground">
                    {link.badge}
                  </Badge>
                )}
              </Link>
            </Button>
          ))}
        </nav>
        
        <div className="mt-auto border-t border-sidebar-border p-5">
          <div className="flex flex-col gap-2">
            <Button variant="ghost" size="sm" className="w-full justify-start h-10 text-sidebar-foreground hover:bg-sidebar-accent/30" asChild>
              <Link href="/help">
                <HelpCircle className="mr-2 h-4 w-4" />
                Help & Support
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start h-10 border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent/30 hover:text-sidebar-foreground" asChild>
              <Link href="/logout">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
