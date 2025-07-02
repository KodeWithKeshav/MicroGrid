'use server';

import { suggestInventory, type SuggestInventoryInput, type SuggestInventoryOutput } from '@/ai/flows/suggest-inventory';

export async function getInventorySuggestions(input: SuggestInventoryInput): Promise<SuggestInventoryOutput> {
  try {
    const output = await suggestInventory(input);
    return output;
  } catch (error) {
    console.error('Error in getInventorySuggestions server action:', error);
    throw new Error('Failed to fetch inventory suggestions.');
  }
}
