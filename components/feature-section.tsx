"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { ArrowRight, Building2, Calendar, CreditCard, Home, LineChart, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Features data
const features = [
  {
    icon: CreditCard,
    title: "Automated Payments",
    description: "Set up automatic rent collection on your preferred schedule. Tenants can automate their payments, too.",
  },
  {
    icon: LineChart,
    title: "Financial Dashboard",
    description: "Track your rental income, expenses, and payment history with beautiful visual reporting.",
  },
  {
    icon: Calendar,
    title: "Smart Reminders",
    description: "Automated notifications for upcoming payments, late rent, and other important dates.",
  },
  {
    icon: Home,
    title: "Property Management",
    description: "Organize and manage all your properties, units, and associated documents in one place.",
  },
  {
    icon: Users,
    title: "Tenant Portal",
    description: "Give tenants a dedicated portal to make payments, submit maintenance requests, and access documents.",
  },
  {
    icon: Building2,
    title: "Owner Reports",
    description: "Generate detailed reports for property owners and investors with just a few clicks.",
  },
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
        staggerChildren: 0.1,
      },
    },
  }

  // Animation variants for items
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Powerful Features for Modern Rental Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform streamlines every aspect of the landlord-tenant relationship with these powerful features.
          </p>
        </div>

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
                "flex flex-col p-6 bg-background rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-200",
                "hover:border-primary/20 group"
              )}
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                {<feature.icon className="h-6 w-6" />}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Link href="/features">
            <Button size="lg" variant="outline" className="group">
              Explore All Features
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 