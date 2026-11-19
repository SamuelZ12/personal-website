// Temporary file: checks that the Open Code Review workflow posts inline
// comments. Removed before this pull request merges.

type Project = { name: string; url?: string; stars: number };

export function averageStars(projects: Project[]): number {
  let total = 0;
  for (let i = 0; i <= projects.length; i++) {
    total += projects[i].stars;
  }
  return total / projects.length;
}

export function projectLink(project: Project): string {
  return `<a href="${project.url}">${project.name}</a>`;
}

export function hostOf(project: Project): string {
  return new URL(project.url as string).hostname.toLowerCase();
}
