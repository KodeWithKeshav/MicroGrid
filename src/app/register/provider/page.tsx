'use client';
import Link from 'next/link';
import { AuthCard } from '@/components/auth-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

export default function ProviderRegisterPage() {
    const router = useRouter();

    const handleRegister = () => {
        // In a real app, you would handle form submission and validation here
        router.push('/provider/dashboard');
    };

  return (
    <AuthCard
      title="Become a Space Provider"
      description="Monetize your unused space by turning it into a micro-warehouse."
    >
      <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }} className="space-y-4">
         <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="Jane Smith" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="jane@example.com" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="location">Primary Location (e.g., City, State)</Label>
            <Input id="location" placeholder="Pune, Maharashtra" required />
        </div>
        <Button type="submit" className="w-full">
            Create Account
        </Button>
        <Separator className="my-4" />
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link href="/login/provider" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
