"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { heroStack, profile } from "@/lib/data";
import { scrollToSection } from "@/lib/scroll";
import { TechBadge } from "@/components/ui/TechBadge";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { ResumeButton } from "@/components/ui/ResumeButton";

const stats = [
  { label: "Experience", value: "2+ years" },
  { label: "Products", value: "4 shipped" },
  { label: "Focus", value: "MERN + AWS" },
];

const photoSources = [
  "/Images/profile.jpg",
  "/Images/WhatsApp Image 2026-10-10 at 10.11.33 PM.jpeg",
  "/Images/profile.jpeg",
  "/Images/profile.png",
  "/Images/piyush.jpg",
  "/Images/piyush.png",
];

export function Hero() {
  const [ready, setReady] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoMissing, setPhotoMissing] = useState(false);
  const photo = encodeURI(photoSources[photoIndex]);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <section id="home" className="section-screen pt-28 sm:pt-32">
      <div className="section-inner grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-w-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-[var(--site-success-soft)] px-3 py-1 text-xs font-medium text-[var(--site-success)]"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--site-success)]" />
            {profile.availability}
          </motion.p>

          <motion.h1
            initial={ready ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 break-words text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
            className="mt-3 text-xl text-muted"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
            className="mt-4 max-w-xl text-base leading-7 text-muted"
          >
            I design, build and ship production web apps — frontend, APIs, databases, cloud and CI/CD.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {heroStack.map((item) => (
              <TechBadge key={item.label} label={item.label} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="/#projects"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("projects");
              }}
              className="btn-primary"
            >
              View projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <ResumeButton className="btn-secondary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54 }}
            className="mt-6 flex min-w-0 flex-wrap items-center gap-3 text-sm text-muted"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-[var(--site-card-solid)] transition hover:-translate-y-0.5"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-[var(--site-card-solid)] transition hover:-translate-y-0.5"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex min-w-0 items-center gap-2 break-all hover:text-foreground">
              <Mail className="h-4 w-4 shrink-0" />
              {profile.email}
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.24, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full max-w-[17.5rem] min-w-0 sm:max-w-[20rem]"
        >
          <div className="relative mx-auto aspect-square w-full">
            <motion.div
              className="absolute inset-[6%] rounded-full bg-accent/25 blur-3xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-accent/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[5%] rounded-full"
              style={{
                background:
                  "conic-gradient(from 90deg, transparent 0deg, color-mix(in oklab, var(--site-accent) 80%, white) 90deg, transparent 180deg)",
                maskImage: "radial-gradient(circle, transparent 68%, black 70%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 68%, black 70%)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_var(--site-accent)]" />
              <span className="absolute bottom-[12%] right-[8%] h-1.5 w-1.5 rounded-full bg-sky-300" />
              <span className="absolute bottom-[28%] left-[6%] h-1.5 w-1.5 rounded-full bg-indigo-300" />
            </motion.div>
            <div className="absolute inset-[14%] overflow-hidden rounded-full border-4 border-[var(--site-card-solid)] shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              {photoMissing ? (
                <div className="grid h-full w-full place-items-center bg-[color-mix(in_oklab,var(--site-accent)_16%,var(--site-card-solid))]">
                  <p className="text-5xl font-semibold tracking-tight">
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                  </p>
                </div>
              ) : (
                <img
                  src={photo}
                  alt={profile.name}
                  className="h-full w-full object-cover object-[center_15%]"
                  onError={() => {
                    if (photoIndex < photoSources.length - 1) {
                      setPhotoIndex((current) => current + 1);
                    } else {
                      setPhotoMissing(true);
                    }
                  }}
                />
              )}
            </div>
          </div>

          <div className="mt-6 grid w-full grid-cols-3 gap-2">
            {stats.map((item) => (
              <div key={item.label} className="min-w-0 rounded-2xl border border-line bg-[var(--site-card)] px-1.5 py-2 text-center">
                <p className="text-[10px] uppercase tracking-[0.12em] text-muted">{item.label}</p>
                <p className="mt-1 text-[11px] font-semibold sm:text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
