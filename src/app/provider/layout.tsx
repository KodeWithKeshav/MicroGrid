import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { ProviderSidebar } from "@/components/provider/provider-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

export default function ProviderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <ProviderSidebar />
      <SidebarInset>
        <div className="flex flex-col h-screen">
          <DashboardHeader user={{ name: "Jane Smith", initials: "JS"}}/>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-secondary/50">
            {children}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
