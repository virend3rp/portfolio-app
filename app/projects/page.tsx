import ProjectsClient from "./ProjectsClient";
import { getProjects } from "@/lib/content";

export default function Projects() {
  const projects = getProjects();
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
  return <ProjectsClient projects={projects} allTags={allTags} />;
}
