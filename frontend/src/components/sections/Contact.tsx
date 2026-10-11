"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }
      setStatus("success");
      setFeedback(data.message);
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Unable to send message.");
    }
  }

  return (
    <section id="contact" className="section-screen">
      <div className="section-inner grid w-full items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <Reveal y={16}>
          <div className="min-w-0">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-5xl">{"Let's work together"}</h2>
            <p className="mt-4 max-w-md text-base leading-7 text-muted">
              Have a role, product idea, or freelance brief? Send a message and I will get back to you.
            </p>
            <div className="mt-7 space-y-3 text-sm">
              <a href={`mailto:${profile.email}`} className="block break-all hover:text-accent">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="block hover:text-accent">
                {profile.phoneDisplay}
              </a>
              <p className="text-muted">{profile.location}</p>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="block hover:text-accent">
                View LinkedIn profile
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal y={16} delay={0.06}>
          <form onSubmit={onSubmit} className="card w-full p-4 sm:p-6">
            <label className="block text-sm text-muted">
              Name
              <input
                required
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                placeholder="Your name"
                className="field mt-1.5"
              />
            </label>
            <label className="mt-3 block text-sm text-muted">
              Email
              <input
                required
                type="email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="you@email.com"
                className="field mt-1.5"
              />
            </label>
            <label className="mt-3 block text-sm text-muted">
              Subject
              <input
                required
                value={form.subject}
                onChange={(event) => setForm((current) => ({ ...current, subject: event.target.value }))}
                placeholder="Project or role"
                className="field mt-1.5"
              />
            </label>
            <label className="mt-3 block text-sm text-muted">
              Message
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                placeholder="Tell me a little about what you need"
                className="field mt-1.5 min-h-[96px] resize-none"
              />
            </label>
            <button type="submit" disabled={status === "loading"} className="btn-primary mt-4 disabled:opacity-70">
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            {feedback ? (
              <p className={`mt-3 text-sm ${status === "success" ? "text-[var(--site-success)]" : "text-rose-500"}`}>
                {feedback}
              </p>
            ) : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
