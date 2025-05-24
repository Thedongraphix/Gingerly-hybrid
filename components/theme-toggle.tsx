"use client"
import { Moon, Sun, Monitor, Palette } from "lucide-react"
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
            "relative h-10 w-10 rounded-xl border-border/50 shadow-sm group overflow-hidden",
            isSidebar 
              ? "text-sidebar-foreground hover:bg-sidebar-accent/20 hover:text-sidebar-accent-foreground hover:border-sidebar-accent/30" 
              : "bg-background/80 backdrop-blur-sm hover:bg-primary/10 hover:text-primary hover:border-primary/30 hover:shadow-lg",
            "transition-all duration-300 hover:scale-110"
          )}
        >
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />
          
          <Sun className="relative z-10 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 ease-out dark:-rotate-180 dark:scale-0" />
          <Moon className="absolute z-10 h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all duration-500 ease-out dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={cn(
          "w-48 border-border/50 shadow-xl animate-in slide-in-from-top-2 fade-in-40 duration-200 glass-card",
          isSidebar && "bg-sidebar/95 border-sidebar-border text-sidebar-foreground backdrop-blur-xl"
        )}
      >
        <div className="py-1">
          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border/50 mb-1">
            <div className="flex items-center gap-2">
              <Palette className="h-3 w-3" />
              Theme
            </div>
          </div>
          
          <DropdownMenuItem 
            onClick={() => setTheme("light")}
            className={cn(
              "flex items-center gap-3 cursor-pointer mx-1 rounded-lg px-3 py-2 transition-all duration-200",
              theme === "light" && "bg-primary/10 text-primary",
              isSidebar 
                ? "hover:bg-sidebar-accent/20 focus:bg-sidebar-accent/20" 
                : "hover:bg-primary/5"
            )}
          >
            <div className="relative">
              <Sun className="h-4 w-4" />
              {theme === "light" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-pulse" />
              )}
            </div>
            <span className="font-medium">Light</span>
            {theme === "light" && (
              <div className="ml-auto flex items-center">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              </div>
            )}
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => setTheme("dark")}
            className={cn(
              "flex items-center gap-3 cursor-pointer mx-1 rounded-lg px-3 py-2 transition-all duration-200",
              theme === "dark" && "bg-primary/10 text-primary",
              isSidebar 
                ? "hover:bg-sidebar-accent/20 focus:bg-sidebar-accent/20" 
                : "hover:bg-primary/5"
            )}
          >
            <div className="relative">
              <Moon className="h-4 w-4" />
              {theme === "dark" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse" />
              )}
            </div>
            <span className="font-medium">Dark</span>
            {theme === "dark" && (
              <div className="ml-auto flex items-center">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              </div>
            )}
          </DropdownMenuItem>
          
          <DropdownMenuItem 
            onClick={() => setTheme("system")}
            className={cn(
              "flex items-center gap-3 cursor-pointer mx-1 rounded-lg px-3 py-2 transition-all duration-200",
              theme === "system" && "bg-primary/10 text-primary",
              isSidebar 
                ? "hover:bg-sidebar-accent/20 focus:bg-sidebar-accent/20" 
                : "hover:bg-primary/5"
            )}
          >
            <div className="relative">
              <Monitor className="h-4 w-4" />
              {theme === "system" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 animate-pulse" />
              )}
            </div>
            <span className="font-medium">System</span>
            {theme === "system" && (
              <div className="ml-auto flex items-center">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              </div>
            )}
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
