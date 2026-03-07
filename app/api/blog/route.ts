import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { blogPosts } from "@/lib/schema";

export async function GET() {
  const data = db.select().from(blogPosts).all();
  return NextResponse.json(data);
}
