import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Warehouse, Truck, Package, Users, ArrowUpRight } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Admin Dashboard</h1>
        <p className="text-muted-foreground">Oversee the entire MicroGrid network from here.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard 
          title="Total Spaces"
          value="1,284"
          icon={<Warehouse className="h-6 w-6 text-muted-foreground" />}
          change="+12 since last month"
        />
        <StatCard 
          title="Active Delivery Partners"
          value="356"
          icon={<Users className="h-6 w-6 text-muted-foreground" />}
          change="+8 since last month"
        />
        <StatCard 
          title="Deliveries in Transit"
          value="72"
          icon={<Truck className="h-6 w-6 text-muted-foreground" />}
          change="-3 since last hour"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ActionCard
          title="Manage Spaces"
          description="View, approve, and manage all registered micro-warehouse spaces."
          link="/admin/spaces"
          linkText="Go to Spaces"
          icon={<Warehouse className="h-8 w-8 text-primary" />}
        />
        <ActionCard
          title="Manage Partners"
          description="Onboard, review, and manage the network of delivery partners."
          link="/admin/partners"
          linkText="Go to Partners"
          icon={<Users className="h-8 w-8 text-primary" />}
        />
        <ActionCard
          title="Track Orders"
          description="Monitor all ongoing orders and deliveries in real-time."
          link="/admin/orders"
          linkText="Go to Orders"
          icon={<Package className="h-8 w-8 text-primary" />}
          className="md:col-span-2"
        />
      </div>
    </div>
  )
}

function StatCard({ title, value, icon, change }: { title: string, value: string, icon: React.ReactNode, change: string }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{change}</p>
      </CardContent>
    </Card>
  )
}

function ActionCard({ title, description, link, linkText, icon, className }: { title: string, description: string, link: string, linkText: string, icon: React.ReactNode, className?: string }) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-start gap-4 space-y-0">
        <div className="flex-shrink-0">{icon}</div>
        <div className="flex-grow">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href={link}>
            {linkText}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
