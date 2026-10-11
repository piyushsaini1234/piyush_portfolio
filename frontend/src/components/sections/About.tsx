"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Code2, Database } from "lucide-react";
import { aboutPillars, profile } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons = {
  code: Code2,
  cloud: Cloud,
  database: Database,
  ai: Brain,
};

const recruiterPoints = [
  "Own a feature from UI to API and deploy.",
  "Set up auth, RBAC, payments and storage.",
  "Work with React, Next.js, Node and MongoDB.",
  "Ship on AWS with Docker and GitHub Actions.",
];

export function About() {
  return (
    <section id="about" className="section-screen">
      <div className="section-inner">
        <SectionHeading
          eyebrow="About"
          title="I ship production-ready products."
          description={`Full-stack developer with ${profile.experience} across frontend, backend, cloud and AI.`}
          className="mb-6"
        />

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {aboutPillars.map((pillar, index) => {
            const Icon = icons[pillar.icon as keyof typeof icons];
            return (
              <Reveal key={pillar.id} delay={index * 0.06} y={18}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 360, damping: 24 }}
                  className="card flex flex-col p-5"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[var(--site-accent-soft)] text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{pillar.title}</h3>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {pillar.items.map((item) => (
                      <span key={item} className="badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-4" y={16}>
          <aside className="card p-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">For recruiters</p>
            <div className="mt-3 grid gap-3 text-sm text-muted sm:grid-cols-2">
              {recruiterPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
