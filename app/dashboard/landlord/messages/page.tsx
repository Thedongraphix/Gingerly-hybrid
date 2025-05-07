import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PaperclipIcon, SendIcon, Search } from "lucide-react"

export default function LandlordMessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
          <p className="text-muted-foreground">Communicate with your tenants.</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search messages..." className="w-full pl-8" />
        </div>
      </div>

      <div className="grid h-[calc(100vh-12rem)] grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <CardDescription>Your message history with tenants</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start rounded-none px-4 py-6 text-left">
                <div className="flex w-full items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="truncate font-medium">Sarah Johnson</p>
                      <p className="text-xs text-muted-foreground">1h ago</p>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      Thank you for addressing the issue so quickly!
                    </p>
                  </div>
                </div>
              </Button>
              <Separator />
              <Button variant="secondary" className="w-full justify-start rounded-none px-4 py-6 text-left">
                <div className="flex w-full items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>MB</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <p className="truncate font-medium">Michael Brown</p>
                        <Badge variant="outline" className="h-5 rounded-sm px-1 text-xs">
                          New
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">30m ago</p>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      I've noticed a leak under the kitchen sink. Could someone come take a look at it?
                    </p>
                  </div>
                </div>
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start rounded-none px-4 py-6 text-left">
                <div className="flex w-full items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>ED</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="truncate font-medium">Emily Davis</p>
                      <p className="text-xs text-muted-foreground">2d ago</p>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      When will the landscaping team be coming this month?
                    </p>
                  </div>
                </div>
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start rounded-none px-4 py-6 text-left">
                <div className="flex w-full items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>DW</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="truncate font-medium">David Wilson</p>
                      <p className="text-xs text-muted-foreground">3d ago</p>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      I'd like to discuss renewing my lease. When would be a good time to talk?
                    </p>
                  </div>
                </div>
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start rounded-none px-4 py-6 text-left">
                <div className="flex w-full items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>LT</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="truncate font-medium">Lisa Thompson</p>
                      <p className="text-xs text-muted-foreground">1w ago</p>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      The new parking policy is working great. Thank you!
                    </p>
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex flex-col md:col-span-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">Michael Brown</CardTitle>
                <CardDescription>Riverside Condos, Unit 2A</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              <div className="flex items-start justify-end gap-3">
                <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                  <p className="text-sm">
                    Hello Michael, just checking in to see if everything is going well with your apartment.
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/70">Yesterday, 4:30 PM</p>
                </div>
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex items-start gap-3">
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm">
                    Hi, thanks for checking in. Actually, I've noticed a leak under the kitchen sink. Could someone come
                    take a look at it?
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">Today, 10:45 AM</p>
                </div>
              </div>

              <div className="flex items-start justify-end gap-3">
                <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                  <p className="text-sm">
                    I'm sorry to hear that. We'll send a plumber to check it out. Is tomorrow between 10am-12pm a good
                    time for you?
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/70">Today, 11:00 AM</p>
                </div>
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex items-start gap-3">
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm">Yes, that works for me. Thank you!</p>
                  <p className="mt-1 text-xs text-muted-foreground">Today, 11:05 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="shrink-0">
                <PaperclipIcon className="h-4 w-4" />
                <span className="sr-only">Attach file</span>
              </Button>
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="icon" className="shrink-0">
                <SendIcon className="h-4 w-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
