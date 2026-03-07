import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const projects = sqliteTable("projects", {
  slug: text("slug").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  year: text("year").notNull(),
  tags: text("tags").notNull(), // JSON array stored as string
  body: text("body").notNull(),
  liveUrl: text("live_url"),
  githubUrl: text("github_url"),
});

export const blogPosts = sqliteTable("blog_posts", {
  slug: text("slug").primaryKey(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  date: text("date").notNull(),
  tag: text("tag").notNull(),
  body: text("body").notNull(),
});

// App-level types with tags parsed
export type Project = Omit<typeof projects.$inferSelect, "tags"> & {
  tags: string[];
};

export type BlogPost = typeof blogPosts.$inferSelect;
