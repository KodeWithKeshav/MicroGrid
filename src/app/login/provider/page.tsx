'use client';
import Link from 'next/link';
import { AuthCard } from '@/components/auth-card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

export default function ProviderLoginPage() {
    const router = useRouter();

    const handleLogin = () => {
        router.push('/provider/dashboard');
    };

  return (
    <AuthCard
      title="Space Provider Login"
      description="Access your micro-warehouse dashboard."
    >
      <div className="space-y-4">
        <Button onClick={handleLogin} className="w-full">
            Login to Provider Dashboard
        </Button>
        <Separator className="my-4" />
        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/register/provider" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
