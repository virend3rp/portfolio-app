import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { projects, blogPosts } from "./schema";
import path from "path";

const sqlite = new Database(path.join(process.cwd(), "portfolio.db"));
const db = drizzle(sqlite);

async function seed() {
  console.log("Clearing existing projects...");
  await db.delete(projects);

  console.log("Seeding projects...");
  await db.insert(projects).values([
    {
      slug: "printingmuse",
      title: "PrintingMuse E-Commerce Platform",
      description: "Scalable print-on-demand marketplace with a Go backend, Next.js frontend, AWS S3 media pipeline, and role-based admin dashboard.",
      year: "2024",
      tags: JSON.stringify(["Go", "Next.js", "PostgreSQL", "AWS"]),
      githubUrl: "#",
      body: `
## Overview

A full-stack e-commerce platform for print-on-demand products, built for scale from the ground up. The goal was to handle the full lifecycle — product creation, catalog browsing, order management, and admin operations — without cutting corners on architecture.

## Backend

Built a Go backend with secure REST APIs covering product management, catalog browsing, and order workflows. Role-based access control separates admin operations from customer-facing endpoints. JWT authentication secures all protected routes.

## Media Pipeline

Integrated an image upload and storage pipeline using AWS S3 for product assets. Uploads go through a server-side handler that validates, resizes, and stores to S3, returning a CDN-ready URL. Keeps the database lean — only metadata lives in Postgres.

## Admin Dashboard

Built a dedicated admin interface for product creation, updates, and inventory management. Admins can manage the full product catalog, track orders, and update stock — all behind JWT-authenticated routes.

## Database

PostgreSQL handles the structured product catalog. Schema designed for efficient querying across products, variants, and orders without N+1 problems.

## Stack

Go, Next.js, PostgreSQL, AWS S3, JWT, REST.
      `,
    },
    {
      slug: "annual-report-rag",
      title: "Annual Report RAG System",
      description: "Document intelligence platform for financial QA — ask questions over annual reports using RAG, LangChain, and Pinecone.",
      year: "2024",
      tags: JSON.stringify(["Python", "FastAPI", "LangChain", "Pinecone"]),
      githubUrl: "#",
      body: `
## Overview

A Retrieval-Augmented Generation (RAG) system built specifically for financial document QA. Point it at an annual report and ask it anything — revenue breakdown, risk factors, segment performance. It finds the relevant sections and generates accurate, grounded answers.

## Architecture

The system has two main flows: document ingestion and question answering. Ingestion handles parsing, chunking, embedding, and storing vectors. QA handles retrieval and generation.

## Backend

Asynchronous FastAPI backend handles both flows. Document ingestion runs as a background task so large reports don't block the API. QA endpoints are synchronous with streaming support for long responses.

## Retrieval Pipeline

Documents are chunked, embedded using a sentence transformer, and stored in Pinecone for semantic search. At query time, the top-k most relevant chunks are retrieved and passed to the LLM as context.

## Generation

LangChain orchestrates the retrieval-augmented generation pipeline. The LLM receives the retrieved context alongside the question and is prompted to answer strictly from the provided material — reducing hallucination on financial data.

## Stack

Python, FastAPI, LangChain, Pinecone, OpenAI, sentence-transformers.
      `,
    },
  ]);

  console.log("Seeding blog posts...");
  await db.insert(blogPosts).values([
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
  ]).onConflictDoNothing();

  console.log("Done.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
