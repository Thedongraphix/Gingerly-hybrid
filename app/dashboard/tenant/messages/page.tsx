import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { PaperclipIcon, SendIcon } from "lucide-react"

export default function TenantMessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
        <p className="text-muted-foreground">Communicate with your landlord and property management.</p>
      </div>

      <div className="grid h-[calc(100vh-12rem)] grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <CardDescription>Your message history</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start rounded-none px-4 py-6 text-left">
                <div className="flex w-full items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="truncate font-medium">John Doe (Landlord)</p>
                      <p className="text-xs text-muted-foreground">2h ago</p>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      Thanks for your message. I'll look into the maintenance issue right away.
                    </p>
                  </div>
                </div>
              </Button>
              <Separator />
              <Button variant="secondary" className="w-full justify-start rounded-none px-4 py-6 text-left">
                <div className="flex w-full items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>PM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="truncate font-medium">Property Management</p>
                      <p className="text-xs text-muted-foreground">1d ago</p>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      We've scheduled the plumber to visit your apartment tomorrow between 10am-12pm.
                    </p>
                  </div>
                </div>
              </Button>
              <Separator />
              <Button variant="ghost" className="w-full justify-start rounded-none px-4 py-6 text-left">
                <div className="flex w-full items-center gap-3">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>MT</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1 overflow-hidden">
                    <div className="flex items-center justify-between">
                      <p className="truncate font-medium">Maintenance Team</p>
                      <p className="text-xs text-muted-foreground">3d ago</p>
                    </div>
                    <p className="truncate text-sm text-muted-foreground">
                      Your maintenance request #1234 has been completed. Please let us know if you need anything else.
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
                <AvatarFallback>PM</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base">Property Management</CardTitle>
                <CardDescription>Usually responds within 2 hours</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm">Hello! How can we help you today?</p>
                  <p className="mt-1 text-xs text-muted-foreground">10:30 AM</p>
                </div>
              </div>

              <div className="flex items-start justify-end gap-3">
                <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                  <p className="text-sm">
                    Hi, I've noticed a leak under the kitchen sink. Could someone come take a look at it?
                  </p>
                  <p className="mt-1 text-xs text-primary-foreground/70">10:45 AM</p>
                </div>
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex items-start gap-3">
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm">
                    I'm sorry to hear that. We'll send a plumber to check it out. Is tomorrow between 10am-12pm a good
                    time for you?
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">11:00 AM</p>
                </div>
              </div>

              <div className="flex items-start justify-end gap-3">
                <div className="rounded-lg bg-primary p-3 text-primary-foreground">
                  <p className="text-sm">Yes, that works for me. Thank you!</p>
                  <p className="mt-1 text-xs text-primary-foreground/70">11:05 AM</p>
                </div>
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>ME</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex items-start gap-3">
                <Avatar className="mt-1 h-8 w-8">
                  <AvatarFallback>PM</AvatarFallback>
                </Avatar>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-sm">
                    Great! We've scheduled the plumber to visit your apartment tomorrow between 10am-12pm. Please make
                    sure someone is home to let them in.
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">11:15 AM</p>
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
