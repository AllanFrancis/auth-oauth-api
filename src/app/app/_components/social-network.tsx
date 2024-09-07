"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Home, Menu, MessageSquare, Search, Users } from "lucide-react"

export default function SocialNetworkPage() {
  const [isOpen, setIsOpen] = useState(false)

  const SidebarContent = () => (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Menu
        </h2>
        <div className="space-y-1">
          <Button variant="secondary" className="w-full justify-start">
            <Home className="mr-2 h-4 w-4" />
            Feed
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <MessageSquare className="mr-2 h-4 w-4" />
            Mensagens
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-2 h-4 w-4" />
            Amigos
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notificações
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen flex-col">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b px-6 bg-background">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] sm:w-[300px] bg-background">
            <SidebarContent />
          </SheetContent>
        </Sheet>
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Rede Social</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full">
          <aside className="hidden w-[240px] flex-col border-r bg-gray-100/40 dark:bg-gray-800/40 lg:flex">
            <SidebarContent />
          </aside>
          <main className="flex-1 overflow-y-auto p-4">
            <div className="mx-auto max-w-2xl space-y-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-2xl font-semibold leading-none tracking-tight">
                    Bem-vindo à sua rede social!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Compartilhe suas ideias e conecte-se com amigos.
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <Input placeholder="No que você está pensando?" />
                  <Button className="mt-4">Postar</Button>
                </div>
              </div>
              {[1, 2, 3].map((post) => (
                <div key={post} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex items-center space-x-4 p-6">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?img=${post}`} />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Usuário {post}</p>
                      <p className="text-sm text-muted-foreground">
                        Postado há {post} hora{post !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <p>Este é um exemplo de post na rede social. Aqui você pode ver o conteúdo compartilhado pelos usuários.</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}