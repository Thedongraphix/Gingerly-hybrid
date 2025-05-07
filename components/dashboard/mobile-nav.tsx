"use client"

import Link from "next/link"
import { Building2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const { setIsOpen } = useSidebar()

  return (
    <header className="sticky top-0 z-40 border-b bg-background md:hidden">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="mr-2">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Building2 className="h-6 w-6" />
            <span className="font-bold">Gingerly</span>
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
