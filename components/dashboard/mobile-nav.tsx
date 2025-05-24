"use client"

import Link from "next/link"
import { Building2, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/sidebar-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export function MobileNav() {
  const { setIsOpen } = useSidebar()

  return (
    <header className="sticky top-0 z-40 border-b border-border/20 bg-white/95 backdrop-blur-xl md:hidden shadow-sm">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(true)} 
            className="rounded-xl text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <Link href="/" className="flex items-center gap-3 group">
            <div className="rounded-xl bg-gradient-to-r from-primary to-accent p-2 group-hover:scale-110 transition-transform duration-200">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl gradient-text">Gingerly</span>
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}
