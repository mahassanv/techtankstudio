# Vercel Speed Insights Setup

This project has been configured with Vercel Speed Insights to automatically track web vitals and performance metrics.

## What is Vercel Speed Insights?

Speed Insights automatically tracks Core Web Vitals and other performance metrics:
- **LCP** (Largest Contentful Paint)
- **FID** (First Input Delay)
- **CLS** (Cumulative Layout Shift)
- **FCP** (First Contentful Paint)
- **TTFB** (Time to First Byte)
- **INP** (Interaction to Next Paint)

## Files Added/Modified

### New Files
- `package.json` - Node.js package configuration with Speed Insights dependency
- `package-lock.json` - Locked dependency versions
- `speed-insights.js` - Source file for Speed Insights initialization
- `build.js` - Build script to create the bundled version
- `speed-insights.bundle.js` - Bundled version loaded by the HTML
- `.gitignore` - Git ignore rules for dependencies and build artifacts

### Modified Files
- `index.html` - Added Speed Insights script tag before closing `</body>`

## How It Works

1. The `@vercel/speed-insights` package is installed via npm
2. The `build.js` script bundles the Speed Insights code into a single file
3. The bundled script (`speed-insights.bundle.js`) is loaded as a module in `index.html`
4. Speed Insights automatically tracks performance metrics when users visit the site

## Building

To regenerate the Speed Insights bundle after updates:

```bash
npm run build
```

## Deployment

When deploying to Vercel:
1. Vercel will automatically detect Speed Insights is installed
2. Metrics will be collected from real user visits
3. View metrics in the Vercel Dashboard under "Speed Insights"

## Configuration

The Speed Insights configuration is in `speed-insights.js`:

```javascript
injectSpeedInsights({
  debug: false,        // Set to true to see events in console
  sampleRate: 1,       // 1 = 100% of events sent
  beforeSend: (event) => {
    // Optional: Filter or modify events before sending
    return event;
  }
});
```

## Important Notes

- Speed Insights does NOT track data in development mode
- Metrics will only appear after deploying to Vercel and receiving real user traffic
- The bundle file (`speed-insights.bundle.js`) should be committed to git for the site to function
- No additional configuration is needed in the Vercel Dashboard - just deploy!

## Documentation

For more information, visit:
- [Vercel Speed Insights Quickstart](https://vercel.com/docs/speed-insights/quickstart)
- [Speed Insights Configuration](https://vercel.com/docs/speed-insights/package)
