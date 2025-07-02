// 'use server';
/**
 * @fileOverview An AI agent that suggests inventory for micro-warehouses based on regional demand.
 *
 * - suggestInventory - A function that provides inventory suggestions.
 * - SuggestInventoryInput - The input type for the suggestInventory function.
 * - SuggestInventoryOutput - The return type for the suggestInventory function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestInventoryInputSchema = z.object({
  location: z
    .string()
    .describe(
      'The geographical location (city, region) where the micro-warehouse is situated.'
    ),
  spaceDimensions: z
    .string()
    .describe('The dimensions of the available storage space (e.g., 10x10x5 ft).'),
  regionalDemandData: z
    .string()
    .optional()
    .describe(
      'Optional data on regional demand patterns, if available.  This can be used to override the AI analysis of public data.'
    ),
});
export type SuggestInventoryInput = z.infer<typeof SuggestInventoryInputSchema>;

const SuggestInventoryOutputSchema = z.object({
  suggestedInventory: z
    .string()
    .describe(
      'A list of suggested inventory items to store, optimized for regional demand and space utilization.'
    ),
  reasoning: z
    .string()
    .describe(
      'The AI reasoning behind the inventory suggestions, including demand analysis and space considerations.'
    ),
});
export type SuggestInventoryOutput = z.infer<typeof SuggestInventoryOutputSchema>;

export async function suggestInventory(input: SuggestInventoryInput): Promise<SuggestInventoryOutput> {
  return suggestInventoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestInventoryPrompt',
  input: {schema: SuggestInventoryInputSchema},
  output: {schema: SuggestInventoryOutputSchema},
  prompt: `You are an AI assistant that analyzes regional demand patterns and suggests optimal inventory for micro-warehouses.

  Location: {{{location}}}
  Space Dimensions: {{{spaceDimensions}}}
  Regional Demand Data (Optional): {{{regionalDemandData}}}

  Based on the provided location, space dimensions, and any available regional demand data, suggest inventory items that would maximize earning potential for the space provider.
  Provide clear reasoning for your suggestions, considering both demand and space utilization.
  Return your response as a JSON object with keys 'suggestedInventory' and 'reasoning'.`,
});

const suggestInventoryFlow = ai.defineFlow(
  {
    name: 'suggestInventoryFlow',
    inputSchema: SuggestInventoryInputSchema,
    outputSchema: SuggestInventoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
