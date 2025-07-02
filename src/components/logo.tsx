import { Warehouse } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-lg font-bold tracking-tight text-foreground", className)}>
      <div className="bg-primary text-primary-foreground p-2 rounded-md">
        <Warehouse className="w-5 h-5" />
      </div>
      <span className="font-headline">MicroGrid</span>
    </Link>
  );
}
