# Web App

Next.js front end for the expense tracker. It uses React Native Web so components can be shared with the mobile application.

## Development

```bash
yarn dev
```

The development server starts on http://localhost:3000.

## Environment Variables

Create an `.env` file with the following values:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_API_URL=
```

`NEXT_PUBLIC_API_URL` should point to the backend used by the app. Supabase credentials are required for authentication.

## Features

- Login and signup screens
- Dashboard displaying expenses and categories fetched from the API
