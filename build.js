/**
 * Simple build script to bundle Speed Insights for use in HTML
 * This creates a self-contained script that can be loaded in the browser
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

// Read the Speed Insights module
const speedInsightsPath = resolve('./node_modules/@vercel/speed-insights/dist/index.mjs');
const speedInsightsCode = readFileSync(speedInsightsPath, 'utf-8');

// Create a bundled version that initializes on load
const bundledCode = `
/**
 * Vercel Speed Insights - Bundled Version
 * Automatically tracks web vitals and performance metrics
 */

${speedInsightsCode}

// Auto-initialize Speed Insights
injectSpeedInsights({
  debug: false,
  sampleRate: 1,
  beforeSend: (event) => {
    // Optional: Add custom logging or filtering
    return event;
  }
});
`;

// Write the bundled file
writeFileSync('speed-insights.bundle.js', bundledCode);
console.log('✓ Speed Insights bundle created: speed-insights.bundle.js');
console.log('✓ Add <script type="module" src="./speed-insights.bundle.js"></script> to your HTML');
