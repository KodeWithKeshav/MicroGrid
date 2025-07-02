import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, UserPlus } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const partners = [
  { id: 'PRT-001', name: 'John Doe', status: 'Active', vehicle: 'Van', serviceArea: '90210, 90211', rating: 4.8 },
  { id: 'PRT-002', name: 'Jane Smith', status: 'Active', vehicle: 'Car', serviceArea: '10001, 10002', rating: 4.9 },
  { id: 'PRT-003', name: 'Mike Ross', status: 'Pending Approval', vehicle: 'Scooter', serviceArea: '60601', rating: 0 },
  { id: 'PRT-004', name: 'Sarah Lee', status: 'Inactive', vehicle: 'Van', serviceArea: '94102, 94103', rating: 4.5 },
  { id: 'PRT-005', name: 'Chris Green', status: 'Active', vehicle: 'Car', serviceArea: '75201', rating: 4.7 },
];

export default function AdminPartnersPage() {
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Active':
        return 'default'; // a green-like color
      case 'Pending Approval':
        return 'secondary'; // a yellow-like color
      case 'Inactive':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight font-headline">Delivery Partners</h1>
          <p className="text-muted-foreground">Manage all delivery partners in the network.</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add New Partner
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Partner Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Partner</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Vehicle Type</TableHead>
                <TableHead>Service Area</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {partners.map((partner) => (
                <TableRow key={partner.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                         <AvatarImage src={`https://placehold.co/40x40.png`} data-ai-hint="profile photo" />
                         <AvatarFallback>{partner.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{partner.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(partner.status) as any}>{partner.status}</Badge>
                  </TableCell>
                  <TableCell>{partner.vehicle}</TableCell>
                  <TableCell>{partner.serviceArea}</TableCell>
                  <TableCell>{partner.rating > 0 ? partner.rating.toFixed(1) : 'N/A'}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        {partner.status === 'Pending Approval' && <DropdownMenuItem>Approve Partner</DropdownMenuItem>}
                        <DropdownMenuItem>Suspend Partner</DropdownMenuItem>
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
