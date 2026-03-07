import ProjectsClient from "./ProjectsClient";
import { db } from "@/lib/db";
import { projects as projectsTable } from "@/lib/schema";

export default function Projects() {
  const rows = db.select().from(projectsTable).all();
  const data = rows.map((p) => ({ ...p, tags: JSON.parse(p.tags) as string[] }));
  const allTags = Array.from(new Set(data.flatMap((p) => p.tags))).sort();
  return <ProjectsClient projects={data} allTags={allTags} />;
}
