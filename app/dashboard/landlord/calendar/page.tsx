"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { 
  CalendarDays, 
  Clock, 
  CreditCard, 
  Building2, 
  Wrench, 
  Plus, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Bell,
  DollarSign,
  MapPin,
  User,
  Eye,
  Users,
  CheckCircle
} from "lucide-react"
import { useState } from "react"

export default function LandlordCalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Sample events data for landlord
  const events = [
    {
      id: 1,
      title: "Property Inspection - Sunset Apt 3B",
      date: "2024-05-02",
      type: "inspection",
      time: "10:00 AM",
      status: "scheduled",
      property: "Sunset Apartments",
      tenant: "Sarah Johnson"
    },
    {
      id: 2,
      title: "Rent Collection Due",
      date: "2024-05-01",
      type: "payment",
      time: "All Day",
      status: "active",
      collected: 8,
      total: 12,
      amount: "$14,400.00"
    },
    {
      id: 3,
      title: "Maintenance - Kitchen Sink Repair",
      date: "2024-05-03",
      type: "maintenance",
      time: "10:00 AM - 12:00 PM",
      status: "scheduled",
      property: "Sunset Apartments",
      unit: "3B",
      technician: "Mike Johnson"
    },
    {
      id: 4,
      title: "Lease Renewal Meeting",
      date: "2024-05-15",
      type: "meeting",
      time: "2:00 PM",
      status: "upcoming",
      property: "Riverside Condos",
      tenant: "Emily Davis"
    },
    {
      id: 5,
      title: "New Tenant Move-in",
      date: "2024-05-08",
      type: "move-in",
      time: "9:00 AM",
      status: "scheduled",
      property: "Oakwood Residences",
      unit: "2A",
      tenant: "Robert Taylor"
    },
    {
      id: 6,
      title: "Property Marketing Photos",
      date: "2024-05-10",
      type: "marketing",
      time: "11:00 AM",
      status: "scheduled",
      property: "Riverside Condos",
      unit: "4C"
    }
  ]

  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date()).slice(0, 4)
  const todayEvents = events.filter(event => {
    const today = new Date().toISOString().split('T')[0]
    return event.date === today
  })

  return (
    <div className="space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg">
              <CalendarDays className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Property Calendar</h1>
              <p className="text-muted-foreground text-base md:text-lg">Manage inspections, maintenance, rent collection, and tenant meetings.</p>
            </div>
            <Button className="btn-primary shadow-lg hover:shadow-xl w-full sm:w-auto">
              <Plus className="mr-2 h-4 w-4" />
              Schedule Event
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-4">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100/50 dark:from-green-950/30 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Today's Events</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  {todayEvents.length}
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Scheduled activities
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <CalendarDays className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100/50 dark:from-blue-950/30 dark:to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Rent Collection</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  8/12
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Units paid this month
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <DollarSign className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-100/50 dark:from-orange-950/30 dark:to-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Maintenance</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  3 Pending
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Scheduled repairs
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Wrench className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100/50 dark:from-purple-950/30 dark:to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Inspections</p>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                  2 This Week
                </h3>
                <p className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-300">
                  Property inspections
                </p>
              </div>
              
              <div className="relative ml-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl" />
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <Eye className="h-6 w-6 md:h-7 md:w-7" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Calendar Component */}
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 lg:col-span-2">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 text-white">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  May 2024
                </CardTitle>
                <CardDescription className="text-base">Property management schedule and events</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="btn-outline">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="btn-outline">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="rounded-xl border-0 w-full"
            />
            
            {/* Calendar Legend */}
            <div className="mt-6 pt-4 border-t border-border/50">
              <h4 className="text-sm font-semibold text-foreground mb-3">Event Types</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600"></div>
                  <span className="text-xs text-muted-foreground">Rent Collection</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-600"></div>
                  <span className="text-xs text-muted-foreground">Inspections</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-red-600"></div>
                  <span className="text-xs text-muted-foreground">Maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600"></div>
                  <span className="text-xs text-muted-foreground">Meetings</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600"></div>
                  <span className="text-xs text-muted-foreground">Move-in/out</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-500 to-gray-600"></div>
                  <span className="text-xs text-muted-foreground">Marketing</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events Sidebar */}
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                <Bell className="h-5 w-5" />
              </div>
              Upcoming Events
            </CardTitle>
            <CardDescription className="text-base">Your scheduled property activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingEvents.map((event, i) => (
              <Card key={event.id} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl ${
                      event.type === 'payment' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
                        : event.type === 'inspection'
                          ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                          : event.type === 'maintenance'
                            ? 'bg-gradient-to-r from-orange-500 to-red-600'
                            : event.type === 'meeting'
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                              : event.type === 'move-in'
                                ? 'bg-gradient-to-r from-yellow-500 to-orange-600'
                                : 'bg-gradient-to-r from-gray-500 to-gray-600'
                    } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {event.type === 'payment' && <DollarSign className="h-5 w-5" />}
                      {event.type === 'inspection' && <Eye className="h-5 w-5" />}
                      {event.type === 'maintenance' && <Wrench className="h-5 w-5" />}
                      {event.type === 'meeting' && <Users className="h-5 w-5" />}
                      {event.type === 'move-in' && <Building2 className="h-5 w-5" />}
                      {event.type === 'marketing' && <Sparkles className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-bold text-sm group-hover:text-primary transition-colors duration-200">{event.title}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{new Date(event.date).toLocaleDateString()} • {event.time}</span>
                      </div>
                      {event.property && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Building2 className="h-3 w-3" />
                          <span>{event.property} {event.unit && `• Unit ${event.unit}`}</span>
                        </div>
                      )}
                      {event.tenant && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <User className="h-3 w-3" />
                          <span>{event.tenant}</span>
                        </div>
                      )}
                      {event.technician && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Wrench className="h-3 w-3" />
                          <span>{event.technician}</span>
                        </div>
                      )}
                      {event.collected && event.total && (
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <CheckCircle className="h-3 w-3" />
                          <span>{event.collected}/{event.total} collected</span>
                        </div>
                      )}
                      <Badge className={`text-xs ${
                        event.status === 'active' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200'
                          : event.status === 'scheduled'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200'
                            : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200'
                      }`}>
                        {event.status === 'active' ? 'Active' : event.status === 'scheduled' ? 'Scheduled' : 'Upcoming'}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="outline" className="w-full btn-outline hover:shadow-md">
              <Sparkles className="mr-2 h-4 w-4" />
              View All Events
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Monthly Overview */}
      <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <Building2 className="h-5 w-5" />
            </div>
            Property Management Schedule
          </CardTitle>
          <CardDescription className="text-base">All scheduled activities across your properties</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {events.map((event, i) => (
              <Card key={event.id} className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-2xl ${
                        event.type === 'payment' 
                          ? 'bg-gradient-to-r from-blue-500 to-cyan-600'
                          : event.type === 'inspection'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600'
                            : event.type === 'maintenance'
                              ? 'bg-gradient-to-r from-orange-500 to-red-600'
                              : event.type === 'meeting'
                                ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                                : event.type === 'move-in'
                                  ? 'bg-gradient-to-r from-yellow-500 to-orange-600'
                                  : 'bg-gradient-to-r from-gray-500 to-gray-600'
                      } flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {event.type === 'payment' && <DollarSign className="h-6 w-6" />}
                        {event.type === 'inspection' && <Eye className="h-6 w-6" />}
                        {event.type === 'maintenance' && <Wrench className="h-6 w-6" />}
                        {event.type === 'meeting' && <Users className="h-6 w-6" />}
                        {event.type === 'move-in' && <Building2 className="h-6 w-6" />}
                        {event.type === 'marketing' && <Sparkles className="h-6 w-6" />}
                      </div>
                      <div className="space-y-1 flex-1">
                        <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">{event.title}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarDays className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        {event.property && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Building2 className="h-4 w-4" />
                            <span>{event.property} {event.unit && `• Unit ${event.unit}`}</span>
                          </div>
                        )}
                        {event.tenant && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-4 w-4" />
                            <span>Tenant: {event.tenant}</span>
                          </div>
                        )}
                        {event.technician && (
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Wrench className="h-4 w-4" />
                            <span>Technician: {event.technician}</span>
                          </div>
                        )}
                        {event.amount && (
                          <p className="text-sm font-medium text-foreground">{event.amount}</p>
                        )}
                        {event.collected && event.total && (
                          <p className="text-sm font-medium text-foreground">{event.collected} of {event.total} units collected</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge className={`px-3 py-1 font-semibold ${
                        event.status === 'active' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200'
                          : event.status === 'scheduled'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200'
                            : 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 border-orange-200'
                      }`}>
                        {event.status === 'active' ? 'Active' : event.status === 'scheduled' ? 'Scheduled' : 'Upcoming'}
                      </Badge>
                      <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                        <Eye className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">View Details</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 