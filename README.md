# Real Bench: API documentation layout

This repository is a compact debugging benchmark extracted from a real Next.js
application failure. The application embeds Scalar's React API reference. Its
content and OpenAPI endpoint load successfully, but the documentation page is
visually unusable.

## Challenge

Fix the API documentation page so it behaves like a standalone, full-viewport
reference:

- the host application's header and content frame must not appear;
- Scalar's navigation must have a usable width;
- the documentation content must begin to the right of the navigation;
- the home page must continue to use the host application shell;
- do not replace Scalar or hard-code a new documentation layout.

The repository intentionally starts in the failing state. Keep the change
focused and make both end-to-end tests pass.

## Run

Node.js 22 or newer is required.

```bash
npm install
npx playwright install chromium
npm run test:e2e
```

Useful narrower commands:

```bash
npm run test:e2e:smoke
npm run typecheck
npm run build
```

The smoke test demonstrates why this bug is easy to miss: the endpoint,
component, title, and sections all render even while the layout is broken.

## Container

```bash
docker build -t real-bench .
docker run --rm -p 3000:3000 real-bench
```

The `k8s/` directory contains a stateless two-replica deployment and service.
Set its image to the tag published by your registry before applying it.
