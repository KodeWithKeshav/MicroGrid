'use client';
import { AuthCard } from '@/components/auth-card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function AdminLoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // In a real app, you'd handle authentication here
    router.push('/admin/dashboard');
  };

  return (
    <AuthCard
      title="Admin Login"
      description="Access the central control panel for MicroGrid."
    >
      <div className="space-y-4">
        {/* In a real app, you'd have input fields for email/password */}
        <Button onClick={handleLogin} className="w-full">
          Proceed to Dashboard
        </Button>
      </div>
    </AuthCard>
  );
}
