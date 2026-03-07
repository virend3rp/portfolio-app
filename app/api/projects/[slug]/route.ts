import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { projects } from "@/lib/schema";
import { eq } from "drizzle-orm";

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const row = db.select().from(projects).where(eq(projects.slug, slug)).get();
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ...row, tags: JSON.parse(row.tags) as string[] });
}
