"use client";

import { motion } from "framer-motion";

export function SkillPill({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      className="skill-pill"
    >
      {label}
    </motion.span>
  );
}
