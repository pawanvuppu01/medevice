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
We started building the MeDevice platform by creating a brand-new Next.js 15 project using pnpm because it offers faster installation and better workspace support than npm or yarn. Once the base project was created, we cleaned all the default boilerplate files and immediately set up TailwindCSS, TypeScript, and the App Router structure so that the codebase would be modern, scalable, and easier to maintain.

From the beginning, the goal was to build a large multi-module platform that supports consulting, staffing, integrated solutions, training, industries, resources, careers, blog articles, clients, case studies, and also an AI assistant. Because of this, we decided to follow a modular structure. Every major section of the business got its own dedicated folder inside the /app directory, such as /consulting, /staffing, /integrated-solutions, /industries, /blog, /careers, /projects, /resources, and many more. This way, each module could evolve independently without breaking others.

After setting up the routing structure, we created the main global layout with a consistent Navbar at the top and a Footer at the bottom. We then added our global styles using TailwindCSS and created reusable components like Hero sections, Testimonials, Buttons, Cards, and various UI pieces inside the /components directory. The idea here was to avoid repeating UI code. We built everything using React server components and client components depending on the need—server components for rendering fast data, client components for animation and interactivity.

Once the frontend skeleton looked stable, we moved on to backend logic. We installed Prisma ORM and connected it to a MySQL database running inside Docker. We also configured Docker Compose to run three services: a MySQL database, a Metabase analytics dashboard, and optionally the application in a container. Prisma was used to design the schema that represents users, clients, projects, case studies, blog posts, contact forms, and any future business objects. Every change in the database structure was handled through Prisma migrations, making the system stable and version-controlled.

Next, we built the authentication system. Instead of relying on external libraries, we implemented custom JWT-based authentication. The login route validates the user against the database, creates a secure token, and sets it in cookies. Middleware was added to protect admin-only pages so only authenticated users with the right permissions could access the Admin Dashboard. This gave us full control over the security logic of the platform.

After auth, we implemented the Admin Dashboard, which became the control center of the website. We built an admin sidebar with navigation menus for managing clients, projects, blog posts, and other internal data. All admin pages communicate with backend API endpoints under /app/api/... which interact with Prisma to fetch or update the database. By separating admin logic into isolated routes, the dashboard feels like a mini-application inside the main platform.

Parallel to backend development, we also focused heavily on the AI Assistant. We created a floating chat widget that appears on every page and opens an AI-powered assistant window. For voice-to-text functionality, we integrated react-speech-kit and built a UI that listens to voice input and prepares text prompts. The assistant component was designed in a flexible way so it can be connected to OpenAI or any other LLM later without needing to rewrite the UI. This makes the AI system easily upgradable in the future.

We also added animations using Framer Motion to give the platform a modern, smooth experience. Animations were applied to the hero section, cards, text fade-ups, and scrolling behavior. For icons, we used Lucide React to keep everything consistent, scalable, and lightweight.

Once the core modules were complete, we built additional informational pages like About, Contact, Industries, Case Studies, Careers, and Training. Each of these pages was structured with reusable UI components and meaningful content placeholders so that the business owner can update text later. We also added form handling for the Contact page, storing submissions via backend API routes.

To support analytics and data visualization, we used Metabase, which runs in Docker and connects directly to the MySQL database. This allows us to build dashboards for tracking clients, traffic, user behavior, staffing statistics, or any business metrics. Metabase makes it easy to visualize SQL queries without coding the charts manually.

The entire project is powered by pnpm for dependency management, making installation faster. ESLint and TypeScript ensure code quality and type safety. PostCSS helps generate optimized Tailwind styles, and Next.js optimizes images, routes, caching, and server rendering by default.

Finally, we prepared the platform for deployment. For cloud hosting, the project supports deployment on Vercel, AWS, Azure, Google Cloud, or any Docker-based system. For shared hosting like GoDaddy or cPanel, we enabled a static export option using next export so the website can be uploaded as plain HTML if needed.

In summary, the MeDevice platform was built by combining modern frontend technologies like Next.js, TypeScript, React, TailwindCSS, Framer Motion, and reusable components with a solid backend powered by Prisma, MySQL, API routes, JWT authentication, Docker infrastructure, and Metabase analytics. The architecture is modular, scalable, maintainable, and designed for enterprise-level growth, with built-in AI capabilities, admin management tools, analytics dashboards, and an elegant frontend—all integrated into a single unified system.
