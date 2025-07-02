'use client';
import Link from 'next/link';
import { AuthCard } from '@/components/auth-card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

export default function PartnerLoginPage() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/partner/dashboard');
    };

  return (
    <AuthCard
      title="Partner Login"
      description="Access your delivery partner dashboard."
    >
      <div className="space-y-4">
        <Button onClick={handleLogin} className="w-full">
          Login to Partner Dashboard
        </Button>
        <Separator className="my-4" />
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register/partner" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
