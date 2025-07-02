import { SuggestionForm } from "@/components/provider/suggestion-form";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data for a single space, in a real app this would be fetched based on the [id] param
const mockSpace = {
  id: 'spc-1',
  name: 'Main Street Garage',
  location: 'San Francisco, CA',
  dimensions: '10ft x 20ft x 8ft',
};

export default function SuggestionsPage({ params }: { params: { id: string } }) {
  // Here you would typically fetch space data using params.id
  const spaceData = mockSpace;

  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" asChild className="mb-4">
            <Link href="/provider/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
            </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight font-headline">AI Inventory Suggestions</h1>
        <p className="text-muted-foreground">For your space: <span className="font-semibold text-foreground">{spaceData.name}</span></p>
      </div>
      
      <SuggestionForm space={{ location: spaceData.location, dimensions: spaceData.dimensions }} />
    </div>
  );
}
