import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Warehouse, BrainCircuit } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Logo />
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
            <Link href="#roles" className="text-sm font-medium hover:text-primary transition-colors">Get Started</Link>
          </nav>
          <Button asChild>
            <Link href="/login/provider">Login / Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 py-20 md:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-4 font-headline">
              MicroGrid: The Future of Urban Logistics
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Turn your unused space into a profitable micro-warehouse and join a decentralized network that's reshaping last-mile delivery.
            </p>
            <Button size="lg" asChild>
              <Link href="/register/provider">
                Become a Space Provider <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="features" className="bg-secondary py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">A Smarter Supply Chain</h2>
              <p className="text-muted-foreground mt-4">MicroGrid connects space, inventory, and delivery partners through an intelligent, unified platform.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <FeatureCard
                icon={<Warehouse className="w-10 h-10 text-primary" />}
                title="Monetize Your Space"
                description="Register your garage, spare room, or any unused area as a micro-warehouse and start earning."
              />
              <FeatureCard
                icon={<Truck className="w-10 h-10 text-primary" />}
                title="Flexible Delivery"
                description="Local vehicle owners can enroll as delivery partners, creating a flexible and efficient logistics network."
              />
              <FeatureCard
                icon={<BrainCircuit className="w-10 h-10 text-primary" />}
                title="AI-Powered Inventory"
                description="Get smart suggestions on what to stock, based on real-time regional demand and market trends."
              />
            </div>
          </div>
        </section>

        <section id="roles" className="py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">Join the Network</h2>
              <p className="text-muted-foreground mt-4">Are you a household with extra space, a local driver, or an administrator? Find your place in the MicroGrid ecosystem.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              <RoleCard
                title="Space Providers"
                description="List your unused space, get AI-driven inventory suggestions, and manage your stock in real-time."
                link="/register/provider"
                linkText="List Your Space"
              />
              <RoleCard
                title="Delivery Partners"
                description="Enroll your vehicle, define your service area, and get notified of delivery jobs near you."
                link="/register/partner"
                linkText="Become a Partner"
              />
              <RoleCard
                title="Administrators"
                description="Oversee the entire network, manage listings, and monitor logistics from a central dashboard."
                link="/login/admin"
                linkText="Access Admin Panel"
                className="lg:col-span-1 md:col-span-2"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary">
        <div className="container mx-auto px-4 md:px-6 py-6 flex items-center justify-between text-sm text-muted-foreground">
          <Logo />
          <p>&copy; {new Date().getFullYear()} MicroGrid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-card p-8 rounded-lg shadow-sm text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 font-headline">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function RoleCard({ title, description, link, linkText, className }: { title: string, description: string, link: string, linkText: string, className?: string }) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild className="w-full" variant="secondary">
          <Link href={link}>{linkText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
