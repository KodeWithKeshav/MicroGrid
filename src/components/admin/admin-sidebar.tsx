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
  Warehouse,
  Truck,
  Package,
  Users,
  Settings,
} from "lucide-react"
import { Logo } from "@/components/logo"

export function AdminSidebar() {
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
              href="/admin/dashboard"
              isActive={isActive('/admin/dashboard')}
              icon={<LayoutDashboard />}
            >
              Dashboard
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="/admin/spaces"
              isActive={isActive('/admin/spaces')}
              icon={<Warehouse />}
            >
              Spaces
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="/admin/partners"
              isActive={isActive('/admin/partners')}
              icon={<Users />}
            >
              Delivery Partners
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              href="/admin/orders"
              isActive={isActive('/admin/orders')}
              icon={<Package />}
            >
              Orders & Deliveries
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
