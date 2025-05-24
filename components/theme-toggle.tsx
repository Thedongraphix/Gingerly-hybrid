"use client"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export function ThemeToggle({ variant }: { variant?: "default" | "sidebar" }) {
  const { setTheme, theme } = useTheme()
  const isSidebar = variant === "sidebar"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant={isSidebar ? "ghost" : "outline"} 
          size="icon" 
          className={cn(
            "relative h-9 w-9 rounded-full border-muted shadow-sm",
            isSidebar 
              ? "text-sidebar-foreground h-11 w-11 hover:bg-sidebar-accent/30 hover:text-sidebar-foreground" 
              : "bg-background hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={cn(
          "w-40 border-muted shadow-lg animate-in slide-in-from-top-2 fade-in-40",
          isSidebar && "bg-sidebar border-sidebar-border text-sidebar-foreground"
        )}
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className={cn(
            "flex items-center gap-2 cursor-pointer",
            isSidebar && "hover:bg-sidebar-accent/30 focus:bg-sidebar-accent/30"
          )}
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === "light" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className={cn(
            "flex items-center gap-2 cursor-pointer",
            isSidebar && "hover:bg-sidebar-accent/30 focus:bg-sidebar-accent/30"
          )}
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === "dark" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className={cn(
            "flex items-center gap-2 cursor-pointer",
            isSidebar && "hover:bg-sidebar-accent/30 focus:bg-sidebar-accent/30"
          )}
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
          {theme === "system" && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"></span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
