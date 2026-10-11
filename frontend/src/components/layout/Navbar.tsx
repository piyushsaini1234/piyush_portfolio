"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { scrollToSection, sectionIdFromHref } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { ResumeButton } from "@/components/ui/ResumeButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const timer = window.setTimeout(() => scrollToSection(hash), 80);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  function onNavClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const id = sectionIdFromHref(href);
    if (pathname !== "/") return;

    event.preventDefault();
    setOpen(false);
    scrollToSection(id);
    window.history.replaceState(null, "", `/#${id}`);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl",
        scrolled ? "border-line bg-[color-mix(in_oklab,var(--site-bg)_82%,transparent)]" : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full min-w-0 max-w-6xl items-center justify-between px-4">
        <Link href="/#home" onClick={(event) => onNavClick(event, "/#home")} className="text-sm font-semibold tracking-wide">
          Piyush Saini
        </Link>

        <div className="hidden items-center gap-6 text-sm text-muted lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => onNavClick(event, link.href)}
              className="transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ResumeButton className="btn-secondary hidden md:inline-flex" />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-[var(--site-card-solid)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line bg-[var(--site-card-solid)] lg:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(event) => onNavClick(event, link.href)} className="py-1">
                  {link.label}
                </a>
              ))}
              <ResumeButton className="btn-primary justify-center" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
