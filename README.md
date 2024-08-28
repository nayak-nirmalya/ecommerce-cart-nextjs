# A Modern FullStack E-Commerce Shop with Cart, Checkout, Authentication, and More!

Built with the Next.js 14 App Router, PostgreSQL, TypeScript, TailwindCSS, Clerk, shadcn-ui & DrizzleORM.

## Features

- 🛠️ Complete shop built from scratch in Next.js 14
- 🎨 Responsive layout
- 🌟 Clean, modern UI on top of shadcn-ui and motion-primitives
- 🔑 Authentication using Clerk
- 🫎 Micro animations
- 🚀 Use of Server/Client componnents archhitecture with React Streaming
- 👤 User sync to DB via Webhooks
- 🩻 Loading Skeletons & Spinner with Toast for great UX
- 📀 Site Metadata with OG:Image for SEO
- ♨️ Data mutation with Server Actions
- 💵 Format to Local INR Indian Rupee
- 🦋 Properly formatted codebase with Prettier & eslint
- 🛒 Add/Remove product by one, delete item
- ⌨️ 100% written in TypeScript

## Getting Started

### Prerequisites

**Node version 20.x.x**

### Cloning the Repository

```shell
git clone https://github.com/nayak-nirmalya/ecommerce-cart-nextjs.git
```

### Install Packages

```shell
pnpm install
```

### Setup .env File

```js
DATABASE_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL="/products"
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL="/products"
```

### Database Setup

```shell
pnpm db:generate
pnpm db:migrate
```

### Run App Locally

```shell
pnpm dev
```

## Auth Flow

![Auth Flow](public/clerk-solution-arch.avif)

## Available commands

Run commands with pnpm `pnpm [command]`

| command       | description                                                     |
| :------------ | :-------------------------------------------------------------- |
| `dev`         | Starts a development instance of the app                        |
| `lint`        | Run lint check                                                  |
| `build`       | Start building app for deployment                               |
| `start`       | Run build version of app                                        |
| `db:studio`   | Start Drizzle studio GUI to view/modify database                |
| `db:seed`     | Fill database with sample data from '/src/db/products.json'     |
| `db:generate` | Generate migration files for defined schemas                    |
| `db:migrate`  | After generating migration files, run this to apply changes     |
| `db:push`     | Directly apply changes to DB without generating migration files |
