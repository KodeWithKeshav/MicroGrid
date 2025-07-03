import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { DollarSign, CheckCircle, Truck, Car, Route } from "lucide-react"
import Image from "next/image";

const availableJobs = [
    { id: 'JOB-101', pickup: 'Koramangala Hub', dropoff: '123 Indiranagar', distance: '3.2 mi', payout: '₹150' },
    { id: 'JOB-102', pickup: 'Jayanagar Storage', dropoff: '456 BTM Layout', distance: '5.1 mi', payout: '₹220' },
    { id: 'JOB-103', pickup: 'MG Road Loft', dropoff: '789 Commercial St', distance: '1.5 mi', payout: '₹100' },
];

export default function PartnerDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Partner Dashboard</h1>
        <p className="text-muted-foreground">Here&apos;s what&apos;s happening with your deliveries.</p>
      </div>

       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Today's Earnings" value="₹2,500" icon={<DollarSign className="h-6 w-6 text-muted-foreground" />} />
        <StatCard title="Completed Deliveries" value="5" icon={<CheckCircle className="h-6 w-6 text-muted-foreground" />} />
        <StatCard title="Active Route" value="JOB-104" icon={<Route className="h-6 w-6 text-muted-foreground" />} />
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>Available Delivery Jobs</CardTitle>
                <CardDescription>Accept a job to start a delivery.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Pickup</TableHead>
                            <TableHead>Dropoff</TableHead>
                            <TableHead>Distance</TableHead>
                            <TableHead>Payout</TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {availableJobs.map(job => (
                            <TableRow key={job.id}>
                                <TableCell className="font-medium">{job.pickup}</TableCell>
                                <TableCell>{job.dropoff}</TableCell>
                                <TableCell>{job.distance}</TableCell>
                                <TableCell className="font-semibold">{job.payout}</TableCell>
                                <TableCell className="text-right">
                                    <Button size="sm">Accept Job</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>My Vehicle</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
                <Image 
                    src="https://placehold.co/200x120.png"
                    data-ai-hint="delivery van"
                    alt="Delivery Van"
                    width={200}
                    height={120}
                    className="rounded-lg mx-auto"
                />
                <div className="space-y-1">
                    <p className="font-semibold text-lg">2022 Tata Ace</p>
                    <p className="text-muted-foreground">License: KA 01 AB 1234</p>
                    <Badge variant="secondary" className="mt-2">
                        <Car className="mr-2 h-4 w-4"/>
                        Van
                    </Badge>
                </div>
                <Button variant="outline" className="w-full">Change Vehicle</Button>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

function StatCard({ title, value, icon }: { title: string, value: string, icon: React.ReactNode }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}
