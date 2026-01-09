"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Calendar, CreditCard, Home, LineChart, Users, Sparkles, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Features data with enhanced descriptions and gradient colors
const features = [
  {
    icon: CreditCard,
    title: "Automated Payments",
    description: "Set up automatic rent collection on your preferred schedule. Tenants can automate their payments, too.",
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30"
  },
  {
    icon: LineChart,
    title: "Financial Dashboard",
    description: "Track your rental income, expenses, and payment history with beautiful visual reporting.",
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30"
  },
  {
    icon: Calendar,
    title: "Smart Reminders",
    description: "Automated notifications for upcoming payments, late rent, and other important dates.",
    gradient: "from-orange-500 to-red-600",
    bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30"
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Organize and manage all your properties, units, and associated documents in one place.",
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30"
  },
  {
    icon: Users,
    title: "Tenant Portal",
    description: "Give tenants a dedicated portal to make payments, submit maintenance requests, and access documents.",
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30"
  },
  {
    icon: Building2,
    title: "Owner Reports",
    description: "Generate detailed reports for property owners and investors with just a few clicks.",
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30"
  },
]

// Additional highlights
const highlights = [
  { icon: Zap, text: "Lightning Fast", color: "text-yellow-500" },
  { icon: Shield, text: "Bank-Grade Security", color: "text-green-500" },
  { icon: Sparkles, text: "AI-Powered Insights", color: "text-purple-500" }
]

export function FeatureSection() {
  const controls = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  }

  // Header animation
  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      },
    },
  }

  return (
    <section className="w-full py-16 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMmY2ZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="container px-4 md:px-6 mx-auto relative">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text">
            Powerful Features for Modern
            <br />
            Rental Management
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our platform empowers agents to manage landlord partnerships and streamline tenant relationships with cutting-edge technology and intuitive design.
          </p>
          
          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-border/50"
              >
                <highlight.icon className={cn("h-4 w-4", highlight.color)} />
                <span className="text-sm font-medium">{highlight.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border/50 p-8",
                "bg-gradient-to-br backdrop-blur-sm",
                feature.bgGradient,
                "hover:border-primary/30 hover:shadow-2xl hover:scale-[1.02]",
                "transition-all duration-500 ease-out cursor-pointer"
              )}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-20 blur-xl transition-all duration-500",
                  feature.gradient,
                  "group-hover:opacity-40 group-hover:blur-2xl"
                )} />
                <div className={cn(
                  "relative w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center text-white shadow-lg",
                  feature.gradient,
                  "group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                )}>
                  <feature.icon className="h-8 w-8" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Hover arrow */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ArrowRight className="h-5 w-5 text-primary" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <Link href="/features">
            <Button size="lg" className="btn-primary group px-8 py-4 text-lg">
              Explore All Features
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 