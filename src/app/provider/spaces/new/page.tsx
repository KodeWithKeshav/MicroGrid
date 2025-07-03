import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NewSpacePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">List a New Space</h1>
        <p className="text-muted-foreground">Add a new micro-warehouse to your portfolio. Fill in the details below.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Space Details</CardTitle>
          <CardDescription>Provide information about the space you want to list.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="space-name">Space Name</Label>
              <Input id="space-name" placeholder="e.g., Malviya Nagar Garage" />
              <p className="text-xs text-muted-foreground">A descriptive name helps identify the space.</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g., 45, Tonk Road, Jaipur, 302018" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="length">Length (ft)</Label>
                <Input id="length" type="number" placeholder="10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="width">Width (ft)</Label>
                <Input id="width" type="number" placeholder="20" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">Height (ft)</Label>
                <Input id="height" type="number" placeholder="8" />
              </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" placeholder="e.g., Climate controlled, 24/7 access available." />
            </div>
            
            <div className="flex justify-end">
              <Button type="submit">List My Space</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
