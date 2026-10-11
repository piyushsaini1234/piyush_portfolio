import { experiences, profile, projects, skillGroups } from "@/lib/data";

function sanitize(text: string) {
  return text
    .replace(/[—–]/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/·/g, "-");
}

function escapePdf(text: string) {
  return sanitize(text).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function wrapText(text: string, maxChars: number) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

export function buildResumePdf() {
  const pages: string[][] = [[]];
  let y = 742;

  function write(content: string) {
    pages[pages.length - 1].push(content);
  }

  function addLine(text: string, size: number, gap = size + 6, bold = false) {
    if (y < 56) {
      pages.push([]);
      y = 742;
    }
    const font = bold ? "F2" : "F1";
    write(`BT /${font} ${size} Tf 48 ${y} Td (${escapePdf(text)}) Tj ET`);
    y -= gap;
  }

  function addWrapped(text: string, size = 10, gap = 14) {
    for (const line of wrapText(text, 92)) {
      addLine(line, size, gap);
    }
  }

  addLine(profile.name, 22, 28, true);
  addLine(profile.role, 12, 16);
  addLine(`${profile.email}  |  ${profile.phoneDisplay}  |  ${profile.location}`, 10, 22);
  addLine("SUMMARY", 11, 16, true);
  addWrapped(`${profile.tagline} ${profile.about}`);
  y -= 8;
  addLine("EXPERIENCE", 11, 16, true);
  for (const job of experiences) {
    addLine(`${job.role}  -  ${job.company}`, 11, 14, true);
    addLine(job.period, 10, 16);
    addWrapped(job.summary);
    y -= 4;
    for (const item of job.bullets) {
      addWrapped(`- ${item}`, 10, 13);
    }
    y -= 6;
  }
  y -= 8;
  addLine("PROJECTS", 11, 16, true);
  for (const project of projects) {
    addLine(`${project.title}  |  ${project.subtitle}`, 11, 14, true);
    addWrapped(project.description);
    addWrapped(`Stack: ${project.stack.join(", ")}`, 9, 13);
    y -= 4;
  }
  y -= 4;
  addLine("SKILLS", 11, 16, true);
  for (const group of skillGroups) {
    addWrapped(`${group.title}: ${group.skills.join(", ")}`, 10, 14);
  }

  const objects = new Map<number, string>();
  objects.set(1, "<< /Type /Catalog /Pages 2 0 R >>");
  objects.set(3, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  objects.set(4, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageEntries: Array<{ pageId: number; contentId: number }> = [];
  let nextId = 5;
  for (const commands of pages) {
    const stream = commands.join("\n");
    const pageId = nextId;
    const contentId = nextId + 1;
    nextId += 2;
    pageEntries.push({ pageId, contentId });
    objects.set(
      pageId,
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents ${contentId} 0 R /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> >>`,
    );
    objects.set(contentId, `<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`);
  }

  objects.set(2, `<< /Type /Pages /Count ${pageEntries.length} /Kids [${pageEntries.map((item) => `${item.pageId} 0 R`).join(" ")}] >>`);

  const ids = [...objects.keys()].sort((a, b) => a - b);
  const chunks: Buffer[] = [Buffer.from("%PDF-1.4\n", "utf8")];
  const offsets = [0];
  let cursor = chunks[0].length;

  for (const id of ids) {
    offsets[id] = cursor;
    const object = Buffer.from(`${id} 0 obj\n${objects.get(id)}\nendobj\n`, "utf8");
    chunks.push(object);
    cursor += object.length;
  }

  const xrefStart = cursor;
  const maxId = ids[ids.length - 1];
  let xref = `xref\n0 ${maxId + 1}\n0000000000 65535 f \n`;
  for (let id = 1; id <= maxId; id += 1) {
    const offset = offsets[id] ?? 0;
    const flag = offsets[id] ? "n" : "f";
    xref += `${String(offset).padStart(10, "0")} 00000 ${flag} \n`;
  }

  const xrefBuffer = Buffer.from(xref, "utf8");
  const trailer = Buffer.from(`trailer << /Size ${maxId + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`, "utf8");
  return Buffer.concat([...chunks, xrefBuffer, trailer]);
}
