'use client'

import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel
} from "@/components/ui/sidebar"
import {
  LayoutDashboard,
  Warehouse,
  Package,
  BrainCircuit,
  Settings,
} from "lucide-react"
import { Logo } from "@/components/logo"

export function ProviderSidebar() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname.startsWith(path)

  return (
    <Sidebar>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="/provider/dashboard"
              isActive={pathname === '/provider/dashboard'}
              icon={<LayoutDashboard />}
            >
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        <SidebarGroup>
            <SidebarGroupLabel>Manage</SidebarGroupLabel>
            <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                    href="/provider/spaces"
                    isActive={isActive('/provider/spaces')}
                    icon={<Warehouse />}
                    >
                    My Spaces
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton
                    href="/provider/inventory"
                    isActive={isActive('/provider/inventory')}
                    icon={<Package />}
                    >
                    Inventory
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton
                    href="/provider/suggestions"
                    isActive={isActive('/provider/suggestions')}
                    icon={<BrainCircuit />}
                    >
                    AI Suggestions
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
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
