import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  thumbnail?: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  body: string;
};

function readDir(dir: string) {
  const fullPath = path.join(contentDir, dir);
  return fs.readdirSync(fullPath).filter((f) => f.endsWith(".md"));
}

export function getProjects(): Project[] {
  return readDir("projects").map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDir, "projects", file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title,
      description: data.description,
      year: data.year,
      tags: data.tags ?? [],
      githubUrl: data.githubUrl,
      liveUrl: data.liveUrl,
      thumbnail: data.thumbnail,
      body: content.trim(),
    };
  });
}

export function getProject(slug: string): Project | null {
  const filePath = path.join(contentDir, "projects", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    description: data.description,
    year: data.year,
    tags: data.tags ?? [],
    githubUrl: data.githubUrl,
    liveUrl: data.liveUrl,
    thumbnail: data.thumbnail,
    body: content.trim(),
  };
}

export function getBlogPosts(): BlogPost[] {
  return readDir("blog").map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(contentDir, "blog", file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      tag: data.tag,
      body: content.trim(),
    };
  });
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, "blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    tag: data.tag,
    body: content.trim(),
  };
}
