# Superior Roblox Group Management Marketing Site

This is a high-end, production-quality marketing website for a Roblox group management platform called Superior. It is built with Next.js (App Router), React, Tailwind CSS, and Framer Motion.

## Vercel Deployment

This project is configured and structured for seamless deployment to Vercel.

**Steps to Deploy:**

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click **Add New** > **Project**.
3. Import your repository.
4. Vercel will automatically detect that this is a Next.js project. The build command `npm run build` and start command `npm run start` are already configured correctly by default.
5. In the **Environment Variables** section, configure any needed placeholders (e.g., links to the dashboard app or API endpoints). Example `.env.local` configuration:
   ```env
   NEXT_PUBLIC_DASHBOARD_URL=https://app.superior-example.com
   NEXT_PUBLIC_API_URL=https://api.superior-example.com
   ```
6. Click **Deploy**.

The `vercel.json` configuration file in the root ensures clean URLs and appropriate trailing slash behavior. Vercel automatically manages Edge caching and optimized static delivery for all public assets stored in `/public`.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.