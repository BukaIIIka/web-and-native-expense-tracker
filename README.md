# Web and Native Expense Tracker

Monorepo for a simple expense tracker with web and mobile clients. The project uses **Turborepo** to share code between a Next.js web app and an Expo-powered React Native app.

## Apps and Packages

- `apps/web` – Next.js app using React Native Web
- `apps/native` – Expo app for iOS, Android, and web
- `packages/ui` – shared React Native components
- `packages/context` – shared state and hooks
- `packages/typescript-config` – base `tsconfig` for all apps and packages

## Development

Install dependencies and start both apps from the repository root:

```bash
yarn install
yarn dev
```

`yarn dev` runs the web app at http://localhost:3000 and starts Expo for the native app. You can also start each app individually:

```bash
# Web
cd apps/web
yarn dev

# Native
cd apps/native
yarn dev        # or yarn ios / yarn android
```

## Environment Variables

Create `.env` files inside each app with the following variables:

```bash
# apps/web/.env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_API_URL=

# apps/native/.env
API_URL=
```

`NEXT_PUBLIC_*` variables expose Supabase credentials and the API base URL for the web app. `API_URL` provides the backend endpoint for the native app.

## Formatting and Building

Format source files with Prettier and build all packages and apps using Turbo:

```bash
yarn format
yarn build
```

## Features

- User authentication (login & signup)
- Dashboard for tracking expenses and categories
- Shared UI components and context across web and native clients
