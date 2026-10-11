import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";
import { TechBadge } from "@/components/ui/TechBadge";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="site-shell">
      <AmbientBackground />
      <Navbar />
      <main className="px-4 pb-16 pt-28">
        <div className="mx-auto max-w-4xl">
          <Link href="/#projects" className="text-sm text-muted hover:text-foreground">
            <span className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </span>
          </Link>
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.16em] text-accent">{project.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            {project.title}
            <span className="mt-2 block text-xl font-normal text-muted">{project.subtitle}</span>
          </h1>
          <p className="mt-5 text-base leading-7 text-muted">{project.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </div>
          <div className="mt-8 grid auto-rows-fr gap-3 sm:grid-cols-2">
            {project.highlights.map((highlight) => (
              <article key={highlight.title} className="card p-5">
                <h2 className="font-semibold">{highlight.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{highlight.text}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
