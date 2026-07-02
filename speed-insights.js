/**
 * Vercel Speed Insights Integration
 * Automatically tracks web vitals and performance metrics
 */

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
// This will automatically track Core Web Vitals (LCP, FID, CLS, FCP, TTFB, INP)
injectSpeedInsights({
  // Enable debug mode in development (shows events in console)
  debug: false,
  
  // Optional: Sample rate (1 = 100% of events sent)
  sampleRate: 1,
  
  // Optional: beforeSend middleware to filter or modify events
  beforeSend: (event) => {
    // Log events if needed (can be removed in production)
    // console.log('Speed Insights event:', event);
    
    // Return the event to send it, or return null/false to cancel
    return event;
  }
});

console.log('Vercel Speed Insights initialized');
