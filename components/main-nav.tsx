"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles, Building2 } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "./theme-toggle"

// Navigation links configuration
const navItems = [
  {
    title: "Features",
    href: "/features",
    children: [
      {
        title: "For Landlords",
        href: "/features/landlords",
        description: "Powerful tools to streamline your rental business",
        icon: "🏢"
      },
      {
        title: "For Tenants",
        href: "/features/tenants",
        description: "Simple and convenient rent payment solutions",
        icon: "🏠"
      },
      {
        title: "All Features",
        href: "/features",
        description: "Explore all our platform capabilities",
        icon: "✨"
      }
    ]
  },
  {
    title: "Pricing",
    href: "/pricing"
  },
  {
    title: "About",
    href: "/about"
  },
  {
    title: "Blog",
    href: "/blog"
  }
]

export function MainNav() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Desktop navigation menu with dropdowns
  const DesktopNav = () => (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.children ? (
              <>
                <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium">
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="glass-card p-6 w-[500px] lg:w-[600px]">
                    <div className="grid gap-4 md:grid-cols-2">
                      {item.children.map((child) => (
                        <NavigationMenuLink key={child.title} asChild>
                          <Link
                            href={child.href}
                            className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all hover:bg-primary/5 hover:scale-[1.02] focus:bg-primary/5 focus:scale-[1.02] border border-transparent hover:border-primary/20"
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-xl">{child.icon}</span>
                              <div className="text-sm font-semibold leading-none group-hover:text-primary transition-colors">
                                {child.title}
                              </div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-foreground transition-colors">
                              {child.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-primary/10 hover:text-primary transition-all duration-200 font-medium",
                  pathname === item.href && "text-primary bg-primary/10"
                )}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )

  // Mobile navigation with slide-out menu
  const MobileNav = () => (
    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon" className="h-10 w-10 p-0 hover:bg-primary/10 hover:text-primary transition-all duration-200">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[320px] sm:w-[400px] glass border-r border-border/50">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b border-border/50 pb-6 mb-6">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-3">
              <div className="rounded-xl bg-gradient-primary p-2">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl gradient-text">Gingerly</span>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          
          <nav className="flex flex-col gap-2 flex-1">
            {navItems.map((item) => (
              <div key={item.title} className="mb-4">
                {item.children ? (
                  <>
                    <div className="font-semibold mb-3 text-foreground flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" />
                      {item.title}
                    </div>
                    <div className="pl-6 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center gap-3 py-2 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-200",
                            pathname === child.href && "text-primary bg-primary/10 font-medium"
                          )}
                        >
                          <span className="text-base">{child.icon}</span>
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center py-3 px-4 rounded-xl font-medium hover:text-primary hover:bg-primary/5 transition-all duration-200",
                      pathname === item.href && "text-primary bg-primary/10"
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <div className="mt-auto pt-6 border-t border-border/50 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full btn-outline">Log in</Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full btn-primary">Sign up</Button>
              </Link>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="text-sm text-muted-foreground font-medium">Switch theme</div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )

  return (
    <div className="flex items-center">
      <MobileNav />
      <DesktopNav />
    </div>
  )
} 