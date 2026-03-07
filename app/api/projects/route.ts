import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { projects } from "@/lib/schema";

export async function GET() {
  const rows = db.select().from(projects).all();
  const data = rows.map((p) => ({ ...p, tags: JSON.parse(p.tags) as string[] }));
  return NextResponse.json(data);
}
