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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

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
    { name: "Messages", href: "/dashboard/landlord/messages", icon: MessageSquare },
    { name: "Settings", href: "/dashboard/landlord/settings", icon: Settings },
  ]

  const tenantLinks = [
    { name: "Dashboard", href: "/dashboard/tenant", icon: LayoutDashboard },
    { name: "My Home", href: "/dashboard/tenant/home", icon: Home },
    { name: "Payments", href: "/dashboard/tenant/payments", icon: CreditCard },
    { name: "Messages", href: "/dashboard/tenant/messages", icon: MessageSquare },
    { name: "Settings", href: "/dashboard/tenant/settings", icon: Settings },
  ]

  const links = isLandlord ? landlordLinks : tenantLinks

  if (!isOpen && !isMobile) {
    return (
      <div className="hidden w-16 flex-col border-r bg-background md:flex">
        <div className="flex h-16 items-center justify-center border-b">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <nav className="flex flex-1 flex-col gap-2 p-2">
          {links.map((link) => (
            <Button key={link.href} variant={pathname === link.href ? "secondary" : "ghost"} size="icon" asChild>
              <Link href={link.href}>
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex flex-col gap-2 border-t p-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild>
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
    <div className={cn("fixed inset-0 z-50 bg-background md:relative md:z-0", isMobile ? "w-full" : "w-64")}>
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold">Gingerly</span>
        </Link>
        <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setIsOpen(false)}>
          <X className="h-5 w-5" />
          <span className="sr-only">Close sidebar</span>
        </Button>
        <Button variant="ghost" size="icon" className="ml-auto hidden md:flex" onClick={() => setIsOpen(false)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <div className="flex flex-1 flex-col">
        <nav className="flex-1 space-y-1 p-2">
          {links.map((link) => (
            <Button
              key={link.href}
              variant={pathname === link.href ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
            >
              <Link href={link.href}>
                <link.icon className="mr-2 h-5 w-5" />
                {link.name}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-muted" />
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">{isLandlord ? "Landlord" : "Tenant"}</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/logout">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
