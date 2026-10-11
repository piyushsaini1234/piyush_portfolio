"use client";

import { Download } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ResumeButtonProps = {
  className?: string;
  label?: string;
};

export function ResumeButton({ className, label = "Resume" }: ResumeButtonProps) {
  const [busy, setBusy] = useState(false);

  async function downloadResume() {
    setBusy(true);
    try {
      const response = await fetch("/Resume/Piyush_Saini_Resume.pdf");
      if (!response.ok) throw new Error("Resume download failed");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Piyush_Saini_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } finally {
      setBusy(false);
    }
  }

  return (
    <button type="button" onClick={downloadResume} disabled={busy} className={cn(className)}>
      <Download className="h-4 w-4" />
      {busy ? "Downloading..." : label}
    </button>
  );
}
