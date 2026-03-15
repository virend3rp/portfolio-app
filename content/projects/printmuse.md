---
title: "PrintMuse — Print on Demand Platform"
description: "Full-stack e-commerce platform for custom merchandise. Go backend, Next.js frontend, AWS S3 media pipeline, and role-based admin dashboard."
year: "2024"
tags: ["TypeScript", "Next.js", "Go", "PostgreSQL"]
githubUrl: "https://github.com/virend3rp/printmuse-inspiration"
thumbnail: "/printmuse.png"
---

## Overview

A full-stack e-commerce platform for print-on-demand products, built for scale from the ground up. The goal was to handle the full lifecycle — product creation, catalog browsing, order management, and admin operations — without cutting corners on architecture.

## Backend

Built a Go backend with secure REST APIs covering product management, catalog browsing, and order workflows. Role-based access control separates admin operations from customer-facing endpoints. JWT authentication secures all protected routes.

## Media Pipeline

Integrated an image upload and storage pipeline using AWS S3 for product assets. Uploads go through a server-side handler that validates, resizes, and stores to S3, returning a CDN-ready URL. Keeps the database lean — only metadata lives in Postgres.

## Stack

TypeScript, Next.js, Go, PostgreSQL, AWS S3, JWT.
