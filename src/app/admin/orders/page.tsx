import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const orders = [
  { id: 'ORD7562', destination: '15, MI Road, Jaipur', partner: 'John Doe', status: 'In Transit', vehicle: 'Van' },
  { id: 'ORD7561', destination: '22 Aliganj, Lucknow', partner: 'Jane Smith', status: 'Delivered', vehicle: 'Car' },
  { id: 'ORD7560', destination: '88, A.B. Road, Indore', partner: 'Mike Ross', status: 'Out for Delivery', vehicle: 'Scooter' },
  { id: 'ORD7559', destination: '112, Sitabuldi, Nagpur', partner: 'Sarah Lee', status: 'Processing', vehicle: 'Van' },
  { id: 'ORD7558', destination: '45, Arera Colony, Bhopal', partner: 'Chris Green', status: 'In Transit', vehicle: 'Car' },
];

export default function AdminOrdersPage() {
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'In Transit':
      case 'Out for Delivery':
        return 'default'; // Uses primary color, which we can treat as an active state
      case 'Delivered':
        return 'secondary';
      case 'Processing':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Order & Delivery Tracking</h1>
        <p className="text-muted-foreground">Monitor all deliveries in real-time.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Live Delivery Map</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video w-full bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=68.1,8.0,97.4,37.1&layer=mapnik"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Live Delivery Map"
            ></iframe>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Partner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.destination}</TableCell>
                  <TableCell>{order.partner}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(order.status) as any} style={order.status.includes('Transit') || order.status.includes('Delivery') ? { backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'} : {}}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Contact Partner</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
