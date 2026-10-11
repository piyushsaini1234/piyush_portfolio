"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-line px-4 py-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Piyush Saini · Full-Stack Software Developer</p>
        <p>© 2026</p>
      </div>
    </motion.footer>
  );
}
