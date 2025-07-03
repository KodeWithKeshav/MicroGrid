import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

const spaces = [
  { id: 'SPC-001', name: 'Koramangala Garage', provider: 'Alice Johnson', location: 'Bangalore, India', status: 'Approved', size: '10x20 ft' },
  { id: 'SPC-002', name: 'Park Street Loft Storage', provider: 'Bob Williams', location: 'Kolkata, India', status: 'Pending', size: '8x10 ft' },
  { id: 'SPC-003', name: 'Juhu Basement', provider: 'Charlie Brown', location: 'Mumbai, India', status: 'Approved', size: '15x15 ft' },
  { id: 'SPC-004', name: 'Industrial Unit B', provider: 'Diana Prince', location: 'Chennai, India', status: 'Needs Review', size: '30x40 ft' },
  { id: 'SPC-005', name: 'Connaught Place Closet', provider: 'Edward Nigma', location: 'New Delhi, India', status: 'Approved', size: '5x5 ft' },
];

export default function AdminSpacesPage() {
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Needs Review':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">Spaces</h1>
          <p className="text-muted-foreground">Manage all registered micro-warehouse spaces.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Space Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Space ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {spaces.map((space) => (
                <TableRow key={space.id}>
                  <TableCell className="font-mono text-xs">{space.id}</TableCell>
                  <TableCell className="font-medium">{space.name}</TableCell>
                  <TableCell>{space.provider}</TableCell>
                  <TableCell>{space.location}</TableCell>
                  <TableCell>{space.size}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(space.status) as any}>{space.status}</Badge>
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
                        {space.status !== 'Approved' && <DropdownMenuItem>Approve Space</DropdownMenuItem>}
                        <DropdownMenuItem>Contact Provider</DropdownMenuItem>
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
