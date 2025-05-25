import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Settings, 
  User, 
  Bell, 
  CreditCard, 
  Shield, 
  Camera, 
  Mail, 
  Phone, 
  Lock, 
  Sparkles,
  Edit,
  Trash2,
  Plus,
  CheckCircle
} from "lucide-react"

export default function TenantSettingsPage() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Modern Header */}
      <div className="relative overflow-hidden rounded-3xl glass-card border border-border/50 p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10" />
        <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg">
              <Settings className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold gradient-text">Settings</h1>
              <p className="text-muted-foreground text-base md:text-lg">Manage your account settings and preferences.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tabs */}
      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="glass-card border border-border/50 p-1 bg-background/80 backdrop-blur-sm rounded-2xl shadow-md w-full md:w-auto">
          <TabsTrigger 
            value="profile" 
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <User className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Profile</span>
          </TabsTrigger>
          <TabsTrigger 
            value="notifications"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Bell className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger 
            value="payment"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <CreditCard className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Payment</span>
          </TabsTrigger>
          <TabsTrigger 
            value="security"
            className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md rounded-xl font-medium transition-all duration-200 flex-1 md:flex-none"
          >
            <Shield className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <User className="h-5 w-5" />
                </div>
                Profile Information
              </CardTitle>
              <CardDescription className="text-base">Update your personal information and profile picture</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture Section */}
              <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-6 sm:space-y-0">
                <div className="relative group">
                  <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
                    <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl font-bold">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <Camera className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="space-y-3 text-center sm:text-left">
                  <Button size="sm" className="btn-primary shadow-lg hover:shadow-xl">
                    <Camera className="mr-2 h-4 w-4" />
                    Upload new photo
                  </Button>
                  <p className="text-sm text-muted-foreground">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              {/* Form Fields */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-sm font-semibold text-foreground">First name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="first-name" defaultValue="John" className="pl-10 input-modern" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-sm font-semibold text-foreground">Last name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="last-name" defaultValue="Doe" className="pl-10 input-modern" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" defaultValue="john.doe@example.com" className="pl-10 input-modern" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" defaultValue="+1 (555) 000-0000" className="pl-10 input-modern" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="btn-primary shadow-lg hover:shadow-xl">
                <Sparkles className="mr-2 h-4 w-4" />
                Save changes
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                  <Bell className="h-5 w-5" />
                </div>
                Notification Preferences
              </CardTitle>
              <CardDescription className="text-base">Manage how you receive notifications and alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  title: "Payment Reminders",
                  description: "Receive reminders before your rent is due",
                  defaultChecked: true,
                  gradient: "from-blue-500 to-cyan-600"
                },
                {
                  title: "Payment Confirmations", 
                  description: "Receive confirmations when your payment is processed",
                  defaultChecked: true,
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  title: "Messages",
                  description: "Receive notifications for new messages",
                  defaultChecked: true,
                  gradient: "from-purple-500 to-pink-600"
                },
                {
                  title: "Maintenance Updates",
                  description: "Receive updates about maintenance requests",
                  defaultChecked: true,
                  gradient: "from-orange-500 to-red-600"
                }
              ].map((notification, index) => (
                <div key={index}>
                  <div className="glass-card border border-border/50 p-4 rounded-2xl hover:border-primary/30 transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-2 rounded-xl bg-gradient-to-r ${notification.gradient} text-white shadow-lg`}>
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <div className="space-y-1 flex-1">
                          <h3 className="font-semibold text-foreground">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground">{notification.description}</p>
                        </div>
                      </div>
                      <Switch defaultChecked={notification.defaultChecked} />
                    </div>
                  </div>
                  {index < 3 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="btn-primary shadow-lg hover:shadow-xl">
                <Sparkles className="mr-2 h-4 w-4" />
                Save preferences
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                  <CreditCard className="h-5 w-5" />
                </div>
                Payment Methods
              </CardTitle>
              <CardDescription className="text-base">Manage your payment methods and billing preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Existing Payment Methods */}
              <Card className="glass-card border border-border/50 hover:border-green-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs font-bold">VISA</span>
                      </div>
                      <div>
                        <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground font-medium">Expires 04/2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="btn-outline hover:shadow-md text-destructive hover:text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border border-border/50 hover:border-purple-300 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-10 rounded-xl bg-gradient-to-r from-green-600 to-green-800 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xs font-bold">MPESA</span>
                      </div>
                      <div>
                        <p className="font-bold text-lg group-hover:text-primary transition-colors duration-200">Mpesa</p>
                        <p className="text-sm text-muted-foreground font-medium">+254 712 345 678</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="btn-outline hover:shadow-md">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="btn-outline hover:shadow-md text-destructive hover:text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="btn-primary shadow-lg hover:shadow-xl w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                Add payment method
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-r from-red-500 to-orange-600 text-white">
                  <Shield className="h-5 w-5" />
                </div>
                Security Settings
              </CardTitle>
              <CardDescription className="text-base">Manage your account security and password settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Password Change Section */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-sm font-semibold text-foreground">Current password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="current-password" type="password" placeholder="Enter current password" className="pl-10 input-modern" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-sm font-semibold text-foreground">New password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="new-password" type="password" placeholder="Enter new password" className="pl-10 input-modern" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-sm font-semibold text-foreground">Confirm password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="confirm-password" type="password" placeholder="Confirm new password" className="pl-10 input-modern" />
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Two-Factor Authentication */}
              <div className="space-y-4">
                <Label className="text-sm font-semibold text-foreground">Two-factor authentication</Label>
                <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg">
                          <Shield className="h-4 w-4" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-foreground">Two-factor authentication</h3>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                        </div>
                      </div>
                      <Button variant="outline" className="btn-outline hover:shadow-md w-full sm:w-auto">
                        <Shield className="mr-2 h-4 w-4" />
                        Enable
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
            <CardFooter className="pt-6">
              <Button className="btn-primary shadow-lg hover:shadow-xl">
                <Sparkles className="mr-2 h-4 w-4" />
                Update password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
