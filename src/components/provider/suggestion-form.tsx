'use client';

import { useState } from 'react';
import type { SuggestInventoryOutput } from '@/ai/flows/suggest-inventory';
import { getInventorySuggestions } from '@/app/provider/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BrainCircuit, Loader2, Sparkles, ThumbsUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

type SuggestionFormProps = {
  space: {
    location: string;
    dimensions: string;
  };
};

export function SuggestionForm({ space }: SuggestionFormProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SuggestInventoryOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [demandData, setDemandData] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const output = await getInventorySuggestions({
        location: space.location,
        spaceDimensions: space.dimensions,
        regionalDemandData: demandData,
      });
      setResult(output);
    } catch (err) {
      setError('An error occurred while generating suggestions. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Generate Suggestions</CardTitle>
          <CardDescription>
            Use our AI to get inventory suggestions based on your space and regional demand.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <p><span className="font-semibold">Location:</span> {space.location}</p>
              <p><span className="font-semibold">Dimensions:</span> {space.dimensions}</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="demand-data">Regional Demand Data (Optional)</Label>
              <Textarea
                id="demand-data"
                placeholder="Enter any specific local demand data you have, e.g., 'High demand for winter clothing due to upcoming cold season.'"
                value={demandData}
                onChange={(e) => setDemandData(e.target.value)}
                rows={4}
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  Get AI Suggestions
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Suggested Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap">{result.suggestedInventory}</p>
            </CardContent>
          </Card>
          <Card className="bg-accent/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-accent-foreground" />
                Reasoning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-sm text-muted-foreground">{result.reasoning}</p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
