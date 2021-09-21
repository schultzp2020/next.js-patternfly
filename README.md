# registry-viewer

## Next.js template using patternfly

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create next-app --example with-patternfly`](https://github.com/vercel/next.js/tree/canary/examples/with-patternfly).

## Scripts

```json
"scripts": {
  "analyze": "cross-env ANALYZE=true next build",
  "dev": "next",
  "build": "next build",
  "start": "next start",
  "clean": "rimraf .next/ .nyc_output/ coverage/ docs/ out/ node_modules/",
  "cypress:start": "concurrently --names 'CYPRESS,SERVER' --prefix-colors 'yellow,blue' \"yarn cypress open\" \"yarn build && yarn start\"",
  "typedoc:build": "typedoc --tsconfig .",
  "typedoc:start": "npx serve docs",
  "jest:test": "jest --watchAll --verbose",
  "test": "cypress run",
  "lint": "prettier --check .",
  "format": "prettier --write .",
  "prepare": "husky install"
}
```

- `analyze` - Runs `next build` and analyzes the webpack bundle size
- `dev` - Runs `next dev` which starts Next.js in development mode
- `build` - Runs `next build` which builds the application for production usage
- `start` - Runs `next start` which starts a Next.js production server
- `clean` - Slims the directory
- `cypress:start` - Runs cypress concurrently with a production build
- `typedoc:build` - Runs typedoc to generate docs
- `typedoc:start` - Serves the docs
- `jest:test` - Runs all jest tests
- `test` - Runs all cypress and jest tests
- `lint` - Checks the formatting of all files
- `format` - Formats all files
- `prepare` - System script for auto formatting before committing

## Getting Started

### Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Creating a Production Build

Create an optimized production build of your application:

```bash
npm run build
# or
yarn build
```

### Serving a Production Build

Start the application in production mode:

```bash
npm run start
# or
yarn start
```
