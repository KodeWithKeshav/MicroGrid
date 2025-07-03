import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { BrainCircuit, DollarSign, Edit, MoreVertical, Package, Plus, Trash, Warehouse, Minus } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from 'next/image';


const spaces = [
  { 
    id: 'spc-1',
    name: 'Koramangala Garage', 
    location: 'Bangalore, India', 
    size: '10x20 ft', 
    capacity: 0.8,
    inventory: [
      { sku: 'SH-TS-M-BL', name: 'T-Shirt, Blue, M', stock: 25 },
      { sku: 'BK-FIC-001', name: 'Fiction Book Vol. 1', stock: 15 },
      { sku: 'EL-CBL-USBC', name: 'USB-C Cable', stock: 40 },
    ]
  },
  { 
    id: 'spc-2',
    name: 'Juhu Basement', 
    location: 'Mumbai, India', 
    size: '15x15 ft',
    capacity: 0.6,
    inventory: [
      { sku: 'KT-MUG-WHT', name: 'White Coffee Mug', stock: 32 },
      { sku: 'ST-PNS-BLK', name: 'Black Pens (12-pack)', stock: 50 },
    ]
  },
];

export default function ProviderDashboard() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Provider Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here&apos;s an overview of your spaces.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Listed Spaces" value="2" icon={<Warehouse className="h-6 w-6 text-muted-foreground" />} />
        <StatCard title="Items in Stock" value="162" icon={<Package className="h-6 w-6 text-muted-foreground" />} />
        <StatCard title="Monthly Earnings" value="₹18,500" icon={<DollarSign className="h-6 w-6 text-muted-foreground" />} />
      </div>
      
      <div>
        <h2 className="text-2xl font-bold tracking-tight font-headline mb-4">My Spaces</h2>
        <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-2">
            {spaces.map(space => <SpaceCard key={space.id} space={space} />)}
        </div>
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

function SpaceCard({ space }: { space: typeof spaces[0]}) {
    return (
        <Card className="flex flex-col">
            <CardHeader className="flex flex-row items-start gap-4">
                <Image src="https://placehold.co/100x100.png" data-ai-hint="warehouse interior" alt={space.name} width={100} height={100} className="rounded-lg" />
                <div className="flex-1">
                    <CardTitle>{space.name}</CardTitle>
                    <CardDescription>{space.location} - {space.size}</CardDescription>
                    <div className="mt-2">
                        <Badge variant="outline">Capacity: {space.capacity * 100}%</Badge>
                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem><Edit className="mr-2 h-4 w-4" /> Edit Space</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-500 focus:text-red-500"><Trash className="mr-2 h-4 w-4" /> Delete Space</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className="flex-1">
                <h4 className="font-semibold mb-2">Real-time Stock</h4>
                <div className="border rounded-md">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item</TableHead>
                                <TableHead className="text-right">Stock</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {space.inventory.map(item => (
                                <TableRow key={item.sku}>
                                    <TableCell>
                                        <div className="font-medium">{item.name}</div>
                                        <div className="text-xs text-muted-foreground">{item.sku}</div>
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{item.stock}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon" className="h-7 w-7"><Plus className="h-4 w-4"/></Button>
                                        <Button variant="ghost" size="icon" className="h-7 w-7"><Minus className="h-4 w-4"/></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
            <CardFooter>
                 <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                    <Link href={`/provider/spaces/${space.id}/suggestions`}>
                        <BrainCircuit className="mr-2 h-4 w-4" />
                        Get AI Inventory Suggestions
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}
