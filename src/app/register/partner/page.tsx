'use client';
import Link from 'next/link';
import { AuthCard } from '@/components/auth-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

export default function PartnerRegisterPage() {
    const router = useRouter();

    const handleRegister = () => {
        // In a real app, you would handle form submission and validation here
        router.push('/partner/dashboard');
    };

  return (
    <AuthCard
      title="Become a Delivery Partner"
      description="Join our network and start earning on your own schedule."
    >
      <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="space-y-4">
        <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="vehicle">Vehicle Type</Label>
            <Select required>
                <SelectTrigger id="vehicle">
                    <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="bicycle">Bicycle</SelectItem>
                    <SelectItem value="scooter">Scooter</SelectItem>
                    <SelectItem value="car">Car</SelectItem>
                    <SelectItem value="van">Van</SelectItem>
                    <SelectItem value="truck">Truck</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="space-y-2">
            <Label htmlFor="service-area">Service Area (e.g., PIN codes)</Label>
            <Input id="service-area" placeholder="560001, 400053" required />
        </div>
        <Button type="submit" className="w-full">
            Create Account
        </Button>
        <Separator className="my-4" />
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login/partner" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
