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
import { Menu, X } from "lucide-react"
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
        description: "Powerful tools to streamline your rental business"
      },
      {
        title: "For Tenants",
        href: "/features/tenants",
        description: "Simple and convenient rent payment solutions"
      },
      {
        title: "All Features",
        href: "/features",
        description: "Explore all our platform capabilities"
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
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.children.map((child) => (
                      <li key={child.title} className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            href={child.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{child.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {child.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
        <Button variant="ghost" size="icon" className="h-9 w-9 p-0">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center space-x-2">
              <span className="font-bold text-xl">Gingerly</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 flex-1">
            {navItems.map((item) => (
              <div key={item.title} className="border-b pb-4">
                {item.children ? (
                  <>
                    <div className="font-medium mb-2">{item.title}</div>
                    <div className="pl-4 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "text-muted-foreground hover:text-foreground transition-colors",
                            pathname === child.href && "text-foreground font-medium"
                          )}
                        >
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
                      "font-medium hover:text-primary transition-colors",
                      pathname === item.href && "text-primary"
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="mt-auto pt-4 border-t flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Log in</Button>
              </Link>
              <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Sign up</Button>
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Switch theme</div>
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