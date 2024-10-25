This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



```bash
#Manual setup
npm init -y
#Installing Dependencies
npm i next react react-dom

# Start the code
npm run dev

# Normal way to create react project
# TypeScript: Yes
# ESLint: No
# Tailwind: Yes
# src/ Directory: No
# App Router: Yes
# import Allias: No
npx create-next-app@latest next-react-course-cna

# Create a local DB
npm i postgres

# Create Local .en file
touch .env.local



# add Repo/code to GIT
git remote add origin git@github.com:mmouhamed/quiz_App.git
git remote set-url origin git@github.com:mmouhamed/quiz_App.git
git branch -M main
git push -u origin main

```