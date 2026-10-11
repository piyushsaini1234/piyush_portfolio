"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "@/lib/data";
import { SkillPill } from "@/components/ui/SkillPill";

export function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const project = projects[index];

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % projects.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  function go(direction: -1 | 1) {
    setIndex((current) => (current + direction + projects.length) % projects.length);
  }

  return (
    <section id="projects" className="section-screen">
      <div className="section-inner">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Selected work</h2>
          </div>
          <p className="text-sm text-muted">{projects.length} projects</p>
        </div>

        <div
          className="card min-h-[280px] p-4 sm:min-h-[340px] sm:p-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-muted">
                  {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </p>
                <span className="rounded-full border border-line px-3 py-1 text-xs text-muted">Featured</span>
              </div>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{project.title}</h3>
              <p className="mt-2 text-base text-muted">{project.subtitle}</p>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-muted sm:text-base">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <SkillPill key={item} label={item} />
                ))}
              </div>
              <Link href={`/projects/${project.slug}`} className="btn-secondary mt-6 w-fit">
                View case study
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {projects.map((item, itemIndex) => (
              <button
                key={item.slug}
                type="button"
                onClick={() => setIndex(itemIndex)}
                className={`h-1.5 rounded-full transition-all ${itemIndex === index ? "w-8 bg-accent" : "w-4 bg-[color-mix(in_oklab,var(--site-fg)_18%,transparent)]"}`}
                aria-label={`Go to ${item.title}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-[var(--site-card-solid)]"
              aria-label="Previous project"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-[var(--site-card-solid)]"
              aria-label="Next project"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
