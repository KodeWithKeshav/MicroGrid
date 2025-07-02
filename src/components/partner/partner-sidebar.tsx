'use client'

import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Route,
  Wallet,
  User,
  Settings
} from "lucide-react"
import { Logo } from "@/components/logo"

export function PartnerSidebar() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="/partner/dashboard"
              isActive={isActive('/partner/dashboard')}
              icon={<LayoutDashboard />}
            >
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="/partner/routes"
              isActive={isActive('/partner/routes')}
              icon={<Route />}
            >
              Active Routes
            </SidebarMenuButton>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <SidebarMenuButton
              href="/partner/earnings"
              isActive={isActive('/partner/earnings')}
              icon={<Wallet />}
            >
              Earnings
            </SidebarMenuButton>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <SidebarMenuButton
              href="/partner/profile"
              isActive={isActive('/partner/profile')}
              icon={<User />}
            >
              Profile
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton href="#" icon={<Settings />}>
                    Settings
                </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
