## Lucia vs. NextAuth.js

Lucia is less opinionated than NextAuth, offering greater flexibility for customization. While Lucia involves more setup, it provides a higher degree of flexibility, making it a suitable choice for projects requiring unique authentication configurations.

## Tech Stack

- [Next.js](https://nextjs.org)
- [Lucia](https://lucia-auth.com/)
- [tRPC](https://trpc.io)
- [Drizzle ORM](https://orm.drizzle.team/)
- [PostgreSQL](https://www.postgresql.org/)
- [Stripe](https://stripe.com/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Hook Form](https://www.react-hook-form.com/)
- [React Email](https://react.email/)

## Get Started

1. Clone this repository to your local machine.
2. Copy `.env.example` to `.env` and fill in the required environment variables.
3. Run `npm install` to install dependencies.
4. `(for node v18 or lower):` Uncomment polyfills for `webCrypto` in `src/lib/auth/index.ts`
5. Update app title, database prefix, and other parameters in the `src/lib/constants.ts` file.
6. Run `npm db:push` to push your schema to the database.
7. Execute `npm dev` to start the development server and enjoy!

