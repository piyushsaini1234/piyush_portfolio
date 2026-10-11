"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-screen">
      <div className="section-inner">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Experience</h2>

        <div className="relative mt-10">
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-[color-mix(in_oklab,var(--site-fg)_14%,transparent)]" />
          <div className="space-y-10">
            {experiences.map((job, index) => (
              <Reveal key={`${job.company}-${job.period}`} delay={index * 0.08} y={18}>
                <article className="relative pl-12">
                  <div className="absolute left-0 top-2 grid h-[23px] w-[23px] place-items-center rounded-full border border-line bg-[var(--site-bg)]">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </div>
                  <h3 className="break-words text-xl font-semibold tracking-tight sm:text-2xl">
                    {job.role} · {job.company}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {job.period} · {job.meta}
                    {job.location ? ` · ${job.location}` : ""}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                    {job.bullets.map((item) => (
                      <motion.li key={item} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
