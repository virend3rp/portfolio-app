export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  body: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  body: string;
};

export const projects: Project[] = [
  {
    slug: "dev-dashboard",
    title: "Dev Dashboard",
    description: "Got tired of having 12 tabs open. Built one thing that shows me everything I need in the morning.",
    year: "2025",
    tags: ["Next.js", "AI"],
    liveUrl: "#",
    githubUrl: "#",
    body: `
## The problem

Every morning I'd open the same 12 tabs — GitHub notifications, my task list, the weather, a couple of open PRs, some API status pages. It was stupid. So I fixed it.

## What it does

A single dashboard that pulls together:
- GitHub activity (open PRs, recent commits, notifications)
- A simple task list that persists in localStorage
- Weather for my city
- Whatever I'm currently learning (manually updated)

## Stack

Built with Next.js App Router, server components for the data fetching, and a bit of Framer Motion for the entry animations. No database — everything either hits an API or lives in localStorage.

## What I learned

Server components are genuinely great for this kind of thing. Each widget is its own async component, so they load independently and don't block each other. The dashboard feels fast even when one API is slow.
    `,
  },
  {
    slug: "cli-tool",
    title: "Open Source CLI Tool",
    description: "Scaffolding a Next.js project from scratch for the 8th time felt stupid. So I automated it.",
    year: "2024",
    tags: ["Node.js", "TypeScript"],
    githubUrl: "#",
    body: `
## Why

Every time I started a new Next.js project I'd spend 30 minutes doing the same thing: setting up Tailwind, configuring ESLint, creating the folder structure, writing the same layout file. The 8th time I did it I decided that was the last time.

## What it does

A CLI that scaffolds an opinionated Next.js setup in one command. Asks you a few questions (TypeScript? Tailwind? Which router?) and generates a ready-to-go project.

## Usage

\`\`\`bash
npx create-vp-app my-project
\`\`\`

## What I learned

Publishing to npm is easier than I expected. The tricky part was handling all the edge cases in the scaffolding logic — what happens if the directory already exists, how to handle different package managers, etc.
    `,
  },
  {
    slug: "link-in-bio",
    title: "Link in Bio Builder",
    description: "Drag-and-drop link page with analytics. Built it because I wanted to understand how the paid ones work.",
    year: "2024",
    tags: ["TypeScript", "Postgres"],
    liveUrl: "#",
    githubUrl: "#",
    body: `
## Motivation

I wanted to understand how Linktree and similar tools work under the hood. The drag-and-drop, the analytics, the custom domains. So I built my own version.

## Features

- Drag and drop link ordering
- Click analytics per link
- Custom themes (light/dark + accent color)
- Shareable public page at \`/u/username\`

## Stack

Next.js, Postgres via Supabase, Prisma for the ORM. Auth with NextAuth. Drag and drop with \`@dnd-kit/core\`.

## What I learned

Row-level security in Postgres is really powerful and I hadn't used it before. Also learned a lot about optimistic UI updates — making the drag and drop feel instant while the database catches up.
    `,
  },
  {
    slug: "budget-tracker",
    title: "Budget Tracker API",
    description: "First real backend project. Ugly internals, but it works and I still use it.",
    year: "2023",
    tags: ["Python", "FastAPI"],
    githubUrl: "#",
    body: `
## The origin

I needed to track my spending and didn't want to pay for an app. This was also my first real Python backend project, so it served two purposes.

## What it does

REST API for personal finance:
- Add/categorise transactions
- Set category budgets
- Track recurring expenses
- Monthly summary report via email

## Stack

Python, FastAPI, SQLite (later migrated to Postgres), SQLAlchemy. Email reports with SendGrid.

## Honest reflection

The code is not pretty. There's some spaghetti in the reporting logic that I've never gone back to fix. But it runs on a cheap VPS, costs me nothing, and I check it every month. Sometimes working is enough.
    `,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-i-stopped-using-ui-libraries",
    title: "Why I stopped using UI libraries and started writing my own components",
    excerpt: "There's a point where the abstraction fights you. I hit that point. Here's what I did about it.",
    date: "Feb 2025",
    tag: "dev",
    body: `
There's a specific kind of frustration that comes from fighting your tools. You spend more time reading docs, overriding styles, and working around component APIs than actually building. That's when I knew it was time to stop.

## The breaking point

I was building a dropdown that needed to behave slightly differently from the one in the library I was using. Two hours later I was knee-deep in overrides, a custom wrapper component, and a growing sense that I'd made a mistake somewhere upstream.

The library's dropdown was designed for 80% of use cases. Mine was in the other 20%.

## What I did

I started writing my own. Not a library — just a folder of components that I own completely. Dropdown, Button, Modal, Input, Toast. Simple implementations, no abstraction for abstraction's sake.

## What changed

Everything got faster. Not just the builds — the thinking. When something doesn't work the way I want, I open the file and change it. No docs, no GitHub issues, no waiting for a maintainer.

The components are uglier than a polished library. They don't handle every edge case. But they handle my edge cases, and that's what matters.

## The tradeoff

You give up battle-tested accessibility handling and years of bug fixes. That's real. For a production app with serious accessibility requirements, a good library is probably still the right call.

For my projects? I'd rather understand everything that's in my codebase.
    `,
  },
  {
    slug: "nextjs-app-router-setup",
    title: "The Next.js App Router is good now — here's the setup that finally clicked",
    excerpt: "Spent too long being annoyed by it. Eventually figured out I was just using it wrong.",
    date: "Jan 2025",
    tag: "next.js",
    body: `
I resisted the App Router for a long time. Pages Router worked, I understood it, and every time I tried the new one something broke in a confusing way.

Eventually I sat down and actually read the docs properly instead of just trying things. Turns out I'd been misunderstanding a few core concepts.

## The thing that changed everything

Server components are not the same as getServerSideProps. Once I internalised that, the whole model clicked.

Server components run on the server and never ship JavaScript to the client. They're great for data fetching, database queries, anything that doesn't need interactivity. Client components are for the interactive bits.

The default is server. You opt into client with \`"use client"\`. This is the opposite of how I'd been thinking about it.

## My current folder structure

\`\`\`
app/
  layout.tsx          ← root layout, fonts, global nav
  page.tsx            ← home page (server component)
  (routes)/
    about/page.tsx
    projects/
      page.tsx
      [slug]/page.tsx
components/
  ui/                 ← my custom component folder
  Nav.tsx             ← "use client" (needs usePathname)
lib/
  data.ts             ← data layer
\`\`\`

## What I still find awkward

The error boundary / loading UI stuff. I never quite know where to put loading.tsx files and whether I actually need them. Still figuring that out.
    `,
  },
  {
    slug: "building-in-public",
    title: "Building in public is uncomfortable. That's exactly why I'm doing it.",
    excerpt: "On shipping imperfect things and why the discomfort is kind of the whole point.",
    date: "Dec 2024",
    tag: "thoughts",
    body: `
I pushed my first real project to GitHub with a public repo about eight months ago. Before that, everything I built sat on private repos, half-finished, waiting to be "good enough."

Nothing ever got good enough.

## The problem with private repos

When nobody can see your work, there's no pressure to finish anything. A project can stay in "almost done" state indefinitely. There's always something to polish before it's ready to show.

I had seven projects like this. All of them were probably 80% done. None of them were shipped.

## What changed

I made the repos public before I was ready. Pushed code I knew was messy. Wrote a README for a project that didn't fully work yet.

Nothing bad happened. No one laughed. A few people starred the repo. One person opened an issue with a helpful suggestion.

## The discomfort is load-bearing

The uncomfortable feeling of shipping something imperfect is what keeps you honest. It's pressure to actually finish things. It's a forcing function.

Private work lets you stay comfortable indefinitely. Public work demands you ship.

I've shipped more in the last eight months than in the two years before it.
    `,
  },
];
