"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SkillPill } from "@/components/ui/SkillPill";

export function Skills() {
  return (
    <section id="skills" className="section-screen skills-screen">
      <div className="section-inner">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills</h2>

        <div className="mt-5 grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.03} y={12}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
                className="card flex flex-col p-3.5"
              >
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-accent">{group.title}</p>
                <div className="mt-3 flex flex-wrap content-start gap-1.5">
                  {group.skills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
