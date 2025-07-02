import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { PartnerSidebar } from "@/components/partner/partner-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <PartnerSidebar />
      <SidebarInset>
        <div className="flex flex-col h-screen">
          <DashboardHeader user={{ name: "John Doe", initials: "JD"}}/>
          <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-secondary/50">
            {children}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
