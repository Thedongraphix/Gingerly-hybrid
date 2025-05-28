"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { 
  MessageSquare, 
  Search, 
  Send, 
  Paperclip, 
  Phone, 
  Video, 
  MoreVertical,
  Filter,
  Archive,
  Star,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building2,
  Users,
  Settings,
  Image,
  Smile,
  Plus,
  ArrowLeft
} from "lucide-react"

export default function LandlordMessagesPage() {
  const [selectedChat, setSelectedChat] = useState("michael")
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [showConversations, setShowConversations] = useState(true)

  // Sample conversations data  
  const conversations = [
    {
      id: "michael",
      name: "Michael Brown",
      avatar: "MB", 
      property: "Riverside Condos",
      unit: "2A",
      lastMessage: "I've noticed a leak under the kitchen sink. Could someone come take a look at it?",
      lastMessageTime: "30m ago",
      unread: 1,
      status: "urgent",
      type: "maintenance"
    },
    {
      id: "sarah",
      name: "Sarah Johnson", 
      avatar: "SJ",
      property: "Sunset Apartments",
      unit: "3B",
      lastMessage: "Thank you for addressing the issue so quickly!",
      lastMessageTime: "1h ago",
      unread: 0,
      status: "resolved",
      type: "maintenance"
    },
    {
      id: "emily",
      name: "Emily Davis",
      avatar: "ED",
      property: "Oakwood Residences", 
      unit: "1C",
      lastMessage: "When will the landscaping team be coming this month?",
      lastMessageTime: "2d ago",
      unread: 0,
      status: "pending",
      type: "general"
    },
    {
      id: "david",
      name: "David Wilson",
      avatar: "DW", 
      property: "Downtown Lofts",
      unit: "5A",
      lastMessage: "I'd like to discuss renewing my lease. When would be a good time to talk?",
      lastMessageTime: "3d ago",
      unread: 0,
      status: "important",
      type: "business"
    },
    {
      id: "lisa",
      name: "Lisa Thompson",
      avatar: "LT",
      property: "Sunset Apartments",
      unit: "4D", 
      lastMessage: "The new parking policy is working great. Thank you!",
      lastMessageTime: "1w ago",
      unread: 0,
      status: "resolved",
      type: "general"
    },
    {
      id: "amanda",
      name: "Amanda Clark",
      avatar: "AC",
      property: "Oakwood Residences",
      unit: "2B",
      lastMessage: "Payment has been sent. Please confirm receipt.",
      lastMessageTime: "2w ago", 
      unread: 0,
      status: "pending",
      type: "payment"
    }
  ]

  // Sample messages for the selected conversation
  const messages = {
    michael: [
      {
        id: 1,
        sender: "landlord",
        text: "Hello Michael, just checking in to see if everything is going well with your apartment.",
        timestamp: "Yesterday, 4:30 PM",
        avatar: "ME"
      },
      {
        id: 2,
        sender: "tenant", 
        text: "Hi, thanks for checking in. Actually, I've noticed a leak under the kitchen sink. Could someone come take a look at it?",
        timestamp: "Today, 10:45 AM",
        avatar: "MB"
      },
      {
        id: 3,
        sender: "landlord",
        text: "I'm sorry to hear that. We'll send a plumber to check it out. Is tomorrow between 10am-12pm a good time for you?",
        timestamp: "Today, 11:00 AM", 
        avatar: "ME"
      },
      {
        id: 4,
        sender: "tenant",
        text: "Yes, that works for me. Thank you!",
        timestamp: "Today, 11:05 AM",
        avatar: "MB"
      }
    ],
    sarah: [
      {
        id: 1,
        sender: "tenant",
        text: "The maintenance team did an excellent job fixing the air conditioning. Thank you for the quick response!",
        timestamp: "Today, 2:15 PM",
        avatar: "SJ"
      },
      {
        id: 2,
        sender: "landlord", 
        text: "You're very welcome, Sarah! I'm glad we could resolve the issue quickly. Please don't hesitate to reach out if you need anything else.",
        timestamp: "Today, 2:30 PM",
        avatar: "ME"
      }
    ]
  }

  const currentMessages = messages[selectedChat] || []
  const currentChat = conversations.find(c => c.id === selectedChat)

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.property.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesFilter = activeFilter === "all" || 
                         (activeFilter === "unread" && conv.unread > 0) ||
                         (activeFilter === "urgent" && conv.status === "urgent") ||
                         (activeFilter === "maintenance" && conv.type === "maintenance")
    
    return matchesSearch && matchesFilter
  })

  const handleChatSelect = (chatId: string) => {
    setSelectedChat(chatId)
    setShowConversations(false)
  }

  const handleBackToConversations = () => {
    setShowConversations(true)
  }

  return (
    <div className="space-y-6 md:space-y-8">
      {/* Modern Header - Mobile Optimized */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-3xl glass-card border border-border/50 p-4 md:p-6 lg:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-background to-purple-500/10" />
        <div className="absolute top-4 right-4 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative">
          <div className="flex flex-col gap-4 mb-4 md:mb-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="p-2 md:p-3 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shrink-0">
                <MessageSquare className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text">Messages & Communications</h1>
                <p className="text-muted-foreground text-sm md:text-base lg:text-lg">Stay connected with your tenants and manage all communications.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Select value={activeFilter} onValueChange={setActiveFilter}>
                <SelectTrigger className="w-full sm:w-[140px] glass border border-border/50 rounded-xl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Messages</SelectItem>
                  <SelectItem value="unread">Unread</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
              <Button className="btn-primary w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" />
                New Chat
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards - Mobile Grid */}
      <div className="grid gap-3 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-4">
        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-blue-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Total Chats</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">{conversations.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <AlertCircle className="h-6 w-6 md:h-8 md:w-8 text-orange-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Unread</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-orange-600">{conversations.filter(c => c.unread > 0).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="h-6 w-6 md:h-8 md:w-8 text-red-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Urgent</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-red-600">{conversations.filter(c => c.status === 'urgent').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 group">
          <CardContent className="p-3 md:p-4 lg:p-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle2 className="h-6 w-6 md:h-8 md:w-8 text-green-500" />
              <div>
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Resolved</p>
                <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-600">{conversations.filter(c => c.status === 'resolved').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Chat Interface */}
      <div className="block lg:hidden">
        {showConversations ? (
          /* Conversations List - Mobile */
          <Card className="glass-card border border-border/50">
            <CardHeader className="pb-4 p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <Users className="h-4 w-4" />
                  </div>
                  Conversations
                </CardTitle>
                <Button variant="outline" size="sm" className="btn-outline">
                  <Archive className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="input-icon" />
                <Input
                  type="search"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-modern pl-10"
                />
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="space-y-1">
                {filteredConversations.map((conversation, index) => (
                  <div key={conversation.id}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start rounded-none px-4 py-4 h-auto text-left transition-all duration-200 hover:bg-primary/5"
                      onClick={() => handleChatSelect(conversation.id)}
                    >
                      <div className="flex w-full items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12 border-2 border-primary/20 shadow-md">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-semibold">
                              {conversation.avatar}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.unread > 0 && (
                            <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                              <span className="text-xs text-white font-bold">{conversation.unread}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 space-y-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-sm truncate">{conversation.name}</p>
                              <Badge className={`px-2 py-0.5 text-xs font-medium ${
                                conversation.status === 'urgent' 
                                  ? 'bg-red-100 text-red-700'
                                  : conversation.status === 'important'
                                    ? 'bg-orange-100 text-orange-700'
                                    : conversation.status === 'resolved'
                                      ? 'bg-green-100 text-green-700'
                                      : 'bg-blue-100 text-blue-700'
                              }`}>
                                {conversation.type}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{conversation.lastMessageTime}</p>
                          </div>
                          
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Building2 className="h-3 w-3" />
                            <span>{conversation.property}</span>
                            <span>•</span>
                            <span>Unit {conversation.unit}</span>
                          </div>
                          
                          <p className="truncate text-sm text-muted-foreground leading-tight">
                            {conversation.lastMessage}
                          </p>
                        </div>
                      </div>
                    </Button>
                    {index < filteredConversations.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          /* Chat Area - Mobile */
          <Card className="glass-card border border-border/50 h-[70vh] flex flex-col">
            {currentChat && (
              <>
                {/* Chat Header - Mobile */}
                <CardHeader className="border-b border-border/20 pb-4 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleBackToConversations}
                        className="rounded-xl"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </Button>
                      <Avatar className="h-10 w-10 border-2 border-primary/30 shadow-md">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-semibold">
                          {currentChat.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base font-bold">{currentChat.name}</CardTitle>
                        <CardDescription className="text-xs">
                          {currentChat.property} • Unit {currentChat.unit}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="btn-outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="btn-outline">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages - Mobile */}
                <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background/50 to-muted/20">
                  {currentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-3 ${
                        message.sender === "landlord" ? "justify-end" : ""
                      }`}
                    >
                      {message.sender === "tenant" && (
                        <Avatar className="h-6 w-6 border-2 border-border/20 shadow-sm">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                            {message.avatar}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div className={`max-w-[75%] ${message.sender === "landlord" ? "order-first" : ""}`}>
                        <div
                          className={`rounded-2xl p-3 shadow-sm ${
                            message.sender === "landlord"
                              ? "bg-gradient-to-r from-primary to-accent text-white"
                              : "bg-white/80 backdrop-blur-sm border border-border/50 text-foreground"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                        <p
                          className={`mt-1 text-xs text-muted-foreground ${
                            message.sender === "landlord" ? "text-right" : "text-left"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                      
                      {message.sender === "landlord" && (
                        <Avatar className="h-6 w-6 border-2 border-border/20 shadow-sm">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs">
                            {message.avatar}
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </CardContent>

                {/* Message Input - Mobile */}
                <div className="border-t border-border/20 p-4 bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="btn-outline shrink-0">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type your message..."
                      className="flex-1 rounded-xl border-border/50 focus:border-primary/50 bg-white/80 backdrop-blur-sm"
                    />
                    <Button size="icon" className="btn-primary shrink-0 shadow-lg">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        )}
      </div>

      {/* Desktop Chat Interface */}
      <div className="hidden lg:grid h-[calc(100vh-28rem)] grid-cols-1 gap-6 lg:grid-cols-7">
        {/* Conversations List */}
        <div className="lg:col-span-3">
          <Card className="glass-card border border-border/50 h-full flex flex-col">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  Conversations
                </CardTitle>
                <Button variant="outline" size="sm" className="btn-outline">
                  <Archive className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Search */}
              <div className="relative">
                <Search className="input-icon" />
                <Input
                  type="search"
                  placeholder="Search conversations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="input-modern pl-10"
                />
              </div>
            </CardHeader>
            
            <CardContent className="flex-1 overflow-y-auto p-0">
              <div className="space-y-1">
                {filteredConversations.map((conversation, index) => (
                  <div key={conversation.id}>
                    <Button
                      variant={selectedChat === conversation.id ? "secondary" : "ghost"}
                      className={`w-full justify-start rounded-none px-6 py-4 h-auto text-left transition-all duration-200 hover:bg-primary/5 hover:border-l-4 hover:border-primary ${
                        selectedChat === conversation.id 
                          ? "bg-primary/10 border-l-4 border-primary text-primary shadow-sm" 
                          : ""
                      }`}
                      onClick={() => setSelectedChat(conversation.id)}
                    >
                      <div className="flex w-full items-start gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12 border-2 border-primary/20 shadow-md">
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-semibold">
                              {conversation.avatar}
                            </AvatarFallback>
                          </Avatar>
                          {conversation.unread > 0 && (
                            <div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                              <span className="text-xs text-white font-bold">{conversation.unread}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 space-y-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <p className="font-semibold text-sm truncate">{conversation.name}</p>
                              <Badge className={`px-2 py-0.5 text-xs font-medium ${
                                conversation.status === 'urgent' 
                                  ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                                  : conversation.status === 'important'
                                    ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                                    : conversation.status === 'resolved'
                                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                              }`}>
                                {conversation.type}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{conversation.lastMessageTime}</p>
                          </div>
                          
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Building2 className="h-3 w-3" />
                            <span>{conversation.property}</span>
                            <span>•</span>
                            <span>Unit {conversation.unit}</span>
                          </div>
                          
                          <p className="truncate text-sm text-muted-foreground leading-tight">
                            {conversation.lastMessage}
                          </p>
                        </div>
                      </div>
                    </Button>
                    {index < filteredConversations.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="lg:col-span-4">
          <Card className="glass-card border border-border/50 h-full flex flex-col">
            {currentChat && (
              <>
                {/* Chat Header */}
                <CardHeader className="border-b border-border/20 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border-2 border-primary/30 shadow-md">
                        <AvatarImage src="" />
                        <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white font-semibold">
                          {currentChat.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg font-bold">{currentChat.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {currentChat.property} • Unit {currentChat.unit}
                        </CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="btn-outline">
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="btn-outline">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="btn-outline">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-background/50 to-muted/20">
                  {currentMessages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start gap-3 ${
                        message.sender === "landlord" ? "justify-end" : ""
                      }`}
                    >
                      {message.sender === "tenant" && (
                        <Avatar className="h-8 w-8 border-2 border-border/20 shadow-sm">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm">
                            {message.avatar}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div className={`max-w-[70%] ${message.sender === "landlord" ? "order-first" : ""}`}>
                        <div
                          className={`rounded-2xl p-4 shadow-sm ${
                            message.sender === "landlord"
                              ? "bg-gradient-to-r from-primary to-accent text-white"
                              : "bg-white/80 backdrop-blur-sm border border-border/50 text-foreground"
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                        <p
                          className={`mt-2 text-xs text-muted-foreground ${
                            message.sender === "landlord" ? "text-right" : "text-left"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                      
                      {message.sender === "landlord" && (
                        <Avatar className="h-8 w-8 border-2 border-border/20 shadow-sm">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm">
                            {message.avatar}
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </CardContent>

                {/* Message Input */}
                <div className="border-t border-border/20 p-4 bg-background/80 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" className="btn-outline shrink-0">
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="btn-outline shrink-0">
                      <Image className="h-4 w-4" />
                    </Button>
                    <Input
                      placeholder="Type your message..."
                      className="flex-1 rounded-xl border-border/50 focus:border-primary/50 bg-white/80 backdrop-blur-sm"
                    />
                    <Button variant="outline" size="icon" className="btn-outline shrink-0">
                      <Smile className="h-4 w-4" />
                    </Button>
                    <Button size="icon" className="btn-primary shrink-0 shadow-lg">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
            
            {!currentChat && (
              <div className="flex-1 flex items-center justify-center text-center p-8">
                <div className="space-y-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center mx-auto">
                    <MessageSquare className="h-10 w-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Select a Conversation</h3>
                    <p className="text-muted-foreground">Choose a conversation from the list to start messaging.</p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
