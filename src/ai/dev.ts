import { config } from 'dotenv';
config({ path: '.env.local' });

import '@/ai/flows/suggest-inventory.ts';
