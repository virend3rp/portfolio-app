---
title: "Why sticky sessions are a load balancer trap — and how stateless architecture gets you out"
excerpt: "Sticky sessions feel like a simple fix until you scale. Here's why they quietly make everything harder, and how centralising state in a NoSQL store solves it properly."
date: "Mar 2025"
tag: "systems"
---

When you first set up a load balancer, sticky sessions seem like the obvious solution. Your users stay logged in, your server has their session data, everything works. Until it doesn't.

## What sticky sessions actually do

A sticky session — also called session affinity — is when the load balancer always routes a specific user to the same backend server. It does this by setting a cookie or tracking the client IP, then using that to pin the user to one instance.

The reason this exists: if your session data lives in memory on the server, you need to keep sending that user back to the same server. Otherwise server B has no idea who they are.

It solves the immediate problem. But it introduces a worse one.

## The hidden problems

**Uneven load distribution.** If a server gets pinned with a bunch of heavy users, it gets hammered while other servers sit idle. Your load balancer stops being a load balancer — it becomes a router with extra steps.

**No real fault tolerance.** If server A goes down, every user pinned to it loses their session. They get logged out, lose their cart, lose their form state. You haven't built resilience, you've just hidden the single point of failure inside the session layer.

**Scaling becomes painful.** Adding a new server doesn't help users already pinned to old ones. Removing a server during a deploy or scale-down event wipes sessions. You have to plan every infrastructure change around which sessions will break.

**Hard to do zero-downtime deploys.** Rolling restarts mean some servers go down temporarily. Sticky sessions mean some users get hit by that restart and lose state. You end up doing deploys at 3am to minimise damage.

## The actual problem

The real issue isn't the load balancer. It's that state is living on the application server. Session data — who's logged in, what's in their cart, what they were doing — is stored in memory on a specific machine. That machine becomes load-bearing.

Sticky sessions are a workaround for this. You're not solving the problem, you're working around it by making sure users always hit the machine that has their data.

## The stateless approach

The fix is to make your servers stateless. No server should hold any data that isn't in the request itself or in a shared store.

Session data moves out of server memory and into a centralised store — typically a NoSQL database like Redis. Every server can read and write session data. It doesn't matter which server handles the request.

The flow looks like this:

```
User request → Load balancer → Any server
Server → reads session from Redis using session token
Server → processes request
Server → writes updated session back to Redis
Response → back to user
```

The load balancer becomes genuinely stateless. Round-robin, least connections, random — any algorithm works because every server is equivalent.

## Why Redis specifically

Redis is fast enough that adding a session lookup doesn't meaningfully increase latency. It keeps data in memory with optional persistence. It supports TTL natively so sessions expire automatically. And it handles the read/write patterns of session storage extremely well.

## What you actually gain

**Real horizontal scaling.** Add servers freely. Remove servers freely. No user's session lives on any specific machine.

**Fault tolerance that works.** A server going down doesn't affect any user. The next request hits a different server, reads from Redis, continues seamlessly.

**Simpler deploys.** Rolling restarts, blue-green deploys, canary releases — all dramatically simpler when your servers carry no state.

**Even load distribution.** Your load balancer can actually balance load now instead of routing by affinity.

## The tradeoff

You've moved the statefulness from the application layer to the data layer. Redis is now load-bearing. But it's a better place for it — Redis is designed for this, scales horizontally via clustering, and has well-understood failure modes.

The failure surface shrinks and becomes predictable. That's the trade.

## When sticky sessions are still fine

If you're running a small app on two servers and you never plan to scale, sticky sessions work. The complexity isn't worth it below a certain threshold.

But if you're building something that needs to scale, or you want deploys that don't break user sessions, or you want real fault tolerance — get off sticky sessions early. It's much harder to migrate off them once you're dependent on them.
